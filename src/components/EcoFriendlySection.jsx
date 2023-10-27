import React from 'react'
import { Title } from './Title'
import { Fade, Zoom } from 'react-awesome-reveal'

export const EcoFriendlySection = () => {
  return (
    <section className='ColoredSection bg-green-300 relative'>

      <article className='flex flex-col max-w-2xl'>
        <Title>Lo mejor para vos y para el planeta!</Title>
        <Fade direction='left' duration={500}>
          <h2 className='text-xl font-extrabold text-green-950 drop-shadow-lg mt-4 mb-10'>
            Prendas confeccionadas con materiales amigables con el medio ambiente
          </h2>
        </Fade>
        <div className='text-xs font-medium drop-shadow-lg flex flex-col justify-between items-center max-w-xl gap-5'>
          <Fade direction='left'>
            <p>Enfocamos la produccion para ofrecer la mejor calidad y durabilidad sin dejar de lado ser ecologicos!</p>
          </Fade>
          <div className='flex mt-10 gap-10'>
            <Zoom cascade duration={500}>
              <picture className='text-center'>
                <img src='quality.svg' className='w-20' />
                Calidad
              </picture>
              <picture className='text-center'>
                <img src='durability.svg' className='w-20' />
                Durabilidad
              </picture>
              <picture className='text-center'>
                <img src='ecologic.svg' className='w-20' />
                Ecologico
              </picture>
            </Zoom>
          </div>
          <div className='flex gap-16 mt-9'>
            <button className='bg-green-700 text-white py-2 px-7 shadow-xl hover:bg-green-600 active:translate-y-1 active:bg-green-800'>Comprar</button>
            <button className='bg-green-700 text-white py-2 px-7 shadow-xl hover:bg-green-600 active:translate-y-1 active:bg-green-800'>Leer más</button>
          </div>
        </div>
      </article>

      <picture className='absolute opacity-10 md:opacity-100 md:static w-96 md:flex flex-col justify-center items-center'>
        <img src='Eco.svg' />
        <div className='flex items-end gap-8' />
      </picture>

    </section>
  )
}
