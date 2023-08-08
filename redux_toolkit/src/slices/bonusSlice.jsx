import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  bonus: 0,
}

export const ADDBONUSBASEDONAMOUNT = createAction("account/incrementAmountByValue")

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    incrementBonus(state){
        state.bonus += 10
    },
    decrementBonus(state){
        state.bonus -= 10
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(ADDBONUSBASEDONAMOUNT,(state,action)=>{
      if(action.payload > 1000)
        state.bonus += 15
    })
  }
})

// Action creators are generated for each case reducer function
export const { incrementBonus,decrementBonus } = bonusSlice.actions

export default bonusSlice.reducer