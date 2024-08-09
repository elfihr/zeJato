import React from 'react'
import { menuLink } from '../Helper/Helper'

const Footer = () => {
    return (
        <div className='w-full bg-white py-12 text-center flex flex-col items-center'>

            <p>Copyright &copy; Zé a Jato - a Fihr Site</p>

            <div className='grid grid-cols-3 max-md:grid-cols-1 justify-around gap-12 text-start px-36 mt-4 max-sm:px-4 '>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-3xl text-sky-500 font-semibold mb-4'>Contato</h4>
                    <p className='text-1xl'><i className="fa-solid fa-phone text-sky-500"></i> 21 2643-XXXX</p>
                    <p><i className="fa-solid fa-envelope text-sky-500"></i> zeajato@email.com</p>
                    <p><i className="fa-solid fa-location-dot text-sky-500"></i> Rio de Janeiro - Rj</p>
                </div>
                <div>
                    <h4 className='text-2xl text-sky-500 font-semibold mb-4'>Medias Sociais</h4>
                    <div className='flex gap-2 items-center'>
                        <i className="fa-brands fa-facebook socialMedia"></i>
                        <i className="fa-brands fa-youtube socialMedia"></i>
                        <i className="fa-brands fa-x-twitter socialMedia"></i>
                        <i className="fa-brands fa-instagram socialMedia"></i>
                    </div>
                </div>
                <div>
                    <h4 className='text-2xl text-sky-500 font-semibold mb-4'>Links Utéis</h4>
                    <div>
                        {menuLink.map((mLinks,index) => {
                            return(
                                <div key={index}>
                                    <a className=' relative hover:text-sky-500 duration-300 hover:left-4 left-0' href={mLinks.href}><i className="fa-solid fa-arrow-right"></i>{mLinks.label}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer