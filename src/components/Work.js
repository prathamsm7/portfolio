import React, { useState } from "react";
import BB from "../assets/BB.png";
import DMART from "../assets/DMART.png";
import Expedia from "../assets/expedia.png";
import Ecommerce from "../assets/e-commerce.png";

const Work = () => {
  const [work] = useState([
    {
      img: Ecommerce,
      name: "E-Commerce App",
      gitlink: "https://github.com/prathamsm7/Ecommerce-App",
      livelink: "https://ecommerce-app-3pjk.vercel.app/",
      description: "E-Commerce website using ReactJS,Redux etc.",
      stack: "MERN | Redux | Chakra-ui",
    },
    {
      img: Expedia,
      name: "Expedia Clone",
      gitlink: "https://github.com/Omkar-WD/Expedia-Frontend-Clone",
      livelink: "https://expedia-co-in-clone.netlify.app/",
      description: `Expedia.co.in is an online travel agency owned by Expedia Group.
      The website and mobile app can be used to book airline tickets,
      hotel reservations, car rentals, cruise ships, and vacation
      packages.`,
      stack: `React | Redux | Chakra-UI | MongoDb | Express.js | Node.js |
      Mongoose`,
    },
    {
      img: DMART,
      name: "D-Mart Clone",
      gitlink: "https://github.com/prathamsm7/D-Mart",
      livelink: "https://awesome-brattain-961b03.netlify.app/",
      description: `  DMart is a one-stop supermarket chain that aims to offer customers
      a wide range of basic home and personal products under one roof.`,
      stack: `HTML | CSS | Javascript | Local Storage`,
    },
    {
      img: BB,
      name: "Big-Basket Clone",
      gitlink: "https://github.com/vattsalbhatt/bigbasket",
      livelink: "https://bbasketclone.netlify.app/",
      description: `The best online grocery store in India. bigbasket is an online
      supermarket for all your daily needs. Online shopping now made
      easy with a wide range of groceries and home needs.`,
      stack: `HTML | CSS | Javascript`,
    },
  ]);
  return (
    <div name="work" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ca7f16]">
            Work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          {work.map((item) => (
            <div className="shadow-md shadow-[#9476dae0] p-2 h-full w-full">
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-2"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Big-Basket Clone
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href={item.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href={item.gitlink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-center text-2xl font-bold">{item.name}</p>
              <p className="text-base mb-2 mt-3">{item.description}</p>
              <p>
                <span className="font-bold text-green-300	">Tech Stack:-</span>
                {item.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
