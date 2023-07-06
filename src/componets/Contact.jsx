import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1E2D40] flex justify-center items-center pt-8'>
      <div className='flex flex-col w-full justify-center items-center bg-[#1E2D40] pb-6 px-4'>
      <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'> Submit the form below to get in touch</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>

      <div className='lg:hidden'>
        <ul className='flex'>
          <li>
            <a href='/'>
              <FaLinkedinIn size={40} />
            </a>
          </li>
          <li>
            <a href='/'>
              <FaGithub size={40} />
            </a>
          </li>
          <li>
            <a href='/'>
              <FaTwitter size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Contact
