import React from 'react'
import { Dialog } from './Dialog'
import { products } from '../mock/products.json'
import { WhatsappLink } from './WhatsappLink'
import { MailLink } from './MailLink'
import { useProduct } from '../hooks/useProduct'

export const ProductDialog = ({ Product }) => {
  const { productOpen, closeProduct } = useProduct()

  const product = products[productOpen.id]
  return (
    <Dialog closeFunction={closeProduct}>
      <div className='flex flex-col gap-5 md:hidden'>
        <h1 className='z-10 text-3xl text-black font-extrabold drop-shadow-lg mb-6'>{product.title}</h1>
        <p className='mb-3'>{product.description}</p>
        <span className='text-xl font-extrabold drop-shadow-lg mb-3'>Contactanos para comprar!</span>
        <div>
          <WhatsappLink />
          <MailLink />
        </div>
      </div>

      <div className='hidden md:flex items-center'>
        <img src={product.image} className='hidden md:block w-2/4 h-fit shadow-xl rounded-lg object-fill' />
        <div className='pl-6 flex flex-col gap-2'>
          <h1 className='z-10 text-3xl text-black font-extrabold drop-shadow-lg mb-6'>{product.title}</h1>
          <p className='mb-6'>{product.description}</p>
          <span className='text-xl font-extrabold drop-shadow-lg mb-3'>Contactanos para comprar!</span>
          <WhatsappLink />
          <MailLink />
        </div>
      </div>
    </Dialog>
  )
}
