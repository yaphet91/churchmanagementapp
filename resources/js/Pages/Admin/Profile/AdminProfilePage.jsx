import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteAdminForm from './Partials/DeleteAdminForm';
import UpdateAdminPasswordForm from './Partials/UpdateAdminPasswordForm';
import UpdateAdminProfileInformation from './Partials/UpdateAdminProfileInformation';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function AdminProfilePage({ auth, mustVerifyEmail, status }) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800  shadow sm:rounded-lg">
                        <UpdateAdminProfileInformation
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateAdminPasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteAdminForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
