import {
    useReactTable, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel,
    getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel,
    flexRender,
} from '@tanstack/react-table';
import React, { useMemo, useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { rankItem, compareItems } from '@tanstack/match-sorter-utils';
import { useVirtualizer } from '@tanstack/react-virtual'
import { ArrowDown, ArrowDownUp, ArrowUp, ArrowUpFromDot, BellRing, Download, Eye, LayoutGrid, Mail, MessageSquareMore, Pencil, SlidersHorizontal, Trash2 } from 'lucide-react';
import DefaultUserImage from '@/assets/images/icons/user2.png';
import ViewerModal from '@/Components/Modals/Viewer/ViewerModal';
import Modal from '@/Components/Modals/Modal';
import { info } from 'autoprefixer';
import SendEmailModal from '@/Components/Modals/Messaging/SendEmailModal';
import SendMessageModal from '@/Components/Modals/Messaging/SendMessageModal';
import SendNotificationModal from '@/Components/Modals/Messaging/SendNotificationModal';
import axios from 'axios';
import { useSelector } from 'react-redux';

const fuzzyFilter = (row, columnId, value, addMeta) => {
    const rowData = row.getValue(columnId);

    if (typeof rowData === 'string') {  // Handle if the data is just a string (not an object with fullName)
        const names = rowData.split(' ');  // Split the full name into its components
        const matches = names.map(name => rankItem(name, value));  // Rank each part of the name

        // Find the best rank among all parts of the name
        const bestMatch = matches.reduce((best, current) => current.passed && (current.rank > best.rank) ? current : best, { rank: -Infinity, passed: false });

        addMeta({
            itemRank: bestMatch,
        });

        return bestMatch.passed;
    } else if (rowData && typeof rowData === 'object') {  // Handle objects containing fullName and imageUrl
        const { fullName } = rowData;
        const names = fullName.split(' ');
        const matches = names.map(name => rankItem(name, value));

        // Find the best rank among all parts of the name
        const bestMatch = matches.reduce((best, current) => current.passed && (current.rank > best.rank) ? current : best, { rank: -Infinity, passed: false });

        addMeta({
            itemRank: bestMatch,
        });

        return bestMatch.passed;
    }

    // Fallback for any other data type
    const itemRank = rankItem(rowData, value);
    addMeta({
        itemRank,
    });
    return itemRank.passed;
};

const fuzzySort = (rowA, rowB, columnId) => {
    let dir = 0;
    if (rowA.columnFiltersMeta[columnId] && rowB.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId].itemRank,
            rowB.columnFiltersMeta[columnId].itemRank
        );
    }
    return dir === 0 ? rowA.getValue(columnId).localeCompare(rowB.getValue(columnId)) : dir;
};

const DonationsTable = () => {
    const theme = useSelector((state) => state.theme.theme)
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const membershipResponse = await axios.get('/memberships');
                const profilesResponse = await axios.get('/avatars'); // Assuming this endpoint exists

                const memberships = membershipResponse.data.data;
                const profiles = profilesResponse.data.data;
                console.log(memberships);
                console.log(profilesResponse);

                // Create a map of profiles by some key, e.g., membershipId
                const profileMap = profiles.reduce((map, profile) => {
                    map[profile.membershipId] = profile.imageUrl;
                    return map;
                }, {});

                // Append profile imageUrl to memberships
                const enrichedMemberships = memberships.map(member => ({
                    ...member,
                    imageUrl: profileMap[member.id] || DefaultUserImage
                }));

                setData(enrichedMemberships);
            } catch (error) {
                console.error('Failed to fetch data:', error.message);
            }
        };

        fetchData();
    }, []);

    const columns = useMemo(() => [
    
        {
            id: 'fullName',  // Unique identifier for the column.
            header: 'Full Name',  // Text to display in the column header.
            accessorFn: row => `${row.firstName} ${row.fatherName} ${row.grandFatherName}`,
            cell: info => {
                const fullName = info.getValue();
                return (
                    <button onClick={() => viewRow(info.row.original)}>
                        <span className='hover:underline pl-3'>
                            {fullName}
                        </span>
                    </button>
                );
            },
            // filterFn: 'fuzzy',
            filterFn: fuzzyFilter,  // Use the updated filter function.
            sortingFn: fuzzySort,  // Keep your custom sorting if it's applicable.
        },
        {
            accessorKey: 'profession',
            header: 'Profession',
            accessorKey: 'profession',
            cell: info => info.getValue(),
            filterFn: 'includesStringSensitive', //note: normal non-fuzzy filter column
        },
        {
            accessorFn: row => `${row.countryPhoneCode}${row.phone}`, //note: normal non-fuzzy filter column - case sensitive
            id: 'phone',
            cell: info => info.getValue(),
            header: () => <span>Phone Number</span>,
            filterFn: 'includesString', //note: normal non-fuzzy filter column - case insensitive
        },
        {
            accessorKey: 'birthday',
            header: 'Age',
            cell: info => {
                const birthday = new Date(info.getValue());
                const age = getAge(birthday);
                return `${age}`;
            },
            enableSorting: true,

        },
        {
            accessorFn: row => row.whatsApp, //note: normal non-fuzzy filter column - case sensitive
            id: 'whatsApp',
            cell: info => info.getValue(),
            header: () => <span>WhatsApp</span>,
            filterFn: 'includesString', //note: normal non-fuzzy filter column - case insensitive
        },
        {
            id: 'actions',
            header: 'ACTIONS',
            cell: ({ row }) => (
                <div className="flex justify-end space-x-3 px-2">
                    <button className='hover:text-blue-300' title='View' onClick={() => viewRow(row.original)}><Eye size={20} strokeWidth={1} /></button>
                    <button className='hover:text-green-300' title='Edit' onClick={() => editRow(row.original)}><Pencil size={20} strokeWidth={1} /></button>
                    <button className='hover:text-red-500 text-red-500' title='Delete' onClick={() => deleteRow(row.original)}><Trash2 size={20} strokeWidth={1} /></button>
                </div>
            )
        }
    ], []);

    function getAge(birthday) {
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    // Define action handlers
    const viewRow = (data) => {
        console.log('Viewing', data);
        setModalData(data);
        setIsModalOpen(true);
    };
    const editRow = (data) => {
        console.log('Editing', data);
    };

    const deleteRow = (data) => {
        console.log('Deleting', data);
    };

    const rerender = React.useReducer(() => ({}), {})[1];

    const [sorting, setSorting] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState({});
    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = React.useState('');

    console.log(rowSelection);

    const table = useReactTable({
        columns,
        data,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        initialState: {
            columnOrder: ['select', 'image', 'fullName', 'age',], //customize the initial column order
            columnVisibility: {
                id: false //hide the id column by default
            },
            expanded: true, //expand all rows by default
            sorting: sorting,
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
        enableRowSelection: true, //enable row selection for all rows
        // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFilteredRowModel: getFilteredRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
    });

    const { rows } = table.getRowModel()

    React.useEffect(() => {
        if (table.getState().columnFilters[0]?.id === 'fullName') {
            if (table.getState().sorting[0]?.id !== 'fullName') {
                table.setSorting([{ id: 'fullName', desc: false }]);
            }
        }
    }, [table.getState().columnFilters[0]?.id]);

    return (
        <div>
            <div className='flex items-end justify-between'>
                <div className='flex items-center justify-start w-1/2 gap-4'>

                    <DebouncedInput
                        value={globalFilter ?? ''}
                        onChange={value => setGlobalFilter(String(value))}
                        className="flex p-2 font-lg text-black dark:bg-gray-700 dark:text-white shadow border border-block rounded-md w-full"
                        placeholder="Search all columns..."
                    />
                    <div className='border border-gray-500'>
                        <SlidersHorizontal size={20} strokeWidth={1} />
                    </div>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button variant="outline" className="px-4 py-2 rounded-sm bg-black text-white">
                            Columns
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className='bg-black w-[150px]'>
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize text-white text-2xl border-b border-gray-700 hover:bg-gray-500"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => {
                                            column.toggleVisibility(!!value);
                                        }}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="relative mt-2"
            // style={{ height: `${virtualizer.getTotalSize()}px` }}
            >
                <div className='darkBg min-w-full h-14 rounded-tl-md rounded-tr-md border-b border-gray-700 flex items-center justify-between'>
                    <div className='flex items-center justify-start space-x-4 text-white px-3 py-3'>
                        {Object.keys(rowSelection).length > 0
                            ? < div >
                                {Object.keys(rowSelection).length}{' '}
                                {/* of{' '} */}
                                {/* {table.getPreFilteredRowModel().rows.length} */}
                                People Selected
                            </div>
                            : <h1>Send All People: </h1>

                        }
                        <button className='flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800' onClick={() => setIsMessageModalOpen(true)}> <MessageSquareMore size={20} strokeWidth={1} />Text</button>
                        <button className='flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800' onClick={() => setIsEmailModalOpen(true)}> <Mail size={20} strokeWidth={1} />Email</button>
                        <button className='flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800' onClick={() => setIsNotificationModalOpen(true)}> <BellRing size={20} strokeWidth={1} />Push Notification</button>
                    </div>
                    <div className='flex items-center justify-start space-x-4 text-white px-3 py-3'>
                        <button className='flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800'> <Download size={20} strokeWidth={1} />Export</button>
                        <button className='flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800'> <LayoutGrid size={20} strokeWidth={1} />More Actions</button>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-400 border border-gray-500 dark:border-gray-700">
                    {/* This is the header of the table */}
                    <thead className={`darkBg h-12`}>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <th key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    className={
                                                        header.column.getCanSort()
                                                            ? 'cursor-pointer select-none flex items-start justify-start gap-4 pl-2 uppercase text-white text-sm'
                                                            : ''
                                                    }
                                                    onClick={header.column.getToggleSortingHandler()}
                                                    title={
                                                        header.column.getCanSort()
                                                            ? header.column.getNextSortingOrder() === 'asc'
                                                                ? 'Sort ascending'
                                                                : header.column.getNextSortingOrder() === 'desc'
                                                                    ? 'Sort descending'
                                                                    : 'Clear sort'
                                                            : undefined
                                                    }
                                                >
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {header.column.getIsSorted() ?
                                                        (header.column.getIsSorted() === 'asc' ? <ArrowUp size={20} strokeWidth={1} /> : <ArrowDown size={20} strokeWidth={1} />)
                                                        : (header.column.getCanSort() ? <ArrowDownUp size={20} strokeWidth={1} /> : '')}
                                                </div>
                                            )}
                                        </th>
                                    )
                                })}
                            </tr>
                        ))}
                    </thead>
                    {/* this is the body of the table */}

                    <tbody className='px-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 overflow-auto'>
                        {
                            table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className='border-b border-gray-500 h-14'>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr className='border-b border-gray-500 h-14'>
                                    <td colSpan={table.getAllColumns().length} className='text-center'>
                                        No results found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

                {/* Pagination */}
                <div className='space-x-4 min-w-full border border-gray-500 darkBg p-1 rounded-b-md'>
                    {/* Navigation buttons */}

                    <button className='hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        {' < '}
                    </button>
                    <button className='hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        {' > '}
                    </button>
                    <button className='hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                        {'<<'}
                    </button>
                    <button className='hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                        {'>>'}
                    </button>
                    {/* Current Page and Page Options */}
                    <span className='text-gray-300'>
                        Page{' '}
                        <span className='font-semibold'>
                            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                        </span>{' '}
                    </span>

                    {/* Page Size Selector */}
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={e => table.setPageSize(Number(e.target.value))}
                        className='py-1 rounded-sm bg-gray-500 hover:bg-gray-400'
                    >
                        {[10, 20, 30, 40, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>

                </div>
            </div>
    );

};

export default DonationsTable;

function IndeterminateCheckbox({ indeterminate, className = '', ...rest }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [indeterminate, rest.checked]);

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ' cursor-pointer'}
            {...rest}
        />
    );
}
function DebouncedInput({ value, onChange, debounce = 500, ...props }) {
    const [innerValue, setInnerValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            onChange(innerValue);
        }, debounce);

        return () => clearTimeout(handler);
    }, [innerValue]);

    return (
        <input
            value={innerValue}
            onChange={e => setInnerValue(e.target.value)}
            {...props}
        />
    );
}
