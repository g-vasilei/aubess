import { BiHash } from 'react-icons/bi'
import { Helmet } from 'react-helmet-async'

function NotFound() {
   return (
      <>
         <Helmet>
            <title> Not Found | aubess.eu</title>
            <meta name='description' content='Not Found' />
            <link rel='cononical' href={`*`} />
         </Helmet>

         <div className='w-full h-[70vh] text-6xl flex items-center justify-center mx-auto gap-5 font-bold max-w-7xl '>
            <BiHash size={70} className='font-bold' /> 404, Page Not Found
         </div>
      </>
   )
}

export default NotFound
