import Image from 'next/image'
import React from 'react'

function ProjectsArea() {
  return (
    <div className='mt-25 mb-20'>
      <div className='flex justify-between items-center'>

        <div className='flex  items-center  gap-3'>
            <div className='h-20 w-8 overflow-hidden flex items-center  '>
                <div className='bg-white rounded-full size-10 -ml-5 flex-none '></div>
            </div>

            <h3 className=' uppercase font-poppins font-bold'>
             My projects
            </h3>
        </div>

        <div className='relative '>
                <div 
                className=' absolute h-8 flex justify-center items-center font-semibold  w-24 uppercase text-white bg-light-gray/20 top-2 -left-3 '
                >
                </div>

                <div className='h-8 flex justify-center items-center font-semibold  w-24 uppercase text-white bg-title '>
                    hire me
                </div>
        </div>

      </div>


      <div className='flex justify-between items-center'>

        <div className='flex justify-center items-center flex-col '>
            <div className='w-[162px] h-[108px] overflow-hidden rounded-md'>
               <img src="/code.png" height={100} width={100} alt="" className='h-full w-full object-cover' />
            </div>
            <h2 className='uppercase font-Nunito-Sans font-semibold text-title'>fullstack project</h2>
            <p>Chatting Website</p>
        </div>

        <div className='flex justify-center items-center flex-col '>
            <div className='w-[162px] h-[108px] overflow-hidden rounded-md'>
               <img src="/code.png" height={100} width={100} alt="" className='h-full w-full object-cover' />
            </div>
            <h2 className='uppercase font-Nunito-Sans font-semibold text-title'>fullstack project</h2>
            <p>Ecommerce Website</p>
        </div>




      </div>
    </div>
  )
}

export default ProjectsArea