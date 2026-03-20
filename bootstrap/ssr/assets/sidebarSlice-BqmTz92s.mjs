import { createSlice } from "@reduxjs/toolkit";
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarOpen: true
  },
  reducers: {
    setSidebarOpen: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    }
  }
});
const { setSidebarOpen } = sidebarSlice.actions;
const sidebarReducer = sidebarSlice.reducer;
export {
  sidebarReducer as a,
  setSidebarOpen as s
};
