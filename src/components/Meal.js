import React from 'react'
import shawrma from './shawrma.jpeg'

const Meal = ({meal}) => {
  return (
    <div className='rounded-lg w-24 h-24 m-0 border-2 border-black overflow-hidden relative'>
    <h1 className='text-green-300 absolute '>{meal.Name}</h1>

    <img src={shawrma} alt="" class="w-fit h-fit object-cover"/>
      
    </div>
  )
}

export default Meal
