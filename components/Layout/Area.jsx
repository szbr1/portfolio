"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { Context } from "../ContextProvider";

function Area() {
  const { toggle, setToggle } = useContext(Context);

  return (
    <section
      className="mt-28 flex justify-center items-center flex-col"
      id="services-area"
      aria-labelledby="about-services-heading"
    >
      {/* Toggle Buttons */}
      <div className="flex">
        <button
          onClick={() => setToggle("about")}
          aria-pressed={toggle === "about"}
          className={`w-28 lg:w-60 lg:text-2xl text-sm font-semibold border border-light-gray/30 py-[6px] flex justify-center items-center ${
            toggle === "about" ? "bg-light-gray/20" : ""
          }`}
        >
          About Me
        </button>

        <button
          onClick={() => setToggle("services")}
          aria-pressed={toggle === "services"}
          className={`w-28 lg:w-60 lg:text-2xl text-sm font-semibold border border-light-gray/30 border-l-0 py-[6px] flex justify-center items-center ${
            toggle === "services" ? "bg-light-gray/20" : ""
          }`}
        >
          Services
        </button>
      </div>

      {/* ABOUT SECTION */}
      {toggle === "about" && (
        <article className="w-full flex justify-between gap-12 items-center">
          {/* Image */}
          <figure className="w-[138] relative lg:w-[26rem] lg:h-[40rem] h-[232]">
            <img
              src="/bottom.png"
              alt="Shahzaib Mirza MERN Stack Web Developer"
              className="absolute top-0 left-4 object-cover h-full w-full pb-5"
            />
          </figure>

          {/* Content */}
          <div className="w-[250px] lg:w-[34rem] flex flex-col gap-2 mt-14 lg:gap-8">
            <h2
              id="about-services-heading"
              className="font-poppins font-semibold text-[16px] lg:text-[29px]"
            >
              Driving Innovation in the Digital World with{" "}
              <span className="text-title">MERN Stack</span> Expertise
            </h2>

            <p className="font-poppins text-[12px] lg:pr-11 leading-[15px] md:leading-[24px] text-light-gray/70 md:text-[13px] lg:text-[16px]">
              I build scalable MERN stack applications with intuitive user
              interfaces and robust backends, turning ideas into secure,
              high-performance digital products.
            </p>

            {/* Contact Info */}
            <div className="hidden md:flex justify-between w-full items-center">
              <address className="not-italic flex flex-col gap-2">
                <p className="font-semibold font-poppins text-xl tracking-[2]">
                  Email Address
                </p>
                <a
                  href="mailto:szb84840@gmail.com"
                  className="font-poppins text-sm font-thin hover:text-title"
                >
                  szb84840@gmail.com
                </a>
              </address>

              {/* Social Links */}
              <nav
                className="flex flex-col gap-2"
                aria-label="Social profiles"
              >
                <p className="font-semibold font-poppins text-xl tracking-[2]">
                  Social Network
                </p>
                <div className="lg:px-5 font-nova text-xl uppercase flex justify-between items-center gap-4">
                  <Link
                    href="https://www.linkedin.com/in/szaib-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="hover:text-title"
                  >
                    LN
                  </Link>
                  <Link
                    href="https://www.instagram.com/szb_121"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                    className="hover:text-title"
                  >
                    IG
                  </Link>
                  <Link
                    href="https://github.com/szbr1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="hover:text-title"
                  >
                    GH
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </article>
      )}

      {/* SERVICES SECTION */}
      {toggle === "services" && (
        <section className="w-full flex items-center flex-col gap-8 lg:gap-12 text-[11px] lg:text-2xl mt-12 lg:mt-32">
          <h2 className="sr-only">Web Development Services</h2>

          <article className="w-full flex justify-between items-start gap-3">
            <span
              aria-hidden="true"
              className="size-3 lg:size-6 md:mr-2 mt-2 flex-none rounded-full bg-title"
            />
            <p className="font-mochy leading-[16px] tracking-[1px] lg:leading-[40px]">
              I build clean, fast, and responsive websites tailored to your
              brand using modern, scalable technologies.
            </p>
          </article>

          <article className="w-full flex justify-between items-start gap-3">
            <span
              aria-hidden="true"
              className="size-3 lg:size-6 md:mr-2 mt-2 flex-none rounded-full bg-title"
            />
            <p className="font-mochy leading-[16px] text-light-gray tracking-[1px] lg:leading-[40px]">
              I optimize existing websites by improving performance, fixing
              bugs, deploying with SSL, and applying SEO best practices.
            </p>
          </article>

          <article className="w-full flex justify-between items-start gap-3">
            <span
              aria-hidden="true"
              className="size-3 lg:size-6 md:mr-2 mt-2 flex-none rounded-full bg-title"
            />
            <p className="font-mochy leading-[16px] text-light-gray/70 tracking-[1px] lg:leading-[40px]">
              I design interfaces using real UX principles that guide users,
              feel intuitive, and convert visitors into customers.
            </p>
          </article>
        </section>
      )}
    </section>
  );
}

export default Area;
