import React, { forwardRef } from 'react'
import { ProductCard } from './ProductCard'
import { Title } from './Title'
import { Zoom } from 'react-awesome-reveal'

export const ProductsListSection = forwardRef(function ProductsListSection (props, ref) {
  return (
    <section id='ProductListSection' className='h-fit ColoredSection bg-amber-300 flex-col items-center justify-start' ref={ref}>
      <Title>Revisa nuestros productos</Title>

      <section className='w-4/5 flex flex-col md:flex-row gap-5'>
        <Zoom duration={500} cascade>
          <ProductCard img='jardinero.webp' title='Jardinero escolar' fabric='Zephyr' sizes='2 a 6' custom />
          <ProductCard img='tunica.jpg' title='Tunica blanca' fabric='Acrocel' sizes='6 a 14' custom />
          <ProductCard img='uniformeLiceo.jpeg' title='Equipo deportivo liceal' fabric='Dry Fit' sizes='8 a 16' custom />
        </Zoom>

      </section>

    </section>
  )
})
