import React from 'react'
import { Title } from './Title'

export const ProductPresentationSection = () => {
  return (
    <section className='ColoredSection bg-sky-300'>

      <article className='flex flex-col max-w-2xl'>
        <Title>Uniformes de calidad !</Title>
        <h2 className='text-3xl font-extrabold text-sky-950 drop-shadow-lg mb-20'>Para escuelas, colegios y liceos</h2>

        <div className='text-xl font-medium drop-shadow-lg flex flex-col items-center max-w-xl gap-5'>
          <p>Ofrecemos indumentaria del mejor nivel en una amplia variedad de estilos para niños y niñas. ¡Encuentra el estilo perfecto para tus hijos!</p>
          <ul className='mt-10 w-full ml-52'>
            <li className='mb-5 flex items-center'> <img src='nursery.svg' className='h-8 mr-4' />Jardineros personalizados</li>
            <li className='mb-5 flex items-center'><img src='school.svg' className='h-8 mr-4' />Tunicas escolares</li>
            <li className='mb-5 flex items-center'><img src='college.svg' className='h-8 mr-4' />Conjuntos de colegios y liceo</li>
          </ul>
          <button className='bg-sky-700 text-white py-2 px-7 shadow-xl hover:bg-sky-600 active:translate-y-1 active:bg-sky-800'>Comprar</button>
        </div>

      </article>

      <picture className='w-96 flex flex-col'>
        <div className='flex flex-grow'>
          <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 m-0 -rotate-12' />
        </div>
        <div className='flex flex-grow justify-end'>
          <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 rotate-12' />
        </div>
        <div className='flex flex-grow'>
          <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 -rotate-12' />
        </div>
      </picture>

    </section>
  )
}
