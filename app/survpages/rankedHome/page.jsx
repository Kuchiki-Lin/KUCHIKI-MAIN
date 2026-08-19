"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import CartoonBox from "@/app/Modules/cartoons";
import CartoonCard from "@/app/Modules/cartoons2";
import { useUser } from "@/app/authcont";

export default function RankedHome() {

  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coloredMode, setColoredMode] = useState(true);

  const { user } = useUser();

  useEffect(() => {

    if (!user) return;

    async function fetchRankedSurveys() {

      try {

        const rankedQuery = query(
          collection(db, "surveys"),
          where("approved", "==", true)
        );

        const snapshot = await getDocs(rankedQuery);

        const surveyList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSurveys(surveyList);

      } catch (error) {
        console.error("Error fetching ranked surveys:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRankedSurveys();

  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">

      {/* Header */}
      <header className="mb-8 text-center flex justify-center">
        <CartoonBox />
      </header>

      {/* Color Toggle */}
      <div className="mb-10 flex justify-center">
        <button
          onClick={() => setColoredMode(!coloredMode)}
          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
            coloredMode
              ? "bg-yellow-300 text-gray-900"
              : "bg-gray-300 text-gray-900"
          }`}
        >
          {coloredMode ? "color" : "⚪ plain"}
        </button>
      </div>

      {/* Ranked Surveys */}
      {surveys.length === 0 ? (
        <p className="text-center text-gray-500">
          No ranked surveys available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {surveys.map((survey, index) => (
            <CartoonCard
              key={survey.id}
              survey={survey}
              index={index}
              coloredMode={coloredMode}
            />
          ))}
        </div>
      )}

    </div>
  );
}