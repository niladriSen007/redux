import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  amount: 100,
}



export const fetchUserById = createAsyncThunk(
  'account/fetchUserById',
  async (userId, thunkAPI) => {
    const response = await axios.get(`http://localhost:8000/accounts/${userId}`)
    return response.data.amount
  }
)




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
  extraReducers:(builder)=>{
    builder.addCase(fetchUserById.fulfilled,(state,action)=>{
      state.amount += action.payload
      state.pending = false
    })
    builder.addCase(fetchUserById.pending,(state,action)=>{
      state.pending = true
    })
    builder.addCase(fetchUserById.rejected,(state,action)=>{
      state.error = true
    })
  }
})

// Action creators are generated for each case reducer function
export const { incrementAmount,decrementAmount,incrementAmountByValue } = accountSlice.actions



export default accountSlice.reducer