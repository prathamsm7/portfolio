import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#ca7f16]'>
            Skills
          </p>
        </div>
        <div className='max-w-[1000x] w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='html' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='html' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='html' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='html' />
            <p className='my-4'>NODEJS</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt='html' />
            <p className='my-4'>MONGODB</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='html' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt='html' />
            <p className='my-4'>EXPRESS</p>
          </div>
          <div className='shadow-md shadow-[#9476dae0] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='html' />
            <p className='my-4'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
