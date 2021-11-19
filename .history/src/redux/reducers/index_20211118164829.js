import { combineReducers } from "redux";
import coinsReducer from "./coinsSlice";
import singleCoinReducer from "./singleCoinSlice";
import coinCurrentPageReducer from './coinCurrentPage'
const reducers = combineReducers({
  allCoins: coinsReducer,
  singleCoin: singleCoinReducer,
  stages: coinCurrentPageReducer,
  dbUsers:
});

export default reducers;
