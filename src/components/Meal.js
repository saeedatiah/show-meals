import React from 'react'
import shawrma from './shawrma.jpeg'

const Meal = ({meal}) => {    

  return (
    <div className='overflow-hidden rounded-lg w-28 h-28 relative' >
    <img src="file:///localhost:7067/C://img/12.JPG" alt="" class="w-fit h-fit object-cover "/>
    <div className='absolute bottom-0 h-9 px-1 truncate text-right text-bold w-full bg-gradient-to-t 
                    from-black to-transparent text-custom-5' >
        {meal.Name}
    </div>
        <div className='absolute bottom-0 right-0 bg-custom-5 font-bold h-4 rounded-tl-lg text-xs w-10 text-white overflow-hidden'>
            {meal.Price}
        </div>
        <div className='absolute bottom-1 left-1 h-6 w-6 rounded-full bg-custom-5'>
        A</div>

    </div>
//     <div className='overflow-hidden '>
// <div className='rounded-lg max-w-32 min-w-11 h-24 w-fit   relative bg-cover faded_img' style={{
//       backgroundImage: `url(${shawrma})`,
//     }}  >
//     <h1 className='text-green-300 absolute '>{meal.Name}</h1>

//     {/* <img src={shawrma} alt="" class="w-fit h-fit object-cover "/> */}
      
//     </div>
//     </div>
    
  )
}

export default Meal
