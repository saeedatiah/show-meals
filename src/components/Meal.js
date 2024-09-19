import React from 'react'
import shawrma from './shawrma.jpeg'
import {addToCart} from '../store/MealsSlice';
import { useDispatch } from 'react-redux';


const Meal = ({meal}) => {    
  const dispatch = useDispatch();

  const addToCartFunc = () =>{
     dispatch(addToCart({id:meal.Id,name:meal.Name,price:meal.Price,imgURL:meal.ImgURL,quan:1}));
   }

  return (
    <div className='overflow-hidden rounded-lg w-full h-full relative' >
    <img src="https://192.168.1.43:7067/img/12.jpg" alt="" class="w-fit h-fit object-cover "/>
    <div className='absolute bottom-0 h-9 px-1 truncate text-sm text-right text-bold w-full bg-gradient-to-t 
                    from-black to-transparent text-white  font-bold drop-shadow-lg' >
        {meal.Name}
    </div>
        <div className='absolute bottom-0 right-0 bg-custom-5 font-bold h-4 rounded-tl-lg text-xs w-10 text-white overflow-hidden'>
            {meal.Price}
        </div>
        <div className='absolute bottom-1 left-1 h-6 w-6 rounded-lg bg-custom-5 text-sm' onClick={addToCartFunc}>

        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><g id="cart"><path class="cls-1" d="M29.46 10.14A2.94 2.94 0 0 0 27.1 9H10.22L8.76 6.35A2.67 2.67 0 0 0 6.41 5H3a1 1 0 0 0 0 2h3.41a.68.68 0 0 1 .6.31l1.65 3 .86 9.32a3.84 3.84 0 0 0 4 3.38h10.37a3.92 3.92 0 0 0 3.85-2.78l2.17-7.82a2.58 2.58 0 0 0-.45-2.27zM28 11.86l-2.17 7.83A1.93 1.93 0 0 1 23.89 21H13.48a1.89 1.89 0 0 1-2-1.56L10.73 11H27.1a1 1 0 0 1 .77.35.59.59 0 0 1 .13.51z"/><circle class="cls-1" cx="14" cy="26" r="2"/><circle class="cls-1" cx="24" cy="26" r="2"/></g></svg>
aa
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
