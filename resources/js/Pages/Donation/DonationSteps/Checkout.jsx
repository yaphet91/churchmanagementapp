import React, { useState, useEffect } from 'react';
import ApplePay from '../PaymentMethods/ApplyPay';
import CardPay from '../PaymentMethods/CardPay';
// import GooglePay from '../PaymentMethods/GooglePay';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import { useTranslation } from 'react-i18next';
import MemberLayout from '@/Layouts/MemberLayout';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import LoadingScreen from '@/Components/LoadingScreen/LoadingScreen';
import { useSelector } from 'react-redux';
import donationSlice from '@/features/donation/donationSlice';
import { Inertia } from '@inertiajs/inertia';

const stripePromise = loadStripe('pk_test_51O2opBBoCA0aBp3IuGY6fWkCOQAi9XcmzO84LZ5DiMTpVi7vfkQK7iPap59sCjn4wX6GGshbOuGaWnwKfYYIYIUC00rc6KHo8Q');
const appearance = {
    theme: 'night',
    variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '5px',
        borderRadius: '4px',
    },
};


export const CheckoutForm = ({ auth }) => {
    const { t } = useTranslation();
    const donation = useSelector((state) => state.donation.value);
    const today = new Date();
    const [fullName, setFullName] = useState('');

    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // useEffect(() => {
    //     if (auth) {
    //         console.log(auth.user);
    //     } else {
    //         console.log('User data is not available');
    //     }
    // }, [auth]);
    const goToPreviousStep = () => {
       Inertia.visit('/donations')
    }

    return (
        <MemberLayout>
            <div className='flex justify-between w-full p-10  dark:bg-boxdark'>
            <div className='flex-1'>
                <h2 className='text-3xl font-semibold text-gray-500 mb-5'>Donation Details</h2>
                
                <div className='w-[80%]'>
                    <div className='flex-1 mt-6 md:mt-0'>
                        {/* {!errors?.firstName
                        ? <InputLabel htmlFor="firstName" value={t("First Name")} />
                        : <InputError message={errors?.firstName} />
                    } */}
                        {/* <InputLabel htmlFor="name as in card" value={t("Full Name ")} /> */}
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={fullName || auth.user.name}
                            placeholder="Full Name"
                            className="mt-1 block w-full drop-shadow-xl font-Sohne text-lg border-b-2 border-gray-300 dark:border-gray-600 rounded-md dark:bg-boxdark"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                </div>

                <div className='space-y-3 py-4 px-2 text-gray-600 dark:text-gray-300 mb-10'>
                    <h3>Date: {formattedDate}</h3>
                    <h3>Donation reason: <span className='uppercase'> {donation.reason}</span></h3>
                    <h3>Description : {donation.discription}</h3>
                </div>

                <div className='space-y-5 w-[70%]' >
                    <h1>Total Amount of Donation</h1>
                    <div className='text-4xl text-blue-900 dark:text-gray-200 font-semibold py-6 px-4 rounded-md border-gray-300 dark:border-gray-600 border'>
                        {donation.amount} AED
                    </div>
                </div>

                <div className='mt-10'>
                    <button type='button' className='p-1 text-gray-300 dark:text-gray-500 rounded-md bg-gray-200 w-[100px]  dark:bg-gray-900'
                        onClick={goToPreviousStep}
                    >Back</button>
                </div>
            </div>
            {/* <ApplePay/> */}
                <CardPay auth={auth} />
            </div>
        </MemberLayout>

    )
};

const Checkout = ({ auth, goToPreviousStep }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const donation = useSelector((state) => state.donation.value);

    useEffect(() => {
        axios.post('/create_donation_intent', {
            amount: donation.amount,
            reason_of_donation: donation.reason
        })
            .then(response => {
                setClientSecret(response.data.clientSecret);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching client secret:", error);
                setError('Failed to load payment information.');
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const options = {
        clientSecret: clientSecret,
        appearance,
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm auth={auth} goToPreviousStep={goToPreviousStep} />
        </Elements>
    );
};

export default Checkout;
