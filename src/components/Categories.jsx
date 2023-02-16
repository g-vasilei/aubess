import React from 'react'
import all from '../assets/categories/all-products.png'
import cat1 from '../assets/categories/gateway.png'
import cat2 from '../assets/categories/smart-diy-switch.png'
import cat3 from '../assets/categories/smart-plug.png'
import cat4 from '../assets/categories/smart-sensor.png'
import cat5 from '../assets/categories/smart-switch.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Categories() {
   return (
      <>
         <h2 className='text-5xl font-bold text-center bg-[#EBECED] text-[#103948] py-10'>Categories</h2>
         <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto my-10 xl:my-0 flex flex-col gap-y-6 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-4 xl:gap-x-6 md:my-10'>
               <Link to='/products' className='group'>
                  <div className=' py-6'>
                     <div className='w-100 bg-white overflow-hidden'>
                        <img
                           className='h-96 w-100 mx-auto rounded-sm group-hover:scale-105 ease-in transition-all duration-300'
                           src={all}
                        />
                     </div>
                     <div className='px-5 mt-3 text-center'>
                        <h3 className='flex items-center justify-center gap-x-5'>
                           All Products <BsArrowRight className='group-hover:translate-x-2 ease-in duration-300' />
                        </h3>
                     </div>
                  </div>
               </Link>
               <Link to='/category/gateway' className='group'>
                  <div className=' py-6'>
                     <div className='w-100 bg-white overflow-hidden'>
                        <img
                           className='h-96 w-100 mx-0 rounded-sm group-hover:scale-105 ease-in transition-all duration-300'
                           src={cat1}
                        />
                     </div>
                     <div className='px-5 mt-3 text-center'>
                        <h3 className='flex items-center justify-center gap-x-5'>
                           Gateway <BsArrowRight className='group-hover:translate-x-2 ease-in duration-300' />
                        </h3>
                     </div>
                  </div>
               </Link>
               <Link to='/category/smart-diy-switch' className='group'>
                  <div className=' py-6'>
                     <div className='w-100 bg-white overflow-hidden'>
                        <img
                           className='h-96 w-100 mx-auto rounded-sm group-hover:scale-105 ease-in transition-all duration-300'
                           src={cat2}
                        />
                     </div>
                     <div className='px-5 mt-3 text-center'>
                        <h3 className='flex items-center justify-center gap-x-5'>
                           Smart DIY Switch <BsArrowRight className='group-hover:translate-x-2 ease-in duration-300' />
                        </h3>
                     </div>
                  </div>
               </Link>
               <Link to='/category/smart-plug' className='group'>
                  <div className=' py-6'>
                     <div className='w-100 bg-white overflow-hidden'>
                        <img
                           className='h-96 w-100 mx-auto rounded-sm group-hover:scale-105 ease-in transition-all duration-300'
                           src={cat3}
                        />
                     </div>
                     <div className='px-5 mt-3 text-center'>
                        <h3 className='flex items-center justify-center gap-x-5'>
                           Smart Plug <BsArrowRight className='group-hover:translate-x-2 ease-in duration-300' />
                        </h3>
                     </div>
                  </div>
               </Link>
               <Link to='/category/smart-sensor' className='group'>
                  <div className=' py-6'>
                     <div className='w-100 bg-white overflow-hidden'>
                        <img
                           className='h-96 w-100 mx-auto rounded-sm group-hover:scale-105 ease-in transition-all duration-300'
                           src={cat4}
                        />
                     </div>
                     <div className='px-5 mt-3 text-center'>
                        <h3 className='flex items-center justify-center gap-x-5'>
                           Smart Sensor <BsArrowRight className='group-hover:translate-x-2 ease-in duration-300' />
                        </h3>
                     </div>
                  </div>
               </Link>
               <Link to='/category/ir-remote-controller' className='group'>
                  <div className=' py-6'>
                     <div className='w-100 bg-white overflow-hidden'>
                        <img
                           className='h-96 w-100 mx-auto rounded-sm group-hover:scale-105 ease-in transition-all duration-300'
                           src={cat5}
                        />
                     </div>
                     <div className='px-5 mt-3 text-center'>
                        <h3 className='flex items-center justify-center gap-x-5'>
                           IR Remote Controller{' '}
                           <BsArrowRight className='group-hover:translate-x-2 ease-in duration-300' />
                        </h3>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </>
   )
}

export default Categories
