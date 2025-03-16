// store/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Step 1: Define the asynchronous action using createAsyncThunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', // Action type
  async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();
    return data; // Return the product data
  }
);

// Step 2: Create a slice to manage products
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Step 3: Handle the different states (pending, fulfilled, rejected)
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Store the fetched product data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store error message
      });
  },
});

// Step 4: Export the reducer
export default productSlice.reducer;
