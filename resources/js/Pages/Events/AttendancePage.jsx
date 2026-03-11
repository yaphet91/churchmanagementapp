import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setEventMembers } from '@/features/event/eventSlice';

const AttendancePage = ({ event }) => {
    const selectedEvent = useSelector((store) => store.event.selectedEvent);
    const eventMembers = useSelector((store) => store.event.eventMembers);
    const [activeTab, setActiveTab] = useState('All');
    // const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchGroupMembers();
    }, []);

    const fetchGroupMembers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/events/${selectedEvent.id}/members`);
            // const membersWithStatus = response.data;
            const membersWithStatus = response.data.map(member => ({
                ...member,
                isCheckedIn: true  // Assume all members initially not checked in
            }));
            console.log(membersWithStatus)

            dispatch(setEventMembers(membersWithStatus));
            // setMembers(membersWithStatus);

        } catch (error) {
            console.error('Failed to fetch members', error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleCheck = async (member) => {
        try {
            const action = member.isCheckedIn ? 'check-out' : 'check-in';
            const response = await axios.post(`/events/${selectedEvent.id}/${action}`, { membership_id: member.id });
            // alert(response.data.message);
            // Update the member's isCheckedIn status locally
            const updatedMembers = eventMembers.map(m =>
                m.id === member.id ? { ...m, isCheckedIn: !m.isCheckedIn } : m
            );
            dispatch(setEventMembers(updatedMembers));
            // setMembers(updatedMembers); // Reflect the new check in/out status
        } catch (error) {
            console.error(`Failed to ${action}`, error);
            alert(`Failed to ${action === 'check-out' ? 'check out' : 'check in'}`);
        }
    };


    const getComponent = () => {
        switch (activeTab) {
            case 'All': return <All members={eventMembers} onHandleToggleCheck={handleToggleCheck} />;
            case 'Attendees': return <Attendees members={eventMembers.filter(member => member.isCheckedIn)} />;
            case 'Absentees': return <Absentees members={eventMembers.filter(member => !member.isCheckedIn)} />;
            default: return <div>Select a category</div>;
        }
    };

    return (
        <AdminLayout>
            <button
                onClick={() => window.history.back()}
                className='p-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white'>
                <ArrowLeft />
                Back
            </button>
            <div className='p-2'>
                <h1 className='text-2xl font-bold'>Event Attendance</h1>
            </div>
            <div className='rounded-md'>
                <div className='darkBg p-2 rounded-t-md'>
                    <div className='w-[75%]'>
                        <DebouncedInput
                            className="flex p-2 font-lg text-black dark:text-white bg-transparent border-none rounded-md w-full"
                            placeholder="Search all columns..."
                        />
                    </div>
                    <div className='flex flex-row items-start justify-between mt-2 border-t border-gray-700'>
                        <div className='cursor-pointer flex justify-center space-x-2 px-4 py-2 w-full border-r border-gray-600'
                            onClick={() => setActiveTab('All')}>
                            <h1 className='font-bold text-xl'>All</h1>
                            <h1>({eventMembers.length})</h1>
                        </div>
                        <div className='cursor-pointer flex justify-center space-x-2 px-4 py-2 w-full border-r border-gray-600'
                            onClick={() => setActiveTab('Attendees')}>
                            <h1 className='font-bold text-xl'>Attendees</h1>
                            <h1>({eventMembers.filter(member => member.isCheckedIn).length})</h1>
                        </div>
                        <div className='cursor-pointer flex justify-center space-x-2 px-4 py-2 w-full'
                            onClick={() => setActiveTab('Absentees')}>
                            <h1 className='font-bold text-xl'>Absentees</h1>
                            <h1>({eventMembers.filter(member => !member.isCheckedIn).length})</h1>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-auto transition-all duration-300 max-h-[70vh] p-3'>
                    {getComponent()}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AttendancePage;

function All({ members, onHandleToggleCheck }) {
    return (
        <div className='grid grid-cols-2 gap-x-4'>
            {members.map((member, index) => (
                <div key={index} className='w-full flex items-center justify-between border-b border-gray-600 p-2'>
                    <div className='flex flex-row space-x-6'>
                        <img src={member.image_url || 'path/to/default/avatar.jpg'} alt={member.first_name} className='w-10 h-10 rounded-full' />
                        <div>
                            <h1 className='font-bold text-xl'>{member.first_name}</h1>
                            <p>{member.email}</p>
                        </div>
                    </div>
                    <button onClick={() => onHandleToggleCheck(member)}
                        className={`p-2 rounded-md ${member.isCheckedIn ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                        {member.isCheckedIn ? 'Check Out' : 'Check In'}
                    </button>
                </div>
            ))}
        </div>
    );
}


function Attendees({ members }) {
    return (
        <div className='grid grid-cols-2 gap-x-4'>
            {members.map((member, index) => (
                <MemberCard key={index} member={member} />
            ))}
        </div>
    );
}

function Absentees({ members }) {
    return (
        <div className='grid grid-cols-2 gap-x-4'>
            {members.map((member, index) => (
                <MemberCard key={index} member={member} />
            ))}
        </div>
    );
}

function MemberCard({ member }) {
    return (
        <div className='w-full flex items-center justify-between border-b border-gray-600 p-2'>
            <div className='flex flex-row space-x-6'>
                <img src={member.image_url || 'path/to/default/avatar.jpg'} alt={member.first_name} className='w-10 h-10 rounded-full' />
                <div>
                    <h1 className='font-bold text-xl'>{member.first_name}</h1>
                    <p>{member.email}</p>
                </div>
            </div>
        </div>
    );
}

function DebouncedInput({ placeholder, className }) {
    const [value, setValue] = useState('');
    const [timer, setTimer] = useState(null);

    const handleInputChange = (e) => {
        clearTimeout(timer);
        const newValue = e.target.value;
        setValue(newValue);
        const newTimer = setTimeout(() => {
            // Handle the debounced search here
        }, 500);
        setTimer(newTimer);
    };

    return (
        <input
            value={value}
            onChange={() => handleInputChange}
            placeholder={placeholder}
            className={className}
        />
    );
}
