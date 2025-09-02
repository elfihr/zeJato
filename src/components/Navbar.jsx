import React, { useEffect, useState, useRef } from 'react'
import { menuLink } from '../helper/Helper'
import { Fade as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    

    const btnRef = useRef()
    
    useEffect(() => {
        const closeDropdown = e => {
            if (!btnRef.current.contains(e.target)) {
                setIsMobile(false);
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, [])

    return (
        <nav className={color ?
            'fixed top-0 left-0 flex justify-between w-full py-5 px-16 max-sm:px-8 items-center bg-white duration-300 z-20 shadow-2xl'
            :
            'fixed top-0 left-0 flex justify-between w-full py-5 px-16 max-sm:px-8 items-center text-white duration-300 z-20 max-lg:bg-white'}
        >
            <div className={!isMobile && color ? 'flex gap-2  text-black border-black' : 'flex gap-2  text-white max-lg:text-black max-lg:border-black duration-300'}>
                <i className="fa-solid fa-car-side text-3xl"></i>
                <h3 className='text-4xl logoF'>ZéAJato</h3>
            </div>
            <div className={isMobile ? " max-lg:absolute max-lg:flex-col max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:h-72 max-lg:bg-slate-400 max-lg:overflow-hidden max-lg:shadow-lg text-black" : "flex gap-8 text-white max-lg:hidden"}>
                {menuLink.map((link, index) => {
                    return (
                        <ul key={index} className={!isMobile && color ? 'text-black': 'text-white'}>
                            <li  >
                                <a href={link.href} className='relative cursor-pointer text-center text-2xl max-lg:block max-lg:mt-3 hover:text-sky-500 duration-300'>{link.label}</a>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className="text-black hidden max-lg:block" onClick={() => setIsMobile(!isMobile)} ref={btnRef}>
                {<Hamburger toggled={isMobile} toggle={setIsMobile} />}
            </div>
        </nav>
    )
}

export default Navbar