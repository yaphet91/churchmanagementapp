import {
    useReactTable, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel,
    getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel,
    flexRender,
} from '@tanstack/react-table';
import React, { useMemo, useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { rankItem, compareItems } from '@tanstack/match-sorter-utils';
import { ArrowDown, ArrowDownUp, ArrowUp, ArrowUpFromDot, BellRing, Download, Eye, LayoutGrid, Mail, MessageSquareMore, Pencil, SlidersHorizontal, Trash2 } from 'lucide-react';
import DefaultUserAvatar from '@/assets/images/icons/user2.png';
import DefaultGroupsIcon from '@/assets/images/icons/defaultGroupIcon.png';
import ViewerModal from '@/Components/Modals/Viewer/ViewerModal';
import SendEmailModal from '@/Components/Modals/Messaging/SendEmailModal';
import SendMessageModal from '@/Components/Modals/Messaging/SendMessageModal';
import SendNotificationModal from '@/Components/Modals/Messaging/SendNotificationModal';
import axios from 'axios';
import { InertiaLink } from '@inertiajs/inertia-react';

const fuzzyFilter = (row, columnId, value, addMeta) => {
    const rowData = row.getValue(columnId);

    if (typeof rowData === 'string') {  // Handle if the data is just a string (not an object with name)
        const names = rowData.split(' ');  // Split the full name into its components
        const matches = names.map(name => rankItem(name, value));  // Rank each part of the name

        // Find the best rank among all parts of the name
        const bestMatch = matches.reduce((best, current) => current.passed && (current.rank > best.rank) ? current : best, { rank: -Infinity, passed: false });

        addMeta({
            itemRank: bestMatch,
        });

        return bestMatch.passed;
    } else if (rowData && typeof rowData === 'object') {  // Handle objects containing name and avatar
        const { name } = rowData;
        const names = name.split(' ');
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

const GroupsTable = ({ data }) => {
    // const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    console.log('GroupsTable received data:', data);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const groupsResponse = await axios.get('/groups');
    //             const groups = groupsResponse.data;
    //             console.log(groups);

    //             setData(groups);

    //         } catch (error) {
    //             console.error('Failed to fetch data:', error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);
    // const viewRow = (group) => {
    //     return (
    //         <InertiaLink href={`/groups/${group.id}`}>
    //             <span className='hover:underline'>
    //                 {group.title}
    //             </span>
    //         </InertiaLink>
    //     );
    // };

    const columns = useMemo(() => [
        {
            id: 'select',
            header: ({ table }) => (
                <div className='px-2 flex items-center justify-start'>
                    <IndeterminateCheckbox className='p-2 rounded-sm bg-gray-400'
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                    <div className=''></div>
                </div>
            ),
            cell: ({ row }) => (
                <div className="px-2">
                    <IndeterminateCheckbox className='p-2 rounded-sm bg-gray-400'
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                </div>
            ),
        },
        {
            accessorFn: row => row.avatar, //note: normal non-fuzzy filter column - case sensitive
            id: 'avatar',
            header: '',
            cell: info => {
                const avatar = info.row.original.avatar;
                // console.log(avatar);
                return (
                    <div className='flex items-end justify-end cursor-pointer'>
                        <img
                            onClick={() => viewRow(info.row.original)}
                            src={avatar || DefaultGroupsIcon}
                            alt="Profile"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                marginRight: '10px',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                );
            },
            enableSorting: false,
            // filterFn: 'includesString', //note: normal non-fuzzy filter column - case insensitive
        },
        {
            id: 'title',  // Unique identifier for the column.
            header: 'Group Title',  // Text to display in the column header.
            accessorFn: row => row.title,
            cell: info => {
                const title = info.getValue();
                return (
                    <InertiaLink href={`/groups/${info.row.original.id}`}> 
                        <span className='hover:underline'>
                            {title}
                        </span>
                    </InertiaLink>
                    // <button onClick={() => viewRow(info.row.original)}>
                    //     <span className='hover:underline'>
                    //         {title}
                    //     </span>
                    // </button>
                );
            },
            filterFn: 'fuzzy',
            // filterFn: fuzzyFilter,  // Use the updated filter function.
            // sortingFn: fuzzySort,  // Keep your custom sorting if it's applicable.
        },
        {
            accessorKey: 'members_count', // This is the count field provided by `withCount`
            header: 'People',
            cell: info => {
                const peopleCount = info.getValue();
                return `${peopleCount}`;
            },
            enableSorting: true,

        },
        {
            accessorFn: row => row.description, //note: normal non-fuzzy filter column - case sensitive
            id: 'description',
            cell: info => info.getValue(),
            header: () => <span>Description</span>,
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


    const editRow = (data) => {
        console.log('Editing', data);
    };

    const deleteRow = (data) => {
        console.log('Deleting', data);
    };

    const [sorting, setSorting] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState({});
    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = React.useState('');

    // console.log(rowSelection);

    const table = useReactTable({
        columns,
        data,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        initialState: {
            columnOrder: ['select', 'avatar', 'name', 'member_count',], //customize the initial column order
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
        if (table.getState().columnFilters[0]?.id === 'name') {
            if (table.getState().sorting[0]?.id !== 'name') {
                table.setSorting([{ id: 'name', desc: false }]);
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
                        className="flex p-2 font-lg text-black shadow border border-block rounded-md w-full"
                        placeholder="Search all columns..."
                    />
                    <div className='border border-gray-500'>
                        <SlidersHorizontal size={20} strokeWidth={1} />
                    </div>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div variant="outline" className="px-4 py-2 rounded-sm bg-black text-white">
                            Columns
                        </div>
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
                            ? < div className='flex items-start space-x-2'>
                                {Object.keys(rowSelection).length}{' '}
                                {/* of{' '} */}
                                {/* {table.getPreFilteredRowModel().rows.length} */}
                                Group{Object.keys(rowSelection).length > 1 ? 's' : ''} Selected
                            </div>
                            : <h1>Send All Groups: </h1>

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
                    <thead className='darkBg h-12'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <th key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    className={
                                                        header.column.getCanSort()
                                                            ? 'cursor-pointer select-none flex items-start justify-start gap-4 uppercase text-white text-sm'
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

                    <tbody className='px-2 bg-gray-700 text-gray-300 overflow-auto'>
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
            <ViewerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={modalData} />
            <SendEmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} data={modalData} />
            <SendMessageModal isOpen={isMessageModalOpen} onClose={() => setIsMessageModalOpen(false)} data={modalData} />
            <SendNotificationModal isOpen={isNotificationModalOpen} onClose={() => setIsNotificationModalOpen(false)} data={modalData} />
        </div>
    );

};

export default GroupsTable;

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

function Filter({ column }) {
    const columnFilterValue = column.getFilterValue();

    return (
        <DebouncedInput
            type="text"
            value={columnFilterValue || ''}
            onChange={value => column.setFilterValue(value)}
            placeholder="Search..."
            className="w-36 border shadow rounded"
        />
    )
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
