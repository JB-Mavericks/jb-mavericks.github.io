import React from 'react'
import Adib from './Adib'
import Alexpy from './Alexpy'
import Marzan from './Marzan'

const Mavericks = () => {
     return (
          <div>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Alexpy />
                    <Adib />
                    <Marzan />
               </div>
          </div>
     )
}

export default Mavericks