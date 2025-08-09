import Link from "next/link";
import React from "react";
import { FaGripLines } from "react-icons/fa6";

function Header() {
  return (
    <nav className="flex justify-end items-end my-4">
      <div className="flex justify-center items-center gap-4">
                <Link href={""}>Home</Link>
                <Link href={""}>Services</Link>
        
        <div className="flex gap-2">
                <Link
                    href={""}
                    className="uppercase font-semibold text-gray-800 bg-title px-2"
                >
                    Hire Me
                </Link>
                <div 
                  className="size-6 flex justify-center items-center bg-light-gray/10">
                    <FaGripLines />
                </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;
