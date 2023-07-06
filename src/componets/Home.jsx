import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#1E2D40]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0BDFAE] text-xl'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6b6]'>Khuliso John</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a Full-stack developer specializing in building ( and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on builing responsive 
          full-stack web applications.
        </p>
        <div >
          <button className='text-[#1E2D40] group border-2 px-6 py-3 my-2 flex items-center bg-[#0BDFAE] hover:border-[#0BDFAE]'>
            Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home