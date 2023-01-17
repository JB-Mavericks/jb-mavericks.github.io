import React from 'react'

//image
import marzan from './../../images/marzan.png'

//icons
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const Marzan = () => {
     return (
          <div className=' bg-blackLight px-6 py-8 border-greeny border-3 hover:shadow-2xl hover:shadow-greeny hover:scale-105 transition-all duration-500 z-10' style={{ borderRadius: '20px' }}>
               <img src={marzan} alt='marzan' className='w-24 h-24 rounded-full border-3 border-greeny' />
               <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg mt-4'>Marzan Bin Rahman</h2>
               <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack mt-1'>Linux Enthusiast | Freedom Lover | Web Dev</p>
               <div className='flex gap-x-5 text-2xl text-opacityblack mt-5'>
                    <a href='https://github.com/marzan-bin-rahman' target="_blank"><AiOutlineGithub /></a>
                    <a href='https://www.linkedin.com/in/marzan-bin-rahman-9400a0223/' target="_blank"><AiFillLinkedin /></a>
                    <a href='https://marzan.me/' target="_blank"><AiOutlineGlobal /></a>
               </div>
               <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack mt-7 mb-3'>Project Contribution: </p>
               <ul className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-white list-disc ml-4'>
                    <li>Lead Designer</li>
                    <li>Designed the mobile application</li>
                    <li>Designed and developed the portfolio website of our Application</li>

               </ul>
               <h3 className='font-dancing font-normal text-xl text-white mt-4'>Analysing Websites &#128269;</h3>
          </div>
     )
}

export default Marzan