import React from 'react'
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux';
import { VscClearAll } from "react-icons/vsc";
import {clearCart} from '../store/MealsSlice';
import { FaFileInvoiceDollar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';








const Cart = () => {
  const notify = () => toast('سيتم تفعيل هذه الخدمة قريبا');

  const {carts,totalPrice} =useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const clearAllCart=()=>{
    dispatch(clearCart())
  }
    const cartList =
  carts.length > 0
      ? carts.map((cart) => (
        <AnimatePresence>
        <li
            key={cart.id}
          >
          <ItemCart meal={cart}/>

          
          </li>
        </AnimatePresence>
          
        ))
      : 'لايوجد طلب';


  return (
    <div class="h-full flex flex-col mt-3">
    <Toaster />
    <div className='grid grid-cols-3'>
    <div className='flex justify-center' onClick={clearAllCart}>
    <VscClearAll className='text-custom-2  w-7 h-7' />

    </div>
      <div className='text-custom-2 text-2xl font-bold align-middle '>
      <div>{totalPrice}</div>
      </div>
      <button onClick={notify} className='flex justify-center mx-1 border-2 border-custom-2 p-1 rounded-lg'>
        <div><FaFileInvoiceDollar className='text-custom-2  w-5 h-5'/></div>
        <div className='text-custom-2 text-xs '>طلب الشراء</div>
      </button>
    </div>
  
  <div class="flex-1 grid  overflow-y-auto  ">
  <motion.div layout className="popular-movies">
  <ul>{cartList}</ul>

  </motion.div>

  
  



  </div>
  </div>
    
  )
}

export default Cart





