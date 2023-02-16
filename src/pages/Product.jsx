import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { VscFilePdf } from 'react-icons/vsc'
import { BiMessageSquareError } from 'react-icons/bi'
import ComponentSpinner from '../components/ComponentSpinner'
import data from '../Products/data'

function Product() {
   const params = useParams()
   const { slug } = params
   const { products } = data
   const [product, setProduct] = useState({})
   const [selectedImg, setSelectedImg] = useState(0)

   useEffect(() => {
      const fetchProducts = async () => {
         await setProduct(products?.find((currentProduct) => currentProduct.slug === slug))
      }

      fetchProducts()
   }, [slug])

   // if (error)
   //    return (
   //       <div className='w-100 min-h-[600px] flex items-center gap-4 py-10 justify-center text-2xl font-bold'>
   //          <BiMessageSquareError className='text-3xl' />
   //          <span>Product doesnt exist</span>
   //       </div>
   //    )
   // if (loading) return <ComponentSpinner />

   return (
      <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-2 my-10 lg:min-h-[600px] gap-10'>
         <div className='flex flex-col-reverse items-start justify-center gap-4 lg:max-h-[467px] w-100 lg:flex-row'>
            <div className='flex items-start justify-start overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-rounded-md gap-2 lg:flex-col lg:max-h-[345px] xl:max-h-[467px]'>
               {product?.img?.map((data, index) => (
                  <img
                     className='w-44 rounded-sm cursor-pointer'
                     onClick={(e) => setSelectedImg(index)}
                     src={data}
                     alt={product?.title}
                     key={index}
                  />
               ))}
            </div>
            <div className='flex-5'>
               <img className='w-100 rounded-sm' src={product?.img[selectedImg]} alt={product?.title} />
            </div>
         </div>
         <div>
            <div className='text-gray-400 text-sm inline-flex gap-1 whitespace-pre-line'>
               <span>
                  <Link to='/products'>Products</Link> {'>'} <Link to='/products/cat'>{product.title}</Link>
                  <span className='text-gray-600'>{data?.attributes?.title}</span>
               </span>
            </div>
            <h2 className='text-4xl font-bold mt-2'>{product?.title}</h2>
            <p>{product?.description}</p>
         </div>
      </div>
   )
}

export default Product
