import './bootstrap';
import '../css/app.css';
import './i18n/i18n';
import LanguageFontClassManager from './i18n/FontManger/LanguageFontClassManager';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { store } from './store';
import { Provider } from 'react-redux';
import React, { useEffect, useContext, createContext } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

const appName = import.meta.env.VITE_APP_NAME || 'Anastasia';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const ThemeProvider = ({ children }) => {
            const { theme } = useSelector((state) => state.theme);

            useEffect(() => {
                // Toggle class based on the theme state
                const className = 'dark';
                document.documentElement.classList.toggle(className, theme === 'dark');
            }, [theme]);

            return <ThemeContext.Provider value={{ theme }}>
                    <LanguageFontClassManager /> {/* this line manages font */}
                        {children}
                    </ThemeContext.Provider>;
        };

        root.render(
            <Provider store={store}>
                <ThemeProvider>
                    <Toaster position="top-right" /> {/* this line adds a toast notification */}
                    <App {...props} />
                </ThemeProvider>
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
