import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { cryptoApi } from "./reducers/cryptoApi";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
  [cryptoApi.reducerPath]: cryptoApi.reducer
});

export default store;
