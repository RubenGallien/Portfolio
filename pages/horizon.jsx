import Image from 'next/image'
import React from 'react'
import horizonImg from '../public/assets/projects/horizon.png';
import alertImg from '../public/assets/projects/horizon/Alerte.png'
import horizonSiteImg from '../public/assets/projects/horizon/horizon.png'
import { RiRadioButtonFill } from 'react-icons/ri';

function horizon() {
  return (
    <div className=' w-full'>
      <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={horizonImg} alt='/' />
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className=' py-2'>Alerte Horizon</h2>
          <h3>Symfony / Bootstrap</h3>
        </div>
      </div>

      <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2 className='text-[#5651e5]'>Présentation</h2>
          <br />
          <p>
            Lors de mon expérience chez GRDF au sein du GREA (Groupe Régional d&apos;Expertise et d&apos;Appui),
            j&apos;ai integré une équipe de développeur qui s&apos;occupe de la maintenance
            et la mise à niveau de trois applications métiers destinés aux salariés de l&apos;entreprise et aux clients.
          </p>
          <br />
          <p>
            J&apos;ai principalement travaillé sur le site Horizon.
            Ce dernier est une application métier web destinés aux collaborateurs du GREA permettant d&apos;analyser les objectifs et résultats de plusieurs indicateurs de performance (activités de GRDF).
            Le site est développé en Symfony 4.4 et utilise PHP 7.2
          </p>
          <br />
          <p>
            Ma principale mission a été de créer et d&apos;afficher un(e) alerte/message sur ce site, pour les utilisateurs d&apos;un navigateur autre que Mozilla Firefox.
            En effet, sur certaines pages, des Iframes ne sont pas visibles à cause d&apos;un &quot;bug&quot; causé par les navigateurs. Le changement de navigateur ne devait pas être une obligation, simplement un conseil.
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
        <div className=' col-span-4 md:col-span-3 shadow-xl shadow-gray-600 rounded-xl p-4'>
          <p className=' text-center font-bold pb-2'>Liste des compétences</p>
          <div>
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
          </div>
        </div>
        <div className=' col-span-6 shadow-gray-600 p-4'>
          <p className=' text-center font-bold pb-2'>Quelques photos</p>
          <div>
            <Image width={500} height={300} src={alertImg} alt='/' />
            <Image width={500} height={300} src={horizonSiteImg} alt='/' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default horizon