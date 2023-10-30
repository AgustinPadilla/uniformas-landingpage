import React, { useContext } from 'react'
import { ContactContext } from '../context/contact'

export const ContactDialog = () => {
  const { setContactOpen } = useContext(ContactContext)
  const closeContact = () => {
    setContactOpen(false)
  }
  return (
    <div className='fixed w-full h-full bg-gray-500 bg-opacity-60 z-30'>
      <div className='fixed bg-white text-black flex flex-col items-center p-12 z-40 w-5/6 md:w-[750px] h-2/5 center m-auto top-0 bottom-0 left-0 right-0 shadow-md'>
        <button onClick={closeContact} className='absolute top-0 right-0 p-3'><img src='x.svg' className='w-10' /></button>
        <h1 className='z-10 text-4xl md:text-6xl text-black font-extrabold drop-shadow-lg mb-6'>Contactanos!</h1>
        <div className='text-2xl flex flex-col gap-5 mt-8 transition-all'>
          <a className='flex gap-5 items-center hover:text-green-500 cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z'
              />
            </svg>
            Whatsapp
          </a>
          <a href='mailto:proyectouniformas@gmail.com' className='flex gap-5 items-center hover:text-red-500 cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
              />
            </svg>
            Correo Electronico
          </a>
        </div>
      </div>
    </div>
  )
}
