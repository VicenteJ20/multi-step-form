import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Step1Props } from '../../interfaces/Steps'

const initialState: Step1Props = {
  name: '',
  email_address: '',
  phone_number: '',
}

export const Step1Slice = createSlice({
  name: 'step1',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.email_address = action.payload
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload
    },
  }
})

export const { setName, setEmailAddress, setPhoneNumber } = Step1Slice.actions
export default Step1Slice.reducer