import MemberLayout from '@/Layouts/MemberLayout'
import React, { useState } from 'react'
import DashCard from '../../../Components/Cards/DashCard';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import images from '@/Constants/images';
import EshirMobaeBarChart from '../../../Components/Charts/EshirMobaeBarChart';
import RequestService from '@/Components/Modals/ServiceModals/RequestService';

const messages = [
    { profile: images.user, username: 'Gebray Weldu', time: '02:10pm', message: 'Hello Nahom, I am glad to inform you ...' },
    { profile: images.user, username: 'Francis Tran', time: '09:10pm', message: 'Hello Nahom, I am glad to inform you ...' },
    { profile: images.user, username: 'Elina Palacios', time: '11:10pm', message: 'Hello Nahom, I am glad to inform yoo...' },
    { profile: images.user, username: 'Katherine Webster', time: '04:10pm', message: 'Hello Nahom, I am glad to inform...' },

]
const MemberDashboard = () => {
    const [isRequestServiceOpen, setIsRequestServiceOpen] = useState(false);
    return (
        <MemberLayout>
            {/* main container */}
            <div className='flex items-center justify-between mb-8'>
                <h1 className='text-3xl  font-bold text-gray-600'>Member Dashboard</h1>
                <button onClick={() => setIsRequestServiceOpen(true)}
                    className='p-2 px-4 hover:bg-gray-400 rounded-lg text-lg font-semibold
                 hover:text-gray-400 btnPrimary dark:bg-gray-700'>Request Service </button>
            </div>
            <div className='flex items-start justify-start space-x-5'>
                {/* left container ======================================================================*/}
                <div className='w-2/3'>
                    <div className='flex-col p-6 gradientBg rounded-md'>
                        <h1 className='text-3xl font-bold text-white upper'>Welcome back! Nahom</h1>
                        {/* <p className='text-gray-400 mt-2'>Here is your daily bible verse for a blessed day!</p> */}
                        <div className='w-[65%] mt-3'>
                            <p className='text-gray-700 font-semibold text-lg'>"No man has seen God at any time; the only begotten Son, who is in the bosom of the Father,
                                he has declared him". <span className='text-white'>John 1. 18</span></p>
                        </div>
                        <button className='btnPrimary w-[170px] p-2 mt-4 text-black font-semibold rounded-md '>Mark as read</button>

                    </div>
                    <div className='mt-6 mb-6 flex items-start justify-between gap-3'>
                        <div className='w-full'>
                            <h1 className='text-xl mb-3 font-semibold'>Personal Statistics</h1>
                            <div className='space-y-3'>
                                <DashCard className='flex p-5'>

                                    <div className='w-[100px]'>
                                        <CircularProgressbar value={20} text={`${20}%`}
                                            styles={buildStyles({
                                                // rotation: 0.25,
                                                // strokeLinecap: 'butt',
                                                textSize: '16px',
                                                pathTransitionDuration: 0.5,
                                                // pathTransition: 'none',
                                                pathColor: `rgba(62, 152, 199, ${100 / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })} />
                                    </div>
                                    <div className='ml-4 p-2'>
                                        <h1 className='font-semibold text-xl text-gray-600 dark:text-gray-300'>Your Engagment</h1>
                                        <h2>Sunday Masses</h2>
                                        <h2 className='italic'>Since 12 Sep 2018</h2>
                                    </div>
                                </DashCard>
                                <DashCard className='flex p-5'>
                                    <div className='w-[100px]'>
                                        <CircularProgressbar value={50} text={`${50}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                // strokeLinecap: 'butt',
                                                textSize: '16px',
                                                pathTransitionDuration: 0.5,
                                                // pathTransition: 'none',
                                                pathColor: `rgba(62, 152, 199, ${100 / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })} />
                                    </div>
                                    <div className='ml-4 p-2'>
                                        <h1 className='font-semibold text-xl  text-gray-600 dark:text-gray-300'>Your Engagment</h1>
                                        <h2>Sunday Masses</h2>
                                        <h2 className='italic'>Since 12 Sep 2018</h2>
                                    </div>
                                </DashCard>

                            </div>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-xl font-semibold mb-3'>Inboxes</h1>
                            <div className=''>
                                <DashCard className='p-3 py-9'>

                                    <div className='flex flex-row gap-6 items-start justify-start'>
                                        <img src={images.user} className='w-16 h-16' alt='placeholder' />
                                        <div className=''>
                                            <div className='flex flex-row items-center justify-start space-x-16'>
                                                <h1 className='font-bold  text-gray-600 dark:text-gray-300 text-xl'>Gebray Weldu</h1>
                                                <p>09:10pm</p>
                                            </div>
                                            <p className='text-gray-400'>Hello Nahom, I am glad to inform you that the church has decided to...</p>
                                            {/* <div className='space-x-4'>
                                                <button className='rounded-sm gradientBg px-3 my-1 text-black'>reply</button>
                                                <button className='rounded-sm gradientBg px-3 my-1 text-black'>forward</button>
                                            </div> */}
                                        </div>
                                    </div>
                                    <hr class="h-px my-[35px] bg-gray-200 border-0 dark:bg-gray-700" />
                                    <div className='flex flex-row gap-6 items-start justify-start'>
                                        <img src={images.user} className='w-16 h-16' alt='placeholder' />
                                        <div className=''>
                                            <div className='flex flex-row items-center justify-start space-x-16'>
                                                <h1 className='font-bold  text-gray-600 dark:text-gray-300 text-xl'>Gebray Weldu</h1>
                                                <p>09:10pm</p>
                                            </div>
                                            <p className='text-gray-400'>Hello Nahom, I am glad to inform you that the church has decided to...</p>
                                            {/* <div className='space-x-4'>
                                                <button className='rounded-sm gradientBg px-3 my-1 text-black'>reply</button>
                                                <button className='rounded-sm gradientBg px-3 my-1 text-black'>forward</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </DashCard>
                            </div>
                        </div>
                    </div>

                    <h1 className='text-xl mb-3 font-semibold'>Monthly Eshir and Mobae tracker</h1>
                    <DashCard className='flex-col mt-2'>
                        <EshirMobaeBarChart />
                    </DashCard>
                </div>
                {/* right container ======================================================================*/}
                <div className='w-1/3 flex flex-col items-start'>
                    <DashCard className='flex flex-row items-center justify-between p-7 w-full'>
                        <div className='p-2 flex flex-col items-center justify-center'>
                            <p className='text-gray-500'>Attendance</p>
                            <h1 className='text-3xl font-semibold text-green-600'>340</h1>
                        </div>
                        <div className='p-2 flex flex-col items-center justify-center'>
                            <p className='text-gray-500'>Late</p>
                            <h1 className='text-3xl font-semibold text-yellow-600'>12</h1>
                        </div>
                        <div className='p-2 flex flex-col items-center justify-center'>
                            <p className='text-gray-500'>Absent</p>
                            <h1 className='text-3xl font-semibold text-red-600'>4</h1>
                        </div>
                    </DashCard>
                    {/* chats */}
                    <h1 className='text-xl my-3.5 font-semibold'>Messages</h1>
                    <DashCard className='flex flex-col  mb-7 pt-1'>
                        {messages.map((message, index) => (
                            <div key={index} className='flex flex-row items-center justify-start gap-3 px-4 py-1 mb-6'>
                                <img src={message.profile} className='w-16 h-16' alt='placeholder' />
                                <div className=''>
                                    <div className='flex flex-row items-center justify-between space-x-16'>
                                        <h1 className='font-bold dark:text-white text-black text-lg'>{message.username}</h1>
                                        <p>{message.time}</p>
                                    </div>
                                    <p className='text-gray-400'>{message.message}</p>
                                </div>

                            </div>
                        ))}
                        {/* <button className='w-full h-12 bg-purple-900'>New Chat</button> */}
                    </DashCard>

                    <h1 className='text-xl mb-3 font-semibold'>Up coming events</h1>
                    <DashCard className='flex-col  w-full h-[500px] p-6'>
                        <div className='flex flex-col items-start justify-start gap-3'>
                            <div className='w-full flex flex-row items-center justify-start my-3 space-x-4'>
                                <img src={images.about01} className='w-[70px] h-[60px] rounded-sm' alt='placeholder' />
                                <div>
                                    <h1 className='text-xl font-semibold'>Sunday Mass</h1>
                                    <p className='text-gray-400'>Every Sunday at 9:00am</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-start my-3 space-x-4'>
                                <img src={images.about02} className='w-[70px] h-[60px] rounded-sm' alt='placeholder' />
                                <div>
                                    <h1 className='text-xl font-semibold'>Bible Study</h1>
                                    <p className='text-gray-400'>Every Wednesday at 6:00pm</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-start my-3 space-x-4'>
                                <img src={images.about03} className='w-[70px] h-[60px] rounded-sm' alt='placeholder' />
                                <div>
                                    <h1 className='text-xl font-semibold'>Tesfa choir practice</h1>
                                    <p className='text-gray-400'>Every Sunday at 6:00pm</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-start my-3 space-x-4'>
                                <img src={images.about04} className='w-[70px] h-[60px] rounded-sm' alt='placeholder' />
                                <div>
                                    <h1 className='text-xl font-semibold'>Sunday Mass</h1>
                                    <p className='text-gray-400'>Every Sunday at 9:00am</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-start my-3 space-x-4'>
                                <img src={images.about04} className='w-[70px] h-[60px] rounded-sm' alt='placeholder' />
                                <div>
                                    <h1 className='text-xl font-semibold'>Sunday Mass</h1>
                                    <p className='text-gray-400'>Every Sunday at 9:00am</p>
                                </div>
                            </div>
                        </div>
                    </DashCard>
                </div>
                <RequestService isOpen={isRequestServiceOpen} onClose={() => setIsRequestServiceOpen(false)} />
            </div>
        </MemberLayout>
    )
}

export default MemberDashboard
