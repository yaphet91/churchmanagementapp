// src/features/language/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: localStorage.getItem('language') || 'en', // Default to English or saved language
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem('language', action.payload); // Persist language preference
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
