import Logo from '../assets/logo.png';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='text-4xl font-bold text-[#B5FE83] font-sans'>PM</h1>
      </div>

      <div>
        <ul className='hidden md:flex justify-between'>
          <li className='px-4'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='px-4'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='px-4'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='px-4'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='px-4'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
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
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[140px] h-[60px] flex justify-between items-center rounded pr-2  mb-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              href='https://www.linkedin.com/in/prathamesh-mungekar-126379151/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between items-center w-full text-gray-300 ml-[20px]'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center rounded pr-2 mb-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a
              href='https://github.com/prathamsm7'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between items-center w-full text-gray-300 ml-[20px]'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center rounded pr-2 mb-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a
              href='https://www.instagram.com/pratham_mungekar'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between ml-[20px] w-full text-gray-300'
            >
              Instagram
              <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center rounded pr-2 mb-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600'>
            <a
              href='https://twitter.com/Pratham63604140'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between ml-[20px] w-full text-gray-300'
            >
              Twitter
              <FaTwitter size={30} />
            </a>
          </li>
          {/* <li className='w-[140px] h-[60px] flex justify-between items-center rounded pr-2 mb-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              href='/'
              className='flex justify-between ml-[20px] w-full text-gray-300'
            >
              Resume
              <BsFillPersonLinesFill size={30} />
          </a> 
          </li>
          */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
