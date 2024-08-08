import React from 'react'
import service from '../assets/price.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
//==================Import Swiper styles==================
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { prices } from '../Helper/Helper';

const Price = () => {
    return (
        <section style={{ backgroundImage: `url(${service})` }} className='w-full h-auto bg-cover bg-no-repeat bg-center py-28 bg-fixed flex flex-col justify-center text-center'>
            <h3 className='text-white text-6xl uppercase font-bold '>Nossos Preços</h3>
            <div className='mt-20 flex flex-wrap gap-8 justify-around max-xl:px-40 max-lg:px-20 max-md:px-2'>
                {prices.map((itens,index) => {
                    return(
                        <div className='text-white relative bg-slate-500 flex flex-col'>
                            <img className='w-72 h-56' src={itens.img} alt='service'/>
                            <p className='absolute top-2 left-2 text-1xl bg-sky-500 opacity-80'>R$ {itens.value}</p>
                            <div className='w-72 h-72 flex flex-col gap-4 items-center justify-between py-4'>
                                <h3 className='text-2xl'>{itens.name}</h3>
                                <p>{itens.description}</p>
                                <button className='border-2 b-white w-40 py-2 hover:bg-sky-500 duration-300'>Entre em Contato</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Price