import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchMeals,fetchCats} from '../store/MealsSlice';
import {useEffect } from 'react';
import Meal from '../components/Meal';
import Categories from '../components/Categories';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import FavMeal from '../components/FavMeal';




const MealsPage = () => {
    console.log("aaaaaaaaa00000009");

    const dispatch = useDispatch();
    console.log("aaaaaaaa");

    // {fetchMeals} =slice;
    //dispatch(fetchMeals());

    useEffect(() => {
        dispatch(fetchMeals());
        dispatch(fetchCats());
      }, [dispatch]);

      // useEffect(() => {
      //   dispatch(fetchCats());
      // }, [dispatch]);
      // console.log("aaaaaaaaa1");

      const {meals,cats} =useSelector((state) => state.meals);
      const test =useSelector((state) => state);
      console.log("***********")
      console.log(cats)
      //const cats =useSelector((state) => state.ctas);//problem
       //const cats=[];
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
        <AnimatePresence>
          <li
            key={meal.id}
          >
          <Meal meal={meal}/>
          
          </li>
          </AnimatePresence>
        ))
      : 'no Items found';
      


      // const orignalMeal =
      // meals.length > 0
      // ? meals.map((meal) => (
      //     <li
      //       key={meal.id}
      //     >
      //     <Meal meal={meal}/>
      //     </li>
      //   ))
      // : 'no Items found';

  return (
    <div>
   

    <div class="  scrollbar-hide overflow-x-auto my-1">
            <ul className='flex flex-nowrap gap-2 scrollbar-hide  justify-around'>{cats&&catsList}</ul> 
    </div>
    <div className='content-center items-start'>
    <motion.div layout className="popular-movies">
    <ul className='flex flex-wrap gap-2  justify-around'>{meals&&orignalMeal}</ul> 
    </motion.div>
</div>
      
    </div>
  )
}

export default MealsPage
