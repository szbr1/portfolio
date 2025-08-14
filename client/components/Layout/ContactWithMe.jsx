import Link from 'next/link'
import React from 'react'

function ContactWithMe() {
  return (
    <div className=' lg:px-20'>
       <div className='flex justify-center items-center '>
         <h3 className='font-Nunito-Sans font-bold text-title text-3xl md:text-4xl  lg:text-5xl '>Get Into Touch</h3>
       </div>
       <div className='flex flex-col lg:flex-row w-full justify-between'>
         <div className=' w-full flex flex-col  gap-2 px-4 mt-16 lg:mt-32  lg:w-2/5'>
              <input type="text" name='name' placeholder='FullName' className='font-Nunito-Sans w-full lg:p-5 lg:text-xl outline-none p-2 tracking-[2]  border-light-gray/20 border'/>
              <input type="text" placeholder='Email' className='font-Nunito-Sans w-full lg:p-5 lg:text-lg placeholder:text-xl outline-none p-2 tracking-[2]  border-light-gray/20 border'/>
              <textarea type="text" placeholder='Description' className='font-Nunito-Sans w-full lg:p-5 h-44  lg:h-56 outline-none p-2  border-light-gray/20 border'/>
              <div className='relative mt-4'>
                  <button className='h-10 w-32 absolute top-0 left-2 bg-title uppercase z-10'>Submit </button>
                  <button className='h-10 w-32 absolute top-2 left-0 bg-light-gray/20 uppercase '> </button>
              </div>
         </div>

         <div className='flex justify-between lg:flex-col items-center mt-28 px-4 lg:gap-4'>
              <Link href={"https://wa.me/923205016373"}  target='_blank' className='lg:flex justify-start lg:items-center lg:w-96  lg:gap-8'>
                <img src={'/call_logo.svg'} height={50} width={50} alt='' className='lg:size-16' />
                <div className='hidden font-poppins font-light lg:block'>+92 3205016373</div>
                
              </Link>
              
              <a href={"mailto:szb8480@gmail.com"}  className='lg:flex justify-start lg:items-center lg:gap-8 lg:w-96 '>
                <img src={'/inbox.svg'} height={50} width={50} alt='' className='lg:size-16' />
                <div className='hidden font-poppins font-light lg:block'>szb8480@gmail.com kk</div>
              </a>
              <Link href={"https://www.linkedin.com/in/szaib-dev.com"} target='_blank' className='lg:flex justify-start lg:items-center lg:w-96  lg:gap-8'>
                <img src={'/Frame.svg'} height={50} width={50} alt='' className='lg:size-16 '  />
                <div className='hidden font-poppins font-light lg:block'>linkedin.com/in/szaib-dev</div>
              </Link>
         </div>

       </div>


    </div>
  )
}

export default ContactWithMe