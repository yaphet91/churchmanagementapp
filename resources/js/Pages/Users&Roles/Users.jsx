import UsersTable from '@/Components/Tables/UsersTable/UsersTable'
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'

const Users = () => {
  return (
    <AdminLayout>
       <UsersTable />
    </AdminLayout>
  )
}

export default Users
