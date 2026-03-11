import React, { useState } from 'react';
import Modal from '../Modal';
import EditableMemberDetails from './EditableMemberDetails';
import { Banknote, CalendarCheck, Cross, Hand, Handshake, MessageSquareText, Save, Settings, User } from 'lucide-react';

const MemberEditorModal = ({ isOpen, onClose, data, onSave }) => {
    const [activeTab, setActiveTab] = useState('Details');

    const navigationButtons = [
        { icon: <User size={20} strokeWidth={1} />, name: 'Details' },
    ];

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='5xl' maxHeight='h-[90vh]'>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                    {data.title} {data.firstName} {data.fatherName} {data.grandFatherName}
                </h2>
          
                <div className='relative overflow-auto transition-all duration-300 max-h-[70vh] p-0'>
                    <EditableMemberDetails data={data} onSave={onSave} />
                </div>
                <div className='fixed bottom-2 right-2'>
                    <div className='flex flex-row space-x-3'>
                    <button
                        className='px-4 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded-md flex items-center justify-start gap-2'
                        onClick={() => onClose()}  // Close the editor modal and reopen viewer
                    >
                        Cancel
                    </button>
                    <button
                        className='px-4 py-1 bg-gray-600 hover:bg-blue-900 text-white rounded-md flex items-center justify-start gap-2'
                        onClick={() => onSave(data)}  // Save changes
                    >
                        <Save size={18} />
                        Save
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default MemberEditorModal;
