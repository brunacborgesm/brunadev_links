import Image from 'next/image'
import React from 'react'

export const AvatarArea = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Image
        alt='Avatar  de Bruna Borges Desenvolvedora Web'
        src='/profile.png'
        width={350}
        height={350}
        className='md:w-[250px] lg:w-[250px]' />
      <div className='py-4 text-3xl text-pink-600 font-bold text-center'>
        <h1 className=''>Bruna Borges</h1>
        <h3 className='text-2xl leading-5 font-normal'>Software Developer</h3>
      </div>
    </div>
  )
}
