import React, { useState } from 'react'
import { prices } from '../Helper/Helper'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Price = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='w-3/4  max-xl:w-10/12  m-auto pb-12' id='price'>
      <h3 className='text-sky-500 text-5xl pt-12 text-center font-semibold'>Preços e <span className='text-white'>Serviços</span></h3>

      <div className='mt-12'>
        <Slider {...settings}>
          {prices.map((item, index) => {
            return (
              <div className='bg-slate-500 h-[500px] text-black rounded-xl ' key={index}>
                <div className='h-56 flex justify-center items-center'>
                  <img className='h-full w-full ' src={item.img} alt='' />
             
                </div>

                <div className='flex h-72 flex-col justify-around items-center p-2 text-white'>
                  <p className='text-xl font-white font-semibold'>{item.name}</p>
                  <p>{item.description}</p>
                  <button className='border-2 b-white w-40 py-2 hover:bg-sky-500 duration-300'>Leia Mais</button>
                </div>
              </div>
            )

          })}
        </Slider>
      </div>
    </section>
  )
}

export default Price