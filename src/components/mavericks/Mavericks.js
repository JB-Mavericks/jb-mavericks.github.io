import React from 'react'
import Adib from './Adib'
import Alexpy from './Alexpy'
import Marzan from './Marzan'

const Mavericks = () => {
     return (
          <div>
               <div className='grid grid-cols-3 justify-items-stretch'>
                    <Alexpy />
                    <Adib />
                    <Marzan />
               </div>
          </div>
     )
}

export default Mavericks