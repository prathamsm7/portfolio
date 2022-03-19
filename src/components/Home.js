import React from 'react';
import Icon from '../assets/profile.png';
import { FcDocument } from 'react-icons/fc';

const Home = () => {
  const openLink = () => {
    window.open(
      'https://drive.google.com/file/d/1n02MjwxrbKcq5wfYZg7jJXVmLOZoKcpM/view?usp=sharing'
    );
  };
  return (
    <div name='home' className='xs:pt-20 md:pt-20 w-full h-screen bg-[#0a192f]'>
      <div className='sm:-mt-18 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='sm:block md:flex md:justify-between'>
          <div>
            <img
              src={Icon}
              alt=''
              className='xs:m-auto sm:w-1/3 md:w-11/12 xs:w-1/2'
            />
          </div>
          <div>
            <p className='text-lime-300	text-xl '>Hi 👋, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#c5d2ff] hover:text-sky-500 duration-300'>
              Prathamesh Mungekar
            </h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0] hover:text-sky-300 duration-200'>
              I'm a Full Stack Developer.
            </h2>
            <p className='text-[#8892b0] text-base py-4 max-w-[700px] hover:text-[#f75555] duration-200'>
              I’m a Full-stack developer specializing in building exceptional
              digital experiences. Currently, I’m focused on building responsive
              full-stack web applications.
            </p>
            <button
              onClick={openLink}
              className='flex justify-center rounded outline-2 font-bold p-2 px-4 bg-white outline outline-offset-2 outline-pink-500 text-pink-600  hover:text-white hover:bg-pink-600 hover:outline-white'
            >
              Resume <FcDocument className='pl-1' size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
