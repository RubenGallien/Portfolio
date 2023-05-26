import React from 'react'
import mediatekImg from "../public/assets/projects/mediatek.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from 'next/link';

function mediatek() {

  return (
    <div className=' w-full'>
      <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={mediatekImg} alt='/' />
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className=' py-2'>Mediatek Formation</h2>
          <h3>Symfony / Bootstrap / MySQL</h3>
        </div>
      </div>

      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Précision : </strong>
        <span class="block sm:inline">L&apos;accès à la partie admin via keycloak se faisant via une VM azure, pour éviter des coûts trop important, je l&apos;activerais 1 semaine avant l&apos;épreuve, je vous remercie d&apos;avance pour votre compréhension </span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        </span>
      </div>

      <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className=' col-span-4'>
          <h2 className='text-[#5651e5]'>Présentation</h2>
          <br />
          <p>
            Notre projet a pour objectif de créer un site permettant d&apos;accéder à des vidéos d&apos;autoformation. Pour cela, nous avons utilisé le framework Symfony ainsi que le moteur de templates Twig, tous deux écrits en PHP.
            Nous avons également intégré une base de données MySQL pour stocker les informations relatives aux vidéos et aux utilisateurs. <br />
            Le développement de la partie front-office a été confié à un autre développeur. Le front permet d’accéder à l&apos;accueil du site, de consulter les formations et les playlists. On peut également accéder à une formation ou playlist particulière. Les CGU sont visionnables.
          </p>
          <br />
          <p>
            L&apos;objectif est de faire évoluer l&apos;application web Synfomy existante, notamment en corrigeant certains manquements aux bonnes pratiques de codage, puis en ajoutant une partie back-office et le déploiement du site.
          </p>
        </div>
        <div className=' col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className=' p-2'>
            <p className=' text-center font-bold pb-2 text-[#5651e5]'>Technologies</p>
            <div>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />Symfony
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />PHP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />TWIG
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />BootStrap</p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-2'>
          <p className='text-gray-600 py-2 flex '>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatek/contexte.pdf" target="_blank">
              Contexte officiel (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatek/contratdev.pdf" target="_blank">
              Contrat de développement (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatek/cahiercharges.pdf" target="_blank">
              Cahier des charges (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatek/dossierdoc.pdf" target="_blank">
              Dossier documentaire (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatek/compterendu.pdf" target="_blank" rel='noreferrer'>
              Compte rendu (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatek/pvrecette.pdf" target="_blank">
              PV de recette (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="https://github.com/RubenGallien/mediatekformation" target="_blank" rel='noreferrer'>
              Dépot distant (Github)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="https://mediatekformations.go.yj.fr/mediatekformations/public/" target="/blank">
              Site hébergé (PlanetHoster)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="https://mg.n0c.com/" target="_blank" rel='noreferrer'>
              BDD en ligne (PlanetHoster)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="https://mediatekformations.go.yj.fr/doc" target="_blank" rel='noreferrer'>
              Documentation technique (PlanetHoster)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="https://www.youtube.com/watch?v=MHpvj56XvlI" target="_blank" rel='noreferrer'>
              Documentation utilisateur (lien youtube)
            </a>
          </p>
        </div>
        <div className=' col-span-4 md:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <p className=' text-center font-bold pb-2'>Liste des compétences</p>
          <div>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B1.1 : Gérer le patrimoine informatique
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B1.2 : Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B1.3 : Développer la présence en ligne de l&apos;organisation
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B1.4 : Travailler en mode projet
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B1.5 : Mettre à disposition des utilisateurs un service informatique
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B2.1 : Concevoir et développer une solution applicative
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B2.2 : Assurer la maintenance corrective ou évolutive d&apos;une solution applicative
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B2.3 : Gérer les données
            </p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default mediatek