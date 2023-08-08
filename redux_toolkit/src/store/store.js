import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../slices/accountSlice'
import bonusSlice from '../slices/bonusSlice'
import { rewardReducer } from '../reducers/rewardReducer'

export const store = configureStore({
  reducer: {
    account:accountSlice,
    bonus:bonusSlice,
    reward:rewardReducer
  },
})