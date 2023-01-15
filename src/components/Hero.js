import React from 'react'

// image
import hero from './../images/hero.png'

const Hero = () => {
     return (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:justify-items-end justify-items-center content-center pt-44' id='hero'>

               <div className='my-auto'>

                    <h1 className='font-roboto xl:font-black lg:font-extrabold md:font-bold font-semibold xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-white'>Jeetubhaiya</h1>

                    <p className='font-poppins xl:font-semibold lg:font-medium md:font-normal font-light xl:text-2xl lg:text-xl md:text-lg text-base text-butter mt-8'>Jeetubhaiya connects mentors and mentees for free, open source learning.</p>

               </div>

                    <img src={hero} alt="Hero section" className='mt-9 sm:mt-0'/>

          </div>
     )
}

export default Hero