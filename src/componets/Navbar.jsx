import React, {useState} from 'react'
import {FaBars, FaFacebook, FaGithub, FaLinkedinIn, FaTimes, FaTwitter} from 'react-icons/fa'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (

    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1E2D40] text-[#0BDFAE]'>
       
       {/*logo*/}
       <div>
          <img src={logo} alt='logo' style={{width: '100px'}}/>
      </div> 
      
      {/* menu */}

          <ul className='hidden md:flex'>
            <li>
              <Link  to='home' smooth={true} duration={500}>
                Home
              </Link>
              </li>
            <li>
            <Link  to='about' smooth={true} duration={500}>
                About
              </Link>
              </li>
            <li>
            <Link to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
            <Link to='project' smooth={true} duration={500}>
                Projects
              </Link>
              </li>
            <li>
            <Link  to='contact' smooth={true} duration={500}>
                Contact
              </Link>
              </li>
          </ul>
      

      {/* humburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='project' smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
      </ul>

      {/* Social icon */}
      <div className='lg:flex fixed flex-col top-[35%] left-0 hidden'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-[#0BDFAE]'
            href="https://www.linkedin.com/in/khulysojohn/">
              Linkedin <FaLinkedinIn size={30} color='white' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-[#0BDFAE]'
            href="https://github.com/khulyso-dev">
              Github <FaGithub size={30} color='white' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a className='flex justify-between items-center w-full text-[#0BDFAE]'
            href="https://twitter.com/Khulyso12">
              Twitter <FaTwitter size={30} color='white'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-800'>
            <a className='flex justify-between items-center w-full text-[#0BDFAE]'
            href="https://twitter.com/Khulyso12">
              Facebook <FaFacebook size={30} color='white'/>
            </a>
          </li>
        </ul>

      </div>
    </div>

    
  )
}

export default Navbar