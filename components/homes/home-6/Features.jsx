"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

export default function Features() {
  const { language } = useContext(LanguageContext);
  const trans = language === "zh" ? zh.features : en.features;

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Image Column */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-20">
              <Image
                src={trans.image.src}
                alt={trans.image.alt}
                width={1200}
                height={658}
                className="w-100"
              />
            </div>
          </div>
        </div>
        {/* Section Text Column */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10">
              {trans.title}
            </h2>
            <h3 className="section-title-small mb-30">{trans.subtitle}</h3>
            <p className="section-descr mb-30">{trans.description}</p>
            {/* Features List */}
            <div className="row features-list">
              {trans.list.map((item, index) => (
                <div
                  key={index}
                  className="col-sm-6 col-lg-12 col-xl-6 d-flex mb-3"
                >
                  <div className="features-list-icon">
                    <i className="mi-check" />
                  </div>
                  <div className="features-list-text">{item}</div>
                </div>
              ))}
            </div>
            {/* End Features List */}
          </div>
        </div>
      </div>
    </div>
  );
}
