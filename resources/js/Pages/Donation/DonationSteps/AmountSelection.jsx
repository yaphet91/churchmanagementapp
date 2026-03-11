import React, { useState } from 'react';
import PaymentAmountCard from '@/Components/Cards/PaymentAmountCard';
import { motion } from 'framer-motion'; // Import motion if not already imported
import TextInput from '@/Components/Forms/TextInput';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addDonation, setDonationErrors } from '@/features/donation/donationSlice';
import ConfirmPaymentModal from '@/Components/Modals/ConfirmPaymentModal';

export default function AmountSelection({ goToNextStep, goToPreviousStep }) {
    let defaultAmounts = ['50.00', '100.00', '200.00', '300.00', '400.00', '500.00', '1000.00', '2000.00'];
    const [paymentAmount, setPaymentAmount] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const donation = useSelector((state) => state.donation.value)
    // const errors = useSelector((state) => state.donation.errors);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const handleCardClick = (amount) => {
        dispatch(addDonation({ ...donation, amount: amount }));
        setPaymentAmount(amount);
        setOpenModal(true);
    };

    const completeAmountSelection = () => {
        if (paymentAmount) {
            goToNextStep();
        } else {
            // Handle error, no amount set
        }
        setOpenModal(false);
    };


    const handleAmountEntry = (manualAmount) => {
        dispatch(addDonation({ ...donation, amount: manualAmount }));
        setPaymentAmount(manualAmount)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (paymentAmount) {
            setOpenModal(true);
            // setTimeout(() => {
            //     goToNextStep();
            // }, 1000);
        } else {
            // dispatch(setDonationErrors(errors.paymentAmount = 'Amount Required'))
        }
    }

    const closeModal = () => {
        setOpenModal(false);
    };
    // Define your container variants for animation, if any
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <>
        <motion.div className="p-2 flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="p-4 my-6">
                <h1 className="text-3xl font-semibold">Please select the amount of contribution you would like to make</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Adjust grid columns here */}
                {defaultAmounts.map((amount, index) => (
                    <PaymentAmountCard
                        key={index} // Use the index as a key for simplicity, consider using unique ids for real applications
                        amount={amount}
                        onClick={() => handleCardClick(amount)}
                        paymentAmount={paymentAmount} // Pass this as a prop to manage the selection state
                        animate={{ scale: paymentAmount === amount ? 0.9 : 1 }} // Scale down when selected
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </div>
            <div className='w-full my-10 p-2'>
                <div className='flex-1 mt-4 md:mt-0'>
                    {/* {!errors?.paymentAmount
                        ? <InputLabel htmlFor="manualAmount"
                            value={t("Other Amount ? Please enter the amount you want to contribute bellow!")} />
                        : <InputError message={errors?.paymentAmount} />
                    } */}
                    <TextInput
                        id="manualAmount"
                        type="number"
                        name="manualAmount"
                        value={paymentAmount}
                        className="mt-3 block w-full"
                        autoComplete="amount"
                        isFocused={true}
                        // onChange={(e) => setChildrenNumber(e.target.value)}
                        onChange={(e) => handleAmountEntry(e.target.value)}

                    />

                </div>
                <div className='my-6 flex justify-between'>
                    <button type='button' className='btnPrimary'
                        onClick={goToPreviousStep}
                    >Back</button>

                    <button type='button' className='btnPrimary'
                        onClick={handleSubmit}
                    >Submit</button>
                </div>

            </div>
        </motion.div>
            
            {openModal && 
                <ConfirmPaymentModal closeModal={closeModal}
                    completeAmountSelection={completeAmountSelection} />
         }
        </>
    );
}
