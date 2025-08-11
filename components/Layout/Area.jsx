"use client"

import Link from 'next/link';
import React, { useState } from 'react'

function Area() {

    const [toggle , setToggle] = useState("about");
    
  return (
    <div className='mt-28 flex justify-center items-center flex-col'>
         <div className='flex'>
            <button onClick={()=> setToggle("about")} className={`w-28 lg:w-60 lg:text-2xl text-sm font-semibold border border-light-gray/30 py-[6px] flex justify-center items-center ${toggle === "about" ? "bg-light-gray/20" :""}`}>About Me</button>
            <button onClick={()=> setToggle("service")} className={` ${toggle === "service" ? "bg-light-gray/20" :""} w-28 lg:w-60 lg:text-2xl text-sm font-semibold border border-light-gray/30 border-l-0 py-[6px] flex justify-center items-center`}>Services</button>
         </div>
     {
        toggle === "about" ?

        <div className='w-full flex justify-between gap-12 items-center '>
            <div className='w-[155]  lg:w-[26rem] lg:h-[40rem] h-[232]'>
                <img 
                src="/bottom.png" 
                alt="" 
                className='object-cover h-full w-full pb-5'
                />
            </div>

            <div className='w-[185px] lg:w-[34rem] flex flex-col gap-2 mt-14 lg:gap-8'>
                <h3 className=' font-poppins text-[14px] lg:text-[29px]'>Driving Innovation in the Digital World with <span className='text-title'>MERN Stack</span> Expertise</h3>
                <h5 className='  font-poppins text-[8px] lg:pr-11  text-light-gray/70 md:text-[13px] lg:text-[16px]'>I build seamless, scalable web applications with the MERN stack—crafting elegant user interfaces and robust backends that turn ideas into impactful digital products. From dynamic e-commerce sites to responsive platforms, I combine design and functionality to deliver secure, high-performance solutions with creativity and precision.</h5>

                <div className='hidden md:flex justify-between w-full items-center'>
                    <div className='flex flex-col gap-2 '>
                            <p className='font-semibold font-poppins text-xl tracking-[2]'>Email Address</p>
                            <p className='font-poppins text-sm font-thin'>szb8480@gmail.com</p>
                    </div>

                    <div className=' flex-col gap-2 flex '>
                            <p className='font-semibold font-poppins text-xl tracking-[2]'>Social Network</p>
                             <div className=' lg:px-5 font-nova text-xl uppercase flex justify-between items-center'>
                                <Link href={""}>LN</Link>
                                <Link href={""}>IG</Link>
                                <Link href={""}>GH</Link>
                             </div>
                    </div>
                </div>
            </div>
        </div>
    : null}
        {toggle === "service" ?
        <div className='w-full flex  items-center flex-col gap-8 lg:gap-12 text-[11px] lg:text-2xl mt-12 lg:mt-32'>

             <div className='w-full flex justify-between items-start gap-3'>
                 <div className='size-3 lg:size-6 md:mr-2 mt-2 flex-none rounded-full bg-title'></div>    
                 {/* / service 1 */}
                 <h3 className='lg:tracking-[3px] font-mochy leading-[16px] tracking-[1] lg:leading-[40px] md:leading-[30px] '>Whether you're a startup or a growing business, I build clean, fast, and responsive websites tailored to your brand — built from scratch using modern tech that works on every device.</h3>

             </div>

             <div className='w-full  flex justify-between items-start gap-3 '>
                 <div className='size-3 lg:size-6 md:mr-2 mt-2 flex-none rounded-full bg-title'></div>    
                 {/* / service 2 */}
                 <h3 className='font-mochy lg:tracking-[3px] leading-[16px] text-light-gray tracking-[1] lg:leading-[40px]'>Already have a site? I can speed it up, clean the code, fix bugs, or deploy it to the web with a custom domain, SSL, and all SEO basics done right.</h3>

             </div>

             <div className='w-full flex justify-between items-start gap-3'>
                 <div className='size-3 lg:size-6 md:mr-2 mt-2 flex-none rounded-full bg-title'></div>    
                 {/* / service 3 */}
                 <h3 className='font-mochy lg:tracking-[3px] leading-[16px] text-light-gray/70 tracking-[1] lg:leading-[40px]'>I don’t just design to make things “look good” — I design with purpose. Using real UX principles, I craft interfaces that guide users, feel intuitive, and turn visitors into customers.</h3>

             </div>
        </div>
: null}
    </div>
  )
}

export default Area