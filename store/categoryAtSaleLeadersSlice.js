import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    currentCategoryAtSaleLeaders: "Kirpiklər üçün tuş", 
};

const categoryAtSaleLeadersStore = createSlice({
  name: "categoryAtSaleLeaders",
  initialState,
  reducers: {
    changeCategoryAtSaleLeaders: (state, action) => {
      state.currentCategoryAtSaleLeaders = action.payload;
    },
  },
});

export default categoryAtSaleLeadersStore.reducer;
export const categoryAtSaleLeadersActions = categoryAtSaleLeadersStore.actions;
