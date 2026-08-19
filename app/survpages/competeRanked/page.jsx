"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, Form, Input, Radio, Button, Typography, Divider } from "antd";
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
import { Modal } from "antd";


const { Title, Text } = Typography;

export default function RankedAnswerCollection() {
  const searchParams = useSearchParams();

  const surveyId = searchParams.get("surveyId");
  const router = useRouter();
  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState({});

  const { darkMode } = useDarkMode();
  const { user } = useUser();

   const [userLocation, setUserLocation] = useState(null);
  
  const [timeLeft, setTimeLeft] = useState(60);
  const totalTime = 60;
const percent = (timeLeft / totalTime) * 100;

const [showResults, setShowResults] = useState(false);
const [score, setScore] = useState(0);
const [totalQuestions, setTotalQuestions] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [questionTime, setQuestionTime] = useState(0);







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
    if (surveyId) fetchSurveyById(surveyId).then(setSurvey);
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
  const perQuestionTime =
  survey?.questions?.length
    ? Math.floor(totalTime / survey.questions.length)
    : 0;


  useEffect(() => {
  if (!survey) return;

 if (timeLeft === 0) {
  calculateResults();
  setShowResults(true);
  return;
}
  const timer = setTimeout(() => {
    setTimeLeft((t) => t - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [timeLeft, survey]);








useEffect(() => {
  if (!survey || showResults) return;

  const timer = setInterval(() => {
    setQuestionTime((t) => {
      if (t <= 1) {
        if (currentQuestion < survey.questions.length - 1) {
          setCurrentQuestion((q) => q + 1);
          return perQuestionTime;
        } else {
          calculateResults();
          setShowResults(true);
          return 0;
        }
      }

      return t - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [currentQuestion, survey]);

useEffect(() => {
  if (!survey) return;
  setQuestionTime(perQuestionTime);
}, [survey]);

const handleChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  // --- FIXED Recursive Question Renderer ---
  const renderQuestion = (q, index, parentLabel = "") => {
    if (!q?.question) return null;

    const isSub = parentLabel !== "";
    const questionLabel = isSub
      ? String.fromCharCode(97 + index) // a, b, c, ...
      : `${index + 1}`; // 1, 2, 3

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

<div key={`q-${currentQuestion}`}
  style={{
    animation: "fadeIn 0.4s ease",
  }}
>
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
        <Text strong>
Question {currentQuestion + 1} / {survey.questions.length}
</Text>
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
      </div>
    );
  };

  // --- Structured Response Builder ---
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

  // --- Submit Handler ---
  const handleSubmit = async () => {
    if (!surveyId) return;

   

    if (Object.keys(responses).length === 0) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    try {
      // 🚫 Check for duplicate name
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
      console.log("Final Structured Response:", structuredResponse);

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
    "linear-gradient(135deg,#f6f9ff,#dbe7ff)", // 60-50
    "linear-gradient(135deg,#e6eeff,#c7d7ff)", // 50-40
    "linear-gradient(135deg,#d6e3ff,#aebfff)", // 40-30
    "linear-gradient(135deg,#c2d3ff,#8fa7ff)", // 30-20
    "linear-gradient(135deg,#9eb9ff,#5f7fff)", // 20-10
    "linear-gradient(135deg,#5c78ff,#2c3ebd)", // 10-0
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

        <Text
          strong
          style={{
            fontSize: 18,
            color: timeLeft < 15 ? "#ff4d4f" : darkMode ? "#fff" : "#000",
          }}
        >
          ⏱ {timeLeft}s
        </Text>
      </div>

      {/* Timer Bar */}
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

      <div
  style={{
    width: "100%",
    height: 10,
    background: "#ddd",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 20,
  }}
>
  <div
    style={{
      width: `${(questionTime / perQuestionTime) * 
        100}%`,
      height: "100%",
      background:
        questionTime > 5
          ? "#22c55e"
          : questionTime > 2
          ? "#facc15"
          : "#ef4444",
      transition: "width 1s linear",
    }}
  />
</div>
<Text
  strong
  style={{
    display: "block",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  }}
>
  Question Time: {questionTime}s
</Text>

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

        <Divider>Questions</Divider>

      {!showResults && (
  <Form layout="vertical">
    {renderQuestion(
  survey.questions[currentQuestion],
  currentQuestion
)}

     
        </Form>)}
      </Card>
      <Modal
  open={showResults}
  footer={null}
  centered
  closable={false}
>
  <div style={{ textAlign: "center", padding: 20 }}>
    
    <Title level={2}>Time's Up!</Title>

    <Title level={1} style={{ color: "#1677ff" }}>
      {score} / {totalQuestions}
    </Title>

    <Text type="secondary">
      Your results have been recorded.
    </Text>

    <div style={{ marginTop: 25 }}>
      <Button
        type="primary"
        size="large"
        onClick={() =>
          router.push(`/survpages/analysis/results?surveyId=${surveyId}`)
        }
      >
        View Leaderboard
      </Button>
    </div>

  </div>
</Modal>
    </div>
  </div>
);}
