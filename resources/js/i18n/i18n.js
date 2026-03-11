// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import translationEN from '../locales/en/translation.json';
import translationTG from '../locales/tg/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    tg: {
        translation: translationTG,
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // debug: true,
        resources,
        lng: "en", // language to use
        fallbackLng: "en", // when specified language translations are not available
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
