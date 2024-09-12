import { configureStore } from '@reduxjs/toolkit';
import meals from './MealsSlice';


export default configureStore({ reducer: { meals} });