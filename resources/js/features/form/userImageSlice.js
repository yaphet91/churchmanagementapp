import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        imageUrl: '',
        imageSize: '',
    },
    loading: false,
    isSuccess: false,

}

const userImageSlice = createSlice({
    name: 'profileImage',
    initialState,
    reducers: {
        addUserImage: (state, action) => {
            state.value = action.payload
        },
        resetUserImage: (state) => { 
            state.value = initialState.value
        }

    },
    extraReducers: (builder) => {

    }
}
)
export const { addUserImage, resetUserImage } = userImageSlice.actions;
export default userImageSlice.reducer;