"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/app/firebaseConfig";

export default function ReviewResultsPage() {
  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openImages, setOpenImages] = useState({});
  const [showAnalysis, setShowAnalysis] = useState(false);

  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");

  useEffect(() => {
    if (!surveyId) return;

    const fetchSurveyAndResponses = async () => {
      setLoading(true);

      const surveyDoc = await getDoc(doc(db, "productQuestions", surveyId));
      if (!surveyDoc.exists()) {
        alert("Survey not found.");
        return;
      }

      const surveyData = surveyDoc.data();
      setSurvey({ id: surveyDoc.id, ...surveyData });

      const responseQuery = query(
        collection(db, "productResponses"),
        where("reviewId", "==", surveyId)
      );
      const snapshot = await getDocs(responseQuery);
      const allResponses = snapshot.docs.map((doc) => doc.data());

      setResponses(allResponses);
      setLoading(false);
    };

    fetchSurveyAndResponses();
  }, [surveyId]);

  if (loading)
    return (
      <div className="p-6 text-center text-gray-500">
        Loading survey responses...
      </div>
    );

  if (!survey)
    return (
      <div className="p-6 text-center text-red-500">Survey not found.</div>
    );

  const getAnonymousColor = (i) => {
    const pastelColors = [
      "bg-blue-50",
      "bg-green-50",
      "bg-yellow-50",
      "bg-purple-50",
      "bg-pink-50",
      "bg-teal-50",
      "bg-indigo-50",
      "bg-orange-50",
    ];
    return pastelColors[i % pastelColors.length];
  };

  // Helper: count how many times each image was selected
  const countImageSelections = (questionIndex) => {
    const counts = {};
    responses.forEach((r) => {
      const selected = r.selectedImages?.[questionIndex];
      if (selected) counts[selected] = (counts[selected] || 0) + 1;
    });
    return counts;
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Survey Results
      </h1>
      <p className="text-center text-gray-600 mb-8">{survey.title}</p>

      <div className="mb-6 text-sm text-gray-500 text-center">
        Total Responses: <strong>{responses.length}</strong> •{" "}
        {survey.isAnonymous ? "Anonymous" : "Named"} survey
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowAnalysis((prev) => !prev)}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {showAnalysis ? "Hide Analysis" : "Show Analysis"}
        </button>
      </div>

      {responses.map((resp, i) => {
        const cardBg = survey.isAnonymous ? getAnonymousColor(i) : "bg-white";

        return (
          <div
            key={i}
            className={`mb-8 p-6 border border-gray-200 shadow-sm rounded-lg ${cardBg}`}
          >
            {!survey.isAnonymous && (
              <p className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Reviewer:</span>{" "}
                {resp.reviewerName || "Unnamed"}
              </p>
            )}
            <p className="mb-4 text-sm text-gray-500">
              Submitted at: {new Date(resp.submittedAt).toLocaleString()}
            </p>

            <div className="space-y-4">
              {survey.items.map((item, index) => {
                const imageCounts = countImageSelections(index);

                return (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-800 mb-1">
                      Q{index + 1}: {item.question}
                    </p>

                    {item.imageUrls && item.imageUrls.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {item.imageUrls.map((url, idx) => {
                          const isSelected =
                            resp.selectedImages?.[index] === url;
                          const count = imageCounts[url] || 0;

                          return (
                            <div
                              key={idx}
                              className={`relative w-full h-[200px] rounded overflow-hidden border ${
                                isSelected
                                  ? "animate-soft-pulse border-4 border-blue-500"
                                  : "border-gray-200"
                              }`}
                            >
                              <img
                                src={url}
                                alt={`Q${index + 1} Image ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />

                              {isSelected && (
                                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center text-white font-semibold">
                                  Selected
                                </div>
                              )}

                              {showAnalysis && (
                                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-center text-xs py-1 text-gray-700">
                                  Selected {count}{" "}
                                  {count === 1 ? "time" : "times"}
                                  <div className="h-1 bg-blue-300 mt-1 rounded-full">
                                    <div
                                      className="h-1 bg-blue-600 rounded-full transition-all"
                                      style={{
                                        width: `${
                                          responses.length > 0
                                            ? (count / responses.length) * 100
                                            : 0
                                        }%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
