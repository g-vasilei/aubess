import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ComponentSpinner from '../components/ComponentSpinner'
import useFetch from '../hooks/useFetch'

function Products() {
   const [productName, setProductName] = useState('')
   //const [products, setProducts] = useState(null)
   // const [loading, setLoading] = useState(false)
   // const [error, setError] = useState(false)
   //const url = `/products?populate=*&filters[$or][title][$eq]=${productName}`
   const [state, setState] = useState(null)

   const { data, loading, error } = useFetch('/products?populate=*')

   const handleChange = (e) => {
      setProductName(e.target.value)
   }

   // if (error) return <div>There was an error</div>

   // if (loading)
   //    return (
   //       <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto'>
   //          <ComponentSpinner />
   //       </div>
   //    )

   return (
      <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto my-10 lg:min-h-[600px] flex flex-col gap-10'>
         <div className='w-full inline-flex items-center justify-center'>
            <input
               type='text'
               value={productName}
               onChange={handleChange}
               className='px-5 py-4 shadow-sm rounded-full w-6/12'
            />
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {data?.map((product) => (
               <Link to={`/product/${product?.id}`} key={product?.id}>
                  <div className='border border-gray-200 shadow-sm rounded-md py-6 bg-white'>
                     <div className='w-100'>
                        <img
                           className='h-44 w-100 mx-auto'
                           src={import.meta.env.VITE_IMG_URL + product?.attributes?.pictures?.data[0]?.attributes?.url}
                           alt={product?.attributes?.title}
                        />
                     </div>
                     <div className='px-5 mt-3'>
                        <span className='text-ellipsis text-sm overflow-hidden text-gray-400'>
                           {product?.attributes?.sub_categories?.data[0]?.attributes.title}
                        </span>
                        <h3 className='h-[50px] text-ellipsis overflow-hidden'>{product?.attributes?.title}</h3>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   )
}

export default Products
