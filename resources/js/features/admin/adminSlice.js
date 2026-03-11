import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        name: '',
        email: '',
    },
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        addAdminDetail: (state, action) => {
            state.value = action.payload
        },
        adminLogout: (state) => {
            return initialState;  // Reset the state to initial
        },

    },
    extraReducers: (builder) => {
 
    }
}
)
export const { addAdminDetail, adminLogout } = adminSlice.actions;
export default adminSlice.reducer;

