import React from 'react'
import { ProductCard } from './ProductCard'
import { Title } from './Title'
import { Zoom } from 'react-awesome-reveal'

export const ProductsListSection = () => {
  return (
    <section id='ProductListSection' className='h-fit ColoredSection bg-amber-300 flex-col items-center justify-start'>
      <Title>Revisa nuestros productos</Title>

      <section className='hidden md:grid md:grid-cols-3 w-auto gap-8'>
        <Zoom duration={500} cascade>
          <ProductCard img='jardinero.webp' title='Jardinero escolar' fabric='Zephyr' sizes='2 a 6' custom />
          <ProductCard img='tunica.jpg' title='Tunica blanca' fabric='Acrocel' sizes='6 a 14' custom />
          <ProductCard img='uniformeLiceo.jpeg' title='Equipo deportivo liceal' fabric='Dry Fit' sizes='8 a 16' custom />
        </Zoom>
      </section>

      <section className='w-full flex flex-col items-center md:hidden gap-5'>
        <ProductCard img='jardinero.webp' title='Jardinero escolar' fabric='Zephyr' sizes='2 a 6' custom />
        <ProductCard img='tunica.jpg' title='Tunica blanca' fabric='Acrocel' sizes='6 a 14' custom />
        <ProductCard img='uniformeLiceo.jpeg' title='Equipo deportivo liceal' fabric='Dry Fit' sizes='8 a 16' custom />
      </section>

    </section>
  )
}
