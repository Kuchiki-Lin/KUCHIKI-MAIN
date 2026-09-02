"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Card,
  Form,
  Input,
  Radio,
  Button,
  Typography,
  Divider,
  Checkbox,
  Modal,
} from "antd";
import { fetchSurveyById } from "@/app/Modules/utilsfirebase";
import { db } from "@/app/firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { useUser } from "@/app/authcont";
import { useDarkMode } from "@/app/Modules/darkmodecont";

const { Title, Text } = Typography;

export default function ResponsePage() {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const router = useRouter();

  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState({});
  const [editableName, setEditableName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const nameInputRef = useRef(null);
  const { darkMode } = useDarkMode();
  const { user } = useUser();
  const [userLocation, setUserLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const [pageMode, setPageMode] = useState("scroll");
  const [currentPage, setCurrentPage] = useState(0);
  const [showObjectivesModal, setShowObjectivesModal] = useState(false);

  useEffect(() => {
    if (surveyId) fetchSurveyById(surveyId).then(setSurvey);
    const locs = async () => {
      try {
        const res = await fetch("https://ipapi.co/json");
        const data = await res.json();
        console.log(data);
        console.log(data.country_name);
        console.log(data.city);

        setUserLocation(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setLoadingLocation(false);
      }
    };
    locs();
  }, [surveyId]);

  useEffect(() => {
    if (!survey || !userLocation) return;

    // Normalize values so null, undefined, and empty strings
    // can be handled consistently.
    const surveyCountry = survey.country?.trim().toLowerCase() || "";
    const surveyState = survey.state?.trim().toLowerCase() || "";

    const userCountry = userLocation.country_name?.trim().toLowerCase() || "";

    const userState = userLocation.city?.trim().toLowerCase() || "";

    // If country is specified, it MUST match.
    // If country is empty/null, there is no country restriction.
    const countryAllowed =
      surveyCountry === "" || surveyCountry === userCountry;

    // If state is specified, it MUST match.
    // If state is empty/null, there is no state restriction.
    const stateAllowed = surveyState === "" || surveyState === userState;

    // Survey is allowed only when ALL specified restrictions pass.
    const allowed = countryAllowed && stateAllowed;

    setAccessDenied(!allowed);
  }, [survey, userLocation]);

  useEffect(() => {
    if (survey) setShowObjectivesModal(true);
  }, [survey]);

  const handleChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const pages = survey
    ? survey.questions.reduce((list, question, index) => {
        const pageIndex = Math.floor(index / 6);
        if (!list[pageIndex]) list[pageIndex] = [];
        list[pageIndex].push(question);
        return list;
      }, [])
    : [];

  const handleCheckboxChange = (questionKey, value, checked) => {
    setResponses((prev) => {
      const existing = Array.isArray(prev[questionKey])
        ? prev[questionKey]
        : [];
      const next = checked
        ? [...new Set([...existing, value])]
        : existing.filter((item) => item !== value);
      return { ...prev, [questionKey]: next };
    });
  };

  // --- FIXED Recursive Question Renderer ---
  const getQuestionNumber = (question) => {
    if (!survey?.numberedQuestions) return "";

    const questionIndex = survey.questions.indexOf(question);
    const section = getSectionForQuestion(question);
    if (questionIndex < 0 || !section) return `${questionIndex + 1}.`;
    if (section.numberingMode === "blank") return "";

    const sectionQuestions = survey.questions.filter(
      (item) => String(item.sectionId) === String(section.id),
    );
    const sectionIndex = sectionQuestions.indexOf(question);
    if (section.numberingMode === "renumber") return `${sectionIndex + 1}.`;

    const previousQuestionCount = survey.sections
      .slice(0, survey.sections.indexOf(section))
      .filter((item) => item.numberingMode !== "blank")
      .reduce(
        (count, item) =>
          count +
          survey.questions.filter(
            (questionItem) =>
              String(questionItem.sectionId) === String(item.id),
          ).length,
        0,
      );

    return `${previousQuestionCount + sectionIndex + 1}.`;
  };

  const renderQuestion = (q, index, parentLabel = "") => {
    if (!q?.question) return null;

    const isSub = parentLabel !== "";
    const questionLabel = isSub
      ? String.fromCharCode(97 + index)
      : getQuestionNumber(q).replace(".", "") || `${index + 1}`;

    const displayLabel = isSub ? `${questionLabel})` : `${questionLabel}.`;
    const questionKey = isSub
      ? `${parentLabel}${questionLabel}. ${q.question}`
      : `${questionLabel}. ${q.question}`;

    const selectedValue = responses[questionKey];

    const renderInput = () => {
      switch (q.answerType) {
        case "Multiple Choice":
          return (
            <Radio.Group
              value={selectedValue}
              onChange={(e) => handleChange(questionKey, e.target.value)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 12,
              }}
            >
              {q.choices?.map((choice, i) => (
                <Radio
                  key={i}
                  value={choice}
                  style={{
                    fontSize: 16,
                    padding: "6px 10px",
                    borderRadius: 6,
                    transition: "0.2s",
                    background: darkMode ? "#141414" : "#f9f9f9",
                  }}
                >
                  {choice}
                </Radio>
              ))}
            </Radio.Group>
          );

        case "Boolean":
          return (
            <Radio.Group
              value={selectedValue}
              onChange={(e) => handleChange(questionKey, e.target.value)}
              style={{ marginTop: 12, marginLeft: 15 }}
            >
              <Radio value="true" style={{ fontSize: 16, marginRight: 16 }}>
                TRUE
              </Radio>
              <Radio value="false" style={{ fontSize: 16 }}>
                FALSE
              </Radio>
            </Radio.Group>
          );

        case "Checkboxes":
          return (
            <div
              style={{
                display: "flex",
                flexDirection: q.ratingMode ? "row" : "column",
                gap: 10,
                marginTop: 12,
                flexWrap: q.ratingMode ? "wrap" : "nowrap",
              }}
            >
              {q.choices?.map((choice, i) => (
                <Checkbox
                  key={i}
                  checked={
                    Array.isArray(selectedValue) &&
                    selectedValue.includes(choice)
                  }
                  onChange={(e) =>
                    handleCheckboxChange(questionKey, choice, e.target.checked)
                  }
                >
                  {q.ratingMode ? i + 1 : choice}
                </Checkbox>
              ))}
            </div>
          );

        default:
          return (
            <Input
              placeholder="Type your answer..."
              value={selectedValue || ""}
              onChange={(e) => handleChange(questionKey, e.target.value)}
              style={{
                marginTop: 10,
                fontSize: 16,
                borderRadius: 6,
                padding: "8px 12px",
                background: darkMode ? "#141414" : "#fff",
              }}
            />
          );
      }
    };

    if (loadingLocation || !survey)
      return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <Text type="secondary">Loading survey and verifying region...</Text>
        </div>
      );

    if (accessDenied)
      return (
        <div
          style={{
            textAlign: "center",
            marginTop: 100,
            color: "red",
            fontSize: 18,
          }}
        >
          <Text strong>This survey is not available in your region.</Text>
          <br />
          <Text type="secondary">
            Only respondents from {survey.state || "the specified region"},{" "}
            {survey.country} can participate.
          </Text>
        </div>
      );

    return (
      <Card
        key={questionKey}
        size="small"
        style={{
          marginBottom: 20,
          background: darkMode ? "#1f1f1f" : "#fafafa",
          borderColor: darkMode ? "#333" : "#d9d9d9",
          boxShadow: darkMode
            ? "0 0 10px rgba(255,255,255,0.05)"
            : "0 1px 6px rgba(0,0,0,0.1)",
          padding: "16px 20px",
        }}
      >
        <Text
          strong
          style={{ fontSize: 18, color: darkMode ? "#fff" : "#000" }}
        >
          {displayLabel} {q.question}
        </Text>

        {renderInput()}

        {q.subQuestion && (
          <div
            style={{
              marginTop: 20,

              paddingLeft: 16,
            }}
          >
            {renderQuestion(q.subQuestion, 0, `${parentLabel}${questionLabel}`)}
          </div>
        )}
      </Card>
    );
  };

  // --- Structured Response Builder ---
  const buildStructuredResponse = (questions, parentLabel = "") => {
    const structured = {};
    questions.forEach((q, index) => {
      const isSub = parentLabel !== "";
      const questionLabel = isSub
        ? String.fromCharCode(97 + index)
        : getQuestionNumber(q).replace(".", "") || `${index + 1}`;
      const questionKey = isSub
        ? `${parentLabel}${questionLabel}. ${q.question}`
        : `${questionLabel}. ${q.question}`;

      const answer = responses[questionKey] ?? "";
      const subResponse = q.subQuestion
        ? buildStructuredResponse(
            [q.subQuestion],
            `${parentLabel}${questionLabel}`,
          )
        : null;

      structured[questionKey] = subResponse
        ? { answer, subQuestions: subResponse }
        : { answer };
    });
    return structured;
  };

  const pageQuestions =
    pageMode === "page" && pages.length
      ? pages[currentPage] || []
      : survey?.questions || [];

  const groupedQuestions = pageQuestions.reduce((groups, question) => {
    const sectionId = String(question.sectionId || "unsectioned");

    if (!groups[sectionId]) {
      const section = survey?.sections?.find((s) => String(s.id) === sectionId);

      groups[sectionId] = {
        section,
        questions: [],
      };
    }

    groups[sectionId].questions.push(question);

    return groups;
  }, {});

  const getSectionForQuestion = (question) =>
    question
      ? survey?.sections?.find(
          (section) => String(section.id) === String(question.sectionId),
        )
      : undefined;

  const getSubsectionForQuestion = (question, section) =>
    question
      ? section?.subsections?.find(
          (subsection) =>
            String(subsection.id) === String(question.subsectionId),
        )
      : undefined;

  const renderQuestionContext = (question, index) => {
    const section = getSectionForQuestion(question);
    const subsection = getSubsectionForQuestion(question, section);

    const previousQuestion = pageQuestions[index - 1];

    // IDs of current question
    const currentSectionId = question?.sectionId || null;
    const currentSubsectionId = question?.subsectionId || null;

    // IDs of previous question
    const previousSectionId = previousQuestion?.sectionId || null;
    const previousSubsectionId = previousQuestion?.subsectionId || null;

    // Only show section if this is the first question
    // or the section is different from the previous question
    const showSection =
      !!section &&
      (index === 0 || String(currentSectionId) !== String(previousSectionId));

    // Only show subsection when it changes
    const showSubsection =
      !!subsection &&
      (index === 0 ||
        String(currentSubsectionId) !== String(previousSubsectionId));

    // Nothing changed, don't render anything
    if (!showSection && !showSubsection) {
      return null;
    }

    return (
      <div className="mb-4 rounded border border-blue-200 bg-blue-50 px-4 py-3">
        {/* SECTION */}
        {showSection && (
          <>
            <div className="font-semibold text-blue-900">
              {section.title || "Untitled section"}
            </div>

            {section.showNote && section.note && (
              <div className="text-sm italic text-blue-800">{section.note}</div>
            )}
          </>
        )}

        {/* SUBSECTION */}
        {showSubsection && (
          <div className="mt-2 border-l-4 border-purple-400 pl-3 text-purple-900">
            <div className="font-semibold">
              {subsection.title || "Untitled subsection"}
            </div>

            {subsection.showNote && subsection.note && (
              <div className="text-sm italic">{subsection.note}</div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderObjectivesBanner = () => {
    if (!survey?.objectives?.main && !survey?.sections?.length) return null;

    return (
      <div className="mb-5 flex justify-end">
        <div
          className="cursor-pointer rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 text-sm text-blue-900 shadow-sm"
          onClick={() => setShowObjectivesModal(true)}
        >
          View objectives and section notes
        </div>
      </div>
    );
  };

  // --- Submit Handler ---
  const handleSubmit = async () => {
    if (!surveyId) return;

    if (!survey.anonymous && !editableName.trim()) {
      toast.error("Please enter your name before submitting.");
      return;
    }

    if (Object.keys(responses).length === 0) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    try {
      // 🚫 Check for duplicate name if survey is named
      if (!survey.anonymous) {
        const resCol = collection(db, "responses");
        const qSnap = await getDocs(
          query(
            resCol,
            where("surveyId", "==", surveyId),
            where("editableName", "==", editableName.trim()),
          ),
        );
        if (!qSnap.empty) {
          toast.error("You have already submitted a response for this survey.");
          return;
        }
      }

      const structuredResponse = buildStructuredResponse(survey.questions);
      console.log("Final Structured Response:", structuredResponse);

      await addDoc(collection(db, "responses"), {
        surveyId,
        editableName: editableName.trim(),
        responses: structuredResponse,
        timestamp: serverTimestamp(),
        anonymous: Boolean(survey.anonymous),
        userId: user?.uid || null,
      });

      toast.success("Response submitted successfully!");
      localStorage.setItem(`submitted-${surveyId}`, "true");
      router.push(`/survpages/analysis/results?surveyId=${surveyId}`);
    } catch (err) {
      console.error(err);
      toast.error("Error submitting your response.");
    }
  };

  if (!survey)
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Text type="secondary">Loading survey...</Text>
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",

        background: darkMode ? "#000" : "#f4f4f4",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 1000,
          background: darkMode ? "#1a1a1a" : "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          borderRadius: 10,
          padding: "2rem",
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: darkMode ? "#fff" : "#000",
            marginBottom: 20,
          }}
        >
          {survey.title}
        </Title>

        {/* Editable Name Field */}
        {!survey.anonymous ? (
          <div
            id="editableNameField"
            className="flex justify-center p-2"
            style={{
              width: "100%",
              maxWidth: "30rem",
              height: "2.5rem",
              margin: "0 auto 1.5rem",
              border: "2px solid #1677ff",
              borderRadius: "8px",
              alignItems: "center",
              background: darkMode ? "#141414" : "#fafafa",
              cursor: "text",
            }}
            onClick={() => {
              setIsEditingName(true);
              setTimeout(() => nameInputRef.current?.focus(), 0);
            }}
          >
            {isEditingName ? (
              <input
                ref={nameInputRef}
                value={editableName}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 50) setEditableName(value);
                }}
                onBlur={() => setIsEditingName(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setIsEditingName(false);
                }}
                placeholder="Enter your full name"
                className="w-full text-center bg-transparent border-none outline-none"
                style={{
                  color: darkMode ? "#fff" : "#000",
                  fontSize: "1rem",
                }}
              />
            ) : (
              <span
                className="cursor-pointer w-full text-center"
                style={{
                  color: editableName ? (darkMode ? "#fff" : "#000") : "#888",
                }}
              >
                {editableName || "Enter your name / Name of the organization "}
              </span>
            )}
          </div>
        ) : (
          <Card
            size="small"
            style={{
              textAlign: "center",
              background: "#fafafa",
              border: "1px dashed #ccc",
              marginBottom: 24,
            }}
          >
            <Text type="secondary">Anonymous Survey</Text>
          </Card>
        )}

        <Divider>Questions</Divider>

        {renderObjectivesBanner()}

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">View mode</span>
            <Button
              type={pageMode === "scroll" ? "primary" : "default"}
              onClick={() => setPageMode("scroll")}
            >
              Scroll
            </Button>
            <Button
              type={pageMode === "page" ? "primary" : "default"}
              onClick={() => setPageMode("page")}
            >
              Page by page
            </Button>
          </div>

          {pageMode === "page" && pages.length > 1 && (
            <div className="flex items-center gap-2">
              <Button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              >
                Previous
              </Button>
              <span className="text-sm">
                Page {currentPage + 1} / {pages.length}
              </span>
              <Button
                disabled={currentPage === pages.length - 1}
                onClick={() =>
                  setCurrentPage((p) => Math.min(pages.length - 1, p + 1))
                }
              >
                Next
              </Button>
            </div>
          )}
        </div>

        <Form layout="vertical">
          {Object.entries(groupedQuestions).map(([sectionId, group]) => (
            <React.Fragment key={sectionId}>
              {/* SECTION HEADER - ONLY ONCE */}
              {group.section && (
                <div className="mb-4 rounded border border-blue-200 bg-blue-50 px-4 py-3">
                  <div className="font-semibold text-blue-900">
                    {group.section.title || "Untitled section"}
                  </div>

                  {group.section.showNote && group.section.note && (
                    <div className="text-sm italic text-blue-800">
                      {group.section.note}
                    </div>
                  )}
                </div>
              )}

              {/* ALL QUESTIONS BELONGING TO THIS SECTION */}
              {group.questions.map((q, questionIndex) => {
                const originalIndex = pageQuestions.indexOf(q);

                return (
                  <React.Fragment
                    key={`response-question-${q.id || originalIndex}`}
                  >
                    {renderQuestion(q, originalIndex)}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          ))}

          <Form.Item style={{ textAlign: "center", marginTop: 30 }}>
            <Button
              type="primary"
              size="large"
              onClick={handleSubmit}
              style={{
                background: "#1677ff",
                borderRadius: 6,
                paddingInline: 50,
                fontSize: 16,
                height: "2.8rem",
              }}
            >
              Submit Response
            </Button>
          </Form.Item>
        </Form>

        <Modal
          open={showObjectivesModal}
          onCancel={() => setShowObjectivesModal(false)}
          centered
          footer={
            <Button onClick={() => setShowObjectivesModal(false)}>Close</Button>
          }
          width={760}
          title="Survey objectives and notes"
        >
          <div className="space-y-5">
            {survey?.objectives?.main && (
              <div>
                <div className="font-semibold mb-1">Main objective</div>
                <div>{survey.objectives.main}</div>
              </div>
            )}

            {survey?.objectives?.secondary && (
              <div>
                <div className="font-semibold mb-1">Secondary objective</div>
                <div>{survey.objectives.secondary}</div>
              </div>
            )}

            {(survey?.objectives?.specific || []).length > 0 && (
              <div>
                <div className="font-semibold mb-1">Specific objectives</div>
                <ul className="list-disc pl-5 space-y-1">
                  {survey.objectives.specific.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {(survey?.sections || []).filter(
              (section) => section.title || section.objective || section.note,
            ).length > 0 && (
              <div>
                <div className="font-semibold mb-2">Section notes</div>
                <div className="space-y-4">
                  {(survey.sections || []).map((section, idx) => (
                    <div key={idx} className="rounded border p-3">
                      {section.title && (
                        <div className="font-semibold mb-1">
                          {section.title}
                        </div>
                      )}
                      {section.objective && (
                        <div className="mb-1">
                          <strong>Objective:</strong> {section.objective}
                        </div>
                      )}
                      {section.note && (
                        <div>
                          <strong>Note:</strong> {section.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      </Card>
    </div>
  );
}
