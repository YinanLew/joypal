"use client";

import React, { useContext } from "react";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";
import Link from "next/link";
import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

export default function Header6({ links }) {
  const { language } = useContext(LanguageContext);
  // Use the header translations from the selected language
  const trans = language === "zh" ? zh.header : en.header;

  // Build header links from translation data
  const headerLinks = [
    { href: "#home", text: trans.menu.home },
    { href: "#about", text: trans.menu.about },
    { href: "#services", text: trans.menu.services },
    { href: "#blog", text: trans.menu.blog },
    // { href: "#pricing", text: trans.menu.pricing },
    { href: "#contact", text: trans.menu.contact },
  ];

  return (
    <div className="main-nav-sub container">
      {/* Logo */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a href="#top" className="logo">
          <Image
            src="/assets/images/JoyPal_Logistics_Logo.svg"
            alt="Your Company Logo"
            width={154}
            height={35}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/JoyPal_Logistics_Logo.svg"
            alt="Your Company Logo"
            width={154}
            height={35}
            className="dark-mode-logo"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={headerLinks} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            {headerLinks[0].href.includes("/") ? (
              <Link
                href={headerLinks[headerLinks.length - 1].href}
                className="opacity-1 no-hover"
              >
                <span
                  className="btn btn-mod btn-w btn-border-c btn-border-white-light btn-small btn-round"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{trans.getInTouch}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {trans.getInTouch}
                    </span>
                  </span>
                </span>
              </Link>
            ) : (
              <a href="#contact" className="opacity-1 no-hover">
                <span
                  className="btn btn-mod btn-w btn-border-c btn-border-white-light btn-small btn-round"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{trans.getInTouch}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {trans.getInTouch}
                    </span>
                  </span>
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
