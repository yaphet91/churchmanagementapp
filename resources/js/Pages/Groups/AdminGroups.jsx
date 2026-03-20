import AdminLayout from '@/Layouts/AdminLayout'
import React, { useState, useEffect } from 'react'
import { GrAddCircle } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import GroupForm from './GroupForm';
import GroupsTable from '@/Components/Tables/GroupsTable/GroupsTable';
const AdminGroups = () => {
  const [isGroupFormModalOpen, setIsGroupFormModalOpen] = React.useState(false);
  const theme = useSelector((store) => store.theme.theme);
  const [groups, setGroups] = useState([]);

  const handleAddGroup = () => {
    setIsGroupFormModalOpen(true);
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('/admin/api/groups');
      setGroups(response.data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };


  return (
    <AdminLayout>

      <div className='mb-5'>
        <button
          onClick={handleAddGroup}
          className='p-2 rounded-md flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-400 hover:text-black'><GrAddCircle /> Add Group</button>
      </div>

      <GroupsTable data={groups} />
      <GroupForm isOpen={isGroupFormModalOpen} onClose={() => setIsGroupFormModalOpen(false)} onGroupCreated={fetchGroups} />
    </AdminLayout>
  )
}

export default AdminGroups
