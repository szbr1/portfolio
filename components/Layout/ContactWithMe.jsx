"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

function ContactWithMe() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "",
  });
  const [responseM, setResponseM] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = await axios.post("/api/request", formData);
    setResponseM(result.data?.msg || "");
    if (result.data) {
      setFormData({ username: "", email: "", description: "" });
    }
  };

  return (
    <section
      className="lg:px-20"
      id="contact-area"
      aria-labelledby="contact-heading"
    >
      <header className="flex justify-center items-center">
        <h2
          id="contact-heading"
          className="font-Nunito-Sans font-bold text-title text-3xl md:text-4xl lg:text-5xl"
        >
          Get Into Touch
        </h2>
      </header>

      <div className="flex flex-col lg:flex-row w-full justify-between">
        {/* FORM */}
        <div className="w-full flex flex-col gap-2 px-4 mt-16 lg:mt-32 lg:w-2/5">
          {responseM && (
            <div className="w-full py-6">
              <p className="bg-title py-4 text-center text-light-gray/80">
                {responseM}
              </p>
            </div>
          )}

          <label className="sr-only" htmlFor="username">
            Full Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Full Name"
            className="font-Nunito-Sans w-full lg:p-5 lg:text-xl outline-none p-2 tracking-[2] border-light-gray/20 border"
          />

          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="font-Nunito-Sans w-full lg:p-5 lg:text-lg outline-none p-2 tracking-[2] border-light-gray/20 border"
          />

          <label className="sr-only" htmlFor="description">
            Message
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="font-Nunito-Sans w-full lg:p-5 h-44 lg:h-56 outline-none p-2 border-light-gray/20 border"
          />

          <div className="relative mt-4">
            <button
              onClick={handleSubmit}
              className="h-10 w-32 absolute top-0 left-2 bg-title uppercase z-10"
            >
              Submit
            </button>
            <span
              aria-hidden="true"
              className="h-10 w-32 absolute top-2 left-0 bg-light-gray/20"
            />
          </div>
        </div>

        {/* CONTACT LINKS */}
        <address className="flex justify-between lg:flex-col items-center mt-28 px-4 lg:gap-4 not-italic">
          <Link
            href="https://wa.me/923205016373"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:flex justify-start lg:items-center lg:w-96 lg:gap-8"
            aria-label="WhatsApp contact"
          >
            <img
              src="/call_logo.svg"
              alt="Contact Shahzaib Mirza on WhatsApp"
              className="lg:size-16"
            />
            <span className="hidden font-poppins font-light lg:block">
              +92 320 5016373
            </span>
          </Link>

          <a
            href="mailto:szb84840@gmail.com"
            className="lg:flex justify-start lg:items-center lg:gap-8 lg:w-96"
          >
            <img
              src="/inbox.svg"
              alt="Email Shahzaib Mirza"
              className="lg:size-16"
            />
            <span className="hidden font-poppins font-light lg:block">
              szb84840@gmail.com
            </span>
          </a>

          <Link
            href="https://www.linkedin.com/in/szaib-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:flex justify-start lg:items-center lg:w-96 lg:gap-8"
            aria-label="LinkedIn profile"
          >
            <img
              src="/Frame.svg"
              alt="Shahzaib Mirza LinkedIn profile"
              className="lg:size-16"
            />
            <span className="hidden font-poppins font-light lg:block">
              linkedin.com/in/szaib-dev
            </span>
          </Link>
        </address>
      </div>
    </section>
  );
}

export default ContactWithMe;
