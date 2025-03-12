"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

export default function Newsletter() {
  const { language } = useContext(LanguageContext);
  // Select the appropriate newsletter content
  const trans = language === "zh" ? zh.newsletter : en.newsletter;

  return (
    <div className="container">
      <div className="row">
        {/* Image Column */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-20">
              <Image
                src={trans.image.src}
                alt={trans.image.alt}
                width={1200}
                height={684}
                className="w-100"
              />
            </div>
          </div>
        </div>
        {/* End Image Column */}
        {/* Section Text Column */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10">
              {trans.title}
            </h2>
            <h3 className="section-title-small mb-30">{trans.subtitle}</h3>
            <p className="section-descr mb-30">{trans.description}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              id="mailchimp"
              className="form"
            >
              <div className="d-sm-flex justify-content-between mb-3">
                <label htmlFor="newsletter-email" className="visually-hidden">
                  {trans.placeholder}
                </label>
                <input
                  placeholder={trans.placeholder}
                  className="newsletter-field input-lg round"
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="newsletter-button btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                >
                  <span>{trans.subscribeButton}</span>
                </button>
              </div>
              <div className="form-tip">
                <i className="icon-info size-16" /> {trans.formTip}
              </div>
              <div
                id="subscribe-result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
              />
            </form>
          </div>
        </div>
        {/* End Section Text Column */}
      </div>
    </div>
  );
}
