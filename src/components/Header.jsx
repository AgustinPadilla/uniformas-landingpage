import React from 'react'
import { Logo } from './logo'
import { NavItem } from './NavItem'

export const Header = ({ productsList }) => {
  return (
    <header className='text-xl z-10 fixed top-0 w-full bg-white h-16 shadow-md'>
      <nav className='flex justify-center gap-2 items-center h-full'>
        <NavItem section={productsList}>Compra ya!</NavItem>
        <NavItem>Sobre nosotros</NavItem>
        <Logo w={40} h={40} />
        <NavItem>Contactanos</NavItem>
        <NavItem>Dona tu ropa</NavItem>
      </nav>
    </header>
  )
}
