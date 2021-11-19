import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
      getDbUser(state, action) => {
          
      }
  },
});

export const {} = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
