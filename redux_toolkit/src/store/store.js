import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../slices/accountSlice'
import bonusSlice from '../slices/bonusSlice'
import { rewardReducer } from '../reducers/rewardReducer'
import { adminApi } from '../api/adminSlice'

export const store = configureStore({
  reducer: {
    account:accountSlice,
    bonus:bonusSlice,
    reward:rewardReducer,
    [adminApi.reducerPath]:adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
})