import { useStripe, useElements, PaymentElement, PaymentRequestButtonElement, LinkAuthenticationElement } from '@stripe/react-stripe-js';
import { ExpressCheckoutElement } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

import ApplePay from '../PaymentMethods/ApplyPay';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '@/Components/LoadingScreen/LoadingScreen';
// import GooglePay from '../PaymentMethods/GooglePay';

const CardPay = ({auth}) => {
    const { t } = useTranslation();
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [isStripeLoading, setIsStripeLoading] = useState(true);
    const [message, setMessage] = useState('');


    useEffect(() => {
        // Check if Stripe and elements are initialized
        if (stripe && elements) {
            setTimeout(() => {
                setIsStripeLoading(false);  // Set loading to false when Stripe is ready
            }, 1000);
        }
    }, [stripe, elements]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            console.error("Stripe.js has not loaded yet.");
            return;
        }

        setIsLoading(true);
        
        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/donation/success_page`,
                },
            });
            console.log('You bulshit run this ', error , paymentIntent)

            if (error) {
                console.error(`Payment failed: ${error.message}`);
                setMessage(error.message);
                setIsLoading(false);
            } else if (paymentIntent.status === 'succeeded') {
                console.log(`Payment succeeded: ${paymentIntent.id}`);
                recordPaymentSuccess(paymentIntent);
            } else {
                console.log('Payment processing or additional authentication needed.');
                setMessage('Payment processing or additional authentication needed.');
                setIsLoading(false);
            }
        } catch (error) {
            console.error(`Payment processing failed: ${error.message}`);
            setMessage('Payment processing failed. Please try again.');
            setIsLoading(false);
        }
    };

    const recordPaymentSuccess = async (paymentIntent) => {
        try {
            const { data } = await axios.post('/donation/success', {
                intent_id: paymentIntent.id
            });
            if (data.success) {
                console.log('Payment recorded successfully');
            } else {
                console.error('Failed to record payment success.');
            }
        } catch (error) {
            console.error(`Error recording payment: ${error.message}`);
        }
    };

    if (isStripeLoading) {
        return <LoadingScreen />;  // Show the loading screen when isLoading is true
    }

    return (
        <div className='w-1/2'>
            <div className='border rounded-md border-gray-300 dark:border-gray-600 p-10'>
                <form id="payment-form" onSubmit={handleSubmit} >
                    <h2 className='w-full text-2xl font-semibold text-gray-500 mb-4'>Payment Details</h2>
                 
                    <LinkAuthenticationElement id="link-authentication-element"
                        // Access the email value like so:
                        onChange={(event) => {
                            setEmail(event.value.email);
                        }}
                        className='my-5'
                        //
                        // Prefill the email field like so:
                        options={{ defaultValues: { email: auth.user.email } }}
                    />
                    <PaymentElement id="payment-element" />
                    <button className='btnPrimary mt-6 w-full' disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text">
                            {isLoading ?
                                <div className='flex flex-row space-x-5 items-center justify-center'>
                                    <div className="spinner" id="spinner"></div>
                                    <h3>Payment in progress ... </h3>
                                </div> : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </div>
        </div>

    )
};

export default CardPay;