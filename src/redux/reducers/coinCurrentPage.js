import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD, MY_COIN } from "../../utils/constants";

const initialState = {
  stage: "Welcome",
};

const coinCurrentPage = createSlice({
  name: "current",
  initialState,
  reducers: {
    dispatchDashboard(state, action) {
      state.stage = DASHBOARD;
    },
    dispatchMyCoin(state, action) {
      state.stage = MY_COIN;
    },
  },
});

export const { dispatchDashboard, dispatchMyCoin } = coinCurrentPage.actions;
export default coinCurrentPage.reducer;
