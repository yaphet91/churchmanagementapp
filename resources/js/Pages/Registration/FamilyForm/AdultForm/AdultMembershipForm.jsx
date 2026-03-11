import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import 'react-image-crop/dist/ReactCrop.css'
import MemberLayout from '@/Layouts/MemberLayout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSave } from '@fortawesome/free-solid-svg-icons';

import ConfirmSubmissionModal from '@/Components/Modals/ConfirmSubmissionModal';
import { resetChildState, setChildValidationErrors } from '@/features/form/childMemberSlice';

import { persistor } from '@/store';
import { purgePersistedSlice } from '@/utils/persistUtils'; // Import the purge function
import { Inertia } from '@inertiajs/inertia';
import PersonalDetails from '../../MultiStepperForm/Steps/PersonalDetails';
import Identification from '../../MultiStepperForm/Steps/Identification';
import ContactInfo from '../../MultiStepperForm/Steps/ContactInfo';
import AdditionalInfo from '../../MultiStepperForm/Steps/AdditionalInfo';
import ChurchParticipation from '../../MultiStepperForm/Steps/ChurchParticipation';
import AdminLayout from '@/Layouts/AdminLayout';

const AdultMembershipForm = () => {
    const [membershipId, setMembershipId] = useState('');

    const { t } = useTranslation();

    const dispatch = useDispatch()
    const { attemptedToProceed } = useSelector((state) => state.stepper);
    const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
    const memberData = useSelector((state) => state.member.value);
    const validationData = useSelector((state) => state.validation.value);
    const userImageData = useSelector((store) => store.profileImage.value);
    const userCoursesData = useSelector((store) => store.userCourses.value)
    const userChurchHistoryData = useSelector((store) => store.userChurchHistory.value);
  


    const handleConfirmSubmission = (e) => {
        setConfirmSubmissionModalOpen(true);
    };
    const handleMembershipSubmit = async () => {
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

            dispatch(resetMemberState());
            dispatch(resetSteps());
            // Add other resets if necessary

            // Clear persisted state for the member slice
            purgePersistedSlice(persistor, 'member');

        } catch (error) {
            console.error('Error creating membership:', error);
        }
    };
    const handleAvatarUpload = async (userImageData) => {
        try {
            const response = await axios.post('/store-avatar-path', userImageData);
            alert('Avatar uploaded successfully!');
        } catch (error) {
            console.error('Error uploading avatar:', error);
        }
    };
    const handleCoursesUpdate = async (userCoursesData) => {
        try {
            const response = await axios.post('/courses', userCoursesData)
            alert('courses uploaded successfully!');
        } catch (error) {
            console.error('Error uploading courses:', error);
        }
    }
    const handleChurchHistoryUpdate = async (userChurchHistoryData) => {
        try {
            const response = await axios.post('/church-history', userChurchHistoryData)
            alert('Church history uploaded successfully!');
        } catch (error) {
            console.error('Error uploading courses:', error);

        }
    }



    return (
        <AdminLayout>
            <div className='grid grid-cols-1 gap-3'>
           
                <PersonalDetails />
                 <Identification />
                 <ContactInfo />
                 <AdditionalInfo />
                 <ChurchParticipation />
                <div className="flex flex-row pt-6 gap-5 justify-end">

                    <button
                        className={`mr-1 gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                    // disabled={currentStep === 0}
                    // onClick={handleBack}
                    >
                        <FontAwesomeIcon icon={faSave} className='mx-2' />
                        {t('Save')}
                    </button>

                    {/* <div className="flex-grow"></div> */}


                    <button
                        type='button'
                        className={`gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        // disabled={currentStep === formSteps.length - 1}
                        onClick={handleConfirmSubmission}
                    >
                        {t('Submit')}

                        <FontAwesomeIcon icon={faArrowRight} className='mx-2' />
                    </button>

                </div>
            </div>
            {confirmSubmissionModalOpen &&
                <ConfirmSubmissionModal
                    confirmSubmission={handleMembershipSubmit}
                    closeModal={() => setConfirmSubmissionModalOpen(false)}
                />
            }
        </AdminLayout>
    )
}

export default AdultMembershipForm
