import React from 'react'
import BacktoTop from "../Buttons/backtoTop";

function Footer() {
  return (
    <div className='flex  justify-between items-center px-1 md:p-8 p-4 bg-light-gray/10 shadow lg:px-18'>
        <div className='font-poppins  tracking-[1px] text-[8px] md:text-lg '>
        © 2025 szaib.dev | All rights reserved.

        </div>
     <BacktoTop />
       
        
    </div>
  )
}

export default Footer