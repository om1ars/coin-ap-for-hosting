import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  blogs:
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
      state.user.filter((a) => a.id !== action.payload);
    },
  },
});

export const { getDbUser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
