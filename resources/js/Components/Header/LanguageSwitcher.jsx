import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/features/language/languageSlice';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    // const [language, setLanguage] = useState(i18n.language || 'en');
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'tg' : 'en';
        dispatch(setLanguage(newLanguage));
    };

    return (
        <div className='relative mt-2 block h-7 w-8 px-2'>
            <button className='ml-[-60px] w-20 font-light text-md px-1  rounded-md'
                onClick={handleLanguageChange}>
                {language === 'en' ? 'ትግርኛ' : 'English'}
            </button>
        </div>
    );
}

export default LanguageSwitcher;
