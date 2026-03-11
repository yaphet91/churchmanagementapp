import ApplicationLogo from '@/Components/UI/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-3 sm:pt-0 bg-gray-100">
           
            <div className="w-full sm:max-w-lg mt-6 px-3 py-2 bg-white overflow-hidden sm:rounded-lg">
                {children}
            </div>

        </div>
    );
}
