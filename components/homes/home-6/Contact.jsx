"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { LanguageContext } from "@/app/context/LanguageProvider";
import en from "@/app/locales/en";
import zh from "@/app/locales/zh";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const trans = language === "zh" ? zh.contact : en.contact;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Form status state
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: trans.form.errorMessageIncomplete,
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: trans.form.successMessage,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // API returned an error
        throw new Error(data.message || trans.form.errorMessageGeneral);
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: error.message || trans.form.errorMessageGeneral,
      });
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">
            {trans.header.title}
          </h2>
          <h3 className="section-title mb-50 mb-sm-30">
            {trans.header.subtitle}
          </h3>
          {/* Contact Information */}
          <div className="row">
            <div className="col-md-11">
              {trans.items.map((item, index) => (
                <div
                  key={index}
                  className={`contact-item ${
                    index !== trans.items.length - 1 ? "mb-40 mb-sm-20" : ""
                  }`}
                >
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title visually-hidden">{item.title}</h4>
                  <div className="ci-text">{item.text}</div>
                  <div>
                    <a
                      href={item.link.url}
                      target={item.link.target}
                      rel={item.link.rel}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        {item.link.text}{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        {item.link.text}{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End Contact Information */}
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            {/* Decorative Image */}
            <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image
                  src="/assets/images/demo-fancy/contact-section-image.png"
                  width={225}
                  height={250}
                  alt=""
                />
              </div>
            </div>
            {/* End Decorative Image */}
            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">{trans.form.formTitle}</h4>
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="form contact-form"
                id="contact_form"
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">{trans.form.nameLabel}</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder={trans.form.namePlaceholder}
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    {/* End Name */}
                  </div>
                  <div className="col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">{trans.form.emailLabel}</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder={trans.form.emailPlaceholder}
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {/* End Email */}
                  </div>
                </div>
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">{trans.form.messageLabel}</label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-lg round form-control"
                    style={{ height: 130 }}
                    placeholder={trans.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3">
                      <button
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                        type="submit"
                        disabled={formStatus.isSubmitting}
                      >
                        <span>
                          {formStatus.isSubmitting
                            ? trans.form.submittingButton || "Sending..."
                            : trans.form.submitButton}
                        </span>
                      </button>
                    </div>
                    {/* End Send Button */}
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      {trans.form.formTip.split(" ").map((word, idx) => (
                        <React.Fragment key={idx}>{word} </React.Fragment>
                      ))}
                    </div>
                    {/* End Inform Tip */}
                  </div>
                </div>
                {/* Form Result */}
                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                  className={`mt-3 ${
                    formStatus.isSubmitted
                      ? formStatus.isError
                        ? "text-danger"
                        : "text-success"
                      : "d-none"
                  }`}
                >
                  {formStatus.message}
                </div>
                {/* End Form Result */}
              </form>
              {/* End Contact Form */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
