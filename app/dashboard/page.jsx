"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "@/app/privateRoute";
import {
  fetchSurveyByUser,
  fetchSurveyResponses,
} from "@/app/Modules/utilsfirebase.js";
import { useUser } from "@/app/authcont";
import { useSurveyContext } from "@/app/survpages/survcont.jsx";
import { useDarkMode } from "../Modules/darkmodecont";
import { motion, AnimatePresence } from "framer-motion";

const Digitization = () => (
  <div className="p-6 border rounded shadow  space-y-4">
    <h3 className=" font-semibold p-2 flex justify-center">Digitize Records</h3>
    <p>
      Upload handwritten notes, printed documents, or research files and we'll
      convert them into editable, searchable formats.
    </p>
    <Link href="/digitize">
      <button className=" px-4 py-2 border border-gray-400 rounded shadow hover:bg-gray-100 ml-5">
        Upload Files
      </button>
    </Link>
  </div>
);

// Survey Table
const SurveyTable = ({
  recentActivity,
  surveyResponseCounts,
  handleActivityClick,
  router,
}) => (
  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <table className="w-full table-fixed border-collapse text-left">
      <thead>
        <tr className="bg-slate-50 text-sm text-slate-600">
          <th className="border-b border-slate-200 p-3">Survey</th>
          <th className="border-b border-slate-200 p-3">Date</th>
          <th className="border-b border-slate-200 p-3">Responses</th>
          <th className="border-b border-slate-200 p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {recentActivity.map(({ id, survey, date, expectedResponses }) => (
          <tr
            key={id}
            className="cursor-pointer transition-colors hover:bg-slate-50"
          >
            <td
              onClick={() => handleActivityClick(id, survey)}
              className="border-b border-slate-200 p-3 align-top"
            >
              <div className="max-w-[260px] rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 shadow-sm">
                <p
                  className="text-sm font-medium text-slate-800"
                  style={{
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {survey}
                </p>
              </div>
            </td>
            <td className="border-b border-slate-200 p-3 text-sm text-slate-600">
              {date}
            </td>
            <td className="border-b border-slate-200 p-3 text-sm text-slate-600">
              {surveyResponseCounts[id] || 0} / {expectedResponses || 0}
            </td>
            <td className="border-b border-slate-200 p-3">
              <button
                onClick={() =>
                  router.push(`/survpages/analysis/admin?surveyId=${id}`)
                }
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
              >
                Analyze
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Reusable NavLink Button
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className=" px-4  border border-gray-400 rounded shadow hover:bg-gray-100 ml-5 shrink-0 whitespace-nowrap py-0 "
  >
    {children}
  </Link>
);

const Dashboard = () => {
  const router = useRouter();
  const { user } = useUser();
  const { darkMode } = useDarkMode();
  const { setSurveyData } = useSurveyContext();

  const [surveyStats, setSurveyStats] = useState({
    totalSurveys: 0,
    activeSurveys: 0,
    responses: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [surveyResponseCounts, setSurveyResponseCounts] = useState({});
  const [activityIndex, setActivityIndex] = useState(0);

  const showSurvey = activityIndex % 2 === 0;

  const handleActivityClick = (surveyId, title) => {
    setSurveyData({ title });
    router.push(`/survpages/survey?surveyId=${surveyId}`);
  };

  const components = [
    {
      key: "survey",
      element: (
        <SurveyTable
          recentActivity={recentActivity}
          surveyResponseCounts={surveyResponseCounts}
          handleActivityClick={handleActivityClick}
          router={router}
        />
      ),
    },
    { key: "digitization", element: <Digitization /> },
  ];

  // Auto-rotate between components
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % components.length);
    }, 60000); // rotate every 60s
    return () => clearInterval(interval);
  }, [user]);

  // Fetch Dashboard Data
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;
      try {
        const userSurveys = await fetchSurveyByUser(user.uid, 5);
        const totalSurveys = userSurveys.length;
        const activeSurveys = userSurveys.filter(
          (s) => s.questions?.length > 0,
        ).length;

        let totalResponses = 0;
        const counts = {};

        for (const survey of userSurveys) {
          const responses = await fetchSurveyResponses(survey.id);
          counts[survey.id] = responses.length;
          totalResponses += responses.length;
        }

        const formattedActivity = userSurveys.map((s) => ({
          id: s.id,
          survey: s.title,
          expectedResponses: s.expectedResponses,
          date: new Date(s.createdAt).toLocaleDateString(),
        }));

        setSurveyStats({
          totalSurveys,
          activeSurveys,
          responses: totalResponses,
        });
        setSurveyResponseCounts(counts);
        setRecentActivity(formattedActivity);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, [user]);

  return (
    <PrivateRoute>
      <div className="min-h-screen p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl bg-white">Dashboard</h1>
          <nav className="flex flex-nowrap items-center gap-2  ">
            <NavLink href="/digitize">Digitize Records</NavLink>
            <NavLink href="/research">Request Research</NavLink>
            <NavLink href="/product">Product Testing</NavLink>
            <NavLink href="/survpages/params">Create Survey</NavLink>
            <NavLink href="/responses">Responses</NavLink>
            <NavLink href="/survpages/rankedHome">Ranked</NavLink>
          </nav>
        </header>

        {/* Activity Section */}
        <section className={`p-6 rounded shadow  border-2`}>
          <h2 className="text-2xl mb-4">Recent Activity</h2>
          <AnimatePresence mode="wait">
            {recentActivity.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center h-48 text-gray-500"
              >
                <p className="text-2xl font-light mb-4 text-center">
                  No survey responses yet.
                  <br />
                  Create and distribute surveys to start collecting data.
                </p>
                <Link href="/survpages/params">
                  <button className=" px-4 py-2 border border-gray-400 rounded shadow hover:bg-gray-100 ml-5">
                    Create Survey
                  </button>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={components[activityIndex].key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {components[activityIndex].element}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
