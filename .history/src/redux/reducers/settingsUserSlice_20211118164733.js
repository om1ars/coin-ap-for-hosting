import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
      getDb
  },
});

export const {} = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
