import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: 'monthly',
  type: '',
  price: 0
};

const selectedPlanSlice = createSlice({
  name: 'selectedPlan',
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    setPlanType: (state, action) => {
      state.type = action.payload;
    },
    setPlanPrice: (state, action) => {
      state.price = action.payload;
    }
  }
})

export const { setPlan, setPlanType, setPlanPrice } = selectedPlanSlice.actions;
export default selectedPlanSlice.reducer;