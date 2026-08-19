"use client";

import { useCallback, useEffect } from "react";
import { useDarkMode } from "./darkmodecont.js";
import { motion } from "framer-motion"; // Smooth animations
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/firebaseConfig";
import { useUser } from "@/app/authcont"

export function MainCreateFonts({
  selectedFont,
  setSelectedFont,
  selectedFontSize,
  setSelectedFontSize,
  selectedWeight,
  setSelectedWeight,
  isMenuVisible,
  setMenuVisibility,
}) {

  const { darkMode, setDarkMode } = useDarkMode();
  const { user } = useUser();

  const toggleMenu = useCallback(() => {
    setMenuVisibility((prev) => !prev);
  }, [setMenuVisibility]);

  const handleSignOut = async () => {
    await signOut(auth);

  };
useEffect(() => {
  document.body.style.fontFamily = selectedFont;
  document.body.style.fontSize = selectedFontSize;
  document.body.style.fontWeight = selectedWeight;
  document.body.classList.toggle("dark", darkMode);

  // Apply font to general text elements too
  document.querySelectorAll("textarea, input, label, h1, h2, h3, h4, h5, h6, p, span, div, button").forEach((el) => {
    el.style.fontFamily = selectedFont;
    el.style.fontSize = selectedFontSize;
    el.style.fontSize = selectedWeight;
  });
}, [selectedFont, selectedFontSize, selectedWeight, darkMode]);


  return (

    <div className="relative">
      {user ? (
        <div>

<motion.button
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  whileHover={{ rotate: 90 }}
  transition={{ duration: 0.3 }}
  onClick={toggleMenu}
  className="fixed right-6 z-50"
  style={{
    top: "19px",
    fontSize: "20px",
    background: "none",
    border: "none",
    boxShadow: "none",
    padding: 0,
    margin: 0,
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
  }}
>
  ⚙️
</motion.button>






          {/* 🟢 Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isMenuVisible ? "0%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed right-0 h-full mt-20   w-80 backdrop-blur-xl shadow-2xl  z-40 rounded-l-2xl ${isMenuVisible ? "block" : "hidden"
              }`}
            style={{ top: "40px" }}


          >
            <div className="p-4 mt-10">
              <h2 className=" font-semibold mb-6">⚡ Settings</h2>

              {/* ☀️ Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}

                className={`w-full py-2 rounded-lg text-lg transition ${darkMode
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-gray-700 text-white hover:bg-gray-800"
                  }`}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>

              {/* ✍ Font Selector */}
              <div className="mt-6">
                <label htmlFor="font-select" className="block text-sm mb-2">
                  Font:
                </label>
                <select
                  id="font-select"
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="Arial">Arial</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Cursive">Cursive</option>
                  <option value="Font Awesome 6 Free">Font Awesome</option>

                </select>
              </div>

              {/* 🔠 Font Size Selector */}
              <div className="mt-4">
                <label htmlFor="font-size-select" className="block text-sm mb-2">
                  Font Size:
                </label>
                <select
                  id="font-size-select"
                  value={selectedFontSize}
                  onChange={(e) => setSelectedFontSize(e.target.value)}
                  className="w-full p-2 border rounded "
                >
                  <option value="12px">12px</option>
                  <option value="14px">14px</option>
                  <option value="16px">16px</option>
                  <option value="18px">18px</option>
                  <option value="20px">20px</option>
                  <option value="24px">24px</option>
                  <option value="26px">26px</option>
                  <option value="28px">28px</option>
                </select>
              </div>

              {/* 🔠 Font Weight Selector */}
              <div className="mt-4">
                <label htmlFor="font-size-select" className="block text-sm mb-2">
                  Font Weight:
                </label>
                <select
                  id="font-weight-select"
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                  className="w-full p-2 border rounded "
                >
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                  <option value="600">600</option>
                  <option value="700">700</option>
                  <option value="800">800</option>
                  <option value="900">900</option>
                </select>
              </div>


            </div>
            <button
              onClick={handleSignOut}

              className={` border-2 text-gray-700 mb-10  ml-32  p-1 rounded shadow hover:bg-red-600  ${darkMode ? "hover:bg-red-600" : ""

                }`}
             
            >
              Sign Out
            </button>
          </motion.div>
        </div>
      ) : (
        <div></div>
      )}



    </div>
  );
}
