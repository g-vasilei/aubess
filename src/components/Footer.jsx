import React from 'react'
import { Link } from 'react-router-dom'
import { FaGooglePlay } from 'react-icons/fa'
import { GrAppleAppStore } from 'react-icons/gr'

function Footer() {
   const today = new Date()
   const year = today.getFullYear()
   return (
      <footer className=' bg-white w-100'>
         <div
            className='grid
            items-start
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-10
            px-2
            md:px-8
            xl:px-0
            max-w-7xl
            xl:mx-auto
            mx-auto
            pt-10'
         >
            <div>
               <h3 className='text-xl font-bold text-gray-700'>Categories</h3>
               <ul className='text-gray-400 mt-4 flex flex-col gap-1 text-md'>
                  <li>
                     <Link to='/category/smart-diy-switch' className='hover:text-gray-900'>
                        Smart DIY Switch
                     </Link>
                  </li>
                  <li>
                     <Link to='/category/smart-plug' className='hover:text-gray-900'>
                        Smart Plug
                     </Link>
                  </li>
                  <li>
                     <Link to='/category/smart-sensor' className='hover:text-gray-900'>
                        Smart Sensor
                     </Link>
                  </li>
                  <li>
                     <Link to='/category/ir-remote-controller' className='hover:text-gray-900'>
                        IR Remote Controller
                     </Link>
                  </li>
                  <li>
                     <Link to='/category/gateway' className='hover:text-gray-900'>
                        Gateway
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className='text-xl font-bold text-gray-700'>Links</h3>
               <ul className='text-gray-400 mt-4 flex flex-col gap-1 text-md'>
                  <li>
                     <Link to='contact' className='hover:text-gray-900'>
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className='text-xl font-bold text-gray-700'>Apps</h3>
               <div className='flex-col items-center justify-start gap-y-2.5'>
                  <a
                     href='https://play.google.com/store/apps/details?id=com.tuya.smart'
                     className='flex items-center gap-x-2 mt-4'
                  >
                     <FaGooglePlay /> Tuya App
                  </a>
                  <a href='https://apps.apple.com/us/app/tuya-smart/id1034649547' className='flex items-center gap-x-2'>
                     <GrAppleAppStore /> Tuya App
                  </a>
               </div>
            </div>
         </div>
         <div
            className='px-2
            md:px-8
            xl:px-0
            max-w-7xl
            xl:mx-auto
            text-center
            pt-10
            pb-8
            mx-auto
            font-semibold'
         >
            aubess.eu © Copyright {year}. All right reserved{' '}
         </div>
      </footer>
   )
}

export default Footer
