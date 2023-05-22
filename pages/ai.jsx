import React from 'react'
import aiImg from '../public/assets/veille/ai.png';
import Image from "next/image";

function ai() {
  return (
    <div className='w-full'>
      <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={aiImg} alt='/' />
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className=' py-2'>Veille technologique</h2>
          <h3>L&apos;intelligence artificielle</h3>
        </div>
      </div>

      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-40 border-x-blue-700 h-full border" style={{ left: '50%' }}></div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-[#c5c3ff] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">La conférence MIT-MGB AI Cures 2023 a rassemblé des experts pour discuter du rôle de l&apos;IA dans les soins de santé.</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">17/05/2023 - <a href="https://news.mit.edu/2023/is-medicine-ready-for-ai-0517">https://news.mit.edu/2023/is-medicine-ready-for-ai-0517</a></p>
            </div>
          </div>

          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-[#5651e5] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Elon Musk reverait d&apos;une IA pour Twitter</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"> 12/04/2023 - <a href="https://www.lepoint.fr/high-tech-internet/elon-musk-reve-d-une-intelligence-artificielle-pour-twitter-12-04-2023-2515918_47.php">https://www.lepoint.fr/high-tech-internet/elon-musk-reve-d-une-intelligence-artificielle-pour-twitter-12-04-2023-2515918_47.php</a></p>
            </div>
          </div>

          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-[#c5c3ff] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">ChatGPT décortiqué par Micode</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">14/12/2022 - <a href="https://www.youtube.com/watch?v=1TvuJ6lH3_c">https://www.youtube.com/watch?v=1TvuJ6lH3_c</a></p>
            </div>
          </div>

          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-[#5651e5] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Fusion de 4 oeuvres célèbres par DALLE 2</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">21/09/2022 - <a href="https://twitter.com/creapills/status/1572534316915372032?lang=fr">https://twitter.com/creapills/status/1572534316915372032?lang=fr</a></p>
            </div>
          </div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 bg-[#c5c3ff] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">5 domaines ou tout va changer</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">30/08/2022 - <a href="https://www.zdnet.fr/actualites/l-intelligence-artificielle-cinq-domaines-ou-tout-va-changer-39946416.htm"></a>https://www.zdnet.fr/actualites/l-intelligence-artificielle-cinq-domaines-ou-tout-va-changer-39946416.htm</p>
            </div>
          </div>

          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
            </div>
            <div className="order-1 bg-[#5651e5] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Le rôle de l&apos;IA est sur le point de changer monumentalement en 2022 et au-delà</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">19/05/2022 - <a href="https://techcrunch.com/2022/05/19/ais-role-is-poised-to-change-monumentally-in-2022-and-beyond/">https://techcrunch.com/2022/05/19/ais-role-is-poised-to-change-monumentally-in-2022-and-beyond/</a></p>
            </div>
          </div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">7</h1>
            </div>
            <div className="order-1 bg-[#c5c3ff] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">GPT-3: Moteur de la nouvelle génération d&apos;applications</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">21/03/2021 - <a href="https://openai.com/blog/gpt-3-apps">https://openai.com/blog/gpt-3-apps</a></p>
            </div>
          </div>

          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">8</h1>
            </div>
            <div className="order-1 bg-[#5651e5] rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Qu’est-ce que l&apos;intelligence artificielle ?</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">11/07/2021 - <a href="https://www.sciencesetavenir.fr/high-tech/intelligence-artificielle/qu-est-ce-que-l-intelligence-artificielle_137648">https://www.sciencesetavenir.fr/high-tech/intelligence-artificielle/qu-est-ce-que-l-intelligence-artificielle_137648</a></p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default ai