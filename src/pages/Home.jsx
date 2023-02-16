import React from 'react'
import Categories from '../components/Categories'
import HotSell from '../components/HotSell'
import Slider from '../components/Slider'

function Home() {
   return (
      <div>
         <Slider />
         <HotSell />
         <Categories />
      </div>
   )
}

export default Home
