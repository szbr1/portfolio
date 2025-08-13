import Hero from '@/components/Layout/Hero'
import React from 'react'
import Area from '@/components/Layout/Area'
import ProjectsArea from '@/components/Layout/ProjectsArea'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import ContactWithMe from '@/components/Layout/ContactWithMe'
import Header from '@/components/Layout/Header';


function page() {
  return (
    <div className='px-[8px] md:mx-[80] lg:mx-[106]'>
      <Header />

      <Hero />
      <Area />
      <ProjectsArea />
      {/* quote  */}

      <div className='flex justify-center items-center mb-20 lg:h-[calc(100vh-260px)]'>
        <p className='relative font-poppins font-medium whitespace-pre-line lg:text-4xl md:leading-12'>
          
       <FaQuoteLeft className='absolute top-0 leading-0 ' /> &nbsp; &nbsp; &nbsp;I craft visually engaging designs that connect emotionally   with users, and build backends that are powerful, user-friendly, and optimized for performance—delivering complete, seamless digital experiences. <FaQuoteRight className='absolute bottom-2 lg:bottom-4 right-2 lg:right-18'/>
        </p>
      </div>

      <ContactWithMe />
      <div className='h-30 w-full'></div>
    </div>
  )
}

export default page