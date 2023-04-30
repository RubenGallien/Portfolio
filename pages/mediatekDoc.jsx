import Image from 'next/image';
import React from 'react'
import mediatekdocImg from "../public/assets/projects/mediatekdoc.png";
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';

function mediatekDoc() {


  return (
    <div className=' w-full'>
      <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={mediatekdocImg} alt='/' />
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className=' py-2'>Mediatek Documents</h2>
          <h3>C# / PHP / MySQL</h3>
        </div>
      </div>
      <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className=' col-span-4'>
          <h2 className='text-[#5651e5]'>Présentation</h2>
          <br />
          <p>
            MediaTek86 est un réseau qui gère les médiathèques de la Vienne, et qui a pour rôle de fédérer les prêts de livres, DVD et CD et de développer la médiathèque numérique pour l&apos;ensemble des médiathèques du département.
            Afin de gérer le catalogue et les commandes de documents, MediaTek86 a confié un projet de développement d'une application de gestion à la société InfoTechServices 86.
          </p>
          <br />
          <p>
            Pour ce projet, un premier dévloppeur s&apos;est occupé de la construction de la base de données et du développement de certaines fonctionnalitées de l&apos;application. C&apos;est une application de bureau, prévue pour être installée sur plusieurs postes dans la médiathèque et accédant à la même base de données. L&apos;application exploite une API REST pour accéder à la base de données MySQL
          </p>
          <br />
          <p>
            Nous devons donc faire évoluer cette application de bureau (C#) exploitant une API REST (PHP) pour l&apos;accès à une base de données relationnelle MySQL et qui permet de gérer les document des vidéothèques de la chaine MediaTek86
          </p>
        </div>
        <div className=' col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className=' p-2'>
            <p className=' text-center font-bold pb-2 text-[#5651e5]'>Technologies</p>
            <div>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />C#
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />PHP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-2'>
          <p className='text-gray-600 py-2 flex '>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatekdoc/contexte.pdf" target="_blank">
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
            <a href="/assets/projects/mediatekdoc/cahiercharges.pdf" target="_blank">
              Cahier des charges (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatekdoc/dossierdoc.pdf" target="_blank">
              Dossier documentaire (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a>
              Compte rendu (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href="/assets/projects/mediatekdoc/pvrecette.pdf" target="_blank">
              PV de recette (PDF)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href='https://github.com/RubenGallien/mediatek86' target="_blank" rel='noreferrer'>
              Dépot distant de l&apos;application C# (Github)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href='https://github.com/RubenGallien/apimediatek' target='_blank' rel='noreferrer'>
            Dépot distant de l&apos;API REST (Github)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a href='/assets/projects/mediatekdoc/MediatekDocumentsInstalleur.msi.zip'>
              Installeur de l'application C# (.msi)
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a>
              Documentation technique 
            </a>
          </p>
          <p className='text-gray-600 py-2 flex'>
            <AiOutlineArrowRight className='pr-1' />
            <a>
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
              <RiRadioButtonFill className='pr-1' />B1.2 : Répondres aux incidents et aux demandes d&apos;assistance et d&apos;évolution
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
    </div>
  )
}

export default mediatekDoc