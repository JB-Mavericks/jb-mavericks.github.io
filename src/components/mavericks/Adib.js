import React from 'react'

//image
import adib from './../../images/adib.png'

//icons
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const Adib = () => {
     return (
          <div className=' bg-blackLight px-6 py-8 border-greeny border-3 hover:shadow-2xl hover:shadow-greeny hover:scale-105 transition-all duration-500 z-10' style={{ borderRadius: '20px' }}>
               <img src={adib} alt='adib' className='w-24 h-24 rounded-full border-3 border-greeny' />
               <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg mt-4'>Mohammed Adib</h2>
               <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack mt-1'>Linux Fan | Pythonista | Technophile</p>
               <div className='flex gap-x-5 text-2xl text-opacityblack mt-5'>
                    <a href='https://github.com/ADIB-the-NOOB' target="_blank"><AiOutlineGithub /></a>
                    <a href='https://www.linkedin.com/in/mohammed-adib-550/' target="_blank"><AiFillLinkedin /></a>
                    <a href='https://adib-the-noob.github.io/Developer-Portfolio/' target="_blank"><AiOutlineGlobal /></a>
               </div>
               <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack mt-7 mb-3'>Project Contribution: </p>
               <ul className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-white list-disc ml-4'>
                    <li>Lead Backend Developer</li>
                    <li>Designed Database</li>
                    <li>Designer and maintainer of the API of our Application</li>
               </ul>
               <h3 className='font-dancing font-normal text-xl text-white mt-4'>Materialising my plans &#127959;</h3>
          </div>
     )
}

export default Adib