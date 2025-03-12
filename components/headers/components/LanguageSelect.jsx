"use client";

import React, { useState, useRef, useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageProvider";

export default function LanguageSelect() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Pull both the current language and the setter function from context
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang); // <--- set global language
    setIsDropdownOpen(false);
  };

  // Use short codes or however you wish to display the chosen language:
  const shortCodes = {
    en: "En",
    zh: "中文",
  };

  return (
    <li className="languageSelect">
      <a
        href="#"
        className="mn-has-sub opacity-1"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        {shortCodes[language] ?? "En"} <i className="mi-chevron-down" />
      </a>

      <ul
        className={`mn-sub to-left ${isDropdownOpen ? "open" : "closed"}`}
        ref={dropdownRef}
      >
        <li>
          <a href="#" onClick={() => handleLanguageSelect("en")}>
            English
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLanguageSelect("zh")}>
            中文
          </a>
        </li>
      </ul>
    </li>
  );
}
