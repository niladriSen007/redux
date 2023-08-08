import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../slices/accountSlice'
import bonusSlice from '../slices/bonusSlice'

export const store = configureStore({
  reducer: {
    account:accountSlice,
    bonus:bonusSlice,
  },
})