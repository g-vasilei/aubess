import React from 'react'
import { useParams } from 'react-router-dom'
import ComponentSpinner from '../components/ComponentSpinner'
import useFetch from '../hooks/useFetch'
import { BiMessageSquareError } from 'react-icons/bi'

function Category() {
   const catId = parseInt(useParams().id)

   // const url = `/categories/${catId}`
   // const { data, loading, error } = useFetch(url)

   const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
   console.log(data)

   if (error)
      return (
         <div className='w-100 min-h-[600px] flex items-center gap-4 py-10 justify-center text-2xl font-bold'>
            <BiMessageSquareError className='text-3xl' />
            <span>Category doesnt exist</span>
         </div>
      )
   if (loading) return <ComponentSpinner />

   return (
      <div className='px-2 md:px-8 xl:px-0 max-w-7xl xl:mx-auto my-10 lg:min-h-[600px]'>
         {/* <h2 className='text-2xl font-bold'>{data?.attributes?.title}</h2>
         {data?.attributes?.sub_categories?.data?.map((subCat, index) => (
            <div key={subCat.id}>{subCat.id}</div>
         ))} */}
      </div>
   )
}

export default Category
