import { createContext, useState } from 'react'

export const AboutUsContext = createContext()

export const AboutUsProvider = ({ children }) => {
  const [aboutUsOpen, setAboutUsOpen] = useState(false)
  return (
    <AboutUsContext.Provider value={{ aboutUsOpen, setAboutUsOpen }}>
      {children}
    </AboutUsContext.Provider>
  )
}
