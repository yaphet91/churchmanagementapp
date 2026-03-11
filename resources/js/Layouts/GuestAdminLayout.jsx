import ApplicationLogo from '@/Components/UI/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestAdminLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-3 sm:pt-0 bg-yellow-100">
           
            <div className="border border-gray-300 w-full sm:max-w-xl mt-3 px-6 py-3 bg-gray-300 overflow-hidden sm:rounded-lg">
                {children}
            </div>

        </div>
    );
}
