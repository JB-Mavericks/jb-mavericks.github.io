import React from 'react'

//images
import python from './../images/python.svg'
import lucid from './../images/lucid.svg'
import github from './../images/github.svg'
import azure from './../images/azure.svg'
import flutter from './../images/flutter.svg'
import figma from './../images/figma.svg'
import django from './../images/django.svg'
import dart from './../images/dart.svg'

const Techs = () => {
     return (
          <div className='pt-36' id='tech'>
               <h1 className='font-roboto xl:font-black md:font-bold font-semibold text-white xl:text-6xl md:text-4xl text-3xl text-center mb-12'>Tech Stack</h1>
               <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-12 content-center justify-items-center'>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={dart} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Dart</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={flutter} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Flutter</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={python} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Python</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={azure} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Azure</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={django} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Django</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={figma} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Figma</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={github} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>GitHub</p>
                    </div>
                    <div className='w-28 sm:w-36 h-28 sm:h-36 bg-blackLight rounded-xl flex flex-col justify-center items-center'>
                         <img src={lucid} alt='Dart' className='w-auto h-auto' />
                         <p className='text-white font-montserrat font-semibold text-2xl'>Lucid</p>
                    </div>
               </div>
          </div>
     )
}

export default Techs