import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='flex-col flex gap-7'>
        {/* top hero image  */}
        <div className='flex justify-center items-center'> 
            <div className='size-[191px] mr-7'>
               <img 
                src={'/top.png'} 
                alt='' 
                className='h-full w-full object-cover' 
               />
            </div>
        </div>

        <div className='flex justify-center items-center flex-col  px-8'>
            {/* // titles area  */}
            <div className='w-full text-[17px] font-semibold font-Nunito-Sans tracking-[4]'>Hi There !</div>
            <div className='w-full text-[30px] font-bold font-intrn uppercase text-title '>shahziab mirza</div>
            <div className='w-full text-[17px] flex justify-end '>
                <div className='font-Nunito-Sans font-semibold tracking-[4]'>It's Me</div>
            </div>
            <div className='w-full'>
              <div className='bg-light-gray/10 text-sm px-4 py-[5px] mt-6 w-fit'>Download CV </div>
            </div>

            {/* logos  */}
            <div className='w-full flex justify-between items-center mt-20'>
                <Image src={'/next.js.png'} width={40} height={40} alt='' />
                <Image src={'/react.png'} width={40} height={40} alt='' />
                <Image src={'/express.png'} width={40} height={40} alt='' />
                <Image src={'/mongodb.png'} width={40} height={40} alt='' />
            </div>
            
        </div>
    </div>
  )
}

export default Hero