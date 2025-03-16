// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // import the product slice reducer

const store = configureStore({
  reducer: {
    products: productReducer, // Add product slice to the store
  },
});

export default store;
