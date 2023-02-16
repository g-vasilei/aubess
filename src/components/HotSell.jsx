import { Link } from 'react-router-dom'
import data from '../Products/data'

function FeaturedProducts() {
   const { products } = data
   return (
      <>
         <h2 className='text-5xl font-bold text-center bg-[#EBECED] text-[#103948] py-10'>Hot Sell</h2>
         <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto my-10 xl:my-0 flex flex-col gap-y-6 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-x-4 md:my-10'>
               {products?.map(
                  (product, idx) =>
                     idx < 4 && (
                        <Link to={`/product/${product.slug}`} key={product?.id}>
                           <div className='border border-gray-200 shadow-sm hover:shadow-md transition-all ease-in-out duration-300 rounded-md py-6 bg-white'>
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
      </>
   )
}

export default FeaturedProducts
