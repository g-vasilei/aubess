import React from 'react'
import { Link } from 'react-router-dom'

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
            xl:grid-cols-4
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
                     <Link to='#' className='hover:text-gray-900'>
                        Antenna 2.4Ghz
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Antenna 5.xGHz
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        PoE
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Power Supply
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Coaxial
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Accessories
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Connector
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Pigtail
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Adapter
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className='text-xl font-bold text-gray-700'>Links</h3>
               <ul className='text-gray-400 mt-4 flex flex-col gap-1 text-md'>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Contact
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Warranty and RMA
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        About Us
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='hover:text-gray-900'>
                        Calculations
                     </Link>
                  </li>
               </ul>
            </div>
            {/* <div className='inline-flex justify-center items-center'>
               <div className='flex-col text-start'>
                  <h3 className='text-xl font-bold text-gray-700'>Links</h3>
                  <ul className='text-gray-400 mt-4 flex flex-col gap-1 text-md'>
                     <li>Contact</li>
                     <li>Warranty and RMA</li>
                     <li>About Us</li>
                     <li>Calculations</li>
                  </ul>
               </div>
            </div> */}
            <div>
               <h3 className='text-xl font-bold text-gray-700'>About Us</h3>
               <p className='text-gray-400 mt-4 flex flex-col gap-1 text-md'>
                  e-zy.net designs and manufactures both short and long range high speed wireless communications
                  products. The company's indoor and outdoor WLAN products are standards based to insure
                  interoperability. Headquartered in Hong Kong, e-zy.net also has offices and warehouse facilities in
                  Europe, the USA and representatives worldwide.
               </p>
            </div>
            <div>
               <h3 className='text-xl font-bold text-gray-700'>Contact</h3>
               <p className='text-gray-400 mt-4 flex flex-col gap-1 text-md'>
                  Room 304 Dominion Center
                  <br /> 43 Queens Rd East,
                  <br /> Wan Chai Hong Kong
               </p>
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
            e-zy.net © Copyright {year}. All right reserved{' '}
         </div>
      </footer>
   )
}

export default Footer
