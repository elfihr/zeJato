import React from 'react'
import { testimonials } from '../helper/Helper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='py-20 flex flex-col gap- bg-white  text-center border-slate-700 border-y-2' id='testimonials'>
            <h3 className='text-5xl font-semibold text-sky-500'>Depoimentos</h3>
            <p className='text-3xl mt-3'>Veja a Opnião dos <span className='text-sky-500'>Nossos Clientes</span></p>
            <i className=" fa-solid fa-quote-right text-8xl text-stone-400"></i>
            <div className='text-center px-40 max-md:px-0'>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {testimonials.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <p className='italic'>{client.description}</p>
                        
                                <img src={client.img} className='w-80 h-80 my-10 rounded-full block m-auto'></img>
              

                                <p className='text-2xl text-sky-500 font-semibold'>{client.name}</p>
                            </SwiperSlide>
                        )
                    })}





                    ...
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials