import React from 'react'
import { Logo } from './Logo'
import { Title } from './Title'
import { Fade } from 'react-awesome-reveal'
export const LogoSection = () => {
  return (
    <section id='LogoSection' className='ColoredSection bg-purple-300  items-center relative'>
      <article className='z-10 flex flex-col max-w-2xl items-center'>
        <Title>UniFormas</Title>
        <Fade direction='left' duration={500}>
          <h2 className='texl-xl md:text-3xl font-extrabold text-purple-950 drop-shadow-2xl mb-20 text-center'>Estilo y calidad combinados para acompañar el aprendizaje de tus hijos</h2>
        </Fade>
      </article>
      <picture className='absolute opacity-30 md:opacity-100 md:static md:block invert drop-shadow-2xl'>
        <Logo w={300} h={400} />
      </picture>
    </section>
  )
}
