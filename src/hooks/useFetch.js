import { useEffect, useState } from 'react'
import axios from 'axios'
import { executeRequests } from '../executeRequests'

const useFetch = (url) => {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            setLoading(true)
            const res = await executeRequests.get(url)
            setData(res.data.data)
         } catch (error) {
            setError(error)
            console.log(error)
         }
         setLoading(false)
      }
      fetchProduct()
   }, [url])

   return { data, loading, error }
}

export default useFetch
