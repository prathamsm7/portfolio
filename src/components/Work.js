import React from 'react';
import BB from '../assets/BB.png';
import DMART from '../assets/DMART.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ca7f16]'>
            Work
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div className='shadow-md shadow-[#9476dae0] p-2 h-full w-full'>
            <div
              style={{ backgroundImage: `url(${DMART})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-2'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  D-Mart Clone
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://d-mart-clone.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/prathamsm7/D-Mart-with-backend'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className='text-center text-2xl font-bold'>
              D-Mart (with backend)
            </p>
            <p className='text-base mb-2 mt-3'>
              DMart is a one-stop supermarket chain that aims to offer customers
              a wide range of basic home and personal products under one roof.
            </p>
            <p>
              <span className='font-bold text-green-300	'>Tech Stack:-</span>EJS
              | HTML | CSS | Javascript | MongoDb | Express.js | Node.js
            </p>
          </div>

          <div className='shadow-md shadow-[#9476dae0] p-2 h-full w-full'>
            <div
              style={{ backgroundImage: `url(${DMART})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-2'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  D-Mart Clone
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://awesome-brattain-961b03.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/prathamsm7/D-Mart'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className='text-center text-2xl font-bold'>D-Mart</p>
            <p className='text-base mb-2 mt-3'>
              DMart is a one-stop supermarket chain that aims to offer customers
              a wide range of basic home and personal products under one roof.
            </p>
            <p>
              <span className='font-bold text-green-300	'>Tech Stack:-</span>
              HTML | CSS | Javascript | Local Storage{' '}
            </p>
          </div>

          <div className='shadow-md shadow-[#9476dae0] p-2 h-full w-full'>
            <div
              style={{ backgroundImage: `url(${BB})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-2'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Big-Basket Clone
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://bbasketclone.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/vattsalbhatt/bigbasket'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className='text-center text-2xl font-bold'>Big Basket</p>
            <p className='text-base mb-2 mt-3'>
              The best online grocery store in India. bigbasket is an online
              supermarket for all your daily needs. Online shopping now made
              easy with a wide range of groceries and home needs.
            </p>
            <p>
              <span className='font-bold text-green-300	'>Tech Stack:-</span>
              HTML | CSS | Javascript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
