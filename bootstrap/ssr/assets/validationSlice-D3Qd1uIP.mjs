import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    validRegistrationIntro: true,
    validPersonalDetails: false,
    validIdentification: false,
    validContactInfo: false,
    validAdditionalInfo: false,
    validChurchParticipation: false,
    validConfirmation: false
  },
  errors: {}
};
const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setValidationErrors: (state, action) => {
      state.errors = action.payload;
    },
    setStepValidation: (state, action) => {
      const { step, isValid, errors } = action.payload;
      state.value[step] = isValid;
      state.errors[step] = errors;
    },
    resetStepValidation: (state, action) => {
      const step = action.payload;
      state.value[step] = false;
      delete state.errors[step];
    },
    resetValidation: (state) => {
      return initialState;
    }
  }
});
const {
  setValidationErrors,
  setStepValidation,
  resetStepValidation,
  resetValidation
} = validationSlice.actions;
const validationReducer = validationSlice.reducer;
export {
  setValidationErrors as a,
  setStepValidation as s,
  validationReducer as v
};
