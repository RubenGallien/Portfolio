
import Image from "next/image";
import React from "react";
import gptImg from "../public/assets/veille/gpt.png"
import Link from "next/link";

const Skills = () => {
  return (
    <div id="veille" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
            Veille technologique
          </p>
          <h2 className=" py-4">Les intelligences artificelles</h2>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          <p className=" py-2 text-gray-600">J&apos;ai commencé en septembre 2021 à m&apos;informer plus sérieusement des nouveautés technologiques, notamment en ce qui concerne les intelligence artificielles</p>
            <p className="  py-2 text-gray-600">
            En effet, GPT-3 était sorti depuis un an, et c&apos;est d&apos;ailleurs ce qui à donner naissance à mon envie de faire du développement informatique pour apprendre à réaliser des outils de ce type
            </p>
            <p className=" py-2 text-gray-600">
              Pour m&apos;informer &quot;plus sérieusement&quot; aux nouveautés informatique qui nous entoure (en particulier les intelligences artificielles), j&apos;ai utiliser un agrégateur de flux RSS (Netvibes) en supplément des recherches internet classiques via le navigateur et les outils de précisions de recherches
            </p>
          <p className="py-2 text-gray-600">Vous pouvez consultez la frise chronologique de certains de mes recherche
            <Link href="/ai">
             <a className=" no-underline hover:underline"> ici</a>
            </Link>
          </p>
        </div>
        {
        /* Ajouter une photo de moi*/
          <div className=" w-full h-auto m-auto  shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
              src={gptImg}
              width="200px"
              height="200px"
            alt="/"
            />
          </div>
        }
      </div>
    </div>
  );
};

export default Skills;