import React from 'react'
import { services } from '../Helper/Helper'

const Service = () => {
    return (
        <section className='flex flex-col items-center py-20 bg-slate-100 justify-center text-center px-1'>
            <h3 id='service' className='text-sky-500 text-6xl uppercase font-bold'>Nossos Serviços</h3>
            <p>De Alguns dos Nossos Serviços</p>
            <p className='text-sky-500 text-4xl'>Oferececemos Serviços de Lava-Jato a Mecanica</p>
            <div className='mt-16 flex flex-wrap gap-8 px-20 justify-center max-lg:px-10 max-sm:px-2'>
                {services.map((serv, index) => {
                    return (
                        <div className='text-5xl flex flex-col items-center bg-white w-80 py-6 px-4 text-center gap-2 cursor-pointer hover:scale-110 duration-300'>
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