import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
      <div className='flex-col md:flex-row-reverse md:justify-center flex gap-7'>
        {/* top hero image */}
        <div className='flex justify-center items-center'> 
          <div className='size-[191px] md:size-[380px] lg:size-[526px] mr-7'>
            <img 
              src={'/top.png'} 
              alt='Shahzaib Mirza Software Engineer portrait'
              className='h-full w-full object-cover' 
            />
          </div>
        </div>

        <div className='flex justify-center items-center flex-col px-8 mt-8'>
          {/* greeting */}
          <div className='md:tracking-[6] lg:tracking-[8] w-full text-[17px] md:text-[28px] lg:text-[40px] font-semibold font-Nunito-Sans tracking-[4]'>
            Hi There !
          </div>

          <h1 className='w-full text-[30px] md:text-[55px] lg:text-[80px] whitespace-nowrap font-bold font-intrn uppercase text-title'>
            Shahzaib Mirza
          </h1>

          <div className='w-full text-[17px] flex justify-end'>
            <div className='font-Nunito-Sans font-semibold md:tracking-[6] tracking-[4] lg:tracking-[8] md:text-[28px] lg:text-[40px]'>
              It&apos;s Me
            </div>
          </div>

          {/* CV button */}
          <div className='w-full'>
            <div className='bg-light-gray/10 text-sm lg:text-lg lg:py-2 lg:px-6 px-4 py-[5px] mt-6 w-fit'> 
              <Link href={'/cv'}>
                Check My CV
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack logos */}
      <div className='w-full flex justify-between items-center mt-20 px-8 lg:px-20 lg:pb-44 lg:pt-8'>
        <Image src={'/next.js.svg'} width={40} height={40} alt='Next.js framework' className='md:size-26' />
        <Image src={'/react.svg'} width={40} height={40} alt='React library' className='md:size-26' />
        <Image src={'/express.svg'} width={40} height={40} alt='Express.js backend framework' className='md:size-26' />
        <Image src={'/mongodb.svg'} width={40} height={40} alt='MongoDB database' className='md:size-26' />
      </div>
    </>
  )
}

export default Hero
