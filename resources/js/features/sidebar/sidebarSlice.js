// features/form/sidebarSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        sidebarOpen: true,
    },
    reducers: {
        setSidebarOpen: state => {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
});

export const { setSidebarOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
