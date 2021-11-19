import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
      return state.filter((a) => a.id !== action.payload);
    },
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
