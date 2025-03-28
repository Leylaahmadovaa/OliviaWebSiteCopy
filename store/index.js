// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryAtSaleLeadersReducer from './categoryAtSaleLeadersSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    categoryAtSaleLeaders: categoryAtSaleLeadersReducer,
  },
});

export default store;
