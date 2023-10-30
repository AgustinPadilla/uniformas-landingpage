import React from 'react'

export const NavItemsList = ({ children }) => {
  return (
    <ul className='flex flex-col mb-3 md:mb-0 md:flex-row'>
      {children}
    </ul>
  )
}
