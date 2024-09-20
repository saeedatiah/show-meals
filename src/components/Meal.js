import React from 'react'
import shawrma from './shawrma.jpeg'
import {addToCart} from '../store/MealsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BiCart } from "react-icons/bi";



const Meal = ({meal}) => {    
  const dispatch = useDispatch();
  const quan =useSelector((state)=>state.meal)

  const addToCartFunc = () =>{
     dispatch(addToCart({id:meal.Id,name:meal.Name,price:meal.Price,imgURL:meal.ImgURL,quan:1}));
   }
   const imgurl=`https://192.168.153.214:7067/img/items/${meal.Id}.jfif`
   const defImgurl=`https://192.168.153.214:7067/img/items/err.jfif`

  return (
    <div className='overflow-hidden rounded-lg min-w-[120px] min-h-[100px] w-full h-full relative' >
    <img src={imgurl} alt="" onError={(e)=>{e.target.src=defImgurl}}  class="w-full h-full object-cover "/>
    <div className='absolute bottom-0 h-9 px-1 truncate text-sm text-right text-bold w-full bg-gradient-to-t 
                    from-black to-transparent text-white  font-bold drop-shadow-lg' >
        {meal.Name}
    </div>
        <div className='absolute bottom-0 right-0 bg-custom-5 font-bold h-4 rounded-tl-lg text-xs w-10 text-white overflow-hidden'>
            {meal.Price}
        </div>
        <div className='absolute bottom-1 left-1 h-6 w-6 rounded-lg bg-custom-5 text-sm' onClick={addToCartFunc}>

        <div className='relative'>
        
        <BiCart className='w-6 h-6'/>
        {/* <div className='absolute -top-2 -right-2 w-4 h-4 bg-custom-4 rounded-full text-xs'>{meal.quan}</div> */}
        </div>
        </div>

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
