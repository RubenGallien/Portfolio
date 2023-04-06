import Image from 'next/image';
import React from 'react'
import grisbiImg from '../public/assets/projects/grisbi.png';

function grisbi() {

    return (
        <div className=' w-full'>
            <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={grisbiImg} alt='/' />
                <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className=' py-2'>GRISBI API</h2>
                    <h3>L'intelligence artificielle</h3>
                </div>
            </div>
        </div>
    )
}

export default grisbi