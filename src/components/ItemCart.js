import React from 'react'
import {increaseQuan,decreaseQuan,removeFromCart} from '../store/MealsSlice'
import { useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from "react-icons/ri";



const ItemCart = ({meal}) => {
  const imgurl=`https://192.168.1.43:7067/img/items/${meal.id}.jfif`
  const dispatch = useDispatch();
    const increase=()=>{

      dispatch(increaseQuan(meal))
    }
    const decrease=()=>{
        if(meal.quan>1)
        {
          dispatch(decreaseQuan(meal))

        }
    else
    removeCartFunc();
    }

    const removeCartFunc=()=>{
      dispatch(removeFromCart(meal));

    }

  return (
    <div className='my-6'>
    <div className='h-14 w-[calc(92%)] rounded-md m-4 bg-custom-6 relative'>
    <div className='absolute rounded-full overflow-hidden  h-20 w-20 bg-gray-500 -top-3 -left-3 border-4 border-white'>
    <img src={imgurl} alt="" className='w-full h-full object-cover'/>
    </div>
    <div className='absolute align-middle top-2 left-[70px] ' onClick={removeCartFunc}>
    <RiDeleteBin5Fill className='text-custom-4 w-6 h-9' />

    </div>
    <div className='ml-24 h-full grid grid-cols-[70px_auto]'>
<div>

 <div className='flex-none grid grid-cols-4 bg-custom-3 rounded-full h-8 top-3 -right-4 border-2 border-white  absolute'>
 <button className='text-custom-5 rounded-full w-5 h-6' onClick={increase}>+</button>
 <div className='col-span-2 text-center text-custom-5'>{meal.quan}</div>
 <button  className='text-custom-5 rounded-full w-5 h-6' onClick={decrease}>-</button>
 </div>

    </div>
    <div className='grid grid-rows-3 text-custom-3  text-center'>
    <div className='truncate'>{meal.name}</div>
    <div className='truncate'>{meal.tPrice}</div>
    </div>

    </div>
  </div>
      
    </div>
  )
}

export default ItemCart
