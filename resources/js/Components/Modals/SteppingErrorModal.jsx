import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from "@/Components/UI/CloseIcon"; // Consider customizing this icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { useTranslation } from 'react-i18next';

const SteppingErrorModal = ({ closeModal }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef();

    const firstName = useSelector((state) => state.member.value.firstName);
    const firstNameT = useSelector((state) => state.member.value.firstNameT);

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
                className="fixed inset-0 z-10 w-screen overflow-y-auto"
            >
                <div className="flex min-h-full justify-center px-2 py-12 text-center ">
                    <div
                        ref={modalRef}
                        className={`relative w-[50%] sm:w-[50%] min-h-[40vh] max-h-[60vh] rounded-2xl bg-gray-200 text-slate-100 text-left shadow-xl transition-all modal-appear ${isVisible ? 'modal-visible' : ''}`}
                    >
                        <div className="px-5 py-4">
                            <button
                                type="button"
                                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                                onClick={closeModal}
                            >
                                <CloseIcon /> {/* Consider adding hover effect */}
                                <span className="sr-only">Close menu</span>
                            </button>

                            <div className='flex flex-col items-center'>
                                <div className='text-yellow-500 text-8xl'>
                                    <FontAwesomeIcon icon={faWarning} />
                                </div>
                                <div className='w-full text-gray-700 py-6 space-y-3 flex flex-col justify-center items-center mb-4'>
                                    <h1 className='p-3 text-3xl font-semibold'>{timeOfDay}, {firstName}</h1>
                                
                                    <h3 className='text-2xl mt-6'>{t('Please complete the previous steps before proceeding.')}</h3>
                                    <p className='text-lg text-blue-500'>{t('Completed the current step? Click "Next" to continue.')}</p>
                                </div>
                                <div className='w-full flex items-center justify-center'>
                                    <button type="button" className='h-14 text-xl w-full gradientBg3 rounded-lg hover:scale-105 transition-transform'
                                        onClick={closeModal}
                                    >
                                        {t('Dismiss')}
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

export default SteppingErrorModal;
