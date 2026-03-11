import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageFontClassManager = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const updateBodyFontClass = (language) => {
            const classMap = {
                'en': 'font-sans',
                'tg': 'font-tigrinya',
            };
            document.body.classList.remove('font-sans', 'font-tigrinya');
            const fontClass = classMap[language.split('-')[0]];
            if (fontClass) {
                document.body.classList.add(fontClass);
            }
        };

        updateBodyFontClass(i18n.language);
        i18n.on('languageChanged', updateBodyFontClass);

        return () => i18n.off('languageChanged', updateBodyFontClass);
    }, [i18n]);

    return null; // This component does not render anything
};

export default LanguageFontClassManager;
