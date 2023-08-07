import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const history = [{ amount: 1 }];

//predefining action types for error resolving
const INCREMENT = "increment"
const DECREMENT = "decrement"
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
    default:
      return state;
  }
}
const store = createStore(reducer, applyMiddleware(logger.default));

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

//Action Filters
const increment = () => ({
  type: INCREMENT,
});
const incrementByPayload = () => ({
  type: INCREMENT_BY_PAYLOAD,
  payload: 12,
});
const decrement = () => ({
  type:DECREMENT,
});
const decrementByPayload = () => ({
  type: DECREMENT_BY_PAYLOAD,
  payload: 4,
});

setInterval(() => {
  store.dispatch(incrementByPayload());
}, 1000);
