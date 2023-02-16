import React from 'react'
import img1 from '../assets/antena.png'
import { BsArrowRight } from 'react-icons/bs'

function Categories() {
   return (
      <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto my-20 gap-10 grid grid-cols-3'>
         <div className='bg-slate-200 inline-flex justify-between px-11 py-8 rounded-md border border-gray-200 hover:shadow-md transition-shadow duration-300'>
            <div className='flex flex-col gap-14 justify-center'>
               <span className='text-lg font-semibold'>Antenna 2.4GHZ</span>
               <span className='flex items-center gap-2 font-semibold text-gray-600 group cursor-pointer'>
                  <span className='group-hover:text-gray-800'>More</span>
                  <BsArrowRight className='text-gray-600 transition transform group-hover:translate-x-2 duration-300 group-hover:text-gray-800' />
               </span>
            </div>
            <img className='w-16' src={img1} alt='' />
         </div>
         <div className='bg-slate-200 inline-flex justify-between px-11 py-8 rounded-md border border-gray-200 hover:shadow-md transition-shadow duration-300'>
            <div className='flex flex-col gap-14 justify-center'>
               <span className='text-lg font-semibold'>Antenna 2.4GHZ</span>
               <span className='flex items-center gap-2 font-semibold text-gray-600 group cursor-pointer'>
                  <span className='group-hover:text-gray-800'>More</span>
                  <BsArrowRight className='text-gray-600 transition transform group-hover:translate-x-2 duration-300 group-hover:text-gray-800' />
               </span>
            </div>
            <img className='w-16' src={img1} alt='' />
         </div>
         <div className='bg-slate-200 inline-flex justify-between px-11 py-8 rounded-md border border-gray-200 hover:shadow-md transition-shadow duration-300'>
            <div className='flex flex-col gap-14 justify-center'>
               <span className='text-lg font-semibold'>Antenna 2.4GHZ</span>
               <span className='flex items-center gap-2 font-semibold text-gray-600 group cursor-pointer'>
                  <span className='group-hover:text-gray-800'>More</span>
                  <BsArrowRight className='text-gray-600 transition transform group-hover:translate-x-2 duration-300 group-hover:text-gray-800' />
               </span>
            </div>
            <img className='w-16' src={img1} alt='' />
         </div>
      </div>
   )
}

export default Categories
