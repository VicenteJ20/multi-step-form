import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ActiveStepProps } from '../../interfaces/Steps'

const initialState: ActiveStepProps = {
  value: 1
}

export const ActiveStepSlice = createSlice({
  name: 'activeStep',
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { setActiveStep } = ActiveStepSlice.actions
export default ActiveStepSlice.reducer