
"use client"
import { projects, twoProjects } from '@/utils/projects';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";


function ProjectsArea() {
  const [pprojects , setProjects] = useState([]);

  useEffect(()=>{
    setProjects(projects)
  },[projects])

  return (
    <div className='mt-25 mb-20' >
      <div className='flex justify-between items-center'>

        <div className='flex  items-center  gap-3'>
            <div className='h-20 w-8 overflow-hidden flex items-center  '>
                <div className='bg-white rounded-full size-10 lg:size-12 -ml-7 flex-none '></div>
            </div>

            <h3 className=' md:hidden uppercase font-poppins font-bold'>
             My projects
            </h3>
            <h3 className=' hidden md:block tracking-[2px] text-3xl '>
            Let’s Work Together On Your Next Project!     
            </h3>
        </div>

        <div className='relative mr-24 mb-10'>
                <div 
                className=' absolute h-8 flex justify-center items-center font-semibold  w-24 uppercase text-white bg-light-gray/20 top-2 -left-3 '
                >
                </div>

                <div className='absolute z-10 top-0 left-0 h-8 flex justify-center items-center font-semibold  w-24 uppercase text-white bg-title '>
                    hire me
                </div>
        </div>

      </div>

{/* //todo: fix  */}
      <div className='grid  pr-8 md:pr:4 md:pl-4 grid-cols-2 gap-20 mt-20'>

          {pprojects.map((item, index) => {
            return (
              <div key={item._id}>
              <div  className='flex justify-center items-center flex-col w-[164] md:w-auto   '>
               <div className='w-[162px]   relative md:h-[20rem] md:w-[23rem] lg:h-[25rem] lg:w-[30rem] h-[108px] overflow-hidden rounded-md'>
              <div className='absolute bg-black/20 hover:bg-transparent top-0 left-0 w-full h-full'>
                  <div className=' hidden md:px-4 px-1 md:absolute top-0 left-0 w-full  h-auto bg-gradient-to-b from-black/80 to-black/20 backdrop-blur-lg '>
                      <h2 className='uppercase font-Nunito-Sans md:text-2xl lg:text-4xl font-semibold text-title  text-sm inline-block '>fullstack project</h2>
                      <p className='md:text-2xl'>{item.title}</p>
                  </div>
              </div>
               <img src={item.image} height={100} width={100} alt="" className='h-full rounded-md w-full object-cover' />
               
          </div>
          <div className='md: hidden w-full'>
          <h2 className='uppercase font-Nunito-Sans md:text-2xl lg:text-4xl font-semibold text-title    '>fullstack project</h2>
          <p className='md:text-2xl'>{item.title}</p>
          </div>
        </div>
              </div>
            )
          })}
           

        





      </div>

      <div className='flex justify-center items-center mt-5'>
        <div onClick={()=> setProjects(twoProjects)}
         className={` ${pprojects.length > 2 ? "hidden": "flex"} border  justify-center items-center gap-3 border-title hover:bg-title cursor-pointer rounded-md px-5 py-1 md:text-xl md:py-2 md:px-8`}>
          see more <FaChevronRight className='md:size-4 size-3' /></div>
</div>
    </div>
  )
}

export default ProjectsArea