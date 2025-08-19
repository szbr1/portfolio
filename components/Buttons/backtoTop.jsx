"use client"
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

function BacktoTop() {
  return (
    <div className='sticky bottom-2 right-2 cursor-pointer'>

    <button onClick={()=> window.scrollTo({top: 0 , behavior: "smooth"})} className='p-1 md:p-2 flex justify-between items-center gap-2 lg:px-6 px-4  bg-light-gray/20'>Back To Top <FaArrowUp /></button>
    </div>
  )
}

export default BacktoTop