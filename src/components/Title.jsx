import React from 'react'

export const Title = ({ children }) => {
  return (
    <h1 className='text-4xl md:text-6xl text-white font-extrabold drop-shadow-lg mb-6'>{children}</h1>
  )
}
