import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 100,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementAmount(state){
        state.amount += 100
    },
    incrementAmountByValue(state,action){
        state.amount += action.payload
    },
    decrementAmount(state){
        state.amount -= 10
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementAmount,decrementAmount,incrementAmountByValue } = accountSlice.actions

export default accountSlice.reducer