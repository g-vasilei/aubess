import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import slide1 from '../assets/slider/slide-1.png'
import slide2 from '../assets/slider/slide-2.png'
import slide3 from '../assets/slider/slide-3.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

function Slider() {
   const [currentSlide, setCurrentSlider] = useState(0)

   const data = [
      {
         img: slide1,
      },
      {
         img: slide2,
      },
      {
         img: slide3,
      },
   ]

   const prevSlide = () => {
      setCurrentSlider(currentSlide === 0 ? 2 : (prev) => prev - 1)
   }
   const nextSlide = () => {
      setCurrentSlider(currentSlide === 2 ? 0 : (prev) => prev + 1)
   }

   useEffect(() => {
      const interval = setInterval(() => {
         if (currentSlide == 0) {
            setCurrentSlider(1)
         }
         if (currentSlide === 1) {
            setCurrentSlider(2)
         }
         if (currentSlide === 2) {
            setCurrentSlider(0)
         }
      }, 5000)
      return () => clearInterval(interval)
   }, [currentSlide])

   return (
      <>
         <div className='h-[700px] w-screen relative overflow-hidden'>
            <div className='w-[300vw] flex h-full' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
               <div
                  className='relative w-screen h-full object-cover bg-center bg-cover'
                  style={{ backgroundImage: `url(${data[0].img})` }}
               ></div>
               <div
                  className='relative w-screen h-full object-cover bg-center bg-cover'
                  style={{ backgroundImage: `url(${data[1].img})` }}
               ></div>
               <div
                  className='relative w-screen h-full object-cover bg-center bg-cover'
                  style={{ backgroundImage: `url(${data[2].img})` }}
               ></div>
            </div>
         </div>
         <div>
            <div className='flex items-center justify-center gap-x-4 bg-white h-12'>
               <div className='left-arrow' onClick={prevSlide}>
                  <MdKeyboardArrowLeft
                     size={20}
                     className='fill-border-[#464C4F] hover:fill-bg-[#464C4F] cursor-pointer'
                  />
               </div>
               <div
                  className={
                     currentSlide === 0
                        ? 'w-2.5 h-2.5 rounded-full bg-[#464C4F] cursor-pointer'
                        : 'w-2.5 h-2.5 rounded-full border border-[#464C4F] cursor-pointer'
                  }
                  onClick={() => setCurrentSlider(0)}
               ></div>
               <div
                  className={
                     currentSlide === 1
                        ? 'w-2.5 h-2.5 rounded-full bg-[#464C4F] cursor-pointer'
                        : 'w-2.5 h-2.5 rounded-full border border-[#464C4F] cursor-pointer'
                  }
                  onClick={() => setCurrentSlider(1)}
               ></div>
               <div
                  className={
                     currentSlide === 2
                        ? 'w-2.5 h-2.5 rounded-full bg-[#464C4F] cursor-pointer'
                        : 'w-2.5 h-2.5 rounded-full border border-[#464C4F] cursor-pointer'
                  }
                  onClick={() => setCurrentSlider(2)}
               ></div>
               <div className='right-arrow' onClick={nextSlide}>
                  <MdKeyboardArrowRight
                     size={20}
                     className='fill-border-[#464C4F] hover:fill-bg-[#464C4F] cursor-pointer'
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default Slider
