import React from 'react'
import { Title } from './Title'
import { Fade, Zoom } from 'react-awesome-reveal'

export const ProductPresentationSection = () => {
  return (
    <section className='ColoredSection bg-sky-300'>

      <article className='flex flex-col max-w-2xl'>
        <Title>Uniformes de calidad !</Title>
        <Fade direction='left' duration={500}>
          <h2 className='text-xl md:text-3xl font-extrabold text-sky-950 drop-shadow-lg mb-10 mt-4'>Para escuelas, colegios y liceos</h2>
        </Fade>

        <div className='text-xs md:text-xl font-medium drop-shadow-lg flex flex-col items-center max-w-xl gap-5'>

          <Fade direction='left' duration={500}>
            <p>Ofrecemos indumentaria del mejor nivel en una amplia variedad de estilos para niños y niñas. ¡Encuentra el estilo perfecto para tus hijos!</p>
          </Fade>
          <Fade delay={200} direction='left' cascade duration={500} damping={0.5}>
            <ul className='w-5/6 mt-10 md:ml-52'>
              <li className='w-fit mb-5 flex items-center'> <img src='nursery.svg' className='h-8 mr-4' />Jardineros personalizados</li>
              <li className='w-fit mb-5 flex items-center'><img src='school.svg' className='h-8 mr-4' />Tunicas escolares</li>
              <li className='w-fit mb-5 flex items-center'><img src='college.svg' className='h-8 mr-4' />Conjuntos de colegios y liceo</li>
            </ul>
          </Fade>
          <Zoom duration={500}>
            <button className='bg-sky-700 text-white py-2 px-7 shadow-xl hover:bg-sky-600 active:translate-y-1 active:bg-sky-800'>Comprar</button>
          </Zoom>
        </div>

      </article>

      <picture className='hidden w-96 md:flex flex-col'>
        <div className='flex flex-grow hover:animate-shake hover:animate-once hover:animate-duration-200 hover:animate-ease-in-out'>
          <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 m-0 -rotate-12 mona' />
        </div>
        <div className='flex flex-grow hover:animate-shake hover:animate-once hover:animate-duration-200 hover:animate-ease-in-out justify-end'>
          <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 rotate-12 mona' />
        </div>
        <div className='flex flex-grow hover:animate-shake hover:animate-once hover:animate-duration-200 hover:animate-ease-in-out'>
          <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 -rotate-12 mona' />
        </div>
      </picture>

    </section>
  )
}
