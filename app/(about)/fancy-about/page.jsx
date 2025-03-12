"use client";

import { useContext } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import About from "@/components/homes/home-6/About"; // Images composition remains unchanged
import Features from "@/components/homes/home-6/Features";
import Testimonials from "@/components/homes/home-6/Testimonials";
import TestimonialsDark from "@/components/homes/home-6/TestimonialsDark";
import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

// Import our shared translations and LanguageContext
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

export default function FancyAboutPage() {
  const { language } = useContext(LanguageContext);
  const t = language === "zh" ? zh.about : en.about;

  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>
          <main id="main">
            {/* Background Section */}
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="About" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Studio" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          ></b>
                        </span>
                      </span>
                    </h1>
                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Crafting immersive digital journeys for brands.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* About Text Section (switchable language) */}
            <section
              className={`page-section scrollSpysection ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="about"
            >
              <div className="container position-relative">
                <div className="row mb-xs-40">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h2
                      className="hs-title-10 mb-30 wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      {t.title}
                    </h2>
                    <h3
                      className="section-caption-fancy mb-30 wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      {t.heading}
                    </h3>
                    <h4
                      className="section-descr mb-40 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      {t.subtitle}
                    </h4>
                    {t.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="about-item mb-30 wow fadeInUp"
                        data-wow-delay={`${0.3 + idx * 0.2}s`}
                      >
                        <h5 className="mb-10">{item.sectionTitle}</h5>
                        <p className="section-descr">{item.text}</p>
                      </div>
                    ))}
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-delay="0.12s"
                    >
                      <Link
                        href={`/fancy-services${dark ? "-dark" : ""}`}
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
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Images Composition (existing About component) */}
                <About />
              </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Features />
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              {dark ? <TestimonialsDark /> : <Testimonials />}
            </section>
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>
      </div>
    </>
  );
}
