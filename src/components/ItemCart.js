import React from 'react'

const ItemCart = ({meal}) => {
  return (
    <div className='my-6'>
    <div className='h-14 w-[calc(92%)] rounded-md m-4 bg-custom-6 relative'>
    <div className='absolute rounded-full h-20 w-20 bg-gray-500 -top-3 -left-3 border-4 border-white'>img</div>
    <div className='ml-16 h-full grid grid-cols-[70px_auto]'>
<div>

 <div className='flex-none grid grid-cols-4 bg-custom-3 rounded-full h-8 top-3 -right-4 border-2 border-white  absolute'>
 <button className='text-custom-5 rounded-full w-5 h-6'>+</button>
 <div className='col-span-2 text-center text-custom-5'>{meal.quan}</div>
 <button  className='text-custom-5 rounded-full w-5 h-6'>-</button>
 </div>

    </div>
    <div className='grid grid-rows-3 text-custom-3 text-center'>
    <div className='truncate'>{meal.name}</div>
    <div className='truncate'>{meal.price}</div>
    </div>
    </div>
  </div>
      
    </div>
  )
}

export default ItemCart
