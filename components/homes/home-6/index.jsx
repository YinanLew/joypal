"use client";

import React, { useContext } from "react";
import About from "./About"; // images composition
import Service from "./Service";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import TestimonialsDark from "./TestimonialsDark";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Link from "next/link";
import Image from "next/image";

// Import shared translations and LanguageContext
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";
import { LanguageContext } from "@/app/context/LanguageProvider";

const onePage = false;
const dark = false;

export const metadata = {
  title:
    "Fancy About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function Home6({ onePage = false, dark = false }) {
  const { language } = useContext(LanguageContext);
  // Use the entire translations object
  const trans = language === "zh" ? zh : en;
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* ABOUT SECTION */}
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-xs-40">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              {/* Switched text using translations */}
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                {trans.about.title}
              </h2>
              <h3 className="section-title mb-30 mb-xs-20 wow fadeInUp">
                {trans.about.heading}
              </h3>
              <p
                className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                data-wow-delay="0.06s"
              >
                {trans.about.subtitle}
              </p>
              {trans.about.content.map((item, idx) => (
                <div
                  key={idx}
                  className="about-item mb-30 wow fadeInUp"
                  data-wow-delay={`${0.3 + idx * 0.2}s`}
                >
                  <h5 className="mb-10">{item.sectionTitle}</h5>
                  <p className="section-descr">{item.text}</p>
                </div>
              ))}
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.12s">
                {onePage ? (
                  <a
                    href="#services"
                    className="link-hover-anim"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      View our services{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      View our services{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                ) : (
                  <Link
                    href={`/fancy-about${dark ? "-dark" : ""}`}
                    className="link-hover-anim"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      Learn more about us{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      Learn more about us{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Images Composition remains unchanged */}
          <About />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* SERVICES SECTION */}
      <section
        className={`page-section scrollSpysection ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-sm-40">
            <div className="col-md-8 col-lg-6">
              {/* Use switched text from the translations */}
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                {trans.services.title}
              </h2>
              <h3 className="section-title mb-0 mb-sm-20">
                {trans.services.subtitle}
              </h3>
              {/* Render each bullet (service detail) */}
            </div>
            {/* <div className="col-md-4 col-lg-6 d-flex align-items-end">
              <div className="local-scroll text-md-end w-100">
                {onePage ? (
                  <a
                    href="#portfolio"
                    className="link-hover-anim"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      View works{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      View works{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                ) : (
                  <Link
                    href={`/fancy-services${dark ? "-dark" : ""}`}
                    className="link-hover-anim"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      ALl services{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      ALl services{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                )}
              </div>
            </div> */}
          </div>
          {/* Services Grid */}
          <Service />
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section
        className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Features />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* TESTIMONIALS SECTION */}
      <section
        className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        {dark ? <TestimonialsDark /> : <Testimonials />}
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* BLOG SECTION */}
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* NEWSLETTER SECTION */}
      <section
        className={`page-section ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
      >
        <Newsletter />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* CONTACT SECTION */}
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
