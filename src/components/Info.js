import React from 'react'

//image
import info from './../images/info.png'

const Info = () => {
     return (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:justify-items-start justify-items-center content-center pt-36 gap-x-8 gap-y-6' id='info'>

               <img src={info} alt="Info section" className='order-last sm:order-first'/>

               <div className='my-auto order-first sm:order-last'>

                    <p className='font-poppins lg:font-normal md:font-light lg:text-2xl md:text-xl sm:text-lg text-base text-butter lg:leading-9 md:leading-7 leading-5'>Our free platform connects mentors and mentees to create a supportive learning environment. Our goal is to make knowledge accessible to all. As an open source project, we welcome contributions and feedback. Join us to facilitate meaningful learning experiences with mentors and mentees from all walks of life.</p>

               </div>

          </div>
     )
}

export default Info