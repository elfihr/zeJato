import React from 'react'
import hero from '../assets/hero.webp'

const Hero = () => {
  return (
    <section id='home' style={{ backgroundImage: `url(${hero})` }} className='w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center'>
      <div className='text-white m-24 max-sm:m-12 flex flex-col gap-4 ' >
        <p className='text-4xl max-sm:text-2xl mt-12'>Lava-Jato e Mecânica</p>
        <div className='border-b-4 w-40 border-sky-500'></div>
        <h3 className='text-5xl max-sm:text-3xl'>Brilho e limpeza <br />que fazem a diferença</h3>
        <p className='text-2xl max-sm:text-1xl'>Ligue pra Gente!</p>
        <div className='flex gap-2 items-center text-2xl'>
          <i className="fa-solid fa-phone"></i>
          <p className=' text-white'>21 2643-XXXX</p>

        </div>
        <p className='bg-sky-500 w-64 h-16 flex items-center justify-center text-3xl gap-1 hover:bg-black  duration-300 cursor-pointer'><i className="fa-brands fa-whatsapp"></i> Agende Agora</p>

      </div>

    </section>
  )
}

export default Hero