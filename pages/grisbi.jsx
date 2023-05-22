import Image from 'next/image';
import React from 'react'
import grisbiImg from '../public/assets/projects/grisbi.png';
import postTest from '../public/assets/projects/bouygues/testpost.png';
import architectReact from '../public/assets/projects/bouygues/architectureReact.png'
import reacpage from '../public/assets/projects/bouygues/reactpage.png'
import swagger from '../public/assets/projects/bouygues/GrisbiSwagger.png'
import { RiRadioButtonFill } from 'react-icons/ri';

function grisbi() {

    return (
        <div className=' w-full'>
      <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={grisbiImg} alt='/' />
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className=' py-2'>Grisbi API REST</h2>
          <h3>.NET CORE 6 / PHP / REACT </h3>
        </div>
      </div>

      <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2 className='text-[#5651e5]'>Présentation</h2>
          <br />
          <p>
            Lors de mon stage chez Bouygues Immobilier, j&apos;ai intégré une équipe de plusieurs développeurs de la branche Finance et RH de l&apos;entreprise.
            Ces développeurs s&apos;occupent de la conception et du support de plusieurs applications web, bureau et outils.
          </p>
          <br />
          <p>
            Mes objectifs étaient : L&apos;évolution d'une application/service en arrière plan sur le poste des salariés qui devait s&apos;activer en fonction de la charge de son ordinateur afin de faire des économies d'énergie.
            Et également la création d&apos;une API REST (web) en React pour pouvoir faciliter la gestion d'une base de données "trésorerie-comptabilité".
          </p>
          <br />
          <p>
            L'API devait permettre d&apos;obtenir la liste des utilisateurs du service et leurs rôles (afin d&apos;ajouter ou supprimer des utilisateurs et modifier leurs rôles) et permettre le paramétrage de certaines données.      
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
                <RiRadioButtonFill className='pr-1' />React
              </p>
            </div>
          </div>
        </div>
        <div className=' col-span-4 md:col-span-3 shadow-xl shadow-gray-600 rounded-xl p-4'>
          <p className=' text-center font-bold pb-2'>Liste des compétences</p>
          <div>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />B1.4 : Travailler en mode projet
            </p>
          </div>
                </div>
                <div className=' col-span-6 shadow-gray-600 p-4'>
          <p className=' text-center font-bold pb-2'>Quelques photos</p>
          <div>
            <Image width={500} height={500} src={postTest} alt='/' />
            <Image width={200} height={400} src={architectReact} alt='/' />
            <Image width={500} height={400} src={reacpage} alt='/' />
            <Image width={600} height={300} src={swagger} alt='/'/>
          </div>
        </div>
      </div>

    </div>
    )
}

export default grisbi