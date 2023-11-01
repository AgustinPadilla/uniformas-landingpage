import { createContext, useState } from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [productOpen, setProductOpen] = useState({
    open: false,
    id: 0
  })

  const openProduct = (productId) => {
    setProductOpen({
      open: true,
      id: productId
    })
  }

  const closeProduct = () => {
    setProductOpen({
      open: false,
      id: 0
    })
  }
  return (
    <ProductContext.Provider value={{ productOpen, openProduct, closeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
