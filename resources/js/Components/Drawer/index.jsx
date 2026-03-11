import { setDrawerOpen } from "@/features/drawer/drawerSlice";
import { Globe, HelpCircle, Languages, Locate, LogOut, MessageSquareWarning, Settings, SquareX, Sun, User, UserRoundCog, WholeWord } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import UserOne from '../../assets/images/user/user-01.png'
import { DrawerItem } from "./DrawerItem";
import { useEffect, useRef } from "react";
import { Inertia } from '@inertiajs/inertia';
import { GrVmMaintenance } from "react-icons/gr";
import { usePage } from "@inertiajs/react";
import DrawerAvatar from "./DrawerAvatar";

export const Drawer = () => {
    const { auth } = usePage().props;
    const { user } = auth;
    const { url } = usePage();
    const isAdminPath = url.includes('/admin');

    const { drawerOpen } = useSelector((state) => state.drawer);
    const dispatch = useDispatch();
    const drawerRef = useRef();
    const toggleRef = useRef(); // Ref for the toggle button
    const theme = useSelector((state) => state.theme.theme);
    const language = useSelector((state) => state.language.language);
    const currentLanguage = language === 'en' ? 'English' : 'Tigrina';



    const toggleDrawer = () => {
        dispatch(setDrawerOpen());
        console.log(auth)
    };

    const handleLogout = (event) => {
        event.preventDefault();
        Inertia.post('/logout');
    };



    return (
        <aside ref={drawerRef}
            className={`fixed top-16 right-0 h-full bg-gray-200 shadow-xl z-20 transform transition-transform duration-300 ease-in-out dark:bg-boxdark border border-gray-300 dark:border-gray-700 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`} style={{ width: "250px" }}>

            <button ref={toggleRef} onClick={toggleDrawer} className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-900">
                <SquareX strokeWidth={1} size={30} className="hover:text-red-900" />
            </button>

            <div className="flex items-center justify-start pb-4 pl-4 border-b border-gray-300 dark:border-gray-600">
                {/* <img className="rounded-full h-16 w-16" src={UserOne} alt="User" /> */}
                <DrawerAvatar name={user.name} />
                <div className="p-2">
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm">{user.email}</p>
                </div>
            </div>
            <nav className="flex items-start justify-start mt-2">
                <div>

                </div>
                <ul className="flex flex-col w-full">
                    <div className="border-b border-gray-300 dark:border-gray-600 py-2">

                        {/* {auth.user.role === 'admin' && <DrawerItem icon={<GrVmMaintenance strokeWidth={1} size={20} />} name={'Admin View'} to={'/admin/dashboard'} />} */}
                        {/* {auth.user.role === 'member' && <DrawerItem icon={<UserRoundCog strokeWidth={1} size={20} />} name={'User View'} to={'/member/dashboard'} />} */}
                        {auth.user.role === 'admin' &&
                            <>
                                {isAdminPath ? (
                                    <DrawerItem icon={<UserRoundCog strokeWidth={1} size={20} />} name={'User View'} to={'/member/dashboard'} />
                                ) : (
                                    <DrawerItem icon={<GrVmMaintenance strokeWidth={1} size={20} />} name={'Admin View'} to={'/admin/dashboard'} />
                                )}
                            </>
                        }

                        <DrawerItem icon={<User strokeWidth={1} size={20} />} name={'My Profile'} to={'profile'} />
                        {/* <DrawerItem icon={<LogOut strokeWidth={1} size={20} />} name={'Sign Out'} to={'logout'} onClick={handleLogout} /> */}
                        <DrawerItem
                            icon={<LogOut strokeWidth={1} size={20} />}
                            name={'Sign Out'}
                            to={'/logout'}
                            onClick={handleLogout}
                        />
                    </div>
                    <div className="border-b border-gray-300 dark:border-gray-600 py-2">
                        <DrawerItem icon={<Sun strokeWidth={1} size={20} />} name={'Appearance: ' + theme} />
                        <DrawerItem icon={<Languages strokeWidth={1} size={20} />} name={'Language: ' + currentLanguage} to={'language'} />
                        <DrawerItem icon={<Globe strokeWidth={1} size={20} />} name={'Location:'} to={'location'} />
                    </div>
                    <div className="border-b border-gray-300 dark:border-gray-600 py-2">
                        <DrawerItem icon={<Settings strokeWidth={1} size={20} />} name={'Settings'} />
                    </div>
                    <div className="border-b border-gray-300 dark:border-gray-600 py-2">
                        <DrawerItem icon={<HelpCircle strokeWidth={1} size={20} />} name={'Help'} />
                        <DrawerItem icon={<MessageSquareWarning strokeWidth={1} size={20} />} name={'Feedback'} />
                    </div>
                </ul>
            </nav>
        </aside>
    );
};
