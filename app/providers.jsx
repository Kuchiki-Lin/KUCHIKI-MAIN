
"use client"

import { useState, useEffect } from "react";
import { DarkModeProvider } from "@/app/Modules/darkmodecont.js";
import { UserProvider } from "@/app/authcont";
import { SurveyProvider } from "@/app/survpages/survcont.jsx";
import { MainCreateFonts } from "@/app/Modules/fonts.js";
import { Toaster } from "react-hot-toast";
import { KLogo } from "./page";
import { Suspense } from "react";

export default function Providers({ children }) {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Font Awesome 6 Free");
  const [selectedFontSize, setSelectedFontSize] = useState("20px");
  const [selectedWeight, setSelectedWeight]= useState(500)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleDoubleClick = () => setMenuVisibility(false);
    window.addEventListener("dblclick", handleDoubleClick);
    return () => window.removeEventListener("dblclick", handleDoubleClick);
  }, []);

  return (
    <Suspense>
    <DarkModeProvider>
      <UserProvider>
        <SurveyProvider>
 <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '8px',
            padding: '12px 16px',
            minWidth: '300px',
            textAlign: 'center',
          },
        }}
      />

          <div className={`transition-all duration-300 ${isMenuVisible ? "mr-80" : "mr-0"}`}>
            <KLogo />
            <MainCreateFonts
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
              selectedFontSize={selectedFontSize}
              setSelectedFontSize={setSelectedFontSize}
              selectedWeight={selectedWeight}
              setSelectedWeight={setSelectedWeight}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              isMenuVisible={isMenuVisible}
              setMenuVisibility={setMenuVisibility}
            />
            {children}
          </div>
        </SurveyProvider>
      </UserProvider>
    </DarkModeProvider>
    </Suspense>
  );
}
