import React from 'react'
import { Dialog } from './Dialog'
import { MailLink } from './MailLink'
import { WhatsappLink } from './WhatsappLink'
import { useContact } from '../hooks/useContact'

export const ContactDialog = () => {
  const { setContactOpen } = useContact()
  const closeContact = () => {
    setContactOpen(false)
  }
  return (

    <Dialog closeFunction={closeContact}>
      <h1 className='z-10 text-4xl md:text-6xl text-black font-extrabold drop-shadow-lg mb-6'>Contactanos!</h1>
      <div className='text-2xl flex flex-col gap-5 mt-8 transition-all'>
        <WhatsappLink />
        <MailLink />
      </div>
    </Dialog>
  )
}
