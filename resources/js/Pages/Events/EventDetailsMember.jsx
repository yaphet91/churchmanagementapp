import MemberLayout from '@/Layouts/MemberLayout';
import { Inertia } from '@inertiajs/inertia';
import { ArrowLeft, LogIn, Pen } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';
import QRCodeScanner from './QRCodeScanner';

const EventDetailsMember = ({ event }) => {
    // console.log(event);
    const theme = useSelector((store) => store.theme.theme);
    const isRepeatingEvent = event.repeat !== null;
    const [isQrScannerOpen, setIsQrScannerOpen] = React.useState(false);

    const handleCheckIn = () => {
        // Inertia.visit('/event/member/attendance');
        setIsQrScannerOpen(true);
    }
    const handleRegister = () => {
        // Implement registration logic here
    }
    const handleEditEvent = () => {
        // Implement edit event logic here
    }
    return (
        <MemberLayout>
            <div className='space-x-2'>
                <div className='p-2'>
                    <h1 className='text-4xl font-semibold'>Event Details</h1>
                </div>
                <div className={`flex flex-row gap-4 ${theme === 'light' ? 'bg-gray-300' : 'darkBg'} rounded-sm md:p-6 md:pt-9 px-4 py-9`}>
                    <div className={`w-[50%] `}>
                        <div className='mb-5'>
                            <div className='flex space-x-6 mb-3'>
                                <button
                                    onClick={() => window.history.back()}
                                    className='p-2 px-4 rounded-md flex items-start justify-center gap-2 hover:bg-gray-700 hover:text-white'>
                                    <ArrowLeft />
                                    Back
                                </button>
                            </div>

                            <div className='flex h-24 items-start justify-start space-x-6'>
                                <div className='h-full w-2 bg-green-600'></div>
                                <div className='py-4 px-2'>
                                    <h1 className='text-4xl font-semibold mb-2'>{event.title}</h1>
                                    <p>{event.start_time} to {event.end_time}</p>
                                </div>
                            </div>
                        </div>

                        <p className='my-2 text-black dark:text-white'>Description</p>
                        <div className='flex items-start justify-start shadow-black'>
                            <div className=''>
                                <img src={event.image_url} alt={event.title} className='w-full h-80' />
                                <p className='py-2 italic font-bold'>"{event.description}"</p>
                            </div>
                        </div>
                        <p className='my-2 text-black dark:text-white'>Details</p>
                        <div className='grid grid-cols-3 gap-3  border-gray-300 dark:border-gray-700 p-2 py-4'>
                            <div>
                                <p className='text-gray-700 dark:text-white'>Start Date</p>
                                <p className='text-xl '>{event.start_time}</p>
                            </div>
                            <div>
                                <p className='text-gray-700 dark:text-white'>End Date</p>
                                <p className='text-xl '>{event.end_time}</p>
                            </div>
                            <div>
                                <p className='text-gray-700 dark:text-white'>Visibility</p>
                                <p className='text-xl '>{event.visibility}</p>
                            </div>

                            <div>
                                <p className='text-gray-700 dark:text-white'>Location</p>
                                <p className='text-xl '>{event.location ? event.location : ' ------------'}</p>
                            </div>
                            <div>
                                <p className='text-gray-700 dark:text-white'>Manager</p>
                                <p className='text-xl '>{event.manager ? event.manager : ' ------------'}</p>
                            </div>
                            <div>
                                <p className='text-gray-700 dark:text-white'>Repeats</p>
                                <p className='text-xl '>{event.repeat ? event.repeat : 'No'}</p>
                            </div>
                            {/* <div>
                                <p className='text-gray-700 dark:text-white'>Status</p>
                                <p className='text-xl '>{event.status}</p>
                            </div> */}
                        </div>
                       
                    </div>
                    <div className='w-[49%]'>
                        <div className='flex items-start justify-end space-x-6 text-black dark:text-white'>
                            <button className='flex items-start justify-start px-4 py-2 rounded-md gap-2 border border-gray-500 text-sm bg-gray-400 dark:bg-gray-600 hover:bg-green-800' onClick={() => handleCheckIn()}> <LogIn size={20} strokeWidth={1} />Check In</button>
                            <button className='flex items-start justify-start px-4 py-2 rounded-md gap-2 border border-gray-500 text-sm bg-gray-400 dark:bg-gray-600 hover:bg-green-800' onClick={() => handleRegister()}>Register</button>
                            <button className='flex items-start justify-start px-4 py-2 rounded-md gap-2 border border-gray-500 text-sm bg-gray-400 dark:bg-gray-600 hover:bg-green-800' onClick={() => handleEditEvent()}>Edit</button>
                        </div>
                    </div>

                </div>

            </div>
            <QRCodeScanner onScanSuccess={(data) => console.log(data)} isOpen={isQrScannerOpen} onClose={() => setIsQrScannerOpen(false)} />
        </MemberLayout>
    )
}

export default EventDetailsMember
