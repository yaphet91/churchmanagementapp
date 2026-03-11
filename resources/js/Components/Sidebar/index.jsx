import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/inertia-react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarLinkGroup from './SidebarLinkGroup';
import AnastasiaBanner from '../../assets/images/logos/anastasia_banner.png'
import HelpIcon from '@/assets/ui-icons/HelpIcon';
import DirectoryIcon from '@/assets/ui-icons/DirectoryIcon';
import { AlignJustify, BarChart4, BookHeadphones, BookPlus, CalendarClock, CalendarDays, ChevronFirst, ChevronLast, Church, Combine, HandCoins, LayoutDashboard, LayoutGrid, MessageSquareMore, MonitorPlay, Music4, NotebookTabs, PieChart, Settings, ShieldPlus, SquareArrowLeft, SquareArrowRight, Store, User, UserRoundPlus, Users, Youtube } from 'lucide-react';
import { setSidebarOpen } from '@/features/sidebar/sidebarSlice';
import { SidebarItem } from './SidebarItem';
import { SidebarSubItem } from './SidebarSubItem';
import { TooltipProvider } from '@/Context/TooltipContext';
import Tooltip from '@/utils/ToolTip';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { imageUrl } = useSelector((store) => store.profileImage.value)
    const { sidebarOpen } = useSelector((store) => store.sidebar)
    const { t } = useTranslation();
    const { url } = usePage();
    const pathname = url;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const toggleSidebar = () => {
        // setSidebarOpen(!sidebarOpen)
        dispatch(setSidebarOpen());
    };

    return (
        <TooltipProvider>
            <Tooltip />
            <aside
                className={`left-0 top-0 hidden lg:flex h-screen border-r border-gray-700
            w-72.5 flex-col  bg-black duration-300 ease-linear dark:bg-boxdark
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
                            {/* <AlignJustify /> */}
                        </button>
                        <img src={AnastasiaBanner} alt="" className={`h-14 overflow-x-hidden duration-300 ease-linear ${sidebarOpen ? '' : 'w-0'}`} />
                    </div>
                </div>
                {/* SIDEBAR CONTENT */}
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className="px-2 lg:mt-5 lg:px-2">
                        <div >
                            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? '' : 'w-0 h-0 mb-0'}`}>
                                MENU
                            </h3>

                            <ul className="mb-6 flex flex-col gap-1.5">
                                {/* <SidebarItem pathNameIncludes={'church'} icon={<Church />} name={t('Church')} to={'/church'} /> */}
                                {/* <SidebarItem pathNameIncludes={'dashboard'} icon={<LayoutGrid />} name={t('Dashboard')} to={'/member/dashboard'} /> */}
                                {/* <SidebarItem pathNameIncludes={'messages'} icon={<MessageSquareMore />} name={t('Messages')} to={'/messages'} /> */}
                                {/* <SidebarItem pathNameIncludes={'donations'} icon={<HandCoins />} name={t('Donations')} to={'/donations'} /> */}
                                <SidebarItem pathNameIncludes={'events'} icon={<CalendarClock />} name={t('Events')} to={'/member/events'} />
                                <SidebarItem pathNameIncludes={'groups'} icon={<Combine />} name={t('Groups')} to={'/member/groups'} />
                                {/* <SidebarItem pathNameIncludes={'calendar'} icon={<CalendarDays />} name={t('Calendar')} to={'/calendar/gregorian'} /> */}
                                {/* <SidebarItem pathNameIncludes={'directory'} icon={< NotebookTabs />} name={t('Directory')} to={'/directory'} /> */}
                                <SidebarLinkGroup activeCondition={pathname === '/forms' || pathname.includes('forms')}>
                                    {(handleClick, open) => (
                                        <React.Fragment>
                                            <SidebarItem pathNameIncludes="forms" icon={<Users />} name={t("Family")} to="forms"
                                                dropdownIcon={true}
                                                open={open}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarOpen ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            />

                                            {/* Dropdown Menu Start */}
                                            <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">

                                                    <SidebarSubItem icon={<User />} name={t("Spouse")} to="/member/spouse" pathname={pathname} />
                                                    <SidebarSubItem icon={<User />} name={t("Children")} to="/member/children" pathname={pathname} />

                                                </ul>
                                            </div>
                                            {/* Dropdown Menu End */}
                                        </React.Fragment>
                                    )}
                                </SidebarLinkGroup>
            
                            </ul>
                        </div>
                        
                        {/* <-- Explore --> */}
                        {/* <div className='mt-2 pt-4 border-t border-gray-700'>
                            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? '' : 'w-0 h-0 mb-0'}`}>
                                EXPLORE
                            </h3>
                            <ul>
                                <SidebarItem pathNameIncludes={'videos'} icon={<MonitorPlay />} name={t('Videos')} to={'/videos'} />
                                <SidebarItem pathNameIncludes={'mezmur'} icon={<Music4 />} name={t('Mezmur')} to={'/mezmur'} />
                                <SidebarItem pathNameIncludes={'sermon'} icon={<BookHeadphones />} name={t('Sermon')} to={'/sermon'} />
                                <SidebarItem pathNameIncludes={'books'} icon={<BookPlus />} name={t('Books')} to={'/books'} />
                                <SidebarLinkGroup activeCondition={pathname === '/store' || pathname.includes('/store')}>
                                    {(handleClick, open) => (
                                        <React.Fragment>
                                            <SidebarItem pathNameIncludes="store" icon={<ShieldPlus />} name={t("Store")} to="store"
                                                dropdownIcon={true}
                                                open={open}
                                                alert={false}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarOpen ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            />
                                            <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <SidebarSubItem name="Alerts" to="ui/alerts" />
                                                    <SidebarSubItem name="Buttons" to="ui/buttons" />
                                                    <SidebarSubItem icon={<User />} name="Alerts" to="/people/alerts" pathname={pathname} />
                                                    <SidebarSubItem icon={<User />} name="Buttons" to="/people/buttons" pathname={pathname} />

                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </SidebarLinkGroup>
                            </ul>
                        </div> */}

                        {/* <!-- Others Group --> */}

                        {/* <div className='mt-4 pt-4 border-t border-gray-700'>
                            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? '' : 'w-0 h-0 mb-0'}`}>
                                OTHERS
                            </h3>
                            <ul className="mb-6 flex flex-col gap-1.5">
                                <SidebarItem pathNameIncludes={'help'} icon={<HelpIcon />} name={t('Help')} to={'help'} />
                                <SidebarItem pathNameIncludes={'analysis'} icon={<PieChart />} name={t('Analysis')} to={'analysis'} />
                            </ul>
                        </div> */}



                        {/* <div className='mt-4 mb-10 pt-4 border-t border-gray-700'>
                            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? '' : 'w-0 h-0 mb-0'}`}>
                                CONFIGURATION
                            </h3>
                            <ul>
                                <SidebarItem pathNameIncludes={'setting'} icon={<Settings />} name={t('Setting')} to={'setting'} />
                                <SidebarLinkGroup activeCondition={pathname === '/ui' || pathname.includes('ui')}>
                                    {(handleClick, open) => (
                                        <React.Fragment>
                                            <SidebarItem pathNameIncludes="ui" icon={<ShieldPlus />} name="UI Elements" to="ui"
                                                dropdownIcon={true}
                                                open={open}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarOpen ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            />
                                            <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <SidebarSubItem icon={<User />} name="Alerts" to="/people/alerts" pathname={pathname} />
                                                    <SidebarSubItem icon={<User />} name="Buttons" to="/people/buttons" pathname={pathname} />

                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </SidebarLinkGroup>
                            </ul>
                        </div> */}
                    </nav>
                </div>
            </aside>
        </TooltipProvider>
    );
};


export default Sidebar;








