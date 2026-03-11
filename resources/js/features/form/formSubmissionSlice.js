// features/form/formSubmissionSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const formSubmissionSlice = createSlice({
    name: 'formSubmission',
    initialState: {
        isSubmitted: false,
    },
    reducers: {
        setFormSubmitted: state => {
            state.isSubmitted = true;
        },
        resetFormSubmission: state => {
            state.isSubmitted = false;
        },
    },
});

export const { setFormSubmitted, resetFormSubmission } = formSubmissionSlice.actions;

export default formSubmissionSlice.reducer;
