"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  Typography,
  Tag,
  Progress,
  Button,
  Space,
  Spin,
  Divider,
} from "antd";
import {
  TrophyOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { db } from "@/app/firebaseConfig";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { fetchSurveyById } from "@/app/Modules/utilsfirebase";
import Link from "next/link";
import { useDarkMode } from "@/app/Modules/darkmodecont";

const { Title, Text } = Typography;

export default function ParticipantResults() {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const { darkMode } = useDarkMode();

  const [survey, setSurvey] = useState(null);
  const [responseDoc, setResponseDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [totalQs, setTotalQs] = useState(0);
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (!surveyId) return;

      try {
        const surveyData = await fetchSurveyById(surveyId);
        setSurvey(surveyData);

        const responsesRef = collection(db, "responses");
        const q = query(
          responsesRef,
          where("surveyId", "==", surveyId),
          orderBy("timestamp", "desc"),
          limit(1)
        );

        const snap = await getDocs(q);
        if (!snap.empty) {
          const data = snap.docs[0].data();
          setResponseDoc(data);
        }
      } catch (err) {
        console.error("Error loading survey data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [surveyId]);

  useEffect(() => {
    if (survey && responseDoc) calculateScore();
  }, [survey, responseDoc]);

  const normalize = (s = "") =>
    String(s).trim().toLowerCase().replace(/[^\w\s]/g, "");

  // 🟢 FIX: handle Boolean & True/False grading in both main & sub
  const calculateScore = () => {
    if (!survey || !responseDoc?.responses) return;

    const autoMarkFlag = survey.autoMark ?? survey.automark ?? false;

    const allMultipleChoice = (questions) =>
      questions.every((q) => {
        const isAutoType = ["Multiple Choice", "Boolean", "True/False"].includes(q.answerType);
        const validSub = !q.subQuestion || allMultipleChoice([q.subQuestion]);
        return isAutoType && validSub;
      });

    const shouldGrade = autoMarkFlag && survey.questions && allMultipleChoice(survey.questions);

    let totalCount = 0;
    let correctCount = 0;
    const results = {};

    const traverse = (questions, responses, parentLabel = "") => {
      if (!questions) return [];

      return questions.map((q, index) => {
        const label = parentLabel
          ? `${parentLabel}${String.fromCharCode(96 + index + 1)}`
          : `${index + 1}`;
        const mainKey = `${label}. ${q.question}`;

        let resItem = responses?.[mainKey] || responses?.[q.question];
        if (!resItem) resItem = {};

        const participantAnswer =
          resItem?.answer ??
          resItem?.value ??
          (typeof resItem === "string" ? resItem : "No Answer");

        const item = {
          key: mainKey,
          question: q.question,
          answerType: q.answerType,
          correctAnswer: q.correctAnswer ?? null,
          participantAnswer,
          isCorrect: null,
          choices: q.choices || [],
          subquestions: [],
        };

        // 🟢 FIX: consistent grading logic including Booleans
        if (
          shouldGrade &&
          q.correctAnswer !== null &&
          ["Multiple Choice", "True/False", "Boolean"].includes(q.answerType)
        ) {
          totalCount++;

          if (["Boolean", "True/False"].includes(q.answerType)) {
            const normalizeBool = (v) =>
              typeof v === "boolean" ? v : String(v).trim().toLowerCase() === "true";
            item.isCorrect =
              normalizeBool(item.participantAnswer) === normalizeBool(q.correctAnswer);
          } else {
            item.isCorrect = normalize(item.participantAnswer) === normalize(q.correctAnswer);
          }

          if (item.isCorrect) correctCount++;
        }

        if (q.subQuestion) {
          const nestedSubObj =
            responses?.[mainKey]?.subQuestions ||
            responses?.[q.question]?.subQuestions ||
            responses;

          item.subquestions = traverse([q.subQuestion], nestedSubObj, label);
        }

        return item;
      });
    };

    const processed = traverse(survey.questions, responseDoc.responses);
    processed.forEach((qItem) => (results[qItem.question] = qItem));

    setResultData(results);
    setScore(correctCount);
    setTotalQs(totalCount);
  };

  const renderMCChoices = (item) => {
    const participant = item.participantAnswer;
    return (
      <div className="mt-2 space-y-1">
        {item.choices.map((choice, cIndex) => {
          const normalizeChoice = normalize(choice);
          const isCorrect =
            item.correctAnswer != null &&
            normalizeChoice === normalize(item.correctAnswer);
          const isChosen =
            Array.isArray(participant)
              ? participant.some((p) => normalize(String(p)) === normalizeChoice)
              : normalize(String(participant)) === normalizeChoice;
          const both = isCorrect && isChosen;

          return (
            <Tag
              key={cIndex}
              color={both ? "gold" : isCorrect ? "green" : isChosen ? "blue" : "default"}
              style={{
                fontWeight: both || isCorrect || isChosen ? 600 : 400,
                border: both ? "2px solid #faad14" : undefined,
              }}
            >
              {String.fromCharCode(65 + cIndex)}. {choice}
            </Tag>
          );
        })}
      </div>
    );
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Spin size="large" />
      </div>
    );

  if (!survey || !responseDoc)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Could not load participant data.
      </div>
    );

  const percentage = totalQs ? ((score / totalQs) * 100).toFixed(2) : 0;

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{ background: darkMode ? "#000" : "#f4f4f4" }}
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* 🟡 ADD: Color Legend Section */}
        <Card
          className="rounded-xl shadow-sm"
          style={{ background: darkMode ? "#111" : "#fff" }}
        >
          <Space direction="vertical">
          
            <Space wrap>
              <Tag color="green">Correct Answer</Tag>
              <Tag color="blue">Your Answer</Tag>
              <Tag color="gold">You chose correctly</Tag>
              <Tag color="default">Unselected</Tag>
            </Space>
          </Space>
        </Card>

        {/* Performance Card */}

        <Card
          variant="outlined"
          className="shadow-md rounded-2xl text-center"
          style={{
            background: darkMode ? "#1a1a1a" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <Title level={2}>Your Performance</Title>
          <Text type="secondary">{survey.title}</Text>
          
            <Text type="secondary">
              Participant:{" "}
              <Tag color={darkMode ? "purple" : "blue"}>
                {responseDoc.anonymous ? "Anonymous" : responseDoc.editableName || "Unnamed"}
              </Tag>
            </Text>
          <Divider />

          <Space direction="vertical" align="center">
            {(survey.autoMark ?? survey.automark) && totalQs > 0 ? (
              <>
                <TrophyOutlined style={{ fontSize: 48, color: "#faad14" }} />
                <Title level={3}>
                  {score} / {totalQs} Correct
                </Title>
                <Progress
                  type="circle"
                  percent={parseFloat(percentage)}
                  strokeColor={percentage >= 50 ? "#52c41a" : "#f5222d"}
                  format={(p) => `${p}%`}
                />
              </>
            ) : (
              <Text strong type="secondary">
                This survey is not automatically graded.
              </Text>
            )}
          </Space>
        </Card>

        {/* Question Cards */}
        <Space direction="vertical" size="large" className="w-full">
          {Object.entries(resultData).map(([question, data], index) => (
            <Card
              key={index}
              variant="outlined"
              className="rounded-xl shadow-sm border-l-4"
              style={{
                borderLeftColor:
                  data.isCorrect === true
                    ? "#52c41a"
                    : data.isCorrect === false
                    ? "#ff4d4f"
                    : "#d9d9d9",
                background: darkMode ? "#141414" : "#fff",
              }}
            >
              <Title level={5}>
                Q{index + 1}. {question}{" "}
                {data.isCorrect === true ? (
                  <CheckCircleOutlined style={{ color: "#52c41a", marginLeft: 8 }} />
                ) : data.isCorrect === false ? (
                  <CloseCircleOutlined style={{ color: "#ff4d4f", marginLeft: 8 }} />
                ) : null}
              </Title>

              {/* Render Multiple Choice / Boolean / True-False */}
              {data.answerType === "Multiple Choice" && renderMCChoices(data)}

              {["Boolean", "True/False"].includes(data.answerType) && (
                <div className="mt-2 space-y-1">
                  {["True", "False"].map((option, i) => {
                    const isCorrect =
                      String(option).toLowerCase() ===
                      String(data.correctAnswer).toLowerCase();
                    const isChosen =
                      String(option).toLowerCase() ===
                      String(data.participantAnswer).toLowerCase();
                    const both = isCorrect && isChosen;
                    return (
                      <Tag
                        key={i}
                        color={both ? "gold" : isCorrect ? "green" : isChosen ? "blue" : "default"}
                      >
                        {option}
                      </Tag>
                    );
                  })}
                </div>
              )}
{/* 🟢 Render Open Answer */}
{data.answerType === "Open Answer" && (
  <div className="mt-2">
    <Text strong>Your Answer:</Text>
    <div
      style={{
        background: darkMode ? "#1e1e1e" : "#fafafa",
        border: "1px solid #d9d9d9",
        borderRadius: "8px",
        padding: "8px 12px",
        marginTop: "4px",
      }}
    >
      {data.participantAnswer && data.participantAnswer !== "No Answer"
        ? data.participantAnswer
        : "No response provided."}
    </div>
  </div>
)}

              {/* Subquestions */}
              {data.subquestions?.length > 0 && (
                <div className="mt-4 pl-4 border-l-2 border-gray-300">
                  {data.subquestions.map((sub, subIndex) => (
                    <Card
                      key={subIndex}
                      size="small"
                      className="mb-3 rounded-lg"
                      style={{
                        backgroundColor:
                          sub.isCorrect === true
                            ? "#f6ffed"
                            : sub.isCorrect === false
                            ? "#fff2f0"
                            : darkMode
                            ? "#1e1e1e"
                            : "#fafafa",
                        borderLeft: `3px solid ${
                          sub.isCorrect === true
                            ? "#52c41a"
                            : sub.isCorrect === false
                            ? "#ff4d4f"
                            : "#d9d9d9"
                        }`,
                      }}
                    >
                      <Text strong>
                        {String.fromCharCode(65 + subIndex)}. {sub.question}{" "}
                        {sub.isCorrect === true ? (
                          <CheckCircleOutlined style={{ color: "#52c41a", marginLeft: 5 }} />
                        ) : sub.isCorrect === false ? (
                          <CloseCircleOutlined style={{ color: "#ff4d4f", marginLeft: 5 }} />
                        ) : null}
                      </Text>
                      <br />
                      {sub.answerType === "Multiple Choice" && renderMCChoices(sub)}

                      {["Boolean", "True/False"].includes(sub.answerType) && (
                        <div className="mt-2 space-y-1">
                          {["True", "False"].map((option, i) => {
                            const isCorrect =
                              String(option).toLowerCase() ===
                              String(sub.correctAnswer).toLowerCase();
                            const isChosen =
                              String(option).toLowerCase() ===
                              String(sub.participantAnswer).toLowerCase();
                            const both = isCorrect && isChosen;
                            return (
                              <Tag
                                key={i}
                                color={
                                  both
                                    ? "gold"
                                    : isCorrect
                                    ? "green"
                                    : isChosen
                                    ? "blue"
                                    : "default"
                                }
                              >
                                {option}
                              </Tag>
                            );
                          })}
                        </div>
                      )}
                      {/*  Render Open Answer for subquestions */}
{sub.answerType === "Open Answer" && (
  <div className="mt-2">
    <Text strong className="text-sm">YOUR ANSWER:</Text>
    <div
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#fafafa",
        border: "1px solid #d9d9d9",
        borderRadius: "6px",
        padding: "6px 10px",
        marginTop: "4px",
      }}
    >
      {sub.participantAnswer && sub.participantAnswer !== "No Answer"
        ? sub.participantAnswer
        : "No response provided."}
    </div>
  </div>
)}

                    </Card>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </Space>

        <div className="flex justify-center pt-6">
          <Link href="/">
            <Button type="primary" size="large">
              Thank You
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
