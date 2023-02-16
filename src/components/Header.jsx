import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/aubess-logo.png'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { HiChevronDown } from 'react-icons/hi'

function Header() {
   const [isOpen, setIsOpen] = React.useState(false)

   const location = useLocation()

   const pathMatchRoute = (route) => {
      if (route === location.pathname) {
         return true
      }
   }

   return (
      <header className='bg-white z-50'>
         <div className='flex items-center justify-between text-center px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto py-5 relative text-lg z-50'>
            <div>
               <Link to='/'>
                  <img className='w-28 object-contain cursor-pointer' src={logo} alt='e-zy logo' />
               </Link>
            </div>
            <div className='block md:hidden z-10'>
               {isOpen ? (
                  <RxCross1 size={30} color='#ffffff' onClick={() => setIsOpen((prevState) => !prevState)} />
               ) : (
                  <RxHamburgerMenu size={30} onClick={() => setIsOpen((prevState) => !prevState)} />
               )}
            </div>
            <nav
               className={`transition-all ease-in-out duration-300 fixed w-screen h-screen flex flex-col items-center justify-center gap-4 bg-[#464C4F]  
               ${isOpen ? 'left-0 top-0 fixed' : '-left-full top-0'} 
               md:inline-flex md:relative md:w-fit md:h-fit md:flex-row md:bg-transparent md:left-auto md:space-x-5`}
            >
               <h3
                  className={
                     pathMatchRoute('/')
                        ? 'bg-[#464C4F] text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer'
                        : 'text-slate-100 md:text-gray-500 hover:bg-[#b2b8bb] hover:text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer transition-all duration-200 ease-in'
                  }
                  onClick={() => setIsOpen((prevState) => !prevState)}
               >
                  <Link to='/' className='text-base font-medium'>
                     Home
                  </Link>
               </h3>
               <h3
                  className={
                     pathMatchRoute('/category/smart-diy-switch')
                        ? 'bg-[#464C4F] text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer'
                        : 'text-slate-100 md:text-gray-500 hover:bg-[#b2b8bb] hover:text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer '
                  }
                  onClick={() => setIsOpen((prevState) => !prevState)}
               >
                  <Link to='/category/smart-diy-switch' className='text-base font-medium'>
                     Smart DIY Switch
                  </Link>
               </h3>
               <h3
                  className={
                     pathMatchRoute('/category/smart-plug')
                        ? 'bg-[#464C4F] text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer'
                        : 'text-slate-100 md:text-gray-500 hover:bg-[#b2b8bb] hover:text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer transition-all duration-200 ease-in'
                  }
                  onClick={() => setIsOpen((prevState) => !prevState)}
               >
                  <Link to='/category/smart-plug' className='text-base font-medium'>
                     Smart Plug
                  </Link>
               </h3>
               <h3
                  className={
                     pathMatchRoute('/category/smart-sensor')
                        ? 'bg-[#464C4F] text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer'
                        : 'text-slate-100 md:text-gray-500 hover:bg-[#b2b8bb] hover:text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer transition-all duration-200 ease-in'
                  }
                  onClick={() => setIsOpen((prevState) => !prevState)}
               >
                  <Link to='/category/smart-sensor' className='text-base font-medium'>
                     Smart Sensor
                  </Link>
               </h3>
               <h3
                  className={
                     pathMatchRoute('/category/ir-remote-controller')
                        ? 'bg-[#464C4F] text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer'
                        : 'text-slate-100 md:text-gray-500 hover:bg-[#b2b8bb] hover:text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer transition-all duration-200 ease-in'
                  }
                  onClick={() => setIsOpen((prevState) => !prevState)}
               >
                  <Link to='/category/ir-remote-controller' className='text-base font-medium'>
                     IR Remote Controller
                  </Link>
               </h3>
               <h3
                  className={
                     pathMatchRoute('/category/gateway')
                        ? 'bg-[#464C4F] text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer'
                        : 'text-slate-100 md:text-gray-500 hover:bg-[#b2b8bb] hover:text-white px-3 py-2 rounded-sm text-sm font-medium cursor-pointer transition-all duration-200 ease-in'
                  }
                  onClick={() => setIsOpen((prevState) => !prevState)}
               >
                  <Link to='/category/gateway' className='text-base font-medium'>
                     Gateway
                  </Link>
               </h3>
            </nav>
         </div>
      </header>
   )
}

export default Header
