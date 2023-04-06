import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="diplome" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Dîplomes et Certifications
        </p>
        <h2 className=" py-4">Durant mon parcours</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/graduation.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3><a href="/assets/skills/attestation_bac.pdf" target="_blank">Baccalauréat Economique et sociale - 2018 (lien)</a></h3>
                <p>Lycée Jules Ferry / Conflans Sainte Honorine</p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/pix.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3><a href="/assets/skills/attestation_pix.pdf" target="_blank">Certification PIX - 2022 (lien)</a></h3>
                <p>CNED</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
