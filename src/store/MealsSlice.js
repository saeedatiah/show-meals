import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';






export const fetchMeals = createAsyncThunk(
  'meal/fetchMeals',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    console.log("aaaaaaaaa2");

    try {
      const res = await fetch(`https://localhost:7067/Items`,{mode:"cors"});
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
      const res = await fetch(`https://localhost:7067/Categories`,{mode:"cors"});
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

  



  const initialStateReducer ={meals: [],cats:[],isPageLoading:false,orignalMeals:[]};



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

  export const {openModal,filterMeals} = MealsSlice.actions;

  export default MealsSlice.reducer;


