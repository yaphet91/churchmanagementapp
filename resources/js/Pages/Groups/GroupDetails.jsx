import AdminLayout from '@/Layouts/AdminLayout'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NoDataFound from '@/Components/Miscellaneous/NoDataFound'
import { ArrowLeft, X } from 'lucide-react';
import { Inertia } from '@inertiajs/inertia';
import GroupMembersTable from '@/Components/Tables/GroupsTable/GroupMembersTable';
import SelectionTable from '@/Components/Tables/GroupsTable/SelectionTable';
import DefaultUserImage from '@/assets/images/icons/user2.png';

const GroupDetails = ({ group }) => {
    const [isParticipantDrawerOpen, setIsParticipantDrawerOpen] = useState(false);

    const theme = useSelector((store) => store.theme.theme);
    const membersAdded = useSelector((store) => store.group.value.membersAdded);

    const [groupMembers, setGroupMembers] = useState(group.members || []);
    const [availableMembers, setAvailableMembers] = useState([]); // Initially empty, will be fetched
    const [updateTrigger, setUpdateTrigger] = useState(false);

    // this is importing data to the selection table from the database
    const fetchMembers = async () => {
        try {
            const membershipResponse = await axios.get('/memberships');
            const profilesResponse = await axios.get('/avatars'); // Assuming this endpoint exists

            const memberships = membershipResponse.data.data;
            const filteredMembers = memberships.filter(member => !group.members.some(gMember => gMember.id === member.id));
            // console.log('filtered', filteredMembers);

            const profiles = profilesResponse.data.data;

            // Create a map of profiles by some key, e.g., membershipId
            const profileMap = profiles.reduce((map, profile) => {
                map[profile.membershipId] = profile.imageUrl;
                return map;
            }, {});

            // Append profile imageUrl to memberships
            const enrichedMemberships = filteredMembers.map(member => ({
                ...member,
                imageUrl: profileMap[member.id] || DefaultUserImage
            }));

            console.log('enrichedMemberships', enrichedMemberships);
            setAvailableMembers(enrichedMemberships);
        } catch (error) {
            console.error('Failed to fetch data:', error.message);
        }
    };
    useEffect(() => {
        fetchMembers();
    }, [group.members, membersAdded]);

    const fetchUpdatedGroupMembers = async () => {
        try {
            const response = await axios.get(`/groups/${group.id}/members`);
            console.log('Updated group members:', response.data)
            // setGroupMembers(response.data.members);
            setGroupMembers([...groupMembers, ...response.data.members]);

        }
        catch (error) {
            console.error('Failed to fetch updated group members:', error);
        }
    };
    // removing a member from the group members
    const handleRemoveMember = async (memberId) => {
        try {
            // Simulate API call to remove member from the group
            const response = await axios.delete(`/groups/${group.id}/removeMember/${memberId}`);
            setGroupMembers(groupMembers.filter(member => member.id !== memberId));

            // alert('Member removed successfully!');
        } catch (error) {
            console.error('Failed to remove member:', error);
            alert('Failed to remove member');
        }
    };

    // adding a member from the available members to the group members
    const handleAddMembers = async (selectedMemberIds) => {
        try {
            // Simulate API call to add members to the group
            const response = await axios.post(`/groups/${group.id}/addMembers`, {
                members: selectedMemberIds
            });

            const addedMembers = availableMembers.filter(member =>
                selectedMemberIds.includes(member.id)
            );
            fetchUpdatedGroupMembers();
            // setGroupMembers([...groupMembers, ...addedMembers]);
            setAvailableMembers(availableMembers.filter(member =>
                !selectedMemberIds.includes(member.id)
            ));

            // alert('Members added successfully!');
        } catch (error) {
            console.error('Failed to add members:', error);
            alert('Failed to add members');
        }
    };
    const handleAddParticipant = () => {
        setIsParticipantDrawerOpen(true);
    }

    return (
        <AdminLayout>
            <div className='flex space-x-2'>
                <div className={`${theme === 'light' ? 'bg-gray-300' : 'darkBg'} rounded-sm md:p-6 md:pt-9 px-4 py-9 ${isParticipantDrawerOpen ? 'w-[70%]' : 'w-full'} `}>
                    <div className='flex space-x-56 mb-5'>
                        <div className='flex flex-row space-x-6'>
                            <button
                                onClick={() => window.history.back()}
                                className='p-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white'>
                                <ArrowLeft />
                                Back
                            </button>
                            <button
                                onClick={handleAddParticipant}
                                className='p-2 rounded-md flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-400 hover:text-black'>
                                <GrAddCircle />
                                Add Participants
                            </button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h1 className='text-4xl font-semibold'>{group.title}</h1>
                        </div>
                    </div>
                    <GroupMembersTable membersList={groupMembers} />
                    {/* <GroupMembersTable membersList={group.members} /> */}
                </div>
                {isParticipantDrawerOpen && (
                    <div className={`${theme === 'light' ? 'bg-gray-300' : 'darkBg'} rounded-sm p-2 lg:min-h-[87vh] w-[30%]`}>
                        <div className='flex items-center justify-end mb-4'>
                            <button
                                className='right-2'
                                onClick={() => setIsParticipantDrawerOpen(false)}><X /></button>
                        </div>
                        <SelectionTable group={group.id} availableMembers={availableMembers} onMembersAdded={handleAddMembers} />
                        {/* <SelectionTable group={group.id}/> */}
                    </div>
                )}
            </div>
        </AdminLayout>
    )
}

export default GroupDetails
