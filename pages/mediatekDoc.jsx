import Image from 'next/image';
import React from 'react'
import mediatekImg from "../public/assets/projects/mediatek.png";

function mediatekDoc() {


    return (
        <div className=' w-full'>
            <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={mediatekImg}  alt='/' />
                <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className=' py-2'>MediatekDocuments</h2>
                    <h3>C# / PHP / MySQL</h3>
                </div>
            </div>
            <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Projet en cours
                </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Je fais actuellement tout mon possible pour fini au plus vite le projet, cela devrait être fait la semaine du 24.</p>
                    </div>
                </div>
            </div>
    )
}

export default mediatekDoc