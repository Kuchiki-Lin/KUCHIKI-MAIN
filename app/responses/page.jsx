"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "@/app/privateRoute";
import { fetchSurveyByUser, fetchSurveyResponses, fetchProductReviews, fetchProductReviewResponses } from "@/app/Modules/utilsfirebase.js";
import { useUser } from "@/app/authcont";
import { useSurveyContext } from "@/app/survpages/survcont.jsx";
import { useDarkMode } from "@/app/Modules/darkmodecont";

const SurveyResponsesDashboard = () => {
  const [activeTab, setActiveTab] = useState("survey");
  const [surveyStats, setSurveyStats] = useState({ totalSurveys: 0, responses: 0 });
  const [productStats, setProductStats] = useState({ totalSurveys: 0, responses: 0 });
  const [surveyActivity, setSurveyActivity] = useState([]);
  const [productActivity, setProductActivity] = useState([]);
  const [surveyResponseCounts, setSurveyResponseCounts] = useState({});
  const [productResponseCounts, setProductResponseCounts] = useState({});
  const { darkMode } = useDarkMode();
  const { setSurveyData } = useSurveyContext();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchAllData = async () => {
      if (!user) return;
      try {
        // Survey Section
        const surveys = await fetchSurveyByUser(user.uid);
        const surveyCounts = {};
        let totalSurveyResponses = 0;

        for (const s of surveys) {
          const res = await fetchSurveyResponses(s.id);
          surveyCounts[s.id] = res.length;
          totalSurveyResponses += res.length;
        }

        setSurveyStats({ totalSurveys: surveys.length, responses: totalSurveyResponses });
        setSurveyResponseCounts(surveyCounts);
        setSurveyActivity(surveys.map(s => ({ ...s, date: new Date(s.createdAt).toLocaleDateString() })));

        // Product Review Section
        const reviews = await fetchProductReviews(user.uid);
        console.log(reviews)
        const reviewCounts = {};
        let totalProductResponses = 0;

        for (const r of reviews) {
          const res = await fetchProductReviewResponses(r.id);
          reviewCounts[r.id] = res.length;
          totalProductResponses += res.length;
        }

        setProductStats({ totalSurveys: reviews.length, responses: totalProductResponses });
        setProductResponseCounts(reviewCounts);
        setProductActivity(reviews.map(r => ({ ...r, date: new Date(r.createdAt).toLocaleDateString() })));
      } catch (err) {
        console.error("Error fetching all dashboard data:", err);
      }
    };

    fetchAllData();
  }, [user]);

  const stats = activeTab === "survey" ? surveyStats : productStats;
  const activity = activeTab === "survey" ? surveyActivity : productActivity;
  const responseCounts = activeTab === "survey" ? surveyResponseCounts : productResponseCounts;

  return (
    <PrivateRoute>
      <div className="min-h-screen p-8">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Response Dashboard</h1>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded shadow border text-sm font-medium transition ${activeTab === "survey" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setActiveTab("survey")}
            >
              Survey Responses
            </button>
            <button
              className={`px-4 py-2 rounded shadow border text-sm font-medium transition ${activeTab === "product" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setActiveTab("product")}
            >
              Product Reviews
            </button>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className={`p-4 rounded border border-black shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
            <h2 className="text-lg font-semibold text-gray-700">Total Created</h2>
            <p className="text-2xl font-bold text-gray-700">{stats.totalSurveys}</p>
          </div>
          <div className={`p-4 rounded border border-black shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
            <h2 className="text-lg font-semibold text-gray-700">Total Responses</h2>
            <p className="text-2xl font-bold text-gray-700">{stats.responses}</p>
          </div>
        </section>

        <section className={`p-6 rounded shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{activeTab === "survey" ? "Survey" : "Product Review"} Overview</h2>
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Responses</th>
                <th className="border-b p-2">Analyze</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((a) => (
                <tr key={a.id} className="hover:bg-gray-100">
                  <td className="border-b p-2">{a.title}</td>
                  <td className="border-b p-2">{a.date}</td>
                  <td className="border-b p-2">{responseCounts[a.id] || 0}</td>
                  <td className="border-b p-2">
                    <button
                      onClick={() => {
                        setSurveyData({ title: a.title });
                        const url = activeTab === "survey" ? `/survpages/analysis/admin?surveyId=${a.id}` : `/productResponses?surveyId=${a.id}`;
                        router.push(url);
                      }}
                      className="text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300"
                    >
                      Analyze
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </PrivateRoute>
  );
};

export default SurveyResponsesDashboard;
