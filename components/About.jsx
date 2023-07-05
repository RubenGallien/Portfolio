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
            À propos de moi
          </p>
          <h2 className=" py-4">Qui suis-je ?</h2>
          <p className=" py-2 text-gray-600">Je m&apos;appelle Ruben Gallien, j&apos;ai 22 ans et je suis passionné par le développement web.</p>
          <p className="  py-2 text-gray-600">
          J&apos;ai obtenu un bac général ES en 2018 avant de me diriger vers une licence de droit. Très vite, j&apos;ai réalisé que ce n&apos;était pas la voie qui me correspondait. Après plusieurs tentatives de formations, le premier confinement a été pour moi un moment crucial où j&apos;ai pris conscience de mon appétence pour la programmation. J&apos;ai pu mettre à profit ces quelques mois pour affiner ce projet en développant mes compétences
          </p>
          <p className=" py-2 text-gray-600">
            Je viens de terminer mon BTS SIO option SLAM.
          </p>
          <p className=" py-2 text-gray-600">
          Je souhaiterai par la suite intégrer une 3ème année de bachelor.
          </p>
          <p className=" py-4 text-gray-600">
            Vous pouvez regarder mes réalisations professionnelles
            <Link href="/#project" scroll={false}>
              <a className="no-underline hover:underline decoration-sky-500"> ici</a>
            </Link>
            <br />
            ou télécharger mon cv en format pdf
            <a className="no-underline hover:underline decoration-sky-500" href="/assets/cv.pdf" download> ici</a>
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
