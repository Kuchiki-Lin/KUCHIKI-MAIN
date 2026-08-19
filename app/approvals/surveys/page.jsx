"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import toast from "react-hot-toast";

const ADMIN_PASSWORD = "Aokwakau"

export default function SurveyApprovalDashboard(){
  const [surveys, setSurveys] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const fetchSurveys = async () => {
    const snapshot = await getDocs(collection(db, "surveys"));
    const list = await Promise.all(
      snapshot.docs.map(async (docSnap)=>{
        const data = docSnap.data();
        let username = "Unknown";
        let email = "Unknown";

        try {
          const userDoc = await getDoc(doc(db, "users", data.userId));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            username = userData.displayName || "N/A";
            email = userData.email || "N/A";
          }
        } catch (err) {
          console.error("Error Fetching User-Information", err);
        }

        return {
          id: docSnap.id,
          ...data,
          username,
          email,
        };
      })
    );
    setSurveys(list);

     const unapproved = list.filter(s => !s.approved);
     console.log(unapproved);
  if (unapproved.length > 0) {
    try {
      await fetch("/api/notify-unapproved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ surveys: unapproved }),
      });
      console.log("Email notification sent for unapproved surveys");
    } catch (error) {
      console.error("Failed to send email notification:", error);
    }
  }
  }

  const approveSurvey = async (id) => {
    const docRef = doc(db, "surveys", id);

    await updateDoc(docRef, { approved: true });
    toast.success("Survey Approved Successfully");
    fetchSurveys();
  };

  useEffect(() => {
    if (authorized) {
      fetchSurveys();
    }
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-lg font-semibold mb-4 text-center">Enter Admin Password</h2>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Password"
          />
          <button
            onClick={() => {
              if (passwordInput === ADMIN_PASSWORD) {
                setAuthorized(true);
              } else {
                toast.error("Incorrect password");
              }
            }}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Admin Survey Dashboard</h1>

      {surveys.length === 0 ? (
        <p className="text-gray-500">No surveys found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {surveys.map((survey) => (
            <div key={survey.id} className="p-6 rounded-lg shadow bg-white space-y-2">
              <h2 className="text-lg font-bold text-gray-800">{survey.title}</h2>
              <p className="text-sm text-gray-500">
                Created: {new Date(survey.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-700">
                By: <strong className="text-purple-600">{survey.username}</strong>{" "}
                <span className="text-red-900">({survey.email})</span>
              </p>
              <p
                className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                  survey.approved
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {survey.approved ? "Approved" : "Pending Approval"}
              </p>
              {!survey.approved && (
                <button
                  onClick={() => approveSurvey(survey.id)}
                  className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Approve Survey
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
