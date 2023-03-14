import React from "react";
import Image from "next/image";
import rubenImg from "../public/assets/portrait.png";
import Link from "next/link";

const About = () => {
  return (
    <div id='about' className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className=" py-4">Qui suis-je ?</h2>
          <p className=" py-2 text-gray-600"> Je suis un élève de BTS SIO Options SLAM </p>
          <p className="  py-2 text-gray-600">
            Après un parcours assez compliqué, j&apos;ai commencer à être passioné par la programmation informatique de manière assez générale depuis maintenant 2 ans. Je suis désormais certains de vouloir poursuivre dans cette voie
          </p>
          <p className=" py-2 text-gray-600">
            
          </p>
          <p className=" py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#project" scroll={false}>
              Vous pouvez regardez mes réalisations professionnelles ici
            </Link>
            <br />
            <a href="/assets/cv.pdf" download>Ou télécharger mon cv en format pdf ici</a>
          </p>
        </div>
        {
          /* Ajouter une photo de moi*/
          <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rouned-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={rubenImg}
            alt="/"
            />
          </div>
        }
      </div>
    </div>
  );
};

export default About;
