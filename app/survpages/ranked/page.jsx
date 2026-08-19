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
    // Add handwriting font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap";
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
      <div className="max-w-4xl mx-auto">
        {/* Title with handwriting style */}
        <h1
          className="text-5xl font-bold text-center mb-2"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          {survey?.title} – Rankings
        </h1>
        <div className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>

        {/* Scrollable Results Container */}
        <div className="relative">
          <div
            className={`max-h-96 overflow-y-scroll rounded-xl shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {rankedList.length === 0 ? (
              <p
                className={`text-center py-12 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
                style={{ fontFamily: "Caveat, cursive" }}
              >
                No responses yet to calculate rankings.
              </p>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {rankedList.map((r, index) => (
                  <div
                    key={index}
                    className={`px-6 py-4 flex items-center justify-between transition-all hover:scale-102 ${
                      index === 0
                        ? darkMode
                          ? "bg-gradient-to-r from-yellow-600 to-orange-600"
                          : "bg-gradient-to-r from-yellow-300 to-orange-300"
                        : darkMode
                          ? "hover:bg-gray-700"
                          : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Rank Badge */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                        index === 0
                          ? "bg-white text-yellow-600 shadow-lg"
                          : darkMode
                            ? "bg-gray-700 text-yellow-400"
                            : "bg-gray-200 text-gray-700"
                      }`}
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      {index === 0 ? "🏆" : index + 1}
                    </div>

                    {/* Name and Score */}
                    <div className="flex-1 mx-4">
                      <p
                        className="text-2xl font-bold"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        {r.name}
                      </p>
                    </div>

                    {/* Score */}
                    <div
                      className={`text-right px-4 py-2 rounded-lg ${
                        index === 0
                          ? "bg-white text-yellow-600 font-bold"
                          : darkMode
                            ? "bg-gray-700 text-yellow-300"
                            : "bg-yellow-100 text-yellow-700 font-semibold"
                      }`}
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      <p className="text-xl">
                        {r.score} / {r.total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Scroll indicator */}
          <p
            className={`text-center mt-3 text-sm ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Scroll to see all rankings ↓
          </p>
        </div>

        {/* Other Surveys Section */}
        {otherSurveys.length > 0 && (
          <div className="mt-12">
            <h2
              className="text-3xl font-bold text-center mb-6"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              Your Other Ranked Surveys
            </h2>
            <div className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherSurveys.map((otherSurvey, index) => (
                <Link
                  key={otherSurvey.id}
                  href={`/survpages/ranked?surveyId=${otherSurvey.id}`}
                  className={`block p-6 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="text-center">
                    <h3
                      className="text-xl font-bold mb-2 truncate"
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      {otherSurvey.title || "Untitled Survey"}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      👥 {otherSurvey.participantsCount} Participants
                    </p>
                    <div
                      className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg font-semibold"
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      View Rankings
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankPage;
