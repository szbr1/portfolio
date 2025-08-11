import { FaArrowUp } from "react-icons/fa";
import React from 'react'

function Footer() {
  return (
    <div className='flex mt-[64px] justify-between items-center px-1 p-8 bg-light-gray/10 shadow lg:px-4'>
        <div className='font-poppins  tracking-[1px] text-[8px] md:text-lg '>
        © 2025 szaib.dev | All rights reserved.

        </div>

        <div className='p-2 flex justify-between items-center gap-2 px-3 bg-light-gray/20'>Back To Top <FaArrowUp /></div>
        
    </div>
  )
}

export default Footer