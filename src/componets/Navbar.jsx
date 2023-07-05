import React, {useState} from 'react'
import {FaBars, FaGithub, FaLinkedinIn, FaTimes, FaTwitter} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (

    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       
       {/*logo*/}
       <div>
          <img src={logo} alt='logo' style={{width: '70px'}}/>
      </div> 
      
      {/* menu */}

          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
      

      {/* humburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social icon */}
      <div className='lg:flex fixed flex-col top-[35%] left-0 hidden'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-950'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>

      </div>
    </div>

    
  )
}

export default Navbar