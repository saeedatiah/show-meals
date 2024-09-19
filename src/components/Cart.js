import React from 'react'
import ItemCart from './ItemCart'
import { useSelector } from 'react-redux';

const Cart = () => {
  const {carts,totalPrice} =useSelector((state) => state.meals);
  console.log('carts')
  console.log(carts)
  const cartList =
  carts.length > 0
      ? carts.map((cart) => (
          <li
            key={cart.id}
          >
          <ItemCart meal={cart}/>

          
          </li>
        ))
      : 'لايوجد طلب';


  return (
    <div class="h-full flex flex-col ">
    <div className='grid bg-cyan-300'>top</div>
  
  <div class="flex-1 grid  overflow-y-auto  ">
  <ul>{cartList}</ul>

  
  



  </div>
  <div className='grid bg-cyan-300'>bottom</div>
  </div>
    
  )
}

export default Cart





