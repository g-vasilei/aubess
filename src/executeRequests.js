import axios from 'axios'

export const executeRequests = axios.create({
   baseURL: import.meta.env.VITE_API,
   headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_API_TOKEN,
   },
})
