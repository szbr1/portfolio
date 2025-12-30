import React from "react";

/* =======================
   PAGE METADATA (SEO)
======================= */
export const metadata = {
  title: "Shahzaib Mirza | Software Engineer & Web Developer",
  description:
    "About Shahzaib Mirza, a Software Engineer and Web Developer specializing in MERN stack and Next.js. View skills, projects, and experience.",
  alternates: {
    canonical: "https://szaib.dev/shahzaib-mirza",
  },
  openGraph: {
    title: "Shahzaib Mirza | Software Engineer & Web Developer",
    description:
      "Official profile of Shahzaib Mirza, Software Engineer and MERN & Next.js specialist.",
    url: "https://szaib.dev/shahzaib-mirza",
    type: "profile",
  },
};

export default function Page() {
  return (
    <>
      <main className="bg-gray-50 text-gray-900 font-sans p-2 lg:p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">

          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">Shahzaib Mirza</h1>
            <p className="text-xl mt-1 text-gray-700">
              Software Engineer & Web Developer (MERN & Next.js)
            </p>

            <div className="mt-3 text-gray-600 space-y-1">
              <p>
                Email:{" "}
                <a
                  href="mailto:szb84840@gmail.com"
                  className="text-blue-600 underline"
                >
                  szb84840@gmail.com
                </a>
              </p>
              <p>
                Portfolio:{" "}
                <a
                  href="https://szaib.dev"
                  className="text-blue-600 underline"
                >
                  szaib.dev
                </a>{" "}
                | GitHub:{" "}
                <a
                  href="https://github.com/szbr1"
                  className="text-blue-600 underline"
                >
                  szbr1
                </a>
              </p>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p>
              Shahzaib Mirza is a creative and detail-oriented software engineer
              and web developer specializing in the MERN stack and Next.js.
              Experienced in building scalable, SEO-friendly, and high-performance
              web applications with modern user interfaces and secure backends.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p>
                <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript,
                React, Next.js, UI/UX Design
              </p>
              <p>
                <strong>Backend:</strong> Node.js, Express.js, MongoDB, REST APIs,
                Zustand
              </p>
              <p>
                <strong>Other:</strong> Axios, Responsive Design,
                Authentication & Authorization
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
              Projects & Experience
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Spotify Clone:</strong> Built a music streaming application
                with playlists, search functionality, and user authentication.
              </li>
              <li>
                <strong>E-commerce Platform & Admin Dashboard:</strong> Developed
                a full-stack e-commerce solution with OAuth and role-based access.
              </li>
              <li>
                <strong>Real-time Chat Application:</strong> Implemented Socket.IO
                based messaging with online user tracking.
              </li>
              <li>
                <strong>Global Theme System:</strong> Created a scalable Next.js
                theme and authentication system using Zustand and middleware.
              </li>
            </ul>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
              Languages
            </h2>
            <p>
              Urdu (Native), Hindi (Conversational), English (Upper-Intermediate),
              Punjabi (Conversational)
            </p>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
              Interests
            </h2>
            <p>
              Exploring modern web technologies, building scalable full-stack
              applications, contributing to open-source projects, and continuously
              learning new frameworks and tools.
            </p>
          </section>

        </div>
      </main>

      {/* =======================
          PERSON STRUCTURED DATA
      ======================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shahzaib Mirza",
            url: "https://szaib.dev/shahzaib-mirza",
            jobTitle: "Software Engineer",
            knowsAbout: [
              "Next.js",
              "React",
              "MERN Stack",
              "Full Stack Development",
              "SEO-friendly Web Applications"
            ],
            sameAs: [
              "https://www.linkedin.com/in/szaib-dev",
              "https://github.com/szbr1",
              "https://www.upwork.com/freelancers/~01f111c45d418698af"
            ]
          }),
        }}
      />
    </>
  );
}
