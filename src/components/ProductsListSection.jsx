import React from 'react'
import { ProductCard } from './ProductCard'
import { Title } from './Title'
import { Zoom } from 'react-awesome-reveal'
import { products } from '../mock/products.json'
import { useProduct } from '../hooks/useProduct'

export const ProductsListSection = () => {
  const { openProduct } = useProduct()

  return (
    <section id='ProductListSection' className='h-fit ColoredSection bg-amber-300 flex-col items-center justify-start'>
      <Title>Revisa nuestros productos</Title>

      <section className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 w-auto gap-8'>
        <Zoom duration={500} cascade>
          {products.map(product => (
            <ProductCard key={product.id} img={product.image} title={product.title} fabric={product.fabric} sizes={product.size} custom={product.custom}>
              <a onClick={e => openProduct(product.id)} className='py-2 px-7 bg-amber-500 text-white shadow-xl hover:bg-amber-400 active:bg-amber-600 active:translate-y-1 cursor-default'>Ver más</a>
            </ProductCard>
          )
          )}
        </Zoom>
      </section>

      <section className='w-full flex flex-col items-center md:hidden gap-5'>
        {products.map(product => (
          <ProductCard key={product.id} img={product.image} title={product.title} fabric={product.fabric} sizes={product.size} custom={product.custom}>
            <a onClick={e => openProduct(product.id)} className='py-2 px-7 bg-amber-500 text-white shadow-xl hover:bg-amber-400 active:bg-amber-600 active:translate-y-1 cursor-default'>Ver más</a>
          </ProductCard>
        )
        )}
      </section>

    </section>
  )
}
