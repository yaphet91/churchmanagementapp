import React from 'react'
import DropdownMessage from '@/Components/Header/DropdownMessage';
import DropdownNotification from '@/Components/Header/DropdownNotification';
import DropdownUser from '@/Components/Header/DropdownUser';
import DarkModeSwitcher from '@/Components/Header/DarkModeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faContactCard, faBriefcase, faChurch, faCheck, faHighlighter, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import StepperDropdownUser from '@/Components/Header/StepperDropdownUser';

const StepperHeader = ({ currentStep }) => {
    const { t } = useTranslation();

    // const stepTitles = ['Introduction', 'Personal Details', 'Identification', 'Contact Information', 'Additional Details', 'Church Participation', 'Confirm your Entry'];
    const stepTitles = [
        t('steps.introduction'),
        t('steps.personalDetails'),
        t('steps.identification'),
        t('steps.contactInformation'),
        t('steps.additionalDetails'),
        t('steps.churchParticipation'),
        t('steps.confirmation'),
    ];
    const stepIcons = [faHighlighter, faUser, faIdCard, faContactCard, faBriefcase, faChurch, faCheckSquare]
    return (
        <header className="sticky bg-bodydark1 dark:bg-boxdark top-0 z-40 flex w-full drop-shadow-2xl dark:drop-shadow-none border-b border-[#D3D3D3] dark:border-[#484848]">
            <div className='flex md:flex-grow items-center justify-between px-4 py-2.5 shadow-2 md:px-6 2xl:px-11'>
                <div className='py-3 text-gray-500 dark:text-gray-300 flex space-x-4 text-3xl justify-center items-center'>
                    <div className='border-2 border-gray-400 rounded-lg flex items-center justify-center w-14 h-16'><FontAwesomeIcon className='w-8 h-8' icon={stepIcons[currentStep]} /></div>
                    <h1 className="font-semibold">{stepTitles[currentStep]}</h1>
                </div>

                <div className="hidden md:flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        {/* Language toggler  */}
                        <LanguageSwitcher />
                        {/* Dark Mode Toggler */}
                        <DarkModeSwitcher />
                        {/* Notification Menu Area */}
                        {/* <DropdownNotification />
                      {/* Chat Notification Area */}
                        {/* <DropdownMessage />  */}
                    </ul>

                    {/* User Area */}
                    <DropdownUser />
                    
                </div>
            </div>



        </header>
    )
}

export default StepperHeader
