// features/form/drawerSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        drawerOpen: false,
    },
    reducers: {
        setDrawerOpen: state => {
            state.drawerOpen = !state.drawerOpen;
        },
    },
});

export const { setDrawerOpen } = drawerSlice.actions;

export default drawerSlice.reducer;
