import React, { useState } from 'react'
import { Logo } from './Logo'
import { NavItemsList } from './NavItemsList'
import { NavItem } from './NavItem'
import { useContact } from '../hooks/useContact'
import { useAboutUs } from '../hooks/useAboutUs'

export const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const { contactOpen, setContactOpen } = useContact()
  const { aboutUsOpen, setAboutUsOpen } = useAboutUs()

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar)
  }

  const contact = () => {
    setContactOpen(!contactOpen)
  }

  const aboutUs = () => {
    setAboutUsOpen(!aboutUsOpen)
  }
  return (
    <header className='text-xl z-50 fixed top-0 w-full bg-white h-16 shadow-md'>
      <nav className='flex justify-between px-8 gap-2 items-center h-full '>
        <Logo w={40} h={40} />
        <div className='hidden md:block'>
          <NavItemsList>
            <NavItem section='ProductListSection'>Compra ya!</NavItem>
            <NavItem onClick={aboutUs}>Sobre nosotros</NavItem>
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
            <NavItem onClick={() => { toggleNavbar(); aboutUs() }}>Sobre nosotros</NavItem>
            <NavItem onClick={() => { toggleNavbar(); contact() }}>Contactanos</NavItem>
            <NavItem onClick={toggleNavbar}>Dona tu ropa</NavItem>
          </NavItemsList>
        </div>
      )}
    </header>
  )
}
