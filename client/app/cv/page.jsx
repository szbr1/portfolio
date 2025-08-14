import React from 'react';

export default function CV() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans p-2 lg:p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Shahzaib Mirza</h1>
          <p className="text-xl mt-1 text-gray-700">Web Developer (MERN & Next.js)</p>
          <div className="mt-2 text-gray-600">
            <p>Email: <a href="mailto:szb84840@gmail.com" className="text-blue-600">szb84840@gmail.com</a> | Phone: +92 32050216373</p>
            <p>Portfolio: <a href="https://szaibdev.vercel.app" className="text-blue-600">szaib.dev</a> | GitHub: <a href="https://github.com/szbr1" className="text-blue-600">szbr1</a></p>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">Professional Summary</h2>
          <p>Creative and detail-oriented web developer specializing in the MERN stack and Next.js. Experienced in building seamless, scalable web applications with elegant user interfaces and robust backends. Skilled in combining design and functionality to deliver secure, high-performance digital solutions.</p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <p><span className="font-semibold">Frontend:</span> HTML, CSS, Tailwind, JavaScript, React, Next.js, UI/UX Design</p>
            <p><span className="font-semibold">Backend:</span> Node.js, Express.js, MongoDB, REST APIs, Zustand</p>
            <p><span className="font-semibold">Other:</span> Axios, Responsive Design, Authentication & Authorization</p>
          </div>
        </section>

        {/* Projects / Experience */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">Projects / Experience</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><span className="font-semibold">Spotify Clone:</span> Developed a fully functional music streaming app with playlists, search, and user authentication.</li>
            <li><span className="font-semibold">E-commerce Website & Dashboard:</span> Built a full-stack e-commerce platform with Google, GitHub, and local authentication and an admin dashboard for managing products and orders.</li>
            <li><span className="font-semibold">Live Socket.IO Chat Application:</span> Implemented real-time chat functionality with online user tracking and direct messaging.</li>
            <li><span className="font-semibold">Global Theme System (Next.js):</span> Developed a global theme system with server-side authentication, scalable routing, middleware, and state management using Zustand.</li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">Languages</h2>
          <p>Urdu (Native), Hindi (Conversational), English (Upper-intermediate), Punjabi (Conversational)</p>
        </section>

        {/* Interests & Extra */}
        <section>
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">Interests & Extra</h2>
          <p>Exploring modern web technologies, building scalable full-stack applications, contributing to open-source projects, improving typing speed, and learning new frameworks and tools.</p>
        </section>

      </div>
    </div>
  );
}
