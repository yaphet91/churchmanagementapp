import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        validRegistrationIntro: true,
        validPersonalDetails: false,
        validIdentification: false,
        validContactInfo: false,
        validAdditionalInfo: false,
        validChurchParticipation: false,
        validConfirmation: false,
    },
    errors: {}
}

const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        setValidationErrors: (state, action) => {
            state.errors = action.payload;
        },
        setStepValidation: (state, action) => {
            const { step, isValid, errors } = action.payload;
            // Ensure we're updating the nested `value` structure correctly
            state.value[step] = isValid; // Adjusted to access `value` for validation flags
            state.errors[step] = errors; // Assume errors is an object with field-specific errors
        },
        resetStepValidation: (state, action) => {
            const step = action.payload;
            state.value[step] = false; // Adjusted to access `value` for validation flags
            delete state.errors[step];
        },
        resetValidation: (state) => {
            // Directly returning initialState is fine, but ensure deep structures are correctly handled
            return initialState;
        },
    }
});

export const {
    setValidationErrors,
    setStepValidation,
    resetStepValidation,
    resetValidation,
} = validationSlice.actions;

export default validationSlice.reducer;
