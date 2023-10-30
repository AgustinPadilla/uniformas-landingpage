import { createContext, useState } from 'react'

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
  const [contactOpen, setContactOpen] = useState(false)
  return (
    <ContactContext.Provider value={{ contactOpen, setContactOpen }}>
      {children}
    </ContactContext.Provider>
  )
}
