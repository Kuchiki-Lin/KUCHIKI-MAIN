"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "@/app/Modules/darkmodecont";

export default function UrgencySlider({ formData, setFormData }) {
  const [urgencyValue, setUrgencyValue] = useState(1);
  const [details, setDetails] = useState("");
  const { darkMode } = useDarkMode();

  const urgencyMap = {
    1: "2–3 hours",
    2: "5–8 hours",
    3: "8–12 hours",
    4: "12–24 hours",
    5: "Flexible",
  };

  const colorMap = {
    1: darkMode ? "bg-red-600 shadow-red-500/40" : "bg-red-500 shadow-red-400/50",
    2: darkMode ? "bg-orange-500 shadow-orange-400/40" : "bg-orange-400 shadow-orange-300/50",
    3: darkMode ? "bg-yellow-400 shadow-yellow-300/40" : "bg-yellow-300 shadow-yellow-200/50",
    4: darkMode ? "bg-lime-400 shadow-lime-300/40" : "bg-lime-400 shadow-lime-200/50",
    5: darkMode ? "bg-green-500 shadow-green-400/40" : "bg-green-500 shadow-green-300/50",
  };

  useEffect(() => {
    const selectedUrgency = urgencyMap[urgencyValue];
    setFormData((prev) => ({
      ...prev,
      urgency: selectedUrgency,
      ...(selectedUrgency === "Flexible" && { flexibleDetails: details }),
    }));
  }, [urgencyValue, details, setFormData]);

  return (
    <div className="w-full mt-4">
      <label
        className={`block font-light mb-2 text-sm ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Urgency Level
      </label>

      <div className="relative w-full">
        {/* Glowing animated trail */}
        <motion.div
          className={`absolute top-1/2 transform -translate-y-1/2 h-3 w-full rounded-full opacity-50 blur-md ${colorMap[urgencyValue]}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: urgencyValue / 5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ originX: 0 }}
        />

        {/* Slider input */}
        <input
          type="range"
          min="1"
          max="5"
          value={urgencyValue}
          onChange={(e) => setUrgencyValue(Number(e.target.value))}
          className={`w-full h-3 appearance-none rounded-full cursor-pointer ${colorMap[urgencyValue]} transition duration-500 ease-out`}
        />

        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            height: 18px;
            width: 18px;
            margin-top: -2px;
            background: ${darkMode ? "#111" : "#fff"};
            border: 2px solid ${darkMode ? "#ccc" : "#000"};
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.15);
          }
          input[type="range"]::-moz-range-thumb {
            height: 18px;
            width: 18px;
            background: ${darkMode ? "#111" : "#fff"};
            border: 2px solid ${darkMode ? "#ccc" : "#000"};
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
          }
          input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.15);
          }
        `}</style>
      </div>

      <motion.div
        key={urgencyValue}
        className={`mt-2 text-sm font-medium text-center ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {urgencyMap[urgencyValue]}
      </motion.div>

      <AnimatePresence>
        {urgencyValue === 5 && (
          <motion.div
            className={`mt-4 p-4 rounded-lg border transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-gray-50 border-gray-300"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <label
              className={`block font-light text-sm mb-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Additional Details
            </label>
            <textarea
              rows="3"
              className={`w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-400 placeholder-gray-500"
                  : "bg-white border-gray-300 focus:ring-blue-500 text-gray-800"
              }`}
              placeholder="Specify time or other flexible requirements..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
