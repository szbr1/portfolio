import React from "react";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import Area from "@/components/Layout/Area";
import ProjectsArea from "@/components/Layout/ProjectsArea";
import ContactWithMe from "@/components/Layout/ContactWithMe";
import BacktoTop from "@/components/Buttons/backtoTop";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

/* =======================
   PAGE METADATA (HOME)
======================= */
export const metadata = {
  title: "Shahzaib Mirza | Software Engineer & Web Developer",
  description:
    "Shahzaib Mirza is a Software Engineer and Web Developer specializing in MERN stack and Next.js. View projects, skills, and contact details.",
  alternates: {
    canonical: "https://szaib.dev",
  },
  openGraph: {
    title: "Shahzaib Mirza | Software Engineer & Web Developer",
    description:
      "Official portfolio website of Shahzaib Mirza, Software Engineer and Web Developer.",
    url: "https://szaib.dev",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />

      <main className="relative px-[8px] md:mx-[80] lg:mx-[106]">
        {/* ===== SEO SUPPORT CONTENT (VISIBLE & CLEAN) ===== */}
        <section className="sr-only">
          <h1>Shahzaib Mirza – Software Engineer & Web Developer</h1>
          <p>
            Shahzaib Mirza is a Software Engineer and Web Developer specializing
            in MERN stack and Next.js. This website is the official portfolio of
            Shahzaib Mirza showcasing projects, skills, and professional
            experience.
          </p>
          <a href="/shahzaib-mirza">About Shahzaib Mirza</a>
        </section>

        {/* ===== MAIN CONTENT ===== */}
        <Hero />
        <Area />
        <ProjectsArea />

        {/* Quote Section */}
        <div className="flex justify-center items-center mb-20 lg:h-[calc(100vh-260px)]">
          <p className="relative font-poppins font-medium whitespace-pre-line lg:text-4xl md:leading-12">
            <FaQuoteLeft className="absolute top-0 leading-0" />{" "}
            &nbsp;&nbsp;&nbsp;
            I craft visually engaging designs that connect emotionally with
            users, and build backends that are powerful, user-friendly, and
            optimized for performance—delivering complete, seamless digital
            experiences.
            <FaQuoteRight className="absolute bottom-2 lg:bottom-4 right-2 lg:right-18" />
          </p>
        </div>

        <ContactWithMe />

        <div className="hidden lg:block h-30 w-full"></div>
      </main>
    </>
  );
}
