import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isValid: true,
  value: {},
  errors: {}
};
const newChurchSlice = createSlice(
  {
    name: "newChurch",
    initialState,
    reducers: {
      addNewChurch: (state, action) => {
        state.value = action.payload;
      },
      setNewChurchErrors: (state, action) => {
        state.errors = action.payload;
      },
      setNewChurchValidation: (state, action) => {
        const { isValid, errors } = action.payload;
        state.isValid = isValid;
        state.errors = errors;
      },
      resetNewChurch: (state) => {
        state.value = initialState.value;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addNewChurch, setNewChurchErrors, setNewChurchValidation, resetNewChurch } = newChurchSlice.actions;
const newChurchReducer = newChurchSlice.reducer;
export {
  addNewChurch as a,
  setNewChurchErrors as b,
  newChurchReducer as n,
  resetNewChurch as r,
  setNewChurchValidation as s
};
