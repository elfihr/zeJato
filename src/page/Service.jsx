import React from 'react'
import { services } from '../Helper/Helper'

const Service = () => {
    return (
        <section className='flex flex-col items-center py-20  justify-center text-center px-1' id='service'>
            <h3 id='service' className='text-white text-6xl uppercase font-bold'>Nossos <span className='text-sky-500'>Serviços</span></h3>
            <p className='text-white text-4xl'><span className='text-sky-500'>Oferecemos Serviços</span> de Lava-Jato e Mecanica</p>
            <div className='mt-16 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 justify-center'>
                {services.map((serv, index) => {
                    return (
                        <div key={index} className='text-5xl flex flex-col items-center bg-white w-80 py-6 px-4 text-center gap-2 cursor-pointer hover:scale-110 duration-300'>
                            <img className='w-20 h-20'  src={serv.img} alt='serviços'/>
                            <h4 className='text-4xl text-sky-500'>{serv.name}</h4>
                            <p className='text-2xl text-slate-500'>{serv.description}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Service