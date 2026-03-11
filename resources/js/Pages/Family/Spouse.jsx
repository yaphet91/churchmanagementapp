import NoDataFound from '@/Components/Miscellaneous/NoDataFound';
import MemberLayout from '@/Layouts/MemberLayout'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Inertia } from '@inertiajs/inertia';
import LinkSpouses from './LinkSpouses';

const Spouse = () => {

    const theme = useSelector((store) => store.theme.theme);
    const membershipId = useSelector((store) => store.user.value.membershipId);
    const [spouse, setSpouse] = useState([]);
    const [spouseAvatar, setSpouseAvatar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [spouseLinked, setSpouseLinked] = useState(false);
    const spouseLinked = useSelector((state) => state.user.value.hasLinkedSpouse);

    const fetchSpouse = async (membershipId) => {
        try {
            const response = await axios.get(`/memberships/${membershipId}/spouse`);
            console.log(response.data);
            setSpouse(response.data.spouse)
            setSpouseAvatar(response.data.avatar);

            // Do something with the spouse data
        } catch (error) {
            console.error('Error fetching spouse:', error);
        }
    };

    useEffect(() => {
        if (spouseLinked) {
            fetchSpouse(membershipId);
        }
    }, [membershipId])

    const handleLinkSpouse = () => {
        setIsModalOpen(true);
    }

    const handleRegisterSpouse = () => {
        Inertia.get('/membership/form');
    }

    return (
        <MemberLayout>
            <div className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`}>

                {!spouseLinked &&
                    <div className='w-full space-x-3'>
                        <button
                            onClick={handleLinkSpouse}
                            className='hover:bg-green-800 cursor-pointer p-2 px-4 bg-black border border-gray-400 rounded-md'
                        >
                            + Link Spouse
                        </button>

                        <button
                            onClick={handleRegisterSpouse}
                            className='hover:bg-green-800 cursor-pointer p-2 px-4 bg-black border border-gray-400 rounded-md'
                        >
                            Register Spouse
                        </button>

                    </div>
                }
                <div className='flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold'>Spouse</h1>
                </div>
                {spouseLinked ? (
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='h-[120px] w-[430px] rounded-md flex items-start justify-start space-x-6 border  border-gray-500 p-4 bg-gray-700'>
                            <img src={spouseAvatar} alt="profile" className='rounded-md w-[70px]' />
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-xl'>{`${spouse.first_name} ${spouse.father_name} ${spouse.grand_father_name}`}</h1>
                                <h1>{spouse.country_phone_code}{spouse.phone}</h1>
                                <h2>{spouse.email}</h2>
                            </div>
                        </div>
                    </div>
                ) :
                    (
                        <NoDataFound />
                    )
                }

                <LinkSpouses isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={membershipId} />

            </div>
        </MemberLayout>
    )
}

export default Spouse
