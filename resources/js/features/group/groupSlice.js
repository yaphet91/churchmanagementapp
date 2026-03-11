import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        membersAdded: false,
    },
}

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        addMemberToGroup: (state, action) => {
            state.value.membersAdded = action.payload
        },  
        resetGroup: (state) => {
            state.value = initialState.value
            state.errors = {}
        }
    },
    extraReducers: (builder) => {

    }
}
)
export const { addMemberToGroup, resetGroup, } = groupSlice.actions;
export default groupSlice.reducer;

