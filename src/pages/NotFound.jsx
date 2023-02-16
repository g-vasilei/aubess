import { BiHash } from 'react-icons/bi'

function NotFound() {
   return (
      <div className='w-full h-[70vh] text-6xl flex items-center justify-center mx-auto gap-5 font-bold max-w-7xl '>
         <BiHash size={70} className='font-bold' /> 404, Page Not Found
      </div>
   )
}

export default NotFound
