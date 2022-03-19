import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ca7f16]'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='text-[#43b51b]'>
              Hello👋 ! I'm Prathamesh, nice to see yo Here. Please take a look
              around my work.
            </p>
          </div>
          <div>
            <p className='text-[#5be9ae] text-lg'>
              Passionate full-stack developer with knowledge of MERN stack. Has
              hands-on experience building UI, making websites responsive, and
              working with different kinds of frameworks and libraries. Seeking
              exciting web-development roles with reputed tech companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
