import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url="https://192.168.1.43:7067"





export const fetchMeals = createAsyncThunk(
  'meal/fetchMeals',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    console.log("aaaaaaaaa2");

    try {
      const res = await fetch(`${url}/Items`,{mode:"cors"});
      const data = await res.json();
      console.log("data from function reducer");
      console.log(data);
      return data;
    } catch (error) {
      console.log("errrrrrrrrrror");

      console.log('eeeeee');
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCats = createAsyncThunk(
  'meal/fetchCats',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    console.log("aaaaaaaaa2");

    try {
      const res = await fetch(`${url}/Categories`,{mode:"cors"});
      const data = await res.json();
      console.log("data from function reducer");
      console.log(data);
      return data;
    } catch (error) {
      console.log("errrrrrrrrrror");

      console.log('eeeeee');
      return rejectWithValue(error.message);
    }
  }
);


// export const fetchMeals = createAsyncThunk(
//     'meal/fetchMeals',
//     async (_, thunkAPI) => {
//       const { rejectWithValue } = thunkAPI;

//       console.log("aaaaaaaaa2");

//       try {
//         const res = await fetch(`${url}`,{mode:"cors"});
//         const data = await res.json();
//         console.log("data from function reducer");
//         console.log(data);
//         return data;
//       } catch (error) {
//         console.log("errrrrrrrrrror");

//         console.log('eeeeee');
//         return rejectWithValue(error.message);
//       }
//     }
//   );

  



  const initialStateReducer ={meals: [],cats:[],isPageLoading:false,orignalMeals:[],carts:[],totalPrice:0,count:0};



  const MealsSlice = createSlice({
    name: 'meal',
    initialState: initialStateReducer,
    reducers: {
        openModal: (state, action) => {
            state.isPageLoading = action.payload;
          },
        filterMeals: (state, action) => {
          //state.tempMeal=state.meals;
          if(action.payload.Id===0)
            state.meals=state.orignalMeals
          else
            state.meals=state.orignalMeals.filter((meal)=>meal.CatID === action.payload.Id);
        },
        addToCart: (state, {payload}) => {
          const inCart= state.carts.find((item) => item.id === payload.id);

          console.log('inCart')
          console.log(inCart)
          if (inCart) {
            MealsSlice.caseReducers.increaseQuan(state, {payload});
            state.count= inCart.quan;
          } else {
            payload.tPrice=payload.price
            state.carts.push(payload);
            state.count=1;
          }
          MealsSlice.caseReducers.calculateTotalPrice(state, {payload});
        },
        removeFromCart: (state, {payload}) => {
          state.carts=state.carts.filter((cart)=>cart._id !== payload._id);
          MealsSlice.caseReducers.calculateTotalPrice(state, {payload});
        },
        clearCart: (state, {payload}) => {
          state.carts=[];
          state.totalPrice=0; 
       },
        increaseQuan: (state, {payload}) => {
          state.carts.forEach(function(obj) {
            if (obj._id === payload._id) {
              obj.quan=obj.quan+1
              obj.tPrice=obj.quan*obj.price
            }
        });
        MealsSlice.caseReducers.calculateTotalPrice(state, {payload});
              },
        decreaseQuan: (state, {payload}) => {
          state.carts.forEach(function(obj) {
            if (obj._id === payload._id) {
              obj.quan=obj.quan-1
              obj.tPrice=obj.quan*obj.price
            }
        });
        MealsSlice.caseReducers.calculateTotalPrice(state, {payload});
      },
        calculateTotalPrice: (state,{payload})=>{
          state.totalPrice=0;
          state.carts.forEach(function(obj) {
            state.totalPrice= state.totalPrice+Number(obj.tPrice);
        });
  
        },
      
    },
    extraReducers: (builder) => {
      //fetch
        builder
        .addCase(fetchMeals.fulfilled, (state, { payload }) => {
            console.log('fulfilled');
            //state.isPageLoading=true;
            state.orignalMeals=payload;
            state.meals=payload;
        })
        .addCase(fetchMeals.pending, (state, { payload }) => {
            //state.isPageLoading=true;
            console.log('pending');
        })
        .addCase(fetchCats.fulfilled, (state, { payload }) => {
          console.log('fulfilled');
          //state.isPageLoading=true;
          var tempCat=payload;
          tempCat.splice(0, 0, {Id:0,Name:"الكل"})
          state.cats=tempCat;
        })
        .addCase(fetchCats.pending, (state, { payload }) => {
            //state.isPageLoading=true;
            console.log('pending');
        })


        
        
    }, 
  });

  

  //export const {openModal,changeStatus,addToCart,removeFromCart,increaseQuan,decreaseQuan,clearCart,switchAsAdmin,searchItems} = MealSlice.actions;

  export const {openModal,filterMeals,addToCart,removeFromCart,clearCart,increaseQuan,decreaseQuan,calculateTotalPrice} = MealsSlice.actions;

  export default MealsSlice.reducer;


