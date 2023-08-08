import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bonus: 0,
}

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
})

// Action creators are generated for each case reducer function
export const { incrementBonus,decrementBonus } = bonusSlice.actions

export default bonusSlice.reducer