import React, { useState, useEffect } from 'react';
import MemberLayout from '@/Layouts/MemberLayout';
import DonationSelection from './DonationSteps/DonationSelection';
import AmountSelection from './DonationSteps/AmountSelection';
import Checkout from './DonationSteps/Checkout';
import { Inertia } from '@inertiajs/inertia';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


const Donation = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <DonationSelection goToNextStep={() => setCurrentStep(2)} />;
      case 2:
        return <AmountSelection goToNextStep={() => setCurrentStep(3)} goToPreviousStep={goToPreviousStep} />;
      case 3:
        Inertia.visit('/donation/checkout');
        // return <Checkout goToPreviousStep={goToPreviousStep} />
      default:
        return null;
    }
  };

  return (
    <MemberLayout>
      <div className='top-0 left-0 flex items-center justify-center m-2 pb-10 duration-300 ease-linear dark:bg-boxdark'>
        {renderStep()}
      </div>
    </MemberLayout>
  );
};

export default Donation;
