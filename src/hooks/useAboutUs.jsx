import { useContext } from 'react'
import { AboutUsContext } from '../context/aboutus'

export const useAboutUs = () => {
  const context = useContext(AboutUsContext)

  if (context === null) {
    throw new Error('useAboutUs must be used whitin a AboutUsProvider')
  }

  return context
}
