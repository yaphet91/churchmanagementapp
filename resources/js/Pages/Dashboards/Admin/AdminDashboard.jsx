// import Table from '@/Components/Tables/PeopleTable/PeopleTable'
import AdminLayout from '@/Layouts/AdminLayout'
import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/react';

const AdminDashboard = () => {
    const { admin, message } = usePage().props;
    useEffect(() => {
        console.log('admin', admin);
        console.log('message', message);
    }, [])
    return (
        <AdminLayout
        >
            {/*   */}
            {/* <Table/> */}
        </AdminLayout>
    )
}

export default AdminDashboard
