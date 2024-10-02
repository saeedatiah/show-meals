import React from 'react'
import logo from '../img/logo.png'
import { FaSquareInstagram,FaSquareWhatsapp } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";




const Info = () => {
  return (
    <div className='flex flex-col overflow-y-scroll items-center '>
    <img src={logo} alt='' className=' object-cover m-10 w-32 h-32 rounded-full shadow-2xl' />
    <div className='text-4xl font-extrabold text-custom-4  '>مطعم بيتزا هاوس</div>
    <div className='text-xl font-bold text-custom-4  '>متخصصون في عمل البيتزا والفطائر </div>
    <div className='text-lg font-semibold  text-custom-4  '>*يوجد لدينا*</div>
    <div className='text-lg  text-custom-4  '> قسم خاص للعوائل </div>
    <div className='text-lg  text-custom-4  '> جلسات خارجية </div>
    <div className='text-lg  text-custom-4  '> قسم خاص بالنساء </div>
    <div className='text-lg font-semibold text-custom-4  '>*حساباتنا على السوشال ميديا*</div>
    <div className='text-lg  text-custom-4 flex flex-row items-center'><FaSquareInstagram/>pizza_house66  </div>
    <div className='text-lg  text-custom-4 flex flex-row items-center'><FaSquareWhatsapp/>772207788  </div>
    <div className='text-lg  text-custom-4 flex flex-row items-center'><MdDeliveryDining/>05375561  </div>

    <div className='text-lg  text-custom-4 flex flex-row items-center mt-2'>تم انشاء هذا التطبيق من قبل مجموعة سمارت ديزاين</div>
    <div className='text-lg  text-custom-4 flex flex-row items-center mt-2'>739046277</div>


      
    </div>
  )
}

export default Info
