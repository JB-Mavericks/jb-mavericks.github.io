import React from 'react'

//image
import blog from './../images/blog.png'

const Blogs = () => {
  return (
    <div className='pt-36'>
     <h1 className='font-roboto xl:font-black md:font-bold font-semibold text-white xl:text-6xl md:text-4xl text-3xl text-center mb-12'>Blogs</h1>
     <div className='grid grid-cols-2 gap-x-20 gap-y-12'>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-center items-center p-10 gap-10'>
               <img src={blog} alt="blog"/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-center items-center p-10 gap-10'>
               <img src={blog} alt="blog"/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-center items-center p-10 gap-10'>
               <img src={blog} alt="blog"/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-center items-center p-10 gap-10'>
               <img src={blog} alt="blog"/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
     </div>
    </div>
  )
}

export default Blogs