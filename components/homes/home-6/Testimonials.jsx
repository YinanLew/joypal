"use client";

import React, { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Remove external data imports
// import { brands } from "@/data/brands";
// import { numberItems2 } from "@/data/facts";
// import { testimonials5 } from "@/data/testimonials";

import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

export default function Testimonials() {
  const isotopContainer = useRef();
  const { language } = useContext(LanguageContext);
  const trans = language === "zh" ? zh.testimonials : en.testimonials;

  // Initialize Isotope for masonry layout
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-md-6",
      layoutMode: "masonry",
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.layout();
    });
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Section Text */}
        <div className="col-lg-5 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10">
              {trans.title}
            </h2>
            <h3 className="section-title-small mb-30">{trans.subtitle}</h3>
            <p className="section-descr mb-30">{trans.description}</p>
            {/* Numbers / Facts */}
            <div className="row">
              {trans.facts.map((fact, index) => (
                <div
                  key={index}
                  className={`col-md-6 number-1-item ${
                    !index ? "mb-sm-10" : ""
                  }`}
                >
                  <div className="number-1-title">{fact.title}</div>
                  <div className="number-1-descr">{fact.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Section Text */}
        {/* Testimonials Grid */}
        <div className="col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center">
          <div className="w-100 position-relative">
            {/* Decoration Dots */}
            <div
              className="decoration-7 d-none d-sm-block"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width="182"
                height="171"
                src="/assets/images/demo-fancy/decoration-7.svg"
                alt=""
              />
            </div>
            {/* Testimonials Items (Masonry Grid) */}
            <div ref={isotopContainer} className="row masonry mb-n30">
              {trans.list.map((testimonial, index) => (
                <div
                  key={index}
                  className={`col-md-6 mb-30 ${!index ? "mt-50 mt-sm-0" : ""}`}
                >
                  <div className="testimonials-4-item">
                    <div className="testimonials-4-icon">
                      <i className="icon-quotation-mark" />
                    </div>
                    <blockquote className="testimonials-4-text">
                      <p className="mb-0">{testimonial.text}</p>
                      <footer className="testimonials-4-author mt-30 clearfix">
                        <div className="testimonials-4-author-img float-start">
                          <Image
                            width={44}
                            height={44}
                            src={testimonial.imgSrc}
                            alt={testimonial.altText}
                          />
                        </div>
                        <div className="overflow-hidden">
                          {testimonial.author}
                          <div className="small">{testimonial.position}</div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Logotypes */}
      <div className="page-section pb-0 text-center">
        <h3 className="section-title-tiny">
          {language === "zh"
            ? "受领先企业信赖"
            : "Trusted by Leading Companies"}
        </h3>
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          watchSlidesProgress
          modules={[Autoplay]}
          breakpoints={{
            1199: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
          autoplay
          resizeObserver
          className="small-item-carousel black owl-carousel mb-0 owl-theme overflow-hidden position-static"
          style={{ opacity: 1, display: "block" }}
        >
          {trans.brands.map((brand, i) => (
            <SwiperSlide className="owl-item" key={i}>
              <div className="logo-item">
                <Image src={brand} width={215} height={75} alt="Company Name" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
