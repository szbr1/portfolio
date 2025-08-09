import Image from 'next/image'
import React from 'react'

function ContactWithMe() {
  return (
    <div className=''>
         <div className='flex justify-center items-center '>
            <h3 className='font-Nunito-Sans font-bold text-title text-3xl'>Get Into Touch</h3>
         </div>

         <div className='flex flex-col gap-2 px-4 mt-16'>
             <input type="text" placeholder='FullName' className='font-Nunito-Sans w-full p-2 outline-none border-light-gray/20 border'/>
             <input type="text" placeholder='Email' className='font-Nunito-Sans w-full p-2 outline-none border-light-gray/20 border'/>
             <textarea type="text" placeholder='Email' className='font-Nunito-Sans w-full p-2 h-44 outline-none border-light-gray/20 border'/>
             <div className='relative mt-4'>
              <button className='h-10 w-32 absolute top-0 left-2 bg-title uppercase z-10'>Submit </button>
              <button className='h-10 w-32 absolute top-2 left-0 bg-light-gray/20 uppercase '> </button>
             </div>
         </div>

         <div className='flex justify-between items-center mt-28 px-4'>
             <img src={'/call_logo.svg'} height={50} width={50} alt='' />
             <img src={'/inbox.svg'} height={50} width={50} alt='' />
             <img src={'/Frame.svg'} height={50} width={50} alt='' />
         </div>



    </div>
  )
}

export default ContactWithMe