import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from "react-icons/fa";


function ProjectsArea() {
  return (
    <div className='mt-25 mb-20'>
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


      <div className='flex justify-between items-center md:mt-8 lg:mt-12'>

        <div className='flex justify-center items-center flex-col   '>
            <div className='w-[162px] md:h-[25rem] md:w-[30rem] h-[108px] overflow-hidden rounded-md'>
               <img src="/code.png" height={100} width={100} alt="" className='h-full rounded-md w-full object-cover' />
            </div>
            <h2 className='uppercase font-Nunito-Sans md:text-2xl lg:text-4xl font-semibold text-title mt-8 '>fullstack project</h2>
            <p className='md:text-2xl'>Chatting Website</p>
        </div>

        <div className='flex justify-center items-center flex-col '>
            <div className='w-[162px] md:h-[25rem] md:w-[30rem] h-[108px] overflow-hidden rounded-md'>
               <img src="/code.png" height={100} width={100} alt="" className='h-full w-full rounded-md object-cover' />
            </div>
            <h2 className='uppercase font-Nunito-Sans md:text-2xl lg:text-4xl font-semibold text-title mt-8'>fullstack project</h2>
            <p className='md:text-2xl'>Ecommerce Website</p>
        </div>





      </div>

      <div className='flex justify-center items-center mt-5'>
        <div className='border flex justify-center items-center gap-3 border-title hover:bg-title cursor-pointer rounded-md px-5 py-1 md:text-xl md:py-2 md:px-8'>see more <FaChevronRight className='md:size-4 size-3' /></div>
</div>
    </div>
  )
}

export default ProjectsArea