import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncSingle = createAsyncThunk(
  "single/fetchAsyncSingle",
  async (id) => {
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/${id}`
    ).then((res) => res.data);
    return data;
  }
);

const initialState = {
  single: [],
};

const singleCoinSlice = createSlice({
  name: "single",
  initialState,
  reducers: {
    removeSelected(state, action) {
      state.single = [];
    },
  },
  extraReducers: {
    [fetchAsyncSingle.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncSingle.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSingle.fulfilled]: (state, { payload }) => {
      console.log("fullfilled");
      return {
        ...state,
        single: payload,
      };
    },
  },
});

export const { removeSelected } = singleCoinSlice.actions;
export default singleCoinSlice.reducer;
