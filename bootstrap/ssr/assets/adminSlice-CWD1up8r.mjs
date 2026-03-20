import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    name: "",
    email: ""
  }
};
const adminSlice = createSlice(
  {
    name: "admin",
    initialState,
    reducers: {
      addAdminDetail: (state, action) => {
        state.value = action.payload;
      },
      adminLogout: (state) => {
        return initialState;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addAdminDetail, adminLogout } = adminSlice.actions;
const adminReducer = adminSlice.reducer;
export {
  addAdminDetail as a,
  adminLogout as b,
  adminReducer as c
};
