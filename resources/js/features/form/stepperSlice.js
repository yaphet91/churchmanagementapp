import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentStep: 0,
    attemptedToProceed: false,
    isActiveFormValid: true,
    errors: {}
}

const stepperSlice = createSlice({
    name: 'stepper',
    initialState,
    reducers: {
        enableAttemptedToProceed: (state, action) => {
            state.attemptedToProceed = action.payload
        },
        addErrors: (state, action) => {
            state.errors = action.payload
        },
        enableNext: (state) => {
            state.isActiveFormValid = true
        },
        disableNext: (state) => {
            state.isActiveFormValid = false
        },
        nextStep: (state) => {
            state.currentStep = state.currentStep + 1
        },
        previousStep: (state) => {
            state.currentStep = state.currentStep - 1
        },
        clickedStep: (state, action) => {
            state.currentStep = action.payload
        },
        resetSteps: (state) => {
            state.currentStep = 0
        },
    }
});
export const { enableAttemptedToProceed, enableNext, disableNext, nextStep, previousStep, resetSteps, addErrors, clickedStep } = stepperSlice.actions;
export default stepperSlice.reducer;