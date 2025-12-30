"use client";

import { projects, twoProjects } from "@/utils/projects";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function ProjectsArea() {
  const [pprojects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects);
  }, []);

  return (
    <section className="mt-25 mb-20" id="project-area">
      <header className="flex justify-between items-center">
        <h2 className="tracking-[2px] text-3xl">
          Projects by Shahzaib Mirza
        </h2>

        <Link
          href="https://wa.me/923205016373"
          target="_blank"
          className="h-8 flex justify-center items-center font-semibold w-24 uppercase text-white bg-title"
        >
          Hire Me
        </Link>
      </header>

      <div className="grid pr-8 md:pl-4 grid-cols-2 gap-20 mt-20">
        {pprojects.map((item) => (
          <article key={item._id} className="flex flex-col items-center">
            <div className="relative h-[108px] md:h-[20rem] lg:h-[25rem] w-full overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={`${item.title} full stack project by Shahzaib Mirza`}
                className="h-full w-full object-cover rounded-md"
              />
            </div>

            <h3 className="uppercase font-Nunito-Sans font-semibold text-title mt-2">
              Full-stack Project
            </h3>
            <p>{item.title}</p>
          </article>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={() => setProjects(twoProjects)}
          className={`${
            pprojects.length > 2 ? "hidden" : "flex"
          } border justify-center items-center gap-3 border-title hover:bg-title cursor-pointer rounded-md px-5 py-1 md:text-xl md:py-2 md:px-8`}
        >
          See more <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default ProjectsArea;
