import { createSlice } from "@reduxjs/toolkit";

export const fetchUsers = async() => {
    ''
}

const initialState = {
  user: [],
};

const settingsUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
    //   return state.user.filter((a) => a.id !== action.payload);
    },
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
