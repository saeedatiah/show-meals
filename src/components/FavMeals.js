import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import Meal from './Meal';
import { useSelector } from 'react-redux';



const FavMeals = () => {
    const {favMeals} =useSelector((state)=>state.meals)
  return (
    <div className='z-20'>
    <div className='rounded-l-full bg-custom-5 w-32 text-custom-1 p-2 mt-2'>الأكثر طلباً</div>
    <Swiper watchSlidesProgress={true} autoplay={{ "delay": 2000, "disableOnInteraction": false }} modules={[Autoplay]} slidesPerView={3} className="mySwiper">
        
    {favMeals.map((meal) => (
        <SwiperSlide className='m-2 ' key={meal.Id}>
          <Meal meal={meal} className='h-[200px] w-[200px]'/>
        </SwiperSlide>
      ))}
        
       
      </Swiper>
    </div>
    
  )
}

export default FavMeals
