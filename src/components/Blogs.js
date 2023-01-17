import React from 'react'

//image
import blog from './../images/blog.png'

const Blogs = () => {
  return (
    <div className='pt-36'>
     <h1 className='font-roboto xl:font-black md:font-bold font-semibold text-white xl:text-6xl md:text-4xl text-3xl text-center mb-12'>Blogs</h1>
     <div className='grid lg:grid-cols-2 grid-cols-1 xl:gap-x-20 gap-x-14 gap-y-12'>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-items-stretch items-center xl:p-10 lg:p-8 md:p-6 p-4 xl:gap-10 lg:gap-8 md:gap-6 gap-4 cursor-pointer hover:scale-105 transition-all duration-500'>
               <img src={blog} alt="blog" className='h-full w-auto'/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg hover:text-greeny transition-all duration-500'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-items-stretch items-center xl:p-10 lg:p-8 md:p-6 p-4 xl:gap-10 lg:gap-8 md:gap-6 gap-4 cursor-pointer hover:scale-105 transition-all duration-500'>
               <img src={blog} alt="blog" className='h-full w-auto'/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg hover:text-greeny transition-all duration-500'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-items-stretch items-center xl:p-10 lg:p-8 md:p-6 p-4 xl:gap-10 lg:gap-8 md:gap-6 gap-4 cursor-pointer hover:scale-105 transition-all duration-500'>
               <img src={blog} alt="blog" className='h-full w-auto'/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg hover:text-greeny transition-all duration-500'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
          <div className='bg-blog rounded-2xl grid grid-cols-2 justify-items-stretch items-center xl:p-10 lg:p-8 md:p-6 p-4 xl:gap-10 lg:gap-8 md:gap-6 gap-4 cursor-pointer hover:scale-105 transition-all duration-500'>
               <img src={blog} alt="blog" className='h-full w-auto'/>
               <div>
                    <h2 className='font-roboto xl:font-black md:font-bold font-semibold text-white lg:text-2xl md:text-xl text-lg hover:text-greeny transition-all duration-500'>New version of Jeetubhaiya is coming soon</h2>
                    <p className='font-roboto xl:font-black md:font-bold font-semibold text-sm text-opacityblack'>10th January, 2023</p>
               </div>
          </div>
     </div>
    </div>
  )
}

export default Blogs