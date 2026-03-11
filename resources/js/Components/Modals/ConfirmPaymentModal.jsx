import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from "@/Components/UI/CloseIcon"; // Consider customizing this icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { useTranslation } from 'react-i18next';

const ConfirmPaymentModal = ({ closeModal, completeAmountSelection }) => {
    const { t } = useTranslation();
    // const [isVisible, setIsVisible] = useState(false);
    const donation = useSelector((state) => state.donation.value);
    const modalRef = useRef();


    const handleAccept = () => {
        closeModal()
        completeAmountSelection()
    }
    const handleBack = () => {
        closeModal()
    }
    return (
        <div className="relative z-50" aria-labelledby="steps-error-dialog" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-800 bg-opacity-15 transition-all backdrop-blur-sm"></div>
            <motion.div // Use motion.div for animation
                initial={{ opacity: 0, scale: 0.9 }} // Initial state of the modal
                animate={{ opacity: 1, scale: 1 }} // Final state of the modal
                transition={{ duration: 0.5 }} // Transition timing
                className="fixed inset-0 z-10 w-screen overflow-y-auto"
            >
                <div className="flex min-h-full justify-center px-2 py-12 text-center ">
                    <div
                        ref={modalRef}
                        className={`relative max-h-[50vh] 
                        rounded-2xl bg-gray-200 text-slate-100 text-left shadow-xl transition-all
                        modal-appear modal-visible`}
                    >
                        <div className="px-5 py-4 text-gray-800 ">
                            <div className='p-10 flex flex-col justify-center items-center'>
                                <h1 className='text-3xl font-semibold'>Confirm Payment Intent</h1>
                                <h3 className='text-2xl mt-10'>Are you sure to pay
                                    <span className='text-blue-700 font-bold'> {donation.amount} AED</span> as 
                                    <span className='capitalize'> {donation.reason}?</span></h3>
                            </div>

                            <div className='flex flex-col items-center'>
                             
                                <div className='w-[60%] flex items-center justify-center'>
                                    <button type="button" className='h-14 text-lg w-full gradientBg3 rounded-lg hover:scale-105 transition-transform'
                                        onClick={handleAccept}
                                    >
                                        Accept Payment
                                    </button>
                                </div>
                                <div className='w-full flex items-center justify-center mt-3'>
                                    <button type="button" className='h-14 text-xl rounded-lg'
                                        onClick={handleBack}
                                    >
                                        Back
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

export default ConfirmPaymentModal;
