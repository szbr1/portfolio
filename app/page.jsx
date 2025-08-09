import Hero from '@/components/Layout/Hero'
import Header from '@/components/Layout/Header'
import React from 'react'
import Area from '@/components/Layout/Area'
import ProjectsArea from '@/components/Layout/ProjectsArea'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import ContactWithMe from '@/components/Layout/ContactWithMe'
import Footer from '@/components/Layout/Footer'


function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Area />
      <ProjectsArea />
      {/* quote  */}

      <div className='flex justify-center items-center mb-20'>
        <p className='relative font-poppins font-medium whitespace-pre-line '>
          
       <FaQuoteLeft className='absolute top-0 leading-0' /> &nbsp; &nbsp; &nbsp;I craft visually engaging designs that connect emotionally   with users, and build backends that are powerful, user-friendly, and optimized for performance—delivering complete, seamless digital experiences. <FaQuoteRight className='absolute bottom-2 right-2'/>
        </p>
      </div>

      <ContactWithMe />
      <Footer />
      <div className='h-30 w-full'></div>
    </div>
  )
}

export default page