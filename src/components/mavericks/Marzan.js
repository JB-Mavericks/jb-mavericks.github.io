import React from 'react'

//image
import marzan from './../../images/marzan.png'

//icons
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const Marzan = () => {
     return (
          <div className=' bg-blackLight px-6 py-8 border-greeny border-3' style={{ borderRadius: '20px' }}>
               <img src={marzan} alt='marzan' className='w-24 h-24 rounded-full border-3 border-greeny' />
               <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg mt-4'>Marzan Bin Rahman</h2>
               <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack mt-1'>Linux Enthusiast | Freedom Lover | Web Dev</p>
               <div className='flex gap-x-5 text-2xl text-opacityblack mt-5'>
                    <AiOutlineGithub />
                    <AiFillLinkedin />
                    <AiOutlineGlobal />
               </div>
               <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack mt-7 mb-3'>Project Contribution: </p>
               <ul className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-white list-disc ml-4'>
                    <li>Lead Designer</li>
                    <li>Designed the mobile application</li>
                    <li>Designed and developed the portfolio website of our Application</li>

               </ul>
               <h3 className='font-dancing font-normal text-xl text-white mt-4'>Dev on Fire</h3>
          </div>
     )
}

export default Marzan