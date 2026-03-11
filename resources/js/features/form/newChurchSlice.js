import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isValid: true,
    value: {},
    errors: {},
}

const newChurchSlice = createSlice({
    name: 'newChurch',
    initialState,
    reducers: {
        addNewChurch: (state, action) => {
            state.value = action.payload
        },
        setNewChurchErrors: (state, action) => {
            state.errors = action.payload
        },
        setNewChurchValidation: (state, action) => {
            const { isValid, errors } = action.payload;
            state.isValid = isValid; 
            state.errors = errors; 
        },
        resetNewChurch: (state) => {
            state.value = initialState.value
        }
        
    },
    extraReducers: (builder) => {
    }
}
)
export const { addNewChurch, setNewChurchErrors, setNewChurchValidation, resetNewChurch } = newChurchSlice.actions;
export default newChurchSlice.reducer;