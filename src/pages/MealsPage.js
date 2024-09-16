import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchMeals,fetchCats} from '../store/MealsSlice';
import {useEffect } from 'react';
import Meal from '../components/Meal';
import Categories from '../components/Categories';


const MealsPage = () => {
    console.log("aaaaaaaaa00000009");

    const dispatch = useDispatch();
    console.log("aaaaaaaa");

    // {fetchMeals} =slice;
    //dispatch(fetchMeals());

    useEffect(() => {
        dispatch(fetchMeals());
      }, [dispatch]);

      useEffect(() => {
        dispatch(fetchCats());
      }, [dispatch]);
      console.log("aaaaaaaaa1");

      const {meals} =useSelector((state) => state.meals);
      const cats =useSelector((state) => state.ctas);//problem
      // const cats=[];
      console.log("aaaaaaaaa3");

      const catsList =
      cats.length > 0
      ? cats.map((cat) => (
          <li
            key={cat.id}
          >
          <Categories cat={cat}/>
          </li>
        ))
      : 'no Cats found';


      const orignalMeal =
      meals.length > 0
      ? meals.map((meal) => (
          <li
            key={meal.id}
          >
          <Meal meal={meal}/>
          </li>
        ))
      : 'no Items found';

  return (
    <div>
    <div className='content-center items-start'>
<ul className='flex flex-wrap gap-2  justify-around'>{cats&&catsList}</ul> 
<ul className='flex flex-wrap gap-2  justify-around'>{meals&&orignalMeal}</ul> 
</div>
      
    </div>
  )
}

export default MealsPage
