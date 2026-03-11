import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '@/Constants';
import { GrLanguage } from "react-icons/gr";
import Dropdown from '@/Components/Dropdowns/Dropdown';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import DarkModeSwitcher from '@/Components/Header/DarkModeSwitcher';
import { Inertia } from '@inertiajs/inertia';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/user/userSlice';
import { resetMemberState } from '@/features/form/memberSlice';
import { resetUserCourses } from '@/features/form/userCoursesSlice';
import { resetUserImage } from '@/features/form/userImageSlice';
import { resetSteps } from '@/features/form/stepperSlice';
import { resetNewChurch } from '@/features/form/newChurchSlice';
import { resetUserChurchHistory } from '@/features/form/userChurchHistorySlice';

const Navbar = ({ user }) => {
    const [toggle, setToggle] = useState(false);
    const { t } = useTranslation();
    const has_completed_membership_form = useSelector((state) => state.user.value.has_completed_membership_form);
    const dispatch = useDispatch();
    const goToForm = (event) => {
        event.preventDefault();
        dispatch(resetMemberState())
        dispatch(resetUserImage())
        dispatch(resetUserCourses())
        dispatch(resetSteps());
        dispatch(resetNewChurch());
        dispatch(resetUserChurchHistory());
        Inertia.get('/membership/form');
    }

    const goToDashboard = (event) => {
        event.preventDefault();
        Inertia.get('/member/events');
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        Inertia.post(route('logout')); // Ensure the 'route' function is properly imported or configured
    }
    return (
        <nav className="px-14 fixed z-10 w-full bg-white/25 backdrop-blur-lg border border-white/18 p-4 flex justify-between top-0 right-0 left-0 items-center">
            <div className="ml-2 flex space-x-14 items-center">
                <a href='#' className='text-2xl font-semibold flex items-center'>
                    <img src={images.logo} alt="logo" className="w-10 md:w-14 inline-block items-center" />
                    <span className=''>Anastasia</span>
                </a>

                <ul className="hidden md:flex md:justify-center md:items-center text-sm md:flex-1">
                    {['home', 'about', 'mission', 'media', 'services', 'contact'].map((item) => (
                        <li key={`link-${item}`} className="mx-4 group cursor-pointer uppercase font-medium text-gray-500 hover:text-blue-800 first-line:transition-colors flex flex-col items-center justify-center">
                            <ScrollLink to={item} spy={true} smooth={true} offset={-100} duration={500}>
                                {item}
                            </ScrollLink>
                            <div className='w-14 h-1 mt-2 bg-transparent rounded-lg mb-1 group-hover:bg-blue-800' />
                        </li>
                    ))}
                    {user && has_completed_membership_form === 1 &&
                        <li onClick={goToDashboard}
                            className="bg-gray-400 py-2 px-2 rounded-lg -translate-y-1.5 mx-4 group cursor-pointer uppercase font-medium text-gray-700 hover:text-white first-line:transition-colors flex flex-col items-center justify-center">
                            Dashboard
                        </li>}
                    {user && has_completed_membership_form === 0 &&
                        <li onClick={goToForm}
                            className="bg-gray-400 py-2 px-2 rounded-lg -translate-y-1.5 mx-4 group cursor-pointer uppercase font-medium text-gray-700 hover:text-white first-line:transition-colors flex flex-col items-center justify-center">
                            Start Membership
                        </li>}

                </ul>
            </div>
            <div className='space-x-4 hidden md:flex items-start'>
                {/* <DarkModeSwitcher /> */}
                <LanguageSwitcher />

                {/* <a href='#' className='hidden md:flex items-center hover:text-blue-800 text-md text-gray-500 font-semibold'><GrLanguage className='mr-1' /><span>Language</span></a> */}
                <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    {user ?
                                        <button
                                            type="button"
                                            className="inline-flex group items-center px-4 py-3 border border-gray-400 text-md leading-4 font-semibold rounded-md text-gray-500 bg-white hover:text-blue-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.name}
                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4 group-hover:rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        : 
                                        <a
                                            href={route('welcome')}
                                            className="inline-flex group items-center px-4 py-3 border border-gray-400 text-md leading-4 font-semibold rounded-md text-gray-500 bg-white hover:text-blue-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            Login / Register
                                        </a>
                                    }
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link

                                >
                                    <button onClick={handleLogout}>Log Out</button>

                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* This will enable the navigation to display vertically with screensize reduced */}
            <div className="md:hidden">
                <HiMenuAlt4 className="text-primary w-8 h-6" onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.70, ease: 'easeOut' }}
                        className="fixed top-0 bottom-0 right-0 z-50 p-4 w-3/5 h-screen bg-white bg-cover bg-repeat shadow-md"
                        style={{ background: 'white', borderBottomLeftRadius: '15px' }}
                    >
                        <HiX className="w-8 h-6 text-primary m-2" onClick={() => setToggle(false)} />
                        <ul className="flex flex-col justify-start items-start h-full">
                            {['home', 'about', 'mission', 'media', 'services', 'contact us'].map((item) => (
                                <li key={item} className="my-4">
                                    <ScrollLink to={item} spy={true} smooth={true} offset={-100} duration={500} onClick={() => setToggle(false)}>
                                        {item}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
