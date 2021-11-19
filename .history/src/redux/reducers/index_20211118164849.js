import { combineReducers } from "redux";
import coinsReducer from "./coinsSlice";
import singleCoinReducer from "./singleCoinSlice";
import coinCurrentPageReducer from "./coinCurrentPage";
import settingsUserReducer from "./settingsUserSlice";
const reducers = combineReducers({
  allCoins: coinsReducer,
  singleCoin: singleCoinReducer,
  stages: coinCurrentPageReducer,
  dbUsers: settingsUserReducer,
});

export default reducers;
