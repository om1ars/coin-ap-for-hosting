import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



"https://jsonplaceholder.typicode.com/users?_limit=3"

const initialState = {
  user: [],
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
      return state.user.filter((a) => a.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.pending]: () => {
      console.log("Pending");
    },
  },
  [fetchUsers.rejected]: () => {
    console.log("rejected");
  },
  [fetchUsers.fulfilled]: (state, { payload }) => {
    return { ...state, user: payload };
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
