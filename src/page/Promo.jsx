import React from 'react'
import promo from '../assets/promo.webp'

const Promo = () => {
  return (
    <section style={{backgroundImage: `url(${promo})`}} className='py-36 bg-cover bg-center bg-no-repeat bg-fixed flex justify-around text-white items-center max-lg:flex-col max-lg:gap-12 border-slate-700 border-y-2'>
        <h3 className='text-6xl text-center font-semibold max-[420px]:text-5xl'><span className='text-sky-500'>Desconto de 30% </span>Para<br/> Novos Clientes!!</h3>
        <button className='bg-sky-500 text-5xl py-8 w-[420px] max-[420px]:w-80 max-[420px]:text-4xl hover:bg-slate-950 duration-300 '><i className="fa-brands fa-whatsapp"></i>Agende Agora</button>
    </section>
  )
}

export default Promo