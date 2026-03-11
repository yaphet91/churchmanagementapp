import { Link, Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import Login from './Auth/Login';
import Register from './Auth/Register';
import EritreaFlag from '@/assets/images/icons/eritrea_flag.png';
import USAFlag from '@/assets/images/icons/usa_flag.png';
import bg_1_imageUrl from './../assets/images/background/login_bg_1.png';
import signup_bg_imageUrl from './../assets/images/background/signup_bg_1.png'
import { useTranslation } from 'react-i18next';
import GuestLayout from '@/Layouts/GuestLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/features/language/languageSlice';
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';

export default function Welcome({ auth }) {
    const [signIn, setSignIn] = React.useState(true);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-start min-h-screen bg-dots-darker
             bg-center  dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="flex items-start justify-end  -space-x-2 p-5 mr-32 z-50 w-full h-10">
                    <button
                        onClick={() => dispatch(setLanguage('tg'))}
                        className={`flex items-center justify-start ${language === 'tg' ? 'border': ''} border-gray-400 rounded-md px-4 py-1 text-black`}>
                        <img src={EritreaFlag} alt='translate' className='w-6 h-4 mr-2'/>
                        ትግርኛ
                    </button>
                    <button
                        onClick={() => dispatch(setLanguage('en'))}
                        className={`flex items-center justify-start ${language === 'en' ? 'border' : ''} border-gray-400 rounded-md px-4 py-1 text-black`}>
                        <img src={USAFlag} alt='translate' className='w-6 h-4 mr-2'/>
                        English
                    </button>
                    {/* <LanguageSwitcher /> */}

                </div>

                <div className="bg-white shadow-lg absolute overflow-hidden w-screen h-screen top-0 left-0"
>
                    <div className={`absolute top-14 h-full transition-all ease-in-out duration-600 left-0 w-1/2 opacity-0 z-10 ${!signIn ? 'translate-x-full opacity-100 z-50' : ''}`}>
                        {/* SignUp Container */}
                        <Register />
                    </div>

                    <div className={`absolute  h-full transition-all ease-in-out duration-600 left-0 w-1/2 z-20 ${!signIn && 'translate-x-full'}`}>
                        {/* SignIn Container */}
                       <Login/>
                    </div>

                    <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-600 z-40 ${!signIn && 'translate-x-[-100%]'}`}>
                        {/* Overlay Container */}
                        <div className={`absolute left-[-100%] h-full w-[200%] text-black transition-transform ease-in-out duration-600 ${!signIn && 'translate-x-[50%]'}`}>
                            {/* Overlay */}
                            <div className={`absolute top-0 h-full w-1/2 flex items-center justify-center flex-col p-0 mx-10 text-center transition-transform ease-in-out duration-600 ${!signIn ? 'translate-x-0' : 'translate-x-[-20%]'}`}>
                                {/* LeftOverlayPanel */}
                                {/* <h1 className="font-bold">Welcome Back!</h1> */}
                                <img src={signup_bg_imageUrl} alt='bg' className='max-w-lg mx-auto my-5'/>
                                <p className="text-sm font-light leading-5 tracking-wide my-5">To keep connected with us please login with your personal info</p>
                                <button onClick={() => setSignIn(true)} className="bg-transparent border border-blue-800 text-black rounded-lg text-sm font-bold 
                                py-3 px-12 uppercase tracking-wide transition-transform duration-75 ease-in-out hover:scale-95 focus:outline-none">Sign In</button>
                            </div>
                            <div
                                // style={{ backgroundImage: `url(${bg_1_imageUrl})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                className={`absolute right-0  top-0 h-full w-1/2 flex items-center justify-center flex-col p-0 mx-10 text-center 
                            transition-transform ease-in-out duration-600 ${!signIn && 'translate-x-[20%]'}`}>
                                {/* RightOverlayPanel */}
                                {/* <h1 className="font-bold">Hello, Friend!</h1> */}
                                <img src={bg_1_imageUrl} alt='bg'/>
                                <p className='mb-2 text-sm'>{t("Hello friend, are you new here? Please register!")}</p>
                                <button onClick={() => setSignIn(false)} className="bg-transparent border border-blue-800 text-black rounded-lg 
                                text-sm font-bold py-3 px-12 uppercase tracking-wide transition-transform duration-75 ease-in-out hover:scale-95
                                focus:outline-none">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style> */}
        </>
    );
}
