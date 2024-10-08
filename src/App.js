import { useState } from 'react';
import './App.css';
import MealsPage from './pages/MealsPage';
import Cart from './components/Cart';
import { MdFastfood } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import FavMeals from './components/FavMeals';
import raw from './config.txt'
import Info from './components/Info';








function App() {

  //window.myGlobalVariable = { URL: 'helllllllllllllo Glooooooooooobal' };
// console.log(window.myGlobalVariable.URL);
  const [active, setActive] = useState('tab-1');

  const changeTab = (event) => {
    setActive(event.target.id);
  };
  const {isItemInCart} = useSelector((state)=>state.meals);

  return (
    <div className=" App rtl">
    

    <div class="h-screen flex flex-col ">
   
    <div class="grid h-11">

<div class="sticky bottom-0 left-0 z-50 w-full h-11 bg-custom-4 rounded-b-3xl shadow-xl">
      <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
          <button type="button" id="tab-1" onClick={changeTab} class={`${active === 'tab-1' ? 'bg-custom-5' : ''} rounded-br-3xl inline-flex flex-col items-center justify-center font-medium px-5 `}>
<MdFastfood className={`w-7 h-7 text-custom-6 pointer-events-none `} id="tab-1" onClick={changeTab}/>
          </button>
          <button type="button" id="tab-2" onClick={changeTab} class={`${active === 'tab-2' ? 'bg-custom-5' : ''} relative inline-flex flex-col items-center justify-center font-medium px-5 `}>
<FaCartShopping className={`w-7 h-7 text-custom-6 pointer-events-none`} id="tab-2" onClick={changeTab}/>
 {isItemInCart&&<div className={`w-3 h-3 rounded-full bg-custom-1  absolute ml-1 -mt-4 animate-pulse pointer-events-none`}>&nbsp;</div>}
          </button>
          <button type="button" id="tab-3" onClick={changeTab} class={`${active === 'tab-3' ? 'bg-custom-5' : ''} rounded-bl-3xl inline-flex flex-col items-center justify-center font-medium px-5 `}>
<FaCircleInfo className={`w-7 h-7 text-custom-6 pointer-events-none`} id="tab-3" onClick={changeTab}/>
          </button>
         
         
      </div>
  </div>
</div>



  
  <div class="flex-1 grid  overflow-y-auto">

    
    <div class={`overflow-y-scroll ${active === 'tab-1' ? 'visible' : 'hidden'}`}>
      <MealsPage/>
    </div>
    <div class={`overflow-y-hidden ${active === 'tab-2' ? 'visible' : 'hidden'}`} >
      <Cart/>
    </div>
    <div class={`overflow-y-hidden ${active === 'tab-3' ? 'visible' : 'hidden'}`} >
      <Info/>
    </div>
  </div>
</div>
    
    </div>
  );
}

export default App;

// <img src="http://192.168.1.13:5080/img/12.jpg" alt="" class="w-fit h-fit object-cover "/>

