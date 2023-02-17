import React from 'react'
import emailjs from 'emailjs-com'
import { BiMailSend } from 'react-icons/bi'
import { useRef } from 'react'
import { useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Helmet } from 'react-helmet-async'
import { ScrollRestoration } from 'react-router-dom'

function Contact() {
   const form = useRef()
   const [emailStatus, setEmailStatus] = useState(null)

   const sendEmail = (e) => {
      e.preventDefault()
      if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
         setEmailStatus('Fill')
         return
      } else {
         emailjs.sendForm('service_zwkcupi', 'template_zcwy2if', form.current, 'HCrPDuuCMFeWiDyW6').then(
            (result) => {
               setEmailStatus('Success')
               console.log(result)
            },
            (error) => {
               setEmailStatus('Fail')
               console.log(error)
            }
         )
      }

      e.target.reset()
   }

   return (
      <>
         <Helmet>
            <title>Contact | aubess.eu</title>
            <meta name='description' content='Contact us' />
            <link rel='cononical' href='/contact' />
         </Helmet>

         <h2 className='text-5xl font-bold text-center bg-[#EBECED] text-[#103948] py-10 mt-5'>Contact Us</h2>

         <div className='max-w-2xl px-2 md:px-8 xl:px-0 xl:mx-auto my-10 xl:my-0 pb-16'>
            <p className='my-10'>
               If you have any questions or problems, please feel free to contact us. <br />
               <br />
               <br /> We will reply to help and resolve the issue as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail}>
               <input type='text' name='name' id='' placeholder='Name' className='w-full h-10 mb-5 px-2 rounded-sm' />
               <input type='mail' name='email' id='' placeholder='email' className='w-full h-10 mb-5 px-2 rounded-sm' />
               <input
                  type='text'
                  name='message'
                  id=''
                  placeholder='Message'
                  className='w-full h-32  mb-5  px-2 rounded-sm'
               />
               <button type='submit' className='flex items-center gap-x-2 px-4 py-2 bg-[#464C4F] text-white rounded-sm'>
                  Send <BiMailSend size={18} />
               </button>
            </form>
            {emailStatus === 'Success' && (
               <div className='bg-lime-600 rounded-sm mt-5 px-4 flex items-center gap-4 text-white py-1'>
                  <BsFillCheckCircleFill fill='#fff' /> Email was send
               </div>
            )}
            {emailStatus === 'Fill' && (
               <div className='bg-orange-300 rounded-sm mt-5 px-4 flex items-center gap-4 text-white py-1 '>
                  <RiErrorWarningLine /> Please fill all fields
               </div>
            )}
            {emailStatus === 'Fail' && (
               <div className='bg-red-700 rounded-sm mt-5 px-4 flex items-center gap-4 text-white py-1'>
                  <RiErrorWarningLine /> There was an error, please try again later
               </div>
            )}
         </div>
         <ScrollRestoration />
      </>
   )
}

export default Contact
