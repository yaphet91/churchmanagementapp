import React, { useState, useEffect, useRef } from 'react';
import Checkbox from '@/Components/Checkboxes/Checkbox';
import CloseIcon from "@/Components/UI/CloseIcon"; // Consider customizing this icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { useTranslation } from 'react-i18next';

const ConfirmSubmissionModal = ({ closeModal, confirmSubmission }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef();

    const firstName = useSelector((state) => state.member.value.firstName);
    const firstNameT = useSelector((state) => state.member.value.firstNameT);

    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [agreementError, setAgreementError] = useState(false);

    const handleAgreeToTerms = () => {
        setAgreeToTerms(!agreeToTerms);
        if (agreementError && agreeToTerms) {  // Reset the error if the checkbox is checked
            setAgreementError(false);
        }
    };

    const handleModalSubmit = () => {
        if (agreeToTerms) {
            closeModal()
            confirmSubmission()
        } else {
            setAgreementError(true);
        }
    }


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isVisible) {
            window.addEventListener('click', handleOutsideClick);
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 15);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isVisible, closeModal]);


    // Determine part of the day for personalized greeting
    const hours = new Date().getHours();
    const timeOfDay = hours < 12 ? t('Good Morning') : hours < 18 ? t('Good Afternoon') : t('Good Evening');

    return (
        <div className="relative z-50" aria-labelledby="steps-error-dialog" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
            <motion.div // Use motion.div for animation
                initial={{ opacity: 0, scale: 0.9 }} // Initial state of the modal
                animate={{ opacity: 1, scale: 1 }} // Final state of the modal
                transition={{ duration: 0.5 }} // Transition timing
                className="fixed inset-0 z-10 w-screen overflow-y-auto top-[10%]"
            >
                <div className="flex min-h-full justify-center px-2 md:py-12 text-center ">
                    <div
                        ref={modalRef}
                        className={`relative w-[70%] md:w-[50%] h-[450px] md:h-[500px] rounded-2xl
                         bg-gray-200 dark:bg-gray-600 text-slate-100 text-left shadow-xl transition-all modal-appear
                          ${isVisible ? 'modal-visible' : ''}`}
                    >
                        <div className="px-5 py-4">
                            <button
                                type="button"
                                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400
                                 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                                onClick={closeModal}
                            >
                                <CloseIcon /> {/* Consider adding hover effect */}
                                <span className="sr-only">Close menu</span>
                            </button>
                            <div className='text-yellow-500 text-6xl flex items-center justify-center'>
                                <FontAwesomeIcon icon={faWarning} />
                            </div>
                            <div className='flex flex-col items-start'>

                                <div className='w-full text-gray-700 dark:text-gray-200 p-2 md:p-6 space-y-3 flex flex-col justify-start items-start mb-4'>
                                    <h3 className='text-lg md:text-2xl mt-6'>{t('Are you sure you would like to submit?')} <span>
                                        {t(' Please accept the terms and conditions.')}</span></h3>
                                </div>
                                <div className={`${!agreeToTerms ? 'border-2 border-red-500 rounded-md dark:border-gray-300 p-2 w-full' : ''}`}>
                                    <label className={`px-4 pt-2 flex cursor-pointer text-sm select-none items-center ${agreementError ? 'text-red-800' : 'text-gray-500 dark:text-blue-200'}`}>
                                        <Checkbox
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            checked={agreeToTerms}
                                            onChange={handleAgreeToTerms}
                                            className="mx-2"
                                        />
                                        {t('By clicking you agree to the terms and conditions of the use of Anastasia web app')}
                                    </label>
                                    <div className='pl-10 py-2'>
                                        {agreementError && <p className="text-red-800">You must agree to the terms and conditions.</p>}
                                    </div>
                                </div>

                                <div className='w-full flex items-center justify-end space-x-9 mt-10 bottom-5'>
                                    <button type="button" className='h-10 text-xl w-1/3 bg-red-500 rounded-lg hover:scale-105 transition-transform'
                                        onClick={closeModal}
                                    >
                                        {t('Cancel')}
                                    </button>
                                    <button type="button" className='h-10 text-xl w-1/3 bg-blue-500 rounded-lg hover:scale-105 transition-transform'
                                        onClick={handleModalSubmit}
                                    >
                                        {t('Submit')}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ConfirmSubmissionModal;
