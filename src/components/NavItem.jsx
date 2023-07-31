import React from 'react'

export const NavItem = ({ children, section }) => {
  const handleClick = () => {
    console.log(section)
    section.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <a onClick={handleClick} className='hover:text-blue-400 hover:transform hover:scale-105 transition-all max-h-14 p-3 font-medium cursor-pointer'>
      {children}
    </a>
  )
}
