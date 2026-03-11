import React, { useState } from 'react';
import Modal from '../Modal';
import { Banknote, CalendarCheck, Cross, Hand, Handshake, MessageSquareText, Pen, Settings, User } from 'lucide-react';
import UserDetails from './UserDetails';
import UserAttendance from './UserAttendance';
import UserDonations from './UserDonations';
import UserMessages from './UserMessages';
import UserVolunteering from './UserVolunteering';
import UserFellowups from './UserFellowups';
import UserSacraments from './UserSacraments';
import MemberEditorModal from '../Editor/MemberEditorModal';

const ViewerModal = ({ isOpen, onClose, data }) => {
    const [activeTab, setActiveTab] = useState('Details');
    const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);

    const navigationButtons = [
        { icon: <User size={20} strokeWidth={1} />, name: 'Details' },
        { icon: <CalendarCheck size={20} strokeWidth={1} />, name: 'Attendance' },
        { icon: <Cross size={20} strokeWidth={1} />, name: 'Sacraments' },
        { icon: <Banknote size={20} strokeWidth={1} />, name: 'Donations' },
        { icon: <MessageSquareText size={20} strokeWidth={1} />, name: 'Messages' },
        { icon: <Handshake size={20} strokeWidth={1} />, name: 'Fellow Ups' },
        { icon: <Hand size={20} strokeWidth={1} />, name: 'Volunteering' },
    ];

    const getComponent = () => {
        switch (activeTab) {
            case 'Details': return <UserDetails data={data} />;
            case 'Attendance': return <UserAttendance />;
            case 'Sacraments': return <UserSacraments />;
            case 'Donations': return <UserDonations />;
            case 'Messages': return <UserMessages />;
            case 'Fellow Ups': return <UserFellowups />;
            case 'Volunteering': return <UserVolunteering />;
            default: return <div>Select a category</div>;
        }
    };

    const handleEditClick = () => {
        setIsEditorModalOpen(true);  // Open the editor modal
    };

    const handleSave = (updatedMember) => {
        // Handle the save action here, e.g., update the data state or send to backend
        console.log('Updated member:', updatedMember);
        setIsEditorModalOpen(false);  // Close the editor modal after saving
    };

    const handleEditorClose = () => {
        setIsEditorModalOpen(false);  // Close the editor modal
        setIsModalOpen(true);  // Re-open the viewer modal
    };

    return (
        <>
            <Modal show={isOpen && !isEditorModalOpen} onClose={onClose} maxWidth='5xl' maxHeight='h-[90vh]'>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{data.title}{' '}{data.firstName}{' '}{data.fatherName}{' '}{data.grandFatherName}</h2>

                    <div className='flex items-center justify-between hover:cursor-pointer'>
                        {navigationButtons.map((navigator) => (
                            <div key={navigator.name} className={`flex items-center flex-col p-1 ${activeTab === navigator.name ? 'text-blue-500' : 'text-gray-600 dark:text-white'}`}
                                onClick={() => setActiveTab(navigator.name)}>
                                {navigator.icon}
                                <h2 className='font-semibold text-gray-600 dark:text-white'>{navigator.name}</h2>
                            </div>
                        ))}
                    </div>
                    <div className='relative overflow-auto transition-all duration-300 max-h-[70vh]'>
                        {getComponent()}
                    </div>
                    <div className='fixed bottom-2 right-2'>
                        <button
                            className='px-4 py-1 bg-gray-600 text-white rounded-md flex items-center justify-start gap-2'
                            onClick={handleEditClick}  // Trigger the editor modal
                        >
                            <Settings size={18} />
                            Edit
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Member Editor Modal */}
            {isEditorModalOpen && (
                <MemberEditorModal
                    isOpen={isEditorModalOpen}
                    onClose={handleEditorClose}
                    data={data}
                    onSave={handleSave}
                />
            )}
        </>
    );
}

export default ViewerModal;
