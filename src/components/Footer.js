import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='w-full h-auto px-4 bg-[#084594] text-gray-300 grid sm:grid-cols-3 sm:justify-center md:grid-cols-3 gap-2 justify-between items-center pb-2'>
      <h2 className='font-bold sm:pt-3'>Copyright ©{year} </h2>
      <h2 className='font-bold sm:pt-3 sm:pb-3'>
        Developed By <span className='text-[#ED5EDD]'>mungekarp8@gmail.com</span>
      </h2>
      <span>
        <ul className='grid grid-cols-3'>
          <li>
            <a
              href='https://github.com/prathamsm7'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between items-center w-full text-gray-300 ml-[20px]'
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/prathamesh-mungekar-126379151/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between items-center w-full text-gray-300 ml-[20px]'
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/pratham_mungekar'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-between ml-[20px] w-full text-gray-300'
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Footer;
