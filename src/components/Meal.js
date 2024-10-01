import React, { useState } from 'react'
import shawrma from './shawrma.jpeg'
import {addToCart} from '../store/MealsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BiCart } from "react-icons/bi";
import { TiArrowDownThick } from "react-icons/ti";




const Meal = ({meal}) => {    
  const dispatch = useDispatch();
  const [addToCartAnimi,setAddToCartAnimi] =useState(false);

  // const quan =useSelector((state)=>state.meal)

  const addToCartFunc = () =>{
     dispatch(addToCart({id:meal.Id,name:meal.Name,price:meal.Price,imgURL:meal.ImgURL,quan:1}));
     setAddToCartAnimi(true);
     setTimeout(() => {
      setAddToCartAnimi(false);
    }, 250);
    }
   const imgurl=`http://192.168.1.33:4040/img/items/${meal.Id}.jpg`
   const defImgurl=`http://192.168.1.33:4040:7067/img/items/err.jpg`

  return (
    <div className='overflow-hidden rounded-lg min-w-[100px] min-h-[80px] w-full h-36 relative' >
<img src={imgurl} alt="" onError={(e)=>{e.target.src=defImgurl}}  class="w-full h-full object-cover "/>
<div className='absolute bottom-0 h-9 px-1 truncate text-sm text-right text-bold w-full bg-gradient-to-t 
                from-black to-transparent text-white  font-bold drop-shadow-lg' >
    {meal.Name}
</div>
    <div className='absolute bottom-0 right-0 bg-custom-4 font-bold h-4 rounded-tl-lg text-xs w-10 text-custom-5 overflow-hidden'>
        {meal.Price}
    </div>
    <div className='absolute bottom-1 left-1 h-6 w-6 rounded-lg bg-custom-4 text-sm' onClick={addToCartFunc}>

    <div className='relative'>
    <div className='relative'>
    <TiArrowDownThick className={`absolute text-custom-5 w-5 h-5 -top-4 opacity-0 ${addToCartAnimi? 'animate-tobottom':' animate-none'} `} />

    <BiCart className={`w-6 h-6 text-custom-5`}/>

    </div>

    
    {/* <div className='absolute -top-2 -right-2 w-4 h-4 bg-custom-4 rounded-full text-xs'>{meal.quan}</div> */}
    </div>
    </div>

</div>
    
  )
}

export default Meal
