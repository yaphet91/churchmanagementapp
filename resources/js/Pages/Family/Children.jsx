import NoDataFound from '@/Components/Miscellaneous/NoDataFound';
import MemberLayout from '@/Layouts/MemberLayout';
import { Inertia } from '@inertiajs/inertia';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Children = () => {
    const theme = useSelector((store) => store.theme.theme);
    const membershipId = useSelector((store) => store.user.value.membershipId);
    const [children, setChildren] = useState([]);

    const fetchChildren = async (membershipId) => {
        try {
            const response = await axios.get(`/memberships/${membershipId}/children`);
            if (Array.isArray(response.data)) {
                setChildren(response.data);
            } else {
                console.error('Response data is not an array:', response.data);
                setChildren([]);
            }
        } catch (error) {
            console.error('Error fetching children:', error);
            setChildren([]);
        }
    };

    useEffect(() => {
        if (membershipId) {
            fetchChildren(membershipId);
        }
    }, [membershipId]);

    const handleAddChild = () => {
        Inertia.get('/form/child');
    };

    return (
        <MemberLayout>
            <div className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`}>
                <div className='w-full'>
                    <button
                        onClick={handleAddChild}
                        className='hover:bg-green-800 cursor-pointer p-2 px-4 bg-black border border-gray-400 rounded-md'>
                        + Add Child
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold'>Children</h1>
                </div>
                {children.length > 0 ? (
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {children.map((data) => (
                            <div key={data.id} className='h-[120px] w-[430px] rounded-md flex items-start justify-start space-x-6 border border-gray-500 p-4 bg-gray-700 cursor-pointer'>
                                <img src={data.image_url} alt="profile" className='rounded-md w-[70px]' />
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='text-xl'>{`${data.first_name} ${data.father_name} ${data.grand_father_name}`}</h1>
                                    <h1>{DataTransfer.country_phone_code}{data.phone}</h1>
                                    <h2>{data.email}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <NoDataFound />
                )}
            </div>
        </MemberLayout>
    );
};

export default Children;
