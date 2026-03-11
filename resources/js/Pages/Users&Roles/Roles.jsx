import RolesTable from '@/Components/Tables/RolesTable/RolesTable';
import AdminLayout from '@/Layouts/AdminLayout'
import React, { useEffect } from 'react'
import RolesForm from './RolesForm';
import { GrAddCircle } from 'react-icons/gr';

const Roles = () => {
    const [roles, setRoles] = React.useState([]);
    const [isRoleFormModalOpen, setIsRoleFormModalOpen] = React.useState(false);
    const handleAddRole = () => {
        setIsRoleFormModalOpen(true);
    }

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get('/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

  return (
    <AdminLayout>
      
          <div className='mb-5'>
              <button
                  onClick={handleAddRole}
                  className='p-2 rounded-md flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-400 hover:text-black'><GrAddCircle /> Add Role</button>
          </div>

          <RolesTable data={roles} />
          <RolesForm isOpen={isRoleFormModalOpen} onClose={() => setIsRoleFormModalOpen(false)} onRoleCreated={fetchRoles} />

    </AdminLayout>
  )
}

export default Roles
