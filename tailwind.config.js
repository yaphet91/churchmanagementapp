import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    darkMode: 'class', // Enable dark mode by class strategy
    theme: {
        extend: {
            fontFamily: {
                sans: ['Jost', 'Figtree', ...defaultTheme.fontFamily.sans],
                tigrinya: ['abyssinia', ...defaultTheme.fontFamily.sans],
                // tigrinya2: ['SecondFontName', 'sans-serif'],
            },
            colors: {
                current: 'currentColor',
                transparent: 'transparent',
                white: '#FFFFFF',
                black: '#1C2434',
                'black-2': '#010101',
                body: '#64748B',
                bodydark: '#AEB7C0',
                bodydark1: '#DEE4EE',
                bodydark2: '#8A99AF',
                bodydark3: '#383838',
                primary: '#3C50E0',
                secondary: '#80CAEE',
                stroke: '#E2E8F0',
                graydark: '#404040',
                whiten: '#F1F5F9',
                whiter: '#F5F7FD',
                boxdark: '#24303F',
                'boxdark-2': '#1A222C',
                strokedark: '#2E3A47',
                'form-strokedark': '#3d4d60',
                'form-input': '#1d2a39',
                'meta-1': '#DC3545',
                'meta-2': '#EFF2F7',
                'meta-3': '#10B981',
                'meta-4': '#313D4A',
                'meta-5': '#259AE6',
                'meta-6': '#FFBA00',
                'meta-7': '#FF6766',
                'meta-8': '#F0950C',
                'meta-9': '#E5E7EB',
                success: '#219653',
                danger: '#D34053',
                warning: '#FFA70B',
            },
            
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        forms
    ], // Add other plugins as needed
};
