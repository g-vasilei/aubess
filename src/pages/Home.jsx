import React from 'react'
import Categories from '../components/Categories'
import HotSell from '../components/HotSell'
import Slider from '../components/Slider'
import { Helmet } from 'react-helmet-async'
import { ScrollRestoration } from 'react-router-dom'

function Home() {
   return (
      <>
         <Helmet>
            <title>aubess.eu</title>
            <meta
               name='description'
               content='AUBESS is committed to designing and producing user-friendly smart home products.We provide a full range of smart home products at high-quality.'
            />
            <link rel='cononical' href='/' />
         </Helmet>

         <div>
            <Slider />
            <HotSell />
            <Categories />
         </div>
         <ScrollRestoration />
      </>
   )
}

export default Home
