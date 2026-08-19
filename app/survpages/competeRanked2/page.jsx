"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, Form, Input, Radio, Button, Typography, Divider, Modal, Progress } from "antd";
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

export default function RankedAnswerCollection() {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const router = useRouter();

  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState({});
  const [userLocation, setUserLocation] = useState(null);

  const { darkMode } = useDarkMode();
  const { user } = useUser();

  // Main Timer State
  const totalTime = 60;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const percent = (timeLeft / totalTime) * 100;

  // Question Pagination & Timer State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timePerQuestion, setTimePerQuestion] = useState(0);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(0);

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const calculateResults = () => {
    if (!survey) return;

    let correct = 0;
    let total = 0;

    survey.questions.forEach((q, index) => {
      const key = `${index + 1}. ${q.question}`;
      if (q.correctAnswer) {
        total++;
        if (responses[key] === q.correctAnswer) {
          correct++;
        }
      }
    });

    setScore(correct);
    setTotalQuestions(total);
  };

  useEffect(() => {
    if (surveyId) {
      fetchSurveyById(surveyId).then((data) => {
        setSurvey(data);
        // Calculate dynamic time per question
        if (data?.questions?.length > 0) {
          const tpp = Math.floor(totalTime / data.questions.length);
          setTimePerQuestion(tpp);
          setQuestionTimeLeft(tpp);
        }
      });
    }

    const locs = async () => {
      try {
        const res = await fetch("https://ipapi.co/json");
        const data = await res.json();
        setUserLocation(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };
    locs();
  }, [surveyId]);

  // Dual Timer Logic
  useEffect(() => {
    if (!survey || showResults) return;

    // Main timer runs out
    if (timeLeft <= 0) {
      calculateResults();
      setShowResults(true);
      return;
    }

    // Question timer runs out
    if (questionTimeLeft <= 0) {
      handleNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
      setQuestionTimeLeft((qt) => qt - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, questionTimeLeft, survey, showResults]);

  const handleChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < survey.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionTimeLeft(timePerQuestion); // Reset timer for the new question
    } else {
      // Last question reached, finish quiz
      calculateResults();
      setShowResults(true);
    }
  };

  const renderQuestion = (q, index, parentLabel = "") => {
    if (!q?.question) return null;

    const isSub = parentLabel !== "";
    const questionLabel = isSub
      ? String.fromCharCode(97 + index) 
      : `${index + 1}`; 

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

    return (
      <Card
        key={questionKey}
        size="small"
        style={{
          marginBottom: 20,
          background: getCardColor(),
          transition: "background 0.8s ease",
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

  const buildStructuredResponse = (questions, parentLabel = "") => {
    const structured = {};
    questions.forEach((q, index) => {
      const isSub = parentLabel !== "";
      const questionLabel = isSub
        ? String.fromCharCode(97 + index)
        : `${index + 1}`;
      const questionKey = isSub
        ? `${parentLabel}${questionLabel}. ${q.question}`
        : `${questionLabel}. ${q.question}`;

      const answer = responses[questionKey] || "";
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

  const handleSubmit = async () => {
    if (!surveyId) return;

    if (Object.keys(responses).length === 0) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    try {
      if (survey) {
        const resCol = collection(db, "ranked_responses");
        const qSnap = await getDocs(
          query(
            resCol,
            where("surveyId", "==", surveyId),
            where("participant_name", "==", user.displayName),
          ),
        );
        if (!qSnap.empty) {
          toast.error("You have already submitted a response for this survey.");
          return;
        }
      }

      const structuredResponse = buildStructuredResponse(survey.questions);

      await addDoc(collection(db, "ranked_responses"), {
        surveyId,
        participant_name: user.displayName,
        responses: structuredResponse,
        timestamp: serverTimestamp(),
        country: userLocation?.country_name || "Unknown",
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

  const getBackgroundGradient = () => {
    const stage = Math.floor((60 - timeLeft) / 10);
    const gradients = [
      "linear-gradient(135deg,#f6f9ff,#dbe7ff)",
      "linear-gradient(135deg,#e6eeff,#c7d7ff)",
      "linear-gradient(135deg,#d6e3ff,#aebfff)",
      "linear-gradient(135deg,#c2d3ff,#8fa7ff)",
      "linear-gradient(135deg,#9eb9ff,#5f7fff)",
      "linear-gradient(135deg,#5c78ff,#2c3ebd)",
    ];
    return gradients[Math.min(stage, gradients.length - 1)];
  };

  const getCardColor = () => {
    if (timeLeft > 40) {
      return darkMode
        ? "linear-gradient(135deg,#1a2a1a,#0f1f12)"
        : "linear-gradient(135deg,#f0fff4,#d1fae5)";
    }
    if (timeLeft > 20) {
      return darkMode
        ? "linear-gradient(135deg,#2a2415,#1a1508)"
        : "linear-gradient(135deg,#fffbe6,#fde68a)";
    }
    return darkMode
      ? "linear-gradient(135deg,#2b1616,#140909)"
      : "linear-gradient(135deg,#ffeaea,#fecaca)";
  };

  const isLastQuestion = currentQuestionIndex === survey.questions.length - 1;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#000" : getBackgroundGradient(),
        transition: "background 2s ease",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 16px",
            borderRadius: 8,
            background: darkMode ? "#141414" : "#ffffffcc",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          {user?.displayName && (
            <Text
              strong
              style={{
                fontSize: 16,
                color: darkMode ? "#fff" : "#000",
              }}
            >
              👤 {user.displayName}
            </Text>
          )}

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Text
              strong
              style={{
                fontSize: 16,
                color: darkMode ? "#aaa" : "#555",
              }}
            >
              Question {currentQuestionIndex + 1}/{survey.questions.length}
            </Text>
            <Text
              strong
              style={{
                fontSize: 18,
                color: timeLeft < 15 ? "#ff4d4f" : darkMode ? "#fff" : "#000",
              }}
            >
              Main Timer: {timeLeft}s
            </Text>
          </div>
        </div>

        {/* Global Timer Bar */}
        <div
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 10,
            background: darkMode ? "#141414" : "#ffffffcc",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              height: 14,
              width: "100%",
              background: darkMode ? "#333" : "#e5e5e5",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${percent}%`,
                background:
                  timeLeft > 40
                    ? "linear-gradient(90deg,#22c55e,#4ade80)"
                    : timeLeft > 20
                    ? "linear-gradient(90deg,#facc15,#f97316)"
                    : "linear-gradient(90deg,#ef4444,#b91c1c)",
                transition: "width 1s linear",
              }}
            />
          </div>
        </div>

        {/* Survey Card */}
        <Card
          style={{
            width: "100%",
            background: darkMode ? "#0f0f0f" : "#ffffff",
            borderRadius: 14,
            padding: "2.5rem",
            boxShadow: darkMode
              ? "0 0 20px rgba(255,255,255,0.05)"
              : "0 10px 30px rgba(0,0,0,0.12)",
          }}
        >
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: darkMode ? "#fff" : "#000",
              marginBottom: 10,
            }}
          >
            {survey.title}
          </Title>

          <Divider>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Progress 
                type="circle" 
                percent={(questionTimeLeft / timePerQuestion) * 100} 
                format={() => `${questionTimeLeft}s`} 
                size={40}
                status={questionTimeLeft < 5 ? "exception" : "normal"}
              />
              Question Timer
            </span>
          </Divider>

          {!showResults && survey.questions.length > 0 && (
            <Form layout="vertical">
              {/* Render ONLY the current question */}
              {renderQuestion(survey.questions[currentQuestionIndex], currentQuestionIndex)}

              <Form.Item style={{ textAlign: "center", marginTop: 40 }}>
                {isLastQuestion ? (
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      calculateResults();
                      setShowResults(true);
                    }}
                    style={{
                      background: "#1677ff",
                      borderRadius: 8,
                      paddingInline: 60,
                      fontSize: 16,
                      height: "3rem",
                      boxShadow: "0 4px 12px rgba(22,119,255,0.35)",
                    }}
                  >
                    Finish Quiz
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    size="large"
                    onClick={handleNextQuestion}
                    style={{
                      background: "#52c41a",
                      borderRadius: 8,
                      paddingInline: 60,
                      fontSize: 16,
                      height: "3rem",
                      boxShadow: "0 4px 12px rgba(82,196,26,0.35)",
                    }}
                  >
                    Next Question
                  </Button>
                )}
              </Form.Item>
            </Form>
          )}
        </Card>

        <Modal
          open={showResults}
          footer={null}
          centered
          closable={false}
        >
          <div style={{ textAlign: "center", padding: 20 }}>
            <Title level={2}>Quiz Complete!</Title>

            <Title level={1} style={{ color: "#1677ff" }}>
              {score} / {totalQuestions}
            </Title>

            <Text type="secondary">
              Review your score before submitting your answers.
            </Text>

            <div style={{ marginTop: 25, display: "flex", gap: "10px", justifyContent: "center" }}>
              <Button
                type="primary"
                size="large"
                onClick={handleSubmit} // Moved the database submit here
              >
                Submit Results & View Leaderboard
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}