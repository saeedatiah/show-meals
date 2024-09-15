import React from 'react'
import shawrma from './shawrma.jpeg'

const Meal = ({meal}) => {    

  return (
    <div className='overflow-hidden '>
<div className='rounded-lg max-w-32 min-w-11 h-24 w-fit   relative bg-cover faded_img' style={{
      backgroundImage: `url(${shawrma})`,
    }}  >
    <h1 className='text-green-300 absolute '>{meal.Name}</h1>

    {/* <img src={shawrma} alt="" class="w-fit h-fit object-cover "/> */}
      
    </div>
    </div>
    
  )
}

export default Meal
