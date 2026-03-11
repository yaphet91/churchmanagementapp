import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@/Components/Modals/Modal';
import TextInput from '@/Components/Forms/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { setHasLinkedSpouse } from '@/features/user/userSlice';

const LinkSpouses = ({ isOpen, onClose }) => {
    const membershipId = useSelector((store) => store.user.value.membershipId);
    const [spouseId, setSpouseId] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleLinkSpouses = async () => {
        try {
            // Verify the spouse ID first
            const verifyResponse = await axios.post('/memberships/verify', {
                membership_id: spouseId
            });

            console.log(verifyResponse);

            if (verifyResponse.data.exists) {
                // If spouse ID exists, proceed to link spouses
                if (membershipId === spouseId) {
                    setErrorMessage("Please Enter your Spouse's ID, not your ID")
                }

                const linkResponse = await axios.post('/memberships/link-spouses', {
                    membership_id: membershipId,
                    spouse_id: spouseId
                });

                setMessage('Spouses linked successfully!');
                dispatch(setHasLinkedSpouse(true));
            } else {
                setErrorMessage('Spouse ID not found.');
            }
        } catch (error) {
            setErrorMessage('Error linking spouses: Spouse Id not found');
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='2xl' maxHeight='h-[50vh]'>
            <div className='p-10'>
                <h2 className='text-2xl font-bold py-3'>Link with your Spouse</h2>
                <h2 className='text-md py-3'>Please Enter the Church Card Id of your spouse in the field below</h2>
                <TextInput
                    className="w-full dark:text-white"
                    type="text"
                    placeholder="Spouse ID"
                    value={spouseId}
                    onChange={(e) => setSpouseId(e.target.value)}
                />
                <button
                    className='p-3 gradientBg mt-4 rounded-md'
                    onClick={membershipId? handleLinkSpouses: null}
                >
                    Link My Spouse
                </button>
                {errorMessage && <p className='mt-4 bg-red-500 p-1 px-3 rounded-sm'>{errorMessage}</p>}
                {message && <p className='mt-4 bg-green-500 p-1 px-3 rounded-sm'>{message}</p>}
            </div>
        </Modal>
    );
};

export default LinkSpouses;
