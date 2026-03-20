import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/inertia-react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarLinkGroup from '../SidebarLinkGroup';
import AnastasiaBanner from '@/assets/images/logos/anastasia_banner.png';
import HelpIcon from '@/assets/ui-icons/HelpIcon';
import DirectoryIcon from '@/assets/ui-icons/DirectoryIcon';
import { AlignJustify, BarChart4, BookHeadphones, BookPlus, BookUser, CalendarClock, CalendarDays, ChevronFirst, ChevronLast, Church, Combine, ContactRound, HandCoins, Handshake, LayoutDashboard, LayoutGrid, MessageSquareMore, MonitorPlay, Music4, NotebookTabs, PieChart, Receipt, Settings, ShieldPlus, SquareArrowLeft, SquareArrowRight, Store, User, UserPlus, UserRound, UserRoundPlus, Users, Users2, Youtube } from 'lucide-react';
import { setSidebarOpen } from '@/features/sidebar/sidebarSlice';
import { SidebarItem } from '../SidebarItem';
// import { SidebarSubItem } from '../SidebarSubItem';
import { TooltipProvider } from '@/Context/TooltipContext';
import Tooltip from '@/utils/ToolTip';
import { GrMoney } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';

const AdminSidebar = () => {
    const dispatch = useDispatch();
    const { imageUrl } = useSelector((store) => store.profileImage.value);
    const { sidebarOpen } = useSelector((store) => store.sidebar);
    const { t } = useTranslation();
    const { url } = usePage();
    const pathname = url;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const toggleSidebar = () => {
        dispatch(setSidebarOpen());
    };

    return (
        <TooltipProvider>
            <Tooltip />
            <aside
                className={`left-0 top-0 hidden lg:flex h-screen border-r border-gray-700
                w-72.5 flex-col bg-black duration-300 ease-linear dark:bg-boxdark
                lg:static lg:translate-x-0`}
            >
                {/* SIDEBAR HEADER */}
                <div className="flex items-center justify-center gap-2 lg:py-6.5 border-b-2 border-gray-700 ">
                    <div className='text-white'>
                        <button
                            onClick={toggleSidebar}
                            className="p-1.5 rounded-lg hover:bg-gray-700 absolute left-3.5 top-4 bg-inherit text-xl"
                        >
                            {sidebarOpen ? <SquareArrowLeft /> : <SquareArrowRight />}
                        </button>
                        <img src={AnastasiaBanner} alt="" className={`h-14 overflow-x-hidden duration-300 ease-linear ${sidebarOpen ? '' : 'w-0'}`} />
                    </div>
                </div>
                {/* SIDEBAR CONTENT */}
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className="px-2 lg:mt-5 lg:px-2">
                        <div>
                            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? '' : 'w-0 h-0 mb-0'}`}>
                                MENU
                            </h3>

                            <ul className="mb-6 flex flex-col gap-1.5">
                                <SidebarItem pathNameIncludes={'dashboard'} icon={<LayoutGrid />} name={t('Dashboard')} to={'/admin/dashboard'} />
                                <SidebarLinkGroup activeCondition={pathname === '/people' || pathname.includes('people')}>
                                    {(handleClick, open) => (
                                        <React.Fragment>
                            <SidebarItem pathNameIncludes="people" icon={<User />} name={t("People")} to="people"
                                                dropdownIcon={true}
                                                open={open}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick();
                                                }}
                                            />
                                            <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <SidebarSubItem icon={<User />} name={t("Adults")} to="/admin/people/adults" pathname={pathname} />
                                                        <SidebarSubItem icon={<User />} name={t("Children")} to="/admin/people/children" pathname={pathname} />
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </SidebarLinkGroup>
                                <SidebarItem pathNameIncludes={'groups'} icon={<Combine />} name={t('Groups')} to={'/admin/groups'} />
                                <SidebarItem pathNameIncludes={'messages'} icon={<MessageSquareMore />} name={'Messages'} to={'/admin/messages'} />
                                <SidebarLinkGroup activeCondition={pathname === 'form' || pathname.includes('form')}>
                                    {(handleClick, open) => (
                                        <React.Fragment>
                                            <SidebarItem pathNameIncludes="form" icon={<Users />} name={t("Add Users")} to="form"
                                                dropdownIcon={true}
                                                open={open}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick();
                                                }}
                                            />
                                            <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <SidebarSubItem icon={<UserPlus />} name={t("Adult")} to="/admin/form/adult" pathname={pathname} />
                                                        <SidebarSubItem icon={<UserPlus />} name={t("Child")} to="/admin/form/child" pathname={pathname} />
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </SidebarLinkGroup>

                                <SidebarItem pathNameIncludes={'events'} icon={<CalendarClock />} name={t('Events')} to={'/admin/event/page/'} />

                                <SidebarLinkGroup activeCondition={pathname === '/users-roles' || pathname.includes('users-roles')}>
                                    {(handleClick, open) => (
                                        <React.Fragment>
                                            <SidebarItem pathNameIncludes="users-roles" icon={<Users2 />} name={t("Users & Roles ")} to="users-roles"
                                                dropdownIcon={true}
                                                open={open}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick();
                                                }}
                                            />
                                            <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <SidebarSubItem icon={<User />} name={t("Users")} to="/admin/users" pathname={pathname} />
                                                    <SidebarSubItem icon={<User />} name={t("Roles & Permissions")} to="/admin/roles" pathname={pathname} />
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </SidebarLinkGroup>
                            </ul>
                        </div>
                        <div className='mt-2 pt-4 border-t border-gray-700'>
                            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? '' : 'w-0 h-0 mb-0'}`}>
                                MEDIA
                            </h3>
                            <ul>
                                <SidebarItem pathNameIncludes={'readings'} icon={<BookPlus />} name={t('Readings')} to={'/admin/readings'} />
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        </TooltipProvider>
    );
};

const SidebarSubItem = ({ icon, name, to, pathname }) => {
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

export default AdminSidebar;
