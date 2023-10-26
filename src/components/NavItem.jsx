import React from 'react'

export const NavItem = ({ children, section, toggleNavbar }) => {
  return (
    <li className='list-none p-2'>
      <a href={`#${section}`} onClick={toggleNavbar} className='hover:text-blue-400 hover:transform hover:scale-105 transition-all md:max-h-14 md:p-3 font-medium cursor-pointer'>
        {children}
      </a>
    </li>
  )
}
