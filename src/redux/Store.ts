import { configureStore } from '@reduxjs/toolkit'
import Step1Slice from './slices/Step1Slice'
import ActiveStepSlice from './slices/ActiveState'
import SelectedPlan from './slices/SelectedPlan'
import AddOns from './slices/AddOns'

export const store = configureStore({
  reducer: {
    step1: Step1Slice,
    activeState: ActiveStepSlice,
    plan: SelectedPlan,
    addons: AddOns,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch