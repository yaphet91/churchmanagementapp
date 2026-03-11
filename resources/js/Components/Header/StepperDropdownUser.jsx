import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { setDrawerOpen } from "@/features/drawer/drawerSlice";
import { useDispatch, useSelector } from 'react-redux';
import { SidebarItem } from '../Sidebar/SidebarItem';
import { User } from 'lucide-react';
import Dropdown from '@/Components/Dropdowns/Dropdown';

const StepperDropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef(null);
    const dropdown = useRef(null);
    const user = useSelector((store) => store.user.value);
    const { imageUrl } = useSelector((store) => store.profileImage.value)
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        setDropdownOpen(!dropdownOpen);
    }
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className="relative" onClick={toggleDrawer}>
            <span className="inline-flex rounded-md">
                <button
                    type="button"
                    className="inline-flex group items-center px-4 py-3 border border-gray-300
                             dark:border-gray-500 text-md leading-4 font-semibold rounded-md text-gray-500 
                             bg-transparent hover:text-blue-700 focus:outline-none transition ease-in-out duration-150"
                >
                    {user.name}
                    <svg
                        className="ms-2 -me-0.5 h-4 w-4 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </span>

            {dropdownOpen && (
                <Dropdown.Content>
                    {/* <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link> */}
                    <Dropdown.Link href={route('logout')} method="post" as="button"
                        onClick={handleLogout}
                    >
                        Log Out
                    </Dropdown.Link>
                </Dropdown.Content>
            )}
        </div>
    );
};

export default StepperDropdownUser;