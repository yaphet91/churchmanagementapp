// hooks/useTheme.js

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const toggle = () => {
        dispatch(toggleTheme());
    };

    return { theme, toggle };
};
