import React, { useContext } from 'react'
import { ContactContext } from '../context/contact'

export const Footer = () => {
  const { setContactOpen } = useContext(ContactContext)

  const contactClick = () => {
    setContactOpen(true)
  }
  return (
    <footer className='min-w-full px-12 pt-12 flex flex-col justify-center snap-center max-h-fit shadow-inner bg-stone-900 text-white'>
      <section className='flex flex-col md:flex-row justify-around gap-10'>
        <article>
          <h2 className=' font-extrabold drop-shadow-2xl text-2xl'>Nuestra empresa</h2>
          <ul className='p-2'>
            <li><a href=''>Sobre nosotros</a></li>
            <li><a href=''>Servicio de donación</a></li>
            <li><a href=''>Confeccion Uruguaya</a></li>
            <li><a onClick={contactClick} href='#'>Contactanos</a></li>
          </ul>
        </article>
        <article>
          <h2 className='font-extrabold drop-shadow-2xl text-2xl'>Nos encontramos acá!</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.3624850713045!2d-56.12927835549746!3d-34.84711816456376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80a795d5f455%3A0xd51a6432a00e188e!2sOficial%205%205371%2C%2012200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1690734791107!5m2!1ses-419!2suy'
            width='300' height='260' className='rounded-md' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'
          />
        </article>
      </section>
      <footer className='p-4 flex justify-between text-sm opacity-70'>
        <span> Desarrollado para el proyecto de egreso UniFormas</span>
        <span> © Agustin Padilla 2023 </span>
      </footer>
    </footer>
  )
}
