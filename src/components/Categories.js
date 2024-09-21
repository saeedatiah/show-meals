import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {filterMeals,catActiveChange} from '../store/MealsSlice'

const Categories = ({cat}) => {
  const imgurl=`https://192.168.0.112:7067/img/cats/${cat.Id}.jfif`

    
    const dispatch = useDispatch();
    const {catActive}=useSelector((state)=>state.meals)
    console.log('catActive');
    console.log(catActive);

    const tabOnCat =()=>{
        dispatch(filterMeals(cat));
        dispatch(catActiveChange(cat.Id));
    }
  return (
    <div className={`bg-custom-6 rounded-full h-24 w-14 grid grid-rows-7 ${catActive === `cat-${cat.Id}` ? 'text-green-700 ' : ''}`} onClick={tabOnCat}>
    <div className={`rounded-full w-12 h-12  m-1 text-sm row-span-4 overflow-hidden transition-all duration-250 ease-linear ${catActive === `cat-${cat.Id}` ? 'h-14 w-14 -mr-0 -mt-0' : ''} `} >
    <img src={imgurl} alt="" class={`w-fit h-full object-cover ${catActive === `cat-${cat.Id}` ? '' : ''} `}/>
    </div>
    <div className={`row-span-3 text-sm text-custom-2 ${catActive === `cat-${cat.Id}` ? 'text-custom-2 ' : ''}`}>
    {cat.Name}

    </div>
      
    </div>
  )
}

export default Categories
