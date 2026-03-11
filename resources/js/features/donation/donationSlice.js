import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isValid: true,
    value: {
        name: '',
        reason: '',
        amount: '',
        description: ''
    },
    errors: {},
}

const donationSlice = createSlice({
    name: 'donation',
    initialState,
    reducers: {
        addDonation: (state, action) => {
            state.value = action.payload
        },
        setDonationErrors: (state, action) => {
            state.errors = action.payload
        },
        setDonationValidation: (state, action) => {
            const { isValid, errors } = action.payload;
            state.isValid = isValid;
            state.errors = errors;
        }

    },
    extraReducers: (builder) => {
    }
}
)
export const { addDonation, setDonationErrors, setDonationValidation } = donationSlice.actions;
export default donationSlice.reducer;