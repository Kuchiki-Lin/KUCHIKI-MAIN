"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchSurveyById, fetchSurveyResponses } from "@/app/Modules/utilsfirebase.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useDarkMode } from "@/app/Modules/darkmodecont.js";
import { Card, Button, Segmented, Typography } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";

const { Text } = Typography;

const AdminAnalysis = () => {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");

  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState([]);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [openSub, setOpenSub] = useState(null); // <-- added
  const [viewMode, setViewMode] = useState("Analytical View");
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (surveyId) {
      fetchSurveyById(surveyId).then(setSurvey).catch(console.error);
      fetchSurveyResponses(surveyId).then((res) => setResponses(res || [])).catch(console.error);
    }
  }, [surveyId]);

  const normalize = (s) =>
    String(s || "")
      .replace(/^[0-9]+[.)\s-]*/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const findMatchingKey = (respResponses, surveyQuestion) => {
    if (!respResponses || !surveyQuestion) return null;
    const target = normalize(surveyQuestion);
    if (surveyQuestion in respResponses) return surveyQuestion;
    const keys = Object.keys(respResponses);
    for (const k of keys) if (normalize(k) === target) return k;
    for (const k of keys) if (normalize(k).includes(target) || target.includes(normalize(k))) return k;
    return null;
  };

  const formatAnswerValue = (v) => {
    if (v === null || v === undefined) return "-";
    if (Array.isArray(v)) return v.map(String).join(", ");
    if (typeof v === "object") {
      if (v.label) return String(v.label);
      if (v.value) return String(v.value);
      if (v.text) return String(v.text);
      return JSON.stringify(v);
    }
    return String(v);
  };

  const extractMainAnswer = (resp, surveyQuestion) => {
    if (!resp || !resp.responses) return "-";
    const key = findMatchingKey(resp.responses, surveyQuestion);
    if (!key) return "-";
    const payload = resp.responses[key];
    if (typeof payload === "string" || typeof payload === "number") return String(payload);
    if (payload?.answer) return formatAnswerValue(payload.answer);
    if (payload?.value) return formatAnswerValue(payload.value);
    return "-";
  };

  const extractSubAnswers = (resp, surveyQuestion) => {
    if (!resp || !resp.responses) return [];
    const key = findMatchingKey(resp.responses, surveyQuestion);
    if (!key) return [];
    const payload = resp.responses[key];
    if (!payload || typeof payload !== "object") return [];
    const subQ = payload.subQuestions ?? {};
    return Object.entries(subQ).map(([k, v]) => ({
      subQuestion: k,
      answer: typeof v === "object" ? formatAnswerValue(v.answer ?? v.value ?? v.selected ?? v.choice ?? v) : String(v),
    }));
  };

  const computeStats = (surveyQuestion) => {
    const selections = {};
    let correctCount = 0;
    const qObj = survey?.questions?.find((q) => normalize(q.question) === normalize(surveyQuestion));
    responses.forEach((r) => {
      const ans = extractMainAnswer(r, surveyQuestion);
      if (ans && ans !== "-") {
        selections[ans] = (selections[ans] || 0) + 1;
        if (qObj?.correctAnswer && normalize(ans) === normalize(qObj.correctAnswer)) correctCount++;
      }
    });
    const total = responses.length;
    const accuracy = total > 0 ? ((correctCount / total) * 100).toFixed(1) : 0;
    return { selections, total, correctCount, accuracy };
  };

  /* --- SLOT INSERTED HERE --- */
  const computeSubStats = (mainQuestion, subQuestionText) => {
    const selections = {};
    let correctCount = 0;
    let subCorrectAnswer = null;
    const mainDef = survey?.questions?.find((qq) => normalize(qq.question) === normalize(mainQuestion));
    if (mainDef?.subQuestions) {
      if (Array.isArray(mainDef.subQuestions)) {
        const found = mainDef.subQuestions.find((s) => normalize(s.question) === normalize(subQuestionText));
        subCorrectAnswer = found?.correctAnswer ?? null;
      } else if (typeof mainDef.subQuestions === "object") {
        subCorrectAnswer = mainDef.subQuestions[subQuestionText]?.correctAnswer ?? null;
      }
    }

    responses.forEach((r) => {
      const subs = extractSubAnswers(r, mainQuestion);
      const match = subs.find((s) => normalize(s.subQuestion) === normalize(subQuestionText));
      const ans = match ? match.answer : "-";
      if (ans && ans !== "-") selections[ans] = (selections[ans] || 0) + 1;
    });

    const total = responses.length;
    if (subCorrectAnswer !== null) {
      for (const k in selections) {
        if (normalize(k) === normalize(subCorrectAnswer)) correctCount += selections[k];
      }
    }
    const accuracy = total > 0 ? ((correctCount / total) * 100).toFixed(1) : 0;
    return { selections, total, correctCount, accuracy, correctAnswer: subCorrectAnswer };
  };

  const SubQuestionBlock = ({ mainQ, subQText }) => {
    const subStats = computeSubStats(mainQ, subQText);
    const openKey = `${normalize(mainQ)}::${normalize(subQText)}`;
    const isOpen = openSub === openKey;

    return (
      <div className="mt-6 border-t pt-3" key={subQText}>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">{subQText}</div>
            {subStats.correctAnswer && <div className="text-sm text-green-600 mt-1">Correct: {subStats.correctAnswer}</div>}
          </div>
          <Button
            type="link"
            onClick={() => setOpenSub((prev) => (prev === openKey ? null : openKey))}
            icon={isOpen ? <UpOutlined /> : <DownOutlined />}
          >
            {isOpen ? "Hide Responses" : "View Responses"}
          </Button>
        </div>

        <div style={{ height: 220, marginTop: 10 }}>
          <Bar
            data={{
              labels: Object.keys(subStats.selections),
              datasets: [{ data: Object.values(subStats.selections), backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"] }],
            }}
            options={{ maintainAspectRatio: false, responsive: true, plugins: { legend: { display: false } }, layout: { padding: 6 } }}
          />
        </div>

        {isOpen && (
          <div className={`mt-3 border-t pt-2 space-y-2 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            {responses.map((resp, i) => {
              const subs = extractSubAnswers(resp, mainQ);
              const match = subs.find((s) => normalize(s.subQuestion) === normalize(subQText));
              const ans = match ? match.answer : "-";
              const correct = subStats.correctAnswer != null ? normalize(ans) === normalize(subStats.correctAnswer) : null;
              return (
                <div
                  key={i}
                  className={`flex justify-between items-center px-3 py-2 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <Text>
                    <span className="font-semibold">{resp.editableName || "Anonymous"}:</span> {ans}
                  </Text>
                  {correct !== null &&
                    (correct ? (
                      <CheckCircleOutlined className="text-green-500" />
                    ) : (
                      <CloseCircleOutlined className="text-red-500" />
                    ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  /* --- SLOT ENDS --- */

  const getChartData = (question) => {
    const stats = computeStats(question);
    return {
      labels: Object.keys(stats.selections),
      datasets: [
        {
          label: "Responses",
          data: Object.values(stats.selections),
          backgroundColor: ["#3B82F6", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6"],
        },
      ],
    };
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: { legend: { display: false } },
    layout: { padding: 6 },
  };

  return (
    <div className={`min-h-screen px-4 py-8 ${darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{survey?.title ?? "Survey Analysis"}</h1>
          <p className="text-gray-500 mt-1">
            Total Responses: <b>{responses.length}</b> | Questions: <b>{survey?.questions?.length ?? 0}</b>
          </p>
          <div className="mt-4 flex justify-center">
            <Segmented options={["Analytical View", "Card View"]} value={viewMode} onChange={setViewMode} />
          </div>
        </header>

        {survey?.questions?.map((q, idx) => {
          const stats = computeStats(q.question);
          const isExpanded = expandedQuestion === idx;
          const isMCQ = q.answerType === "Multiple Choice";
          const hasCorrect = Boolean(q.correctAnswer);

          const subKeysSet = new Set();
          responses.forEach((r) => {
            const subs = extractSubAnswers(r, q.question);
            subs.forEach((s) => subKeysSet.add(s.subQuestion));
          });
          const subKeys = Array.from(subKeysSet);

          return (
            <Card
              key={idx}
              className={`mb-6 rounded-lg shadow ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
              title={
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpandedQuestion(isExpanded ? null : idx)}>
                  <span className="font-semibold text-lg">{q.question}</span>
                  <span className="text-sm text-blue-500">{isExpanded ? "Hide" : "View Details"}</span>
                </div>
              }
            >
              <div className="flex flex-col gap-2 text-sm">
                {isMCQ ? (
                  <>
                    <p>
                      <b>Correct Answer:</b>{" "}
                      <span className="text-green-600 dark:text-green-400">{q.correctAnswer ?? "N/A"}</span>
                    </p>
                    <p>
                      <b>Accuracy:</b> {stats.accuracy}% | <b>Responses:</b> {stats.total}
                    </p>
                  </>
                ) : (
                  <p className="italic text-gray-500">Open Answer — responses below (if any)</p>
                )}
              </div>

              {viewMode === "Analytical View" && isMCQ && (
                <div className="mt-4 w-full h-[250px]">
                  <Bar data={getChartData(q.question)} options={chartOptions} />
                </div>
              )}

              {isExpanded && (
                <div className={`mt-6 border-t pt-4 ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                  <h4 className="font-semibold mb-2">Individual Responses</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                      <thead className={`${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                        <tr>
                          <th className="px-4 py-2 text-left">Respondent</th>
                          <th className="px-4 py-2 text-left">Answer</th>
                          {hasCorrect && <th className="px-4 py-2 text-center">Correct?</th>}
                          <th className="px-4 py-2">Submitted</th>
                        </tr>
                      </thead>
                      <tbody>
                        {responses.map((r, i) => {
                          const mainAns = extractMainAnswer(r, q.question);
                          const correct = hasCorrect && normalize(mainAns) === normalize(q.correctAnswer);
                          const name = r.editableName ?? (survey?.isAnonymous ? "Anonymous" : "Unnamed");
                          return (
                            <tr
                              key={i}
                              className={`border-t ${darkMode ? "border-gray-700" : "border-gray-300"} ${
                                correct ? "bg-green-100 dark:bg-green-900/40" : ""
                              }`}
                            >
                              <td className="px-4 py-2 align-top font-medium">{name}</td>
                              <td className="px-4 py-2 align-top">{mainAns}</td>
                              {hasCorrect && <td className="px-4 py-2 text-center">{correct ? "✅" : "❌"}</td>}
                              <td className="px-4 py-2 text-xs text-gray-500">
                                {new Date(r.timestamp?.toDate ? r.timestamp.toDate() : r.timestamp || Date.now()).toLocaleString()}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {subKeys.length > 0 && (
                <div className="mt-6">
                  {subKeys.map((subQ) => (
                    <SubQuestionBlock key={subQ} mainQ={q.question} subQText={subQ} />
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminAnalysis;
