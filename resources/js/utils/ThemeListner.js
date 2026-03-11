// components/ThemeListener.jsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeListener = () => {
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return null; // This component does not render anything
};

export default ThemeListener;
