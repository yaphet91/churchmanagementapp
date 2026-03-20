import AdminLayout from '@/Layouts/AdminLayout';
import React, { useEffect, useState } from 'react';
import RolesForm from './RolesForm';

const Roles = () => {
    const [roles, setRoles] = useState([]);
    const [isRoleFormModalOpen, setIsRoleFormModalOpen] = useState(false);

    const fetchRoles = async () => {
        try {
            const response = await axios.get('/admin/api/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Roles & Permissions</h1>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Roles are now loaded from the backend and can be created locally for dashboard testing.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsRoleFormModalOpen(true)}
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900"
                    >
                        Add Role
                    </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60">
                            <tr>
                                <th className="px-5 py-4">Role</th>
                                <th className="px-5 py-4">Description</th>
                                <th className="px-5 py-4">Users</th>
                                <th className="px-5 py-4">Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.length ? roles.map((role) => (
                                <tr key={role.id} className="border-b border-slate-100 dark:border-slate-800">
                                    <td className="px-5 py-4 font-medium text-slate-900 dark:text-white">{role.name}</td>
                                    <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{role.description || 'No description'}</td>
                                    <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{role.users_count || 0}</td>
                                    <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{role.permissions_count || 0}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td className="px-5 py-6 text-slate-500" colSpan="4">No roles found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <RolesForm
                isOpen={isRoleFormModalOpen}
                onClose={() => setIsRoleFormModalOpen(false)}
                onRoleCreated={fetchRoles}
            />
        </AdminLayout>
    );
};

export default Roles;
