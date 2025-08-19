"use client"
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaGripLines } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Context } from "../ContextProvider";

function Header() {
  const [Switch, setSwitch] = useState(false)
  const {toggle ,setToggle} = useContext(Context)
  return (
    <nav className="flex justify-end items-end relative lg:px-12 lg:py-3">
      <div className="z-20 flex justify-center items-center lg:text-xl lg:gap-76 gap-4 px-2 my-4">
        <div className="gap-4 lg:gap-10 flex">

                <Link className="relative" href={""}>
                    <div className="absolute h-[2px] w-8 bg-title -bottom-1 right-[50%] translate-x-[50%]"></div>
                Home</Link>
                <Link onClick={()=> setToggle("services")} className="relative" href={"#services-area"}>
                    <div className="absolute h-[2px] w-8  -bottom-1 right-[50%] translate-x-[50%]"></div>
                Services</Link>
        </div>
        
        <div className="flex gap-2 lg:gap-6">
                <Link
                    href={"https://wa.me/923205016373"}
                    className="uppercase font-semibold text-white flex justify-center items-center bg-title lg:h-10 lg:px-5 px-3"
                >
                    Hire Me
                </Link>
                <div
                  onClick={()=> setSwitch(!Switch)} 
                  className="size-6 lg:size-10 flex justify-center items-center bg-light-gray/20 cursor-pointer">
                    <FaGripLines className="lg:size-6" />
                </div>

        </div>
      </div>
    {Switch? 
      <div className="h-64 lg:h-80 w-full z-40 bg-white p-3 lg:p-8 absolute top-0 left-0 backdrop:blur-md text-black">
        <button className="w-full flex justify-end items-start">
           <RxCross1  onClick={()=> setSwitch(!Switch)} className="size-8 md:size-11  lg:size-15 hover:text-title cursor-pointer text-black"/>
        </button>

        <div className="text-2xl md:text-4xl lg:px-20 lg:text-5xl md:gap-4 lg:gap-5 uppercase flex flex-col gap-2 pl-5  tracking-[1px]">
            <Link href={"#services-area"} onClick={()=> setSwitch(!Switch)} className=" inline-block"><span className="hover:text-title cursor-pointer">Services</span></Link>
            <Link href={"#project-area"} onClick={()=> setSwitch(!Switch)} className=" inline-block"><span className="hover:text-title cursor-pointer">Projects</span></Link>
            <Link href={"#contact-area"} onClick={()=> setSwitch(!Switch)} className=" inline-block"><span className="hover:text-title cursor-pointer">Contact Us </span></Link>
        </div>
      </div>
      : null}
    </nav>
  );
}

export default Header;
