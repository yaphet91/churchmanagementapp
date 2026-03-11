import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { Drawer } from '@/Components/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { setMembershipId } from '@/features/user/userSlice';

const MemberLayout = ({ user, children, currentStep, onStepChange }) => {   
    // const [membershipId, setMembershipId] = useState('');
    // 
    const dispatch = useDispatch();
    const getMembershipId = async () => {
        try {
            const response = await axios.get('/membership-id');
            // setMembershipId(response.data.membership_id);

            dispatch(setMembershipId(response.data.membership_id));

            console.log('we got membership id', response.data.membership_id);
        } catch (error) {
            console.error('Error fetching membership ID:', error);
        }
    };

    useEffect(() => {
        getMembershipId();
    }, []);

    return (
        <div className="bg-white dark:bg-[#000033]  dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <Sidebar currentStep={currentStep} onStepChange={onStepChange} />

                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header currentStep={currentStep} user={user} />
                    <main>
                        <div className="mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
                <Drawer isOpen={true}/>
            </div>
        </div>
    );
};

export default MemberLayout;
