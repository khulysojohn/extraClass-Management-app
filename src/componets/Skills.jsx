import React from 'react'
import HTML from '../assets/html5.jpg';
import CSS from '../assets/css3.png';
import JAVASCRIPT from '../assets/js.png';
import REACT from '../assets/React.png';
import SQL from '../assets/sql2.jpg';
import NODE from '../assets/node.png'
import TAILWIND from '../assets/tailwind.jpg';
import GIT from '../assets/git.png';

function Skills() {
  return (
    <div name='skills' className='bg-[#1E2D40] text-gray-300 pb-24'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00FFC3]'>Experience</p>
                <p className='py-4'>
                    These are the technologies I've worked with.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='' />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='' />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt='' />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt='' />
                    <p>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQL} alt='' />
                    <p>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NODE} alt='' />
                    <p>NODE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt='' style={{width: '70px'}}/>
                    <p>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GIT} alt='' />
                    <p>GIT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills