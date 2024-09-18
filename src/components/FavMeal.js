import React from 'react'
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react'
import Meal from './Meal';


const FavMeal = () => {
    const {meals} =useSelector((state) => state.meals);

  return (

    <Swiper className='grid col-auto'
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
    {meals.map((meal) => (
        <SwiperSlide key={meal.Id}>
          <div className='w-24  bg-red-500'>
          qwe
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    
  )
}

export default FavMeal
