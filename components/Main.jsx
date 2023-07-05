import React from "react";
import { AiOutlineAim, AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className=" w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            Découvrez mon parcours d&apos;apprentissage
          </p>
          <h1 className=" py-4 text-gray-700">
            Bonjour, je suis <span className=" text-[#5651e5]">Ruben</span>
          </h1>
          <h1 className=" py-4 text-gray-700">
            Apprenti développeur en Bachelor
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Diplomé d&apos;un BTS SIO, j&apos;éspère devenir un jour un 
            developpeur confirmé 😄 . Vous découvrirez sur ce site, mon
            parcours d&apos;apprentissage et mes réalisations professionnelles.
          </p>
          <div className=" flex items-center space-x-10 justify-center max-w-[300px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/in/ruben-gallien-74695618a"><FaLinkedinIn /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/RubenGallien"><BsGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
