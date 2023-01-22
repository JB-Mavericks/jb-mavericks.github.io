import React from 'react'
import Adib from './Adib'
import Alexpy from './Alexpy'
import Marzan from './Marzan'

const Mavericks = () => {
     return (
          <div className='pt-36' id="mavericks">
               <h1 className='font-roboto xl:font-black md:font-bold font-semibold text-white xl:text-6xl md:text-4xl text-3xl text-center mb-12'>JB-mavericks</h1>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Alexpy />
                    <Adib />
                    <Marzan />
               </div>
          </div>
     )
}

export default Mavericks