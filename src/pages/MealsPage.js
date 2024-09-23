import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchMeals,fetchCats} from '../store/MealsSlice';
import {useEffect } from 'react';
import Meal from '../components/Meal';
import Categories from '../components/Categories';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import Cart from '../components/Cart';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FavMeals from '../components/FavMeals';






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
      : 'لايوجد تصنيفات';

     


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
      : 'لايوجد اصناف';
      


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

    <FavMeals  />
   

    <div class="  scrollbar-hide overflow-x-auto  py-2 sticky top-0 z-10 bg-white shadow-2xl">
            <ul className='flex flex-nowrap gap-2 scrollbar-hide  justify-around   rounded-3xl'>{cats&&catsList}</ul> 
    </div>
    <div className='content-center items-start '>
    <motion.div layout className="popular-movies z-0">
     <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2  justify-around mx-2'>{meals&&orignalMeal}</ul> 
    </motion.div>
</div>
      
    </div>


  )
}

export default MealsPage
// <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2  justify-around mx-2'>{meals&&orignalMeal}</ul> 
