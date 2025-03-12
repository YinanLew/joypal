"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";

// 1) Import translations & context
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";
import { LanguageContext } from "@/app/context/LanguageProvider";

export default function Hero1() {
  const [isOpen, setOpen] = useState(false);

  // 2) Get the current language from context
  const { language } = useContext(LanguageContext);

  // 3) Pick which translation set we use
  const t = language === "zh" ? zh.hero : en.hero;

  return (
    <>
      <div className="container position-relative min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Left Column (Text) */}
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-30">
              <div className="w-100 text-center text-lg-start">
                {/* H2 / Small Heading */}
                <h2
                  className="section-caption-fancy mb-30 mb-xs-20 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  {t.heading}
                </h2>

                {/* Large H1 Title with highlight */}
                <h1 className="hs-title-10 mb-30">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    {t.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="mark-decoration-3-wrap color-secondary-1-white">
                      {t.title.split(" ").slice(-1)} {/* last word highlight */}
                      <b
                        className="mark-decoration-3 wow scalexIn"
                        data-wow-delay="1.1s"
                      />
                    </span>
                  </span>
                </h1>

                {/* Short Paragraph */}
                <p
                  className="section-descr mb-40 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  {t.subtitle}
                </p>

                {/* Buttons */}
                <div
                  className="local-scroll wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                >
                  <a
                    href="#about"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim me-1 mb-xs-10"
                  >
                    <span>{t.ctaButton}</span>
                  </a>{" "}
                  <a
                    onClick={() => setOpen(true)}
                    className="btn btn-mod btn-border-c btn-white-c btn-large btn-round mb-xs-10 lightbox mfp-iframe"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        <i
                          className="icon-play size-13 me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        {t.howWeWork}
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        <i
                          className="icon-play size-13 me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        {t.howWeWork}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column (Image) */}
            <div className="col-lg-6 col-xl-7 d-flex align-items-center">
              <div className="w-100 wow fadeInLeft" data-wow-delay="0.7s">
                <div className="position-relative mt-40 mb-20">
                  <Image
                    src="/assets/images/demo-fancy/hs-image.png"
                    width={1200}
                    height={678}
                    alt="Image Description"
                    className="w-100"
                  />
                  {/* Decorative Waves */}
                  <div
                    className="decoration-5 d-none d-sm-block"
                    data-rellax-y=""
                    data-rellax-speed="-0.7"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      src="/assets/images/demo-fancy/decoration-1.svg"
                      width={159}
                      height={74}
                      alt=""
                    />
                  </div>
                  {/* End Decorative Waves */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container text-center text-lg-start">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              {/* For Chinese, you might say 往下滚动 */}
              <div className="scroll-down-1-text">
                {language === "zh" ? "往下滚动" : "Scroll Down"}
              </div>
            </a>
          </div>
        </div>

        {/* Modal Video */}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
