import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <>
    <div className='flex-col md:flex-row-reverse md:justify-center flex gap-7'>
        {/* top hero image  */}
        <div className='flex justify-center items-center'> 
            <div className='size-[191px] md:size-[380px] lg:size-[526px] mr-7'>
               <img 
                src={'/top.png'} 
                alt='' 
                className='h-full w-full object-cover' 
               />
            </div>
        </div>

        <div className='flex justify-center items-center flex-col  px-8 mt-8'>
            {/* // titles area  */}
            <div className=' md:tracking-[6]  lg:tracking-[8]  w-full text-[17px] md:text-[28px] lg:text-[40px] font-semibold font-Nunito-Sans tracking-[4]'>Hi There !</div>
            <div className='w-full text-[30px] md:text-[55px] lg:text-[80px] whitespace-nowrap  font-bold font-intrn uppercase text-title '>shahziab mirza</div>
            <div className='w-full text-[17px] flex justify-end '>
                <div className='font-Nunito-Sans font-semibold md:tracking-[6] tracking-[4] lg:tracking-[8] md:text-[28px] lg:text-[40px]'>It's Me</div>
            </div>
            <div className='w-full'>
              <div className='bg-light-gray/10 text-sm lg:text-lg lg:py-2 lg:px-6 px-4 py-[5px] mt-6 w-fit'>Download CV </div>
            </div>

            {/* logos  */}
            
            
        </div>

       
    </div>

    <div className='w-full flex justify-between items-center mt-20 px-8 lg:px-20 lg:pb-44 lg:pt-8'>
                <Image src={'/next.js.svg'} width={40} height={40} alt='' className='md:size-26'  />
                <Image src={'/react.svg'} width={40} height={40} alt=''  className='md:size-26' />
                <Image src={'/express.svg'} width={40} height={40} alt=''  className='md:size-26' />
                <Image src={'/mongodb.svg'} width={40} height={40} alt=''  className='md:size-26' />
            </div>
    </>
  )
}

export default Hero