import React from 'react'

function ComponentSpinner() {
   return (
      <div className='w-100 min-h-[600px] flex items-center py-10 justify-center'>
         <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   )
}

export default ComponentSpinner
