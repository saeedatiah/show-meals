import React from 'react'
import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import slice from '../store/MealsSlice';

const MealsPage = () => {
    console.log("aaaaaaaaa00000009");

    const dispatch = useDispatch();
    console.log("aaaaaaaa");

    const {fetchMeals} =slice;
    dispatch(fetchMeals());

    // useEffect(() => {
    //     dispatch(fetchMeals());
    //   }, [dispatch]);
    //   console.log("aaaaaaaaa1");

      //const {meals} =useSelector((state) => state.meals);
      console.log("aaaaaaaaa3");


    //   const orignalMeal =
    //   meals.length > 0
    //   ? meals.map((meal) => (
    //       <li
    //         key={meal.id}
    //       >
    //       <h1>{meal.Name}</h1>
    //       {/* <Item meal={meal}/> */}
    //       </li>
    //     ))
    //   : 'no Items found';

  return (
    <div>
    <div className='content-center items-start'>
    aaannnnnnnnnnnhhhhh
    <h1>iuyiuygug</h1>
{/* <ul className='flex flex-wrap gap-2  justify-around'>{meals&&orignalMeal}</ul> */}
</div>
      
    </div>
  )
}

export default MealsPage
