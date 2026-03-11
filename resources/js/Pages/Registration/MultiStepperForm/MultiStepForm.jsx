import React, { useState, useEffect } from 'react'
import StepperFormLayout from './StepperGlobal/StepperFormLayout';
import RegistrationIntro from './Steps/RegistrationIntro';
import PersonalDetails from './Steps/PersonalDetails';
import Identification from './Steps/Identification';
import ContactInfo from './Steps/ContactInfo';
import AdditionalInfo from './Steps/AdditionalInfo';
import ChurchParticipation from './Steps/ChurchParticipation';
import Confirmation from './Steps/Confirmation';
import Success from './Steps/Success';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { clickedStep, enableAttemptedToProceed, nextStep, previousStep, resetSteps } from '../../../features/form/stepperSlice';
import { validatePersonalDetails, validateIdentification, validateContactInfo, validateAdditionalInfo, validateChurchParticipation, validateConfirmation, validateRegistrationIntro } from './Validations';
import { setStepValidation } from '@/features/form/validationSlice';
import SteppingErrorModal from '@/Components/Modals/SteppingErrorModal';
import { useTranslation } from 'react-i18next';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';
import { setFormSubmitted } from '@/features/form/formSubmissionSlice';
import ConfirmSubmissionModal from '@/Components/Modals/ConfirmSubmissionModal';
import { addUserImage, resetUserImage } from '@/features/form/userImageSlice';
import StepperFooter from './StepperGlobal/StepperFooter';
import { current } from '@reduxjs/toolkit';

import { resetMemberState } from '@/features/form/memberSlice';
import { persistStore } from 'redux-persist';
import { store, persistor } from '@/store';
import { purgePersistedSlice } from '@/utils/persistUtils'; // Import the purge function
import { resetUserChurchHistory } from '@/features/form/userChurchHistorySlice';
import { resetUserCourses } from '@/features/form/userCoursesSlice';
import LoadingModal from '@/Components/Modals/LoadingModal';

const formSteps = [
    () => <RegistrationIntro />,
    () => <PersonalDetails />,
    () => <Identification />,
    () => <ContactInfo />,
    () => <AdditionalInfo />,
    () => <ChurchParticipation />,
    () => <Confirmation />
];
// const formSteps = [
//     () => <RegistrationIntro />,
//     (attemptedToProceed) => <PersonalDetails attemptedToProceed={attemptedToProceed} />,
//     (attemptedToProceed) => <Identification attemptedToProceed={attemptedToProceed} />,
//     (attemptedToProceed) => <ContactInfo attemptedToProceed={attemptedToProceed} />,
//     (attemptedToProceed) => <AdditionalInfo attemptedToProceed={attemptedToProceed} />,
//     (attemptedToProceed) => <ChurchParticipation attemptedToProceed={attemptedToProceed} />,
//     () => <Confirmation />
// ];

const validationFunctions = {
    0: validateRegistrationIntro,
    1: validatePersonalDetails,
    2: validateIdentification,
    3: validateContactInfo,
    4: validateAdditionalInfo,
    5: validateChurchParticipation,
    6: validateConfirmation,
};

const convertStepIndexToValidStateName = (index) => {
    const stepMapping = ["validRegistrationIntro", "validPersonalDetails", "validIdentification", "validContactInfo", "validAdditionalInfo", "validChurchParticipation", "validConfirmation"];
    return stepMapping[index] || null;
};

const MultiStepForm = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch()
    const { currentStep } = useSelector((store) => store.stepper);
    // const [attemptedToProceed, setAttemptedToProceed] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
    const [loaddingModalOpen, setLoadingModalOpen] = useState(false);

    const memberData = useSelector((state) => state.member.value);
    const validationData = useSelector((state) => state.validation.value);
    const userImageData = useSelector((store) => store.profileImage.value);
    const userCoursesData = useSelector((store) => store.userCourses.value)
    const userChurchHistoryData = useSelector((store) => store.userChurchHistory.value);
    const newChurch = useSelector((store) => store.newChurch.value);
    const isFormSuccessfullySubmitted = useSelector((state) => state.formSubmission.isSubmitted);
    const { attemptedToProceed } = useSelector((state) => state.stepper);


    // Render the current form step or the success component based on submission state
    const renderCurrentStep = () => {
        if (isFormSuccessfullySubmitted) {
            return <Success />;
        } else {
            // The dynamic step component rendering based on the current step index
            const StepComponent = formSteps[currentStep];
            // console.log(attemptedToProceed)
            return <StepComponent/>;
        }
    };
    const handleConfirmSubmission = (e) => {
        setConfirmSubmissionModalOpen(true);
    };
    const handleMembershipSubmit = async () => {
        setLoadingModalOpen(true);
        try {
            console.log(memberData)
            const response = await axios.post('/memberships', memberData);
            const membershipId = response.data.membership.id;

            const updatedUserImageData = { ...userImageData, membershipId: membershipId };
            const updatedUserCoursesData = { ...userCoursesData, membershipId: membershipId }
            const updatedUserChurchHistoryData = { ...userChurchHistoryData, membershipId: membershipId }
            // dispatch(addUserImage(updatedUserImageData));
            // dispatch(addUserImage(updatedUserCoursesData));
            // dispatch(addUserImage(updatedUserChurchHistoryData));

            await handleAvatarUpload(updatedUserImageData);
            await handleCoursesUpdate(updatedUserCoursesData);
            await handleChurchHistoryUpdate(updatedUserChurchHistoryData);

            console.log(updatedUserChurchHistoryData)

            await axios.post('/membership/complete');
            dispatch(setFormSubmitted());
            // renderCurrentStep();

            // dispatch(resetMemberState());
            // dispatch(resetSteps());
            // dispatch(resetUserChurchHistory());
            // dispatch(resetUserCourses());
            // dispatch(resetUserImage());

            // Add other resets if necessary

            // Clear persisted state for the member slice
            // purgePersistedSlice(persistor, 'member');
            // setLoadingModalOpen(false);

        } catch (error) {
            console.error('Error creating membership:', error);
        } finally
        {
            setLoadingModalOpen(false); // Ensure this is called in finally block to stop the loading modal
        }
    };
    const handleAvatarUpload = async (userImageData) => {
        try {
            const response = await axios.post('/store-avatar-path', userImageData);
            // alert('Avatar uploaded successfully!');
            // purgePersistedSlice(persistor, 'profileImage');

        } catch (error) {
            console.error('Error uploading avatar:', error);
        }
    };
    const handleCoursesUpdate = async (userCoursesData) => {
        try {
            const response = await axios.post('/courses', userCoursesData)
            // alert('courses uploaded successfully!');
            // purgePersistedSlice(persistor, 'userCourses');

        } catch (error) {
            console.error('Error uploading courses:', error);
        }
    }
    const handleChurchHistoryUpdate = async (userChurchHistoryData) => {
        try {
            const response = await axios.post('/church-history', userChurchHistoryData)
            // alert('Church history uploaded successfully!');
            // purgePersistedSlice(persistor, 'userChurchHistory');

        } catch (error) {
            console.error('Error uploading courses:', error);

        }
    }


    const handleNext = () => {
        // Directly execute this expression without the unnecessary braces
        // if (currentStep > 0) {
        // setAttemptedToProceed(true);
        dispatch(enableAttemptedToProceed(true));
        // }

        let isValid = true;
        let errors = {};
        if (attemptedToProceed) {
            // Check if there's a need for validation for the current step
            if (currentStep !== 0 && validationFunctions[currentStep]) {
                let validationResults;
                // Special handling for the last step using validateConfirmation
                if (currentStep === formSteps.length - 1) {
                    // console.log('this is last page')
                    // Assume validateConfirmation takes the whole validationData object
                    validationResults = validateConfirmation(validationData);
                } else if (currentStep === 1) {
                    // For the specific step, use a custom validation function
                    validationResults = validatePersonalDetails(memberData, userImageData);
                    // console.log('validation results personal detail ', validationResults.isValid);

                } else if (currentStep === 5) {
                    // For the specific step, use a custom validation function
                    validationResults = validateChurchParticipation(userChurchHistoryData);

                    // console.log('validation results church history ', validationResults.isValid);

                } else {
                    // Handle validation for steps other than the last
                    const currentValidationFn = validationFunctions[currentStep];
                    validationResults = currentValidationFn(memberData);
                    // setAttemptedToProceed(false); // Reset after moving to the next step
                    // console.log('results ', validationResults)
                }

                isValid = validationResults.isValid;
                errors = validationResults.errors;

                // Handle the outcome of the validation
                if (isValid) {
                    dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
                    dispatch(nextStep());
                    // setAttemptedToProceed(false);
                    dispatch(enableAttemptedToProceed(false));

                } else {
                    // Handle validation errors, e.g., by dispatching setStepValidation
                    dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
                    console.log('Validation failed with errors:', errors);
                    // setAttemptedToProceed(false); // Reset after moving to the next step

                    // Optionally, halt proceeding to the next step if validation fails
                    return; // Prevents proceeding to the next step if validation fails
                }
            } else {
                // If no validation needed or it's the first step, proceed to the next step
                dispatch(nextStep());
                // setAttemptedToProceed(false);
                dispatch(enableAttemptedToProceed(false));

            }
        }
    };

    const handleStepChange = (newStep) => {
        // Check if the user is trying to move forward (newStep is greater than currentStep)
        if (!isFormSuccessfullySubmitted) {
            if (newStep > currentStep) {
                let isValid = true;
                let errors = {};

                // Check if the current step has already been validated and passed
                const currentStepValidatedAndPassed = validationData[convertStepIndexToValidStateName(currentStep)];

                // Ensure there's a validation function for the current step and it hasn't been validated and passed yet
                if (validationFunctions[currentStep] && !currentStepValidatedAndPassed) {
                    const validationResults = validationFunctions[currentStep](memberData);
                    isValid = validationResults.isValid;
                    errors = validationResults.errors;

                    // If the current step is valid, proceed to the next step
                    if (isValid) {
                        dispatch(clickedStep(newStep)); // Proceed to the requested step
                        dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
                        setAttemptedToProceed(false);
                        
                    } else {
                        // Handle validation errors for the current step
                        dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
                        console.log('Validation failed with errors:', errors);
                        setErrorModalOpen(true); // Show a modal with the validation errors
                        return; // Do not proceed to the next step
                    }
                } else {
                    // No validation required for the current step, or it's already been validated and passed, so proceed
                    dispatch(clickedStep(newStep));
                    setAttemptedToProceed(false);
                }
            } else {
                // User is moving to a previous step or to the same step; allow without validation
                dispatch(clickedStep(newStep));
            }
        }
    };


    const handleBack = () => {
        dispatch(previousStep())
        // setAttemptedToProceed(false); // Reset the attempt flag when going back
        dispatch(enableAttemptedToProceed(false));

    };

    return (
        <StepperFormLayout currentStep={currentStep} onStepChange={handleStepChange}>
            {/* { formSteps[currentStep](attemptedToProceed) } */}
            {renderCurrentStep()}


            <div className="flex flex-row pt-6">
                {!isFormSuccessfullySubmitted &&
                    <button
                        className={`${currentStep === 0 ? "cursor-not-allowed opacity-50" : ""
                            } mr-1 gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        disabled={currentStep === 0}
                        onClick={handleBack}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className='mx-2' />
                        {t('Back')}
                    </button>
                }
                <div className="flex-grow"></div>

                {!isFormSuccessfullySubmitted &&
                    <button
                        type='button'
                        className={`gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        // disabled={currentStep === formSteps.length - 1}
                        onClick={currentStep === formSteps.length - 1 ? handleConfirmSubmission : handleNext}
                    >
                        {currentStep === formSteps.length - 1 ? t('Finish and Submit') : t('Next')}

                        <FontAwesomeIcon icon={faArrowRight} className='mx-2' />
                    </button>
                }
            </div>
            <div className='mt-8'>
                <StepperFooter />
            </div>
            {errorModalOpen &&
                <SteppingErrorModal
                    closeModal={() => setErrorModalOpen(false)}

                />
            }
            {confirmSubmissionModalOpen &&
                <ConfirmSubmissionModal
                    confirmSubmission={handleMembershipSubmit}
                    closeModal={() => setConfirmSubmissionModalOpen(false)}
                />
            }
            {loaddingModalOpen &&
                <LoadingModal />
            }
            
        </StepperFormLayout>
    )
}

export default MultiStepForm
