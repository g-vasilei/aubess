import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../Products/data'
import { categoryValue } from '../utils/category'
import { Helmet } from 'react-helmet-async'
import { ScrollRestoration } from 'react-router-dom'

function Category() {
   const params = useParams()
   const { cat_slug } = params
   const { products } = data

   return (
      <>
         <Helmet>
            <title> {categoryValue(cat_slug)} | aubess.eu</title>
            <meta name='description' content='Category' />
            <link rel='cononical' href={`/category/${categoryValue(cat_slug)}`} />
         </Helmet>

         <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto my-20 flex flex-col gap-y-6 '>
            <h2 className='text-4xl font-bold'>{categoryValue(cat_slug)}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:py-16 gap-3 md:gap-x-4'>
               {products?.map(
                  (product) =>
                     product.category_slug === cat_slug && (
                        <Link to={`/product/${product.slug}`} key={product?.id}>
                           <div className='border border-gray-200 shadow-sm rounded-md py-6 bg-white'>
                              <div className='w-100'>
                                 <img className='h-44 w-100 mx-auto' src={product.img[0]} alt={product?.title} />
                              </div>
                              <div className='px-5 mt-3'>
                                 <span className='text-ellipsis text-sm overflow-hidden text-gray-400'>
                                    {product.category}
                                 </span>
                                 <h3 className='h-[50px] text-ellipsis overflow-hidden'>{product?.title}</h3>
                              </div>
                           </div>
                        </Link>
                     )
               )}
            </div>
         </div>
         <ScrollRestoration />
      </>
   )
}

export default Category
