import { configureStore } from '@reduxjs/toolkit'
import Step1Slice from './slices/Step1Slice'
import ActiveStepSlice from './slices/ActiveState'

export const store = configureStore({
  reducer: {
    step1: Step1Slice,
    activeState: ActiveStepSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch