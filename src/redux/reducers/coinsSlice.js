import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CoinList } from "../../config/api";

export const fetchAsnycCoins = createAsyncThunk(
  "coins/fetchAsnycCoins",
  async (currency) => {
    // const currency = "USD";
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    ).then((res) => res.data);
    return data;
  }
);



const initialState = {
  coins: [],
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    removeSelectedCoins(state, action) {
    //   state.selectedCoins = {};
    },
  },
  extraReducers: {
    [fetchAsnycCoins.pending]: () => {
    },
    [fetchAsnycCoins.rejected]: () => {
    },
    [fetchAsnycCoins.fulfilled]: (state, { payload }) => {
      return { ...state, coins: payload };
    },
 
  },
});

export const { removeSelectedCoins } = coinsSlice.actions;
export default coinsSlice.reducer;
