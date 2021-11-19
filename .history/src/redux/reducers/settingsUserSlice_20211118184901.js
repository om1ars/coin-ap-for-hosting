import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  blogs: [
    {
      id: 1,
      name: "Hey",
    },
    {
      id: 2,
      name: "Hey2",
    },
    {
      id: 3,
      name: "He3",
    },
    {
      id: 4,
      name: "He4",
    },
    {
      id: 5,
      name: "Hey5",
    },
  ],
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
      return state.blogs.filter(({id}) => a.id !== action.payload);
    },
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
