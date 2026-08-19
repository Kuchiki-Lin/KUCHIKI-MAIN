import { useState } from "react";
import toast from "react-hot-toast";

const AutoMarkButton = ({ autoMark, setAutoMark, darkMode }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    
    <div className="relative inline-block group">
  <button
    onClick={(e) => {
      e.preventDefault();
      setAutoMark(!autoMark);
      toast.success(`AutoMark ${!autoMark ? "Enabled" : "Disabled"}`);
    }}
    className={`px-4 py-2 mt-4 rounded transition duration-200 font-semibold
      ${darkMode
        ? autoMark
          ? "bg-blue-600 text-white hover:bg-blue-500"
          : "bg-gray-200 text-black hover:bg-gray-100"
        : autoMark
        ? "bg-blue-600 text-white hover:bg-blue-500"
        : "bg-gray-300 text-black hover:bg-gray-200"
      }`}
  >
    {autoMark ? " AutoMark: ON" : " AutoMark: OFF"}
  </button>

  {/* Tooltip */}
  <div
    className={`absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[22rem] px-4 py-3 text-sm rounded-xl shadow-2xl z-50 border
      opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
      ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-blue-300"}`}
  >
    <p className="font-semibold mb-1">AutoMark Enabled</p>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Automatically scores multiple-choice questions.</li>
      <li>Each question must have a correct answer.</li>
      <li>Double-click a choice to mark it as correct.</li>
      <li>Required incase you want  to make the survey ranked</li>
    </ul>
  </div>
</div>


  );
};

export default AutoMarkButton;
