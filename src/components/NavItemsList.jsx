import React from 'react'
import { NavItem } from './NavItem'

export const NavItemsList = ({ toggleNavbar }) => {
  return (
    <ul className='flex flex-col mb-3 md:mb-0 md:flex-row'>
      <NavItem toggleNavbar={toggleNavbar} section='ProductListSection'>Compra ya!</NavItem>
      <NavItem toggleNavbar={toggleNavbar}>Sobre nosotros</NavItem>
      <NavItem toggleNavbar={toggleNavbar}>Contactanos</NavItem>
      <NavItem toggleNavbar={toggleNavbar}>Dona tu ropa</NavItem>
    </ul>
  )
}
