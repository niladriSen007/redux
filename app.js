import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";




const history = [{ amount: 1 }];





//predefining action types for error resolving
const INCREMENT = "increment"
const DECREMENT = "decrement"
const INCREMENT_USER_BALANCE_BY_FETCH = "incrementuserbalancebyfetch"
const INCREMENT_BY_PAYLOAD = "incrementByPayload"
const DECREMENT_BY_PAYLOAD = "decrementByPayload"





const initialState = {
  amount: 1,
};





function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, amount: state.amount + 1 };
    case INCREMENT_BY_PAYLOAD:
      return { ...state, amount: state.amount + action.payload };
    case DECREMENT:
      return { ...state, amount: state.amount - 1 };
    case DECREMENT_BY_PAYLOAD:
      return { ...state, amount: state.amount - action.payload };
    case INCREMENT_USER_BALANCE_BY_FETCH:
      return { ...state, amount: state.amount + action.payload };
    default:
      return state;
  }
}



//Creating the store
const store = createStore(reducer, applyMiddleware(logger.default,thunk.default));




store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});





//fetching user data
const fetchUser = async() =>{
  const {data} = await axios.get(`http://localhost:3000/accounts/1`)
  return data.amount
}


const fetchUserBySpecificId = async(id) =>{
  const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
  return data.amount
}




//Action Filters
const increment = () => ({
  type: INCREMENT,
});
const incrementByPayload = () => ({
  type: INCREMENT_BY_PAYLOAD,
  payload: 12,
});
const incrementuserbalancebyfetch = async(dispatch,getState) => {
  const user_amount = await fetchUserBySpecificId(2)
  dispatch ({
  type: INCREMENT_USER_BALANCE_BY_FETCH,
  payload: user_amount,
})};
const decrement = () => ({
  type:DECREMENT,
});
const decrementByPayload = () => ({
  type: DECREMENT_BY_PAYLOAD,
  payload: 4,
});




//dispatching the events
setInterval(() => {
  store.dispatch(incrementuserbalancebyfetch);
}, 1000);
