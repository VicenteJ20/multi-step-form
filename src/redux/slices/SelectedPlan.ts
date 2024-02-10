import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: 'monthly',
  type: ''
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
    }
  }
})

export const { setPlan, setPlanType } = selectedPlanSlice.actions;
export default selectedPlanSlice.reducer;