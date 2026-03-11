import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import 'react-image-crop/dist/ReactCrop.css'
import ChildDetails from './ChildFormSteps/ChildDetails';
import ChildAdditionalInfo from './ChildFormSteps/ChildAdditionalInfo';
import ChildIdentification from './ChildFormSteps/ChildIdentification';
import ChildContactInfo from './ChildFormSteps/ChildContactInfo';
import ChildChurchParticipation from './ChildFormSteps/ChildChurchParticipation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSave } from '@fortawesome/free-solid-svg-icons';
import validateChildForm from './validateChildForm';
import ConfirmSubmissionModal from '@/Components/Modals/ConfirmSubmissionModal';
import { resetChildState, setChildValidationErrors } from '@/features/form/childMemberSlice';

import { persistor } from '@/store';
import { purgePersistedSlice } from '@/utils/persistUtils'; // Import the purge function
import { Inertia } from '@inertiajs/inertia';
import AdminLayout from '@/Layouts/AdminLayout';

const ChildMembershipForm = () => {
    const [membershipId, setMembershipId] = useState('');

    const getMembershipId = async () => {
        try {
            const response = await axios.get('/membership-id');
            setMembershipId(response.data.membership_id);
            console.log('we got membership id', response.data.membership_id);
        } catch (error) {
            console.error('Error fetching membership ID:', error);
        }
    };

    const { t } = useTranslation();

    const dispatch = useDispatch()
    const { attemptedToProceed } = useSelector((state) => state.stepper);
    const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
    const childData = useSelector((state) => state.child.value);

    // triggers the getMembershipId method 


    // validate all input fields before proceeding 
    useEffect(() => {
        const validationResults = validateChildForm(childData);
        dispatch(setChildValidationErrors(validationResults.errors));
    }, [childData, dispatch]);

    const handleConfirmSubmission = (e) => {
        const validationResults = validateChildForm(childData);
        dispatch(setChildValidationErrors(validationResults.errors));

        console.log(validationResults);

        if (validationResults.isValid) {
            setConfirmSubmissionModalOpen(true);
        }
    };

    const handleMembershipSubmit = async () => {
        try {
            const updatedChildData = { ...childData, membershipId: membershipId };
            // console.log(updatedChildData);

            const response = await axios.post('/child/register', updatedChildData);
            alert('Child registered successfully!');

            window.location.href = '/form/child/success';

            dispatch(resetChildState());
            // Clear persisted state for the member slice
            purgePersistedSlice(persistor, 'child');


        } catch (error) {
            console.error('Error registering child:', error);
        }
    };
    useEffect(() => {
        getMembershipId();
    }, [dispatch]);

    useEffect(() => {
        if (attemptedToProceed) {
            const validationResults = validateChildForm(childData);
            dispatch(setChildValidationErrors(validationResults.errors));
        }
    }, [attemptedToProceed]);


    return (
        <AdminLayout>
            <div className='grid grid-cols-1 gap-3'>
                <ChildDetails />
                <ChildIdentification />
                <ChildContactInfo />
                <ChildAdditionalInfo />
                <ChildChurchParticipation />
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

export default ChildMembershipForm
