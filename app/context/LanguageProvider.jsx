"use client";

import React, { createContext, useState, useEffect } from "react";

// 1) Create the Context object
export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

// 2) The Provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // default language

  // Load stored language on mount (client-side)
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  // Whenever language changes, store to localStorage
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
