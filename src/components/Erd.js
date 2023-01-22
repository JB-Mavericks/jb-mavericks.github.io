import React from 'react'

//image
import erd from './../images/erd.png'

const Erd = () => {
  return (
     <div className='flex flex-col pt-36' id='erd'>
     <h1 className='font-roboto xl:font-black md:font-bold font-semibold text-white xl:text-6xl md:text-4xl text-3xl text-center mb-12'>ERD</h1>
     <img src={erd} alt="ERD design" className='w-5/6 h-auto mx-auto rounded-2xl'/>
    </div>
  )
}

export default Erd