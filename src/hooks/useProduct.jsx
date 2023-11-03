import { useContext } from 'react'
import { ProductContext } from '../context/product'

export const useProduct = () => {
  const context = useContext(ProductContext)

  if (context === null) {
    throw new Error('useProduct must be used whitin a ProductProvider')
  }

  return context
}
