// features/theme/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem('theme') || 'dark',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Persist theme selection in localStorage
            state.theme = newTheme;
            document.documentElement.setAttribute('data-theme', newTheme); // Update the attribute on <html> to match the new theme
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
