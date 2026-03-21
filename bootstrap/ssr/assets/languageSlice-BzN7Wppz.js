import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  language: localStorage.getItem("language") || "en"
  // Default to English or saved language
};
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    }
  }
});
const { setLanguage } = languageSlice.actions;
const languageReducer = languageSlice.reducer;
export {
  languageReducer as l,
  setLanguage as s
};
