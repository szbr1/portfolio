"use client"

import React, { useState } from 'react'

function Area() {

    const [toggle , setToggle] = useState("about");
    
  return (
    <div className='mt-28 flex justify-center items-center flex-col gap-8'>
         <div className='flex'>
            <button onClick={()=> setToggle("about")} className={`w-28 text-sm font-semibold border border-light-gray/30 py-[6px] flex justify-center items-center ${toggle === "about" ? "bg-light-gray/20" :""}`}>About Me</button>
            <button onClick={()=> setToggle("service")} className={` ${toggle === "service" ? "bg-light-gray/20" :""} w-28 text-sm font-semibold border border-light-gray/30 border-l-0 py-[6px] flex justify-center items-center`}>Services</button>
         </div>
     {
        toggle === "about" ?

        <div className='w-full flex justify-between items-center'>
            <div className='w-[155] h-[232]'>
                <img 
                src="/bottom.png" 
                alt="" 
                className='object-cover h-full w-full'
                />
            </div>

            <div className='w-[185px] flex flex-col gap-2 mt-14'>
                <h3 className='font-semibold font-poppins text-[14px]'>Driving Innovation in the Digital World with <span className='text-title'>MERN Stack</span> Expertise</h3>
                <h5 className='font-poppins text-[8px] text-light-gray/70'>I build seamless, scalable web applications with the MERN stack—crafting elegant user interfaces and robust backends that turn ideas into impactful digital products. From dynamic e-commerce sites to responsive platforms, I combine design and functionality to deliver secure, high-performance solutions with creativity and precision.</h5>
            </div>
        </div>
    : null}
        {toggle === "service" ?
        <div className='w-full flex  items-center flex-col gap-8 text-[11px] mt-12'>

             <div className='w-full flex justify-between items-start gap-3'>
                 <div className='size-3 mt-2 flex-none rounded-full bg-title'></div>    
                 {/* / service 1 */}
                 <h3 className='font-mochy leading-[16px] tracking-[1] '>Whether you're a startup or a growing business, I build clean, fast, and responsive websites tailored to your brand — built from scratch using modern tech that works on every device.</h3>

             </div>

             <div className='w-full flex justify-between items-start gap-3 '>
                 <div className='size-3 mt-2 flex-none rounded-full bg-title'></div>    
                 {/* / service 2 */}
                 <h3 className='font-mochy leading-[16px] tracking-[1]'>Already have a site? I can speed it up, clean the code, fix bugs, or deploy it to the web with a custom domain, SSL, and all SEO basics done right.</h3>

             </div>

             <div className='w-full flex justify-between items-start gap-3'>
                 <div className='size-3 mt-2 flex-none rounded-full bg-title'></div>    
                 {/* / service 3 */}
                 <h3 className='font-mochy leading-[16px] tracking-[1]'>I don’t just design to make things “look good” — I design with purpose. Using real UX principles, I craft interfaces that guide users, feel intuitive, and turn visitors into customers.</h3>

             </div>
        </div>
: null}
    </div>
  )
}

export default Area