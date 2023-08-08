import { createReducer,createAction } from "@reduxjs/toolkit"

const initialState = {
    rewards: 0,
}

export const ADD_REWARD = createAction("addreward")
export const REMOVE_REWARD = createAction("removereward")
export const ADD_REWARD_PAYLOAD = createAction("addrewardpayload")
export const ADD_REWARD_BASED_ON_AMOUNT = createAction("account/incrementAmountByValue")

export const rewardReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(ADD_REWARD, (state, action) => {
        state.rewards += 500
      })
      .addCase(ADD_REWARD_PAYLOAD, (state, action) => {
        state.rewards += action.payload
      })
      .addCase(REMOVE_REWARD, (state, action) => {
        state.rewards -= 50
      })
  })