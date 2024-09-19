import { useState } from 'react';
import './App.css';
import MealsPage from './pages/MealsPage';
import Cart from './components/Cart';

function App() {
  const [active, setActive] = useState('tab-1');

  const changeTab = (event) => {
    setActive(event.target.id);
  };
  return (
    <div className=" App rtl">

    <div class="h-screen flex flex-col ">

  
  <div class="flex-1 grid  overflow-y-auto">

    
    <div class={`overflow-y-scroll ${active === 'tab-1' ? 'visible' : 'hidden'}`}>
      <MealsPage/>
    </div>
    <div class={`overflow-y-hidden ${active === 'tab-2' ? 'visible' : 'hidden'}`} >
      <Cart/>
    </div>
  </div>
  <div class="grid  h-16">

  <div class="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
            <button type="button" id="tab-1" onClick={changeTab} class={` inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group`}>
Meals
            </button>
            <button type="button" id="tab-2" onClick={changeTab} class={`${active === 'tab-1' ? 'active' : ''} inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group`}>
cart
            </button>
           
           
        </div>
    </div>
  </div>
</div>
    
    </div>
  );
}

export default App;

// <img src="http://192.168.1.13:5080/img/12.jpg" alt="" class="w-fit h-fit object-cover "/>

