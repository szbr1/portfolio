"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaGripLines } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Context } from "../ContextProvider";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setToggle } = useContext(Context);

  return (
    <header>
      <nav
        className="flex justify-end items-end relative lg:px-12 lg:py-3"
        aria-label="Main navigation"
      >
        <div className="z-20 flex justify-center items-center lg:text-xl lg:gap-76 gap-4 px-2 my-4">
          {/* Primary Links */}
          <div className="gap-4 lg:gap-10 flex">
            <Link href="/" aria-current="page" className="relative">
              Home
            </Link>

            <Link
              href="#services-area"
              onClick={() => setToggle("services")}
              className="relative"
            >
              Services
            </Link>
          </div>

          {/* Actions */}
          <div className="flex gap-2 lg:gap-6">
            <Link
              href="https://wa.me/923205016373"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-semibold text-white flex justify-center items-center bg-title lg:h-10 lg:px-5 px-3"
            >
              Hire Me
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              className="size-6 lg:size-10 flex justify-center items-center bg-light-gray/20 cursor-pointer"
            >
              <FaGripLines className="lg:size-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="h-64 lg:h-80 w-full z-40 bg-white p-3 lg:p-8 absolute top-0 left-0 text-black">
            <button
              className="w-full flex justify-end"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <RxCross1 className="size-8 md:size-11 hover:text-title cursor-pointer" />
            </button>

            <div className="text-2xl md:text-4xl lg:px-20 lg:text-5xl uppercase flex flex-col gap-2 pl-5 tracking-[1px]">
              <Link
                href="#services-area"
                onClick={() => {
                  setToggle("services");
                  setMenuOpen(false);
                }}
              >
                Services
              </Link>

              <Link
                href="#project-area"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="#contact-area"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
