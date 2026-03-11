
import { useState, useEffect } from 'react';

const useColorMode = () => {
    const [colorMode, setColorMode] = useState('light');

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setColorMode(currentTheme || 'light');
    }, []);

    const toggleColorMode = () => {
        const newMode = colorMode === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newMode);
        setColorMode(newMode);
    };

    return [colorMode, toggleColorMode];
};

export default useColorMode;
