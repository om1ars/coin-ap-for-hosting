import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=3")
    .then((res) => res.data);
  return data;
});

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
  }, [fetchUsers.rejected]: () => {
      console.log('rejected')
  }, [fetchUsers.co]
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
