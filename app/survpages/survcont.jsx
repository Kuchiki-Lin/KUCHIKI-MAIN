"use client";

import { createContext, useContext, useState, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveyData, setSurveyData] = useState({
    title: "",
    targetAudience: "",
    expectedResponses: "",
    country: "",
    state: "",
    visibility: "",
    anonymous: null,
    objectives: {
      main: "",
      secondary: "",
      specific: [],
    },
    sections: [
      {
        id: 1,
        title: "",
        objective: "",
        note: "",
        showNote: false,
      },
    ],
  });

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const message =
        "Your form data will be lost and you will be redirected back to the params page.";
      e.preventDefault();
      e.returnValue = message; // For older browsers
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <SurveyContext.Provider value={{ surveyData, setSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurveyContext = () => useContext(SurveyContext);
