import { DECREMENT, DECREMENT_BY_PAYLOAD, INCREMENT, INCREMENT_BY_PAYLOAD, INCREMENT_USER_BALANCE_BY_FETCH } from "../actions";


const initialAccountState = {
    amount: 100,
  };

export const accountReducer = (state = initialAccountState, action) => {
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