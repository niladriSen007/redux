import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { accountReducer } from "../reducers/accountReducer";
import { bonusReducer } from "../reducers/bonusReducer";


export const store = createStore(
    combineReducers({ account: accountReducer, bonus: bonusReducer }),
    applyMiddleware(logger.default, thunk.default)
  );