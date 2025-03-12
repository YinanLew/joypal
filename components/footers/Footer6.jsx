"use client";
import React, { useContext } from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

export default function Footer6() {
  const { language } = useContext(LanguageContext);
  const trans = language === "zh" ? zh.footer : en.footer;

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <div className="row pb-120 pb-sm-80 pb-xs-50">
        {/* Left Column: Logo & Contact Info */}
        <div className="col-lg-3 text-gray mb-md-50">
          <div className="mb-30">
            <Image
              src="/assets/images/JoyPal_Logistics_Logo_White.jpg"
              alt="Your Company Logo"
              width={154}
              height={35}
            />
          </div>
          <p>{trans.paragraph}</p>
          <div className="clearlinks">
            <strong>{trans.phoneLabel}</strong>
            <a href="tel:+18376528800">+1 837 652 8800</a>
          </div>
          <div className="clearlinks">
            <strong>{trans.emailLabel}</strong>
            <a href="mailto:ibthemes21@gmail.com">ibthemes21@gmail.com</a>
          </div>
        </div>
        {/* End Left Column */}
        {/* Right Column: Three Widget Columns */}
        <div className="col-lg-7 offset-lg-2">
          <div className="row mt-n30">
            {/* Column 1: Company Navigation */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">{trans.widget.company}</h3>
              <ul className="fw-menu clearlist local-scroll">
                {trans.navCompany.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2: Social Media */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">{trans.widget.social}</h3>
              <ul className="fw-menu clearlist">
                <FooterSocials />
              </ul>
            </div>
            {/* Column 3: Legal & Press */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">{trans.widget.legal}</h3>
              <ul className="fw-menu clearlist">
                {trans.navLegal.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Text */}
      <div className="row text-gray">
        <div className="col-md-4 col-lg-3">
          <b>
            {trans.copyright} {new Date().getFullYear()}.
          </b>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
          <b>{trans.basedIn}</b>
          <div
            className="local-scroll float-end mt-n20 mt-sm-10"
            onClick={scrollToTop}
          >
            <a href="#top" className="link-to-top">
              <i className="mi-arrow-up size-24" />
              <span className="visually-hidden">{trans.backToTop}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
