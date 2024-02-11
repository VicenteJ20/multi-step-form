import { createSlice } from "@reduxjs/toolkit";
import { Step3SliceProps } from "../../interfaces/Steps";

const initialState: Step3SliceProps = {
  selectedAddOns: []
}

const AddOns = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    addNewAddOn: (state, action) => {
      state.selectedAddOns.push(action.payload)
    },
    removeAddOn: (state, action) => {
      state.selectedAddOns = state.selectedAddOns.filter((item) => item.title !== action.payload.title)
    }
  }
})

export const { addNewAddOn, removeAddOn } = AddOns.actions
export default AddOns.reducer