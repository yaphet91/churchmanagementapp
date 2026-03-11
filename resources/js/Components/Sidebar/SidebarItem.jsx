import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/inertia-react';
import { useDispatch, useSelector } from 'react-redux';
import { useTooltip } from '@/Context/TooltipContext';
export const SidebarItem = ({ pathNameIncludes, name, icon, to, onClick, dropdownIcon, open, alert }) => {
    const { url } = usePage();
    const pathname = url;
    const { sidebarOpen } = useSelector((store) => store.sidebar)
    const { showTooltip, hideTooltip } = useTooltip();

    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        const position = { x: rect.right, y: rect.top }; // Position right of the element
        showTooltip(name, position);
    };

    return (
        <li className='group'  onMouseEnter={!sidebarOpen ? handleMouseEnter: undefined} onMouseLeave={hideTooltip}>
                <Link
                    onClick={onClick}
                    href={to}
                    className={`group relative flex items-center justify-center gap-2.5  ${sidebarOpen ? 'rounded-sm' : 'rounded-lg'} py-2 px-2 font-medium
                text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4
                ${pathname.includes(pathNameIncludes) ? 'bg-graydark dark:bg-meta-4' : ''}`}
                >
                    {icon}
                    <span className={`overflow-hidden transition-all ${sidebarOpen ? "w-28 ml-3" : "w-0"}`}>
                        {name}
                    </span>
                    {alert && (
                        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${sidebarOpen ? "" : "top-2"}`} />
                    )}
                    {sidebarOpen && dropdownIcon && (
                        <svg
                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                                }`}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                fill=""
                            />
                        </svg>)
                    }
                    {/* {!sidebarOpen && (
                        <div className="absolute left-16 top-0 mt-2 w-auto min-w-max rounded-md px-2 py-1
                     bg-indigo-400 text-white text-sm opacity-0 group-hover:opacity-20 transition-opacity">
                            {name}
                        </div>
                    )} */}
                </Link>

            </li>
    )
}