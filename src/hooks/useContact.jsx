import { useContext } from 'react'
import { ContactContext } from '../context/contact'

export const useContact = () => {
  const context = useContext(ContactContext)

  if (context === null) {
    throw new Error('useContact must be used whitin a ContactProvider')
  }

  return context
}
