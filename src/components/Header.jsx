import React, { useContext, useState } from 'react'
import { Logo } from './Logo'
import { NavItemsList } from './NavItemsList'
import { ContactContext } from '../context/Contact'
import { NavItem } from './NavItem'

export const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const { setContactOpen } = useContext(ContactContext)

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar)
  }

  const mobileContact = () => {
    toggleNavbar()
    setContactOpen(true)
  }

  const contact = () => {
    setContactOpen(true)
  }
  return (
    <header className='text-xl z-50 fixed top-0 w-full bg-white h-16 shadow-md'>
      <nav className='flex justify-between px-8 gap-2 items-center h-full '>
        <Logo w={40} h={40} />
        <div className='hidden md:block'>
          <NavItemsList>
            <NavItem section='ProductListSection'>Compra ya!</NavItem>
            <NavItem>Sobre nosotros</NavItem>
            <NavItem onClick={contact}>Contactanos</NavItem>
            <NavItem>Dona tu ropa</NavItem>
          </NavItemsList>
        </div>
        <div className='block md:hidden'>
          <button onClick={toggleNavbar}>{openNavbar ? <img src='x.svg' className='w-10' /> : <img src='menu.svg' className='w-10' />}</button>
        </div>

      </nav>

      {openNavbar && (
        <div className='w-full right-0 fixed bg-white flex flex-col items-center shadow-lg transition-all'>
          <NavItemsList>
            <NavItem onClick={toggleNavbar} section='ProductListSection'>Compra ya!</NavItem>
            <NavItem onClick={toggleNavbar}>Sobre nosotros</NavItem>
            <NavItem onClick={mobileContact}>Contactanos</NavItem>
            <NavItem onClick={toggleNavbar}>Dona tu ropa</NavItem>
          </NavItemsList>
        </div>
      )}
    </header>
  )
}
