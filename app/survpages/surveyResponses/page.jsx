"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "@/app/privateRoute";
import { fetchSurveyByUser, fetchSurveyResponses } from "@/app/Modules/utilsfirebase.js";
import { useUser } from "@/app/authcont";
import { useSurveyContext } from "@/app/survpages/survcont.jsx";
import { useDarkMode } from "@/app/Modules/darkmodecont";

const SurveyResponsesDashboard = () => {
  const [surveyStats, setSurveyStats] = useState({
    totalSurveys: 0,
    responses: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [surveyResponseCounts, setSurveyResponseCounts] = useState({});
  const { darkMode } = useDarkMode();
  const { setSurveyData } = useSurveyContext();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const userSurveys = await fetchSurveyByUser(user.uid);
        const totalSurveys = userSurveys.length;
        let responsesCount = 0;
        const responseCounts = {};

        for (const survey of userSurveys) {
          const responses = await fetchSurveyResponses(survey.id);
          responseCounts[survey.id] = responses.length;
          responsesCount += responses.length;
        }

        setSurveyStats({ totalSurveys, responses: responsesCount });
        setSurveyResponseCounts(responseCounts);

        const activity = userSurveys.map((survey) => ({
          id: survey.id,
          title: survey.title,
          expectedResponses: survey.expectedResponses,
          date: new Date(survey.createdAt).toLocaleDateString(),
        }));

        setRecentActivity(activity);
      } catch (error) {
        console.error("Error fetching response data:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <PrivateRoute>
      <div className="min-h-screen p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Survey Responses</h1>
        </header>

        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className={`p-4 rounded border border-black shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
            <h2 className="text-lg font-semibold text-gray-700">Total Surveys</h2>
            <p className="text-2xl font-bold text-gray-700">{surveyStats.totalSurveys}</p>
          </div>
          <div className={`p-4 rounded border border-black shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
            <h2 className="text-lg font-semibold text-gray-700">Total Responses</h2>
            <p className="text-2xl font-bold text-gray-700">{surveyStats.responses}</p>
          </div>
          <div className={`p-4 rounded border border-black shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
            <h2 className="text-lg font-semibold text-gray-700">Active Surveys</h2>
            <p className="text-2xl font-bold text-gray-700">{surveyStats.responses}</p>
          </div>
        </section>

        <section className={`p-6 rounded shadow ${darkMode ? "bg-dashdarkmode" : "bg-white"}`}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Survey Response Overview</h2>
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr>
                <th className="border-b p-2">Survey</th>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Responses</th>
                <th className="border-b p-2">Analyze</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-100">
                  <td className="border-b p-2">{activity.title}</td>
                  <td className="border-b p-2">{activity.date}</td>
                  <td className="border-b p-2">
                    {surveyResponseCounts[activity.id] || 0} / {activity.expectedResponses || 0}
                  </td>
                  <td className="border-b p-2">
                    <button
                      onClick={() => {
                        setSurveyData({ title: activity.title });
                        router.push(`/survpages/analysis/admin?surveyId=${activity.id}`);
                      }}
                      className="text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-400"
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
