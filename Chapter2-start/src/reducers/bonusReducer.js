import { DECREMENT_BONUS, INCREMENT_BONUS } from "../actions";


const initialBonustState = {
    bonus: 0,
  };

export const bonusReducer = (state = initialBonustState, action) =>{
    switch (action.type) {
      case INCREMENT_BONUS:
        if(action.payload > 50)
          return { ...state, bonus: state.bonus + 10 };
        return state
      case DECREMENT_BONUS:
        return { ...state, bonus: state.bonus + action.payload };
      default:
        return state;
    }
  }