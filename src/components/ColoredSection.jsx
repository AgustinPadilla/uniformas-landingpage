import React from 'react'

export const ColoredSection = ({ children, color }) => {
  return (
    <section className={`min-w-full p-12 bg-${color}-300 flex justify-center gap-10 snap-center min-h-[576px] shadow-inner`}>
      {children}
    </section>
  )
}
