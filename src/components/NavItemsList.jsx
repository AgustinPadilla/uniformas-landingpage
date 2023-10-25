import React from 'react'
import { NavItem } from './NavItem'

export const NavItemsList = () => {
  return (
    <ul className='flex flex-col mb-3 md:mb-0 md:flex-row'>
      <NavItem section='ProductListSection'>Compra ya!</NavItem>
      <NavItem>Sobre nosotros</NavItem>
      <NavItem>Contactanos</NavItem>
      <NavItem>Dona tu ropa</NavItem>
    </ul>
  )
}
