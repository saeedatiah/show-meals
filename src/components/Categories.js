import React from 'react'

const Categories = ({cat}) => {
  return (
    <div className='bg-custom-6 rounded-full h-24 w-14 grid grid-rows-7'>
    <div className='rounded-full w-12 h-12 bg-slate-600 m-1 row-span-4' >
    img
    </div>
    <div className='row-span-3 text-sm'>
    {cat.Name}

    </div>
      
    </div>
  )
}

export default Categories
