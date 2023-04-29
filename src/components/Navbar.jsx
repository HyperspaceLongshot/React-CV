import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiIndeed } from 'react-icons/si'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)

  return (

    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-blue-950 text-blue-50'>
        {/* Heading Logo */}
    <div>
        <h1 className='text-3xl text-[#ffcc00]'>J.Regan</h1>
    </div>
        {/* Page Nav */}
    <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
            <li className='hover:text-[#ffcc00] duration-700'><Link to="intro" smooth={true} duration={500}>
          Intro
        </Link></li>
        <li className='hover:text-[#ffcc00] duration-700'><Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className='hover:text-[#ffcc00] duration-700'><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className='hover:text-[#ffcc00] duration-700'><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>
    </div>

        {/* Burger Menu */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center'}>
            <li  className='py-6 text-4xl'><li><Link onClick={handleClick} to="intro" smooth={true} duration={500}>
          Intro
        </Link></li></li>
            <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li></li> 
            <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li></li>
            <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li></li>
        </ul>

        {/* Social Icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1] rounded-r-lg'>
                <a className='flex justify-between items-center w-full text-blue-50' href="https://linkedin.com/in/johnathan-regan-395849201" target=''>
                 LinkedIn <FaLinkedin size={30} /> 
                 </a></li>

                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-lg'>
                <a className='flex justify-between items-center w-full text-blue-50' href="https://github.com/HyperspaceLongshot">
                 GitHub <FaGithub size={30} /> 
                 </a></li>

                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00c49e] rounded-r-lg'>
                <a className='flex justify-between items-center w-full text-blue-50' href="/">
                 E-mail <HiOutlineMail size={30} /> 
                </a></li> */}

               {/*  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2164f3] rounded-r-lg'>
                <a className='flex justify-between items-center w-full text-blue-50' href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.89756957.729601500.1682781793-437224772.1682781793">
                 Indeed <SiIndeed size={30} /> 
                </a></li> */}
               
        </ul>
    </div>

    </div>

  )
}

export default Navbar