import React from 'react'
import { useDispatch } from 'react-redux';
import {filterMeals} from '../store/MealsSlice'

const Categories = ({cat}) => {
    
    const dispatch = useDispatch();


    const tabOnCat =()=>{
        dispatch(filterMeals(cat));
    }
  return (
    <div className='bg-custom-6 rounded-full h-24 w-14 grid grid-rows-7' onClick={tabOnCat}>
    <div className='rounded-full w-12 h-12  m-1 text-sm row-span-4 overflow-hidden' >
    <img src="https://192.168.1.43:7067/img/cat/1.jpg" alt="" class="w-fit h-full object-cover "/>
    </div>
    <div className='row-span-3 text-sm'>
    {cat.Name}

    </div>
      
    </div>
  )
}

export default Categories
