import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import { navLinks } from '../constants'


const Navbar = () => {
    const [isActive, setIsActive] = useState("");
    const [toggle, setToggle] = useState(false);



  return (
    <div>
      <nav
      className= "px-6 w-full flex items-center py-2 fixed top-0 z-10 backdrop-filter backdrop-blur-sm"
      
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

            <Link
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
                setIsActive("");
                window.scrollTo(0,0);
            }}>

            <div className='w-[80px] h-[80px] object-contain noselect'>
                <img className='w-full h-auto' src='../img/nr-logo.png' alt='nrlogo'/>
                
            </div>
            <p className='text-[14px] md:text-black md:text-[18px] font-bold cursor-pointer'>Naikou &nbsp;| Fullstack developer</p>
            </Link>

            <ul className='list-none hidden sm:flex flex-row gap-10'>

                {navLinks.map(link => (
                    <li
                    key={link.id}
                    className={`${
                        isActive === link.title
                        ? " text-cyan-300"
                        : " text-gray-600"

                    } hover:text-purple-700 text-[20px] font-bold cursor-pointer`}
                    oncClick={() => setIsActive(link.title)}
                    >
                        <a href={[`#${link.id}`]}>{link.title}</a>
                    </li>
                ))}

            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center z-20">

              {toggle ? (<AiOutlineClose  className='"h-10 w-10' alt="close" onClick={() => setToggle(!toggle)}/>)
                      : (<BiMenuAltRight className='h-10 w-10' alt="menu" onClick={() => setToggle(!toggle)}/>)
              } 

            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 max-4 my-2 min-w[140px] z-10 rounded-xl`}>

              
            <ul className='list-none  flex justify-end items-start flex-col gap-4'>

              {navLinks.map(link => (
                  <li
                  key={link.id}
                  className={`${
                      isActive === link.title
                      ? " text-cyan-300"
                      : " text-gray-600"

                  } text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setIsActive(link.title);
                  }}
                  
                  >
                      <a href={[`#${link.id}`]}>{link.title}</a>
                  </li>
              ))}

              </ul>


            </div>

            </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar