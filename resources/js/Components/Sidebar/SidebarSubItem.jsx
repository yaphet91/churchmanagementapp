import { Link } from '@inertiajs/inertia-react';
import { useDispatch, useSelector } from 'react-redux';
import { usePage } from '@inertiajs/react';

// export const SidebarSubItem = ({ icon, name, to }) => {
//     const { url } = usePage();
//     const pathname = url;
//     const isActive = pathname === `/${to}` || pathname.startsWith(`/${to}`);

//     // Construct className based on isActive
//     const linkClassName = `group relative flex items-center gap-2.5 rounded-md px-4 font-medium
//      text-bodydark2 duration-300 ease-in-out hover:text-white ${isActive ? '!text-white hover:bg-gray-400' : ''}`;

//     return (
//         <li>
//             <Link
//                 to={'/' + to}
//                 className={linkClassName}
//             >   {icon}
//                 {name}
//             </Link>
//         </li>
//     )
// }
export const SidebarSubItem = ({ icon, name, to, pathname }) => {
    const isActive = pathname === to || pathname.includes(to);
    return (
        <li>
            <Link
                href={to}
                className={`flex items-center gap-2 p-2 text-sm font-medium transition-colors duration-200 rounded-lg ${isActive ? 'bg-gray-800 text-white' : 'text-bodydark hover:bg-gray-700 hover:text-white'
                    }`}
            >
                {icon}
                <span>{name}</span>
            </Link>
        </li>
    );
};