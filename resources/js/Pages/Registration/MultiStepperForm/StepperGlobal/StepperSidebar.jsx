import React, { useEffect, useState} from 'react'
import { Link } from '@inertiajs/inertia-react';
import Logo from '@/assets/images/logos/anastasia_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faContactCard, faBriefcase, faChurch, faCheckSquare, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import AnastasiaBanner2 from '@/assets/images/logos/anastasia_banner2.png'
const StepperSidebar = ({ currentStep, onStepChange }) => {
    const { t } = useTranslation();
    const language = useSelector((state) => state.language.language);

    const steps = [
        { name: t('steps.introduction'), icon: faHighlighter },
        { name: t('steps.personalDetails'), icon: faUser },
        { name: t('steps.identification'), icon: faIdCard },
        { name: t('steps.contactInformation'), icon: faContactCard },
        { name: t('steps.additionalDetails'), icon: faBriefcase },
        { name: t('steps.churchParticipation'), icon: faChurch },
        { name: t('steps.confirmation'), icon: faCheckSquare },
    ];


    const handleStepClick = (index) => {
        onStepChange(index); // Call the passed onStepChange function with the step index
    };

    return (
        <aside className="hidden lg:flex absolute left-0 top-0 z-9999 h-screen bg-bodydark1
            w-72.5 flex-col overflow-y-hidden border-r border-[#D3D3D3] dark:border-[#484848]
             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400">

            {/* SIDEBAR HEADER */}
            <div className="no-scrollbar  flex items-center justify-start">
                <Link to="/">
                    <img src={AnastasiaBanner2} alt="" className={`h-[109px] w-[300px] overflow-x-hidden duration-300 ease-linear`} />

                    {/* <img className='w-12 ' src={Logo} alt="Logo" /> */}
                </Link>
                {/* <h2 className='mr-4 text-3xl font-semibold gradient-text capitalize'>{t('anastasia')}</h2> */}
                
            </div>
            <div className='px-6 py-5.5 lg:py-6.5 text-xl font-semibold mt-6'>
                {/* <p>User's registration form</p> */}
                <p>{t('userRegistrationForm')}</p>
            </div>

            <div className='no-scrollbar flex flex-col overflow-y-auto'>
                <nav className='no-scrollbar mt-2 py-4 px-4 lg:mt-9 lg:px-6'>
                    <ul>
                        {steps.map((step, index) => (
                            <li key={index}
                                onClick={() => handleStepClick(index)}
                                className={`no-scrollbar relative cursor-pointer flex items-center gap-2.5 
                                rounded-lg my-3 py-4 px-4 font-medium text-gray-500 dark:text-gray-300 duration-300 ease-in-out
                                hover:bg-gray-300 hover:text-blue-900 dark:hover:bg-meta-4  ${currentStep === index ? 'gradientBg text-white' : ''}`}>
                                <FontAwesomeIcon icon={step.icon} /> {step.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default StepperSidebar
