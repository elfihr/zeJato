import React from 'react'
import product from '../assets/products.webp'
import { prodGall } from '../Helper/Helper'

const Products = () => {
  return (
    <div style={{backgroundImage: `url(${product})`}} className='bg-cover bg-center bg-no-repeat bg-fixed py-12 gap-4 flex flex-col items-center text-white border-slate-700 border-y-2 max-sm:bg-scroll'>
      <h3 className='text-5xl font-semibold'>Produtos</h3>
      <div className='border-2 border-sky-500 w-20 '></div>
      <p className='text-3xl text-center'>Só Trabalhamos com as <span className='text-sky-500 font-semibold'>Melhores Marcas</span></p>
      <div className='grid gap-4 px-12  grid grid-cols-4 mt-4 max-lg:grid-cols-3 max-md:grid-cols-2'>
         {prodGall.map((prod,index) => {
        return(
          <img key={index} className='w-60 h-60 hover:scale-110 duration-300 max-md:w-40 max-md:h-40' src={prod.name} alt='produtos'/>
        )
      })}
      </div>
     
      <div>

      </div>
    </div>
  )
}

export default Products