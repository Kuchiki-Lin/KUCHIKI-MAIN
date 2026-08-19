"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  fetchSurveyById,
  fetchSurveyResponses,
} from "@/app/Modules/utilsfirebase.js";
import { useDarkMode } from "@/app/Modules/darkmodecont.js";
import { useUser } from "@/app/authcont";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";

const RankPage = () => {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState([]);
  const [rankedList, setRankedList] = useState([]);
  const [otherSurveys, setOtherSurveys] = useState([]);
  const { darkMode } = useDarkMode();
  const { user } = useUser();

useEffect(() => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Caveat:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}, []);
  useEffect(() => {
    if (surveyId) {
      fetchSurveyById(surveyId).then(setSurvey);
      fetchSurveyResponses(surveyId).then(setResponses);
    }
  }, [surveyId]);

  useEffect(() => {
    if (survey && responses.length > 0) {
      calculateRanks();
    }
  }, [survey, responses]);

  const calculateRanks = () => {
    const results = [];

    responses.forEach((resp) => {
      let score = 0;
      let total = 0;

      survey.questions.forEach((q) => {
        if (q.answerType === "Multiple Choice" && q.correctAnswer) {
          total++;
          const userAnswer = resp.responses[q.question];
          if (userAnswer === q.correctAnswer) {
            score++;
          }
        }
      });

      results.push({
        name: resp.editableName || (survey.anonymous ? "Anonymous" : "Unnamed"),
        score,
        total,
      });
    });

    // sort highest score first
    results.sort((a, b) => b.score - a.score);

    setRankedList(results);
  };

  const fetchUserParticipatedSurveys = async () => {
    if (!user) {
      console.log("No user logged in");
      return;
    }

    try {
      console.log("Fetching responses for user:", user.uid);
      // Get all responses by this user
      const responsesQuery = query(
        collection(db, "responses"),
        where("userId", "==", user.uid),
      );
      const responsesSnapshot = await getDocs(responsesQuery);
      console.log("Found responses:", responsesSnapshot.docs.length);

      // Get unique survey IDs
      const surveyIds = [
        ...new Set(responsesSnapshot.docs.map((doc) => doc.data().surveyId)),
      ];
      console.log("Unique survey IDs:", surveyIds);

      // Filter out current survey
      const otherSurveyIds = surveyIds.filter((id) => id !== surveyId);
      console.log("Other survey IDs:", otherSurveyIds);

      // Fetch survey details for each ID
      const surveysData = await Promise.all(
        otherSurveyIds.map(async (id) => {
          console.log("Fetching survey:", id);
          const surveyData = await fetchSurveyById(id);
          console.log("Survey data:", surveyData);
          if (surveyData) {
            // Check if survey has multiple choice questions with correct answers
            const hasRankings = surveyData.questions?.some(
              (q) => q.answerType === "Multiple Choice" && q.correctAnswer,
            );
            console.log("Has rankings:", hasRankings);
            if (hasRankings) {
              // Get participant count
              const responses = await fetchSurveyResponses(id);
              console.log("Participant count:", responses.length);
              return { ...surveyData, participantsCount: responses.length };
            }
          }
          return null;
        }),
      );

      // Filter out nulls and set state
      const filteredSurveys = surveysData.filter((survey) => survey !== null);
      console.log("Final surveys:", filteredSurveys);
      setOtherSurveys(filteredSurveys);
    } catch (error) {
      console.error("Error fetching user participated surveys:", error);
    }
  };

  useEffect(() => {
    if (user && surveyId) {
      fetchUserParticipatedSurveys();
    }
  }, [user, surveyId]);

  return (
    <div
      className={`min-h-screen px-6 py-10 ${
        darkMode
          ? "bg-gray-950 text-gray-100"
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-900"
      }`}
    >
  <div className="flex justify-center mt-12">
  <div
    className="relative w-[760px] h-[950px] bg-no-repeat bg-contain bg-center"
    style={{
      backgroundImage: "url('/scroll.png')",
    }}
  >
    {/* Title on the scroll */}
    <div
      className="absolute top-[120px] left-0 right-0 text-center text-4xl font-bold"
      style={{ fontFamily: "Cinzel, serif" }}
    >
      Rankings
    </div>

    {/* Scrollable parchment content */}
    <div
      className="absolute top-[220px] left-[140px] right-[140px] bottom-[180px] overflow-y-scroll scroll-hide scroll-fade"
      style={{
        scrollBehavior: "smooth",
        fontFamily: "Caveat, cursive",
      }}
    >
      {rankedList.length === 0 ? (
        <p className="text-center text-2xl mt-20">
          No challengers have entered the court yet.
        </p>
      ) : (
        <div className="space-y-8">
          {rankedList.map((r, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-3xl ink-reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rank */}
              <span className="flex items-center gap-3">
                {index === 0 ? (
                  <span className="text-4xl crown-glow">👑</span>
                ) : (
                  `${index + 1}.`
                )}
                {r.name}
              </span>

              {/* Score */}
              <span className="font-bold">
                {r.score} / {r.total}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</div>
    </div>
  );
};

export default RankPage;
