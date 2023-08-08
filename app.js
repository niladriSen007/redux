import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const history = [{ amount: 1 }];

//predefining action types for error resolving
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENT_USER_BALANCE_BY_FETCH = "incrementuserbalancebyfetch";
const INCREMENT_BY_PAYLOAD = "incrementByPayload";
const DECREMENT_BY_PAYLOAD = "decrementByPayload";
const INCREMENT_BONUS = "incrementbonus";
const DECREMENT_BONUS = "decrementbonus";

const initialAccountState = {
  amount: 100,
};

const initialBonustState = {
  bonus: 0,
};

function accountReducer(state = initialAccountState, action) {
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

function bonusReducer(state = initialBonustState, action) {
  switch (action.type) {
    case INCREMENT_BONUS:
      if(action.payload > 50)
        return { ...state, bonus: state.bonus + 10 };
      return state
    case DECREMENT_BONUS:
      return { ...state, bonus: state.bonus + action.payload };
    // case DECREMENT:
    //   return { ...state, amount: state.amount - 1 };
    // case DECREMENT_BY_PAYLOAD:
    //   return { ...state, amount: state.amount - action.payload };
    // case INCREMENT_USER_BALANCE_BY_FETCH:
    //   return { ...state, amount: state.amount + action.payload };
    default:
      return state;
  }
}

//Creating the store
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk.default)
);

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

//fetching user data
const fetchUser = async () => {
  const { data } = await axios.get(`http://localhost:3000/accounts/1`);
  return data.amount;
};

const fetchUserBySpecificId = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
  return data.amount;
};



//Action Filters
//Accounts
const increment = () => ({
  type: INCREMENT,
});
const incrementByPayload = () => ({
  type: INCREMENT_BY_PAYLOAD,
  payload: 12,
});
const incrementuserbalancebyfetch = async (dispatch, getState) => {
  const user_amount = await fetchUserBySpecificId(2);
  dispatch({
    type: INCREMENT_USER_BALANCE_BY_FETCH,
    payload: user_amount,
  });
};
const decrement = () => ({
  type: DECREMENT,
});
const decrementByPayload = () => ({
  type: DECREMENT_BY_PAYLOAD,
  payload: 4,
});



//Bonus
const incrementBonus = (payload) => ({
  type: INCREMENT_BONUS,
  payload:payload,
});

//dispatching the events
setInterval(() => {
  store.dispatch(incrementBonus(52));
}, 1000);
