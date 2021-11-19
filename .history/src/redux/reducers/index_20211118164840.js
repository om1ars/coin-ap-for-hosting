import { combineReducers } from "redux";
import coinsReducer from "./coinsSlice";
import singleCoinReducer from "./singleCoinSlice";
import coinCurrentPageReducer from './coinCurrentPage'
import settingsUserSlice from "./settingsUserSlice";
const reducers = combineReducers({
  allCoins: coinsReducer,
  singleCoin: singleCoinReducer,
  stages: coinCurrentPageReducer,
  dbUsers: settingsUserSlice
});

export default reducers;
