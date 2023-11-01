import React from 'react'

export const Dialog = ({ children, closeFunction }) => {
  return (
    <div className='fixed w-full h-full bg-gray-900 bg-opacity-60 z-30' onClick={closeFunction}>
      <div className='fixed bg-white text-black flex flex-col items-center p-12 z-40 w-5/6 md:w-[750px] h-fit center m-auto top-0 bottom-0 left-0 right-0 shadow-md' onClick={e => e.stopPropagation()}>
        <button onClick={closeFunction} className='absolute top-0 right-0 p-3'><img src='x.svg' className='w-10' /></button>
        {children}
      </div>
    </div>
  )
}
