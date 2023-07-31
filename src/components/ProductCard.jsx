import React from 'react'

export const ProductCard = ({ img, title, fabric, sizes, custom }) => {
  return (
    <article className='flex flex-col gap-2 justify-center items-center w-fit p-3 border border-black rounded-md shadow-lg'>
      <picture>
        <img src={img} alt={title} className='w-96 h-96 rounded-md border border-black' />
      </picture>
      <h1 className='text-white font-extrabold drop-shadow-2xl text-2xl'>{title}</h1>
      <div className='text-md font-medium drop-shadow-lg '>
        <ul className='list-disc mb-3'>
          <li>Tela: {fabric}</li>
          <li>Talles: {sizes}</li>
          {custom ? <li>Personalizados</li> : null}
        </ul>
        <button className='py-2 px-7 bg-amber-500 text-white shadow-xl hover:bg-amber-400 active:bg-amber-600 active:translate-y-1 '>Ver más</button>
      </div>
    </article>
  )
}
