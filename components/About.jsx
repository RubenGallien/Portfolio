import React from "react";

const About = () => {
  return (
    <div id='about' className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className=" py-4">Qui suis-je ?</h2>
          <p className=" py-2 text-gray-600"> Je suis un élève de BTS SIO</p>
          <p className="  py-2 text-gray-600">
            Some textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome text
          </p>
          <p className=" py-2 text-gray-600">
            Some textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome textSome textSome textSome textSome
            textSome textSome textSome text
          </p>
          <p className=" py-2 text-gray-600 underline cursor-pointer">
            Vous pouvez regardez mes réalisations professionnelles ici
          </p>
        </div>
        {
          /* Ajouter une photo de moi*/
          <div></div>
        }
      </div>
    </div>
  );
};

export default About;
