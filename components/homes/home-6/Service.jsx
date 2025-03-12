"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

const ServiceItem = ({ img, title, text }) => (
  <div className="col-md-6 d-flex align-items-stretch">
    <div className="services-5-item d-flex align-items-stretch text-center text-xl-start">
      <div className="d-xl-flex wow fadeInUpShort">
        <div className="services-5-image mb-lg-20 me-xl-4">
          <Image src={img} width={198} height={198} alt="Image Description" />
        </div>
        <div className="services-5-body d-flex align-items-center">
          <div className="w-100">
            <h4 className="services-5-title">{title}</h4>
            <p className="services-5-text mb-0">{text}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Service() {
  const { language } = useContext(LanguageContext);
  // Use the entire translations object for services.
  const trans = language === "zh" ? zh.services : en.services;

  return (
    <>
      <div className="row services-5-grid">
        {trans.content.map((service, index) => (
          <ServiceItem
            key={index}
            img={service.img}
            title={service.sectionTitle}
            text={service.text}
          />
        ))}
      </div>
    </>
  );
}
