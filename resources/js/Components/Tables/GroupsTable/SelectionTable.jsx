import {
    useReactTable, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel,
    getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel,
    flexRender,
} from '@tanstack/react-table';
import React, { useMemo, useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { rankItem, compareItems } from '@tanstack/match-sorter-utils';
import { useVirtualizer } from '@tanstack/react-virtual'
import { ArrowDown, ArrowDownUp, ArrowUp, ArrowUpFromDot, BellRing, Download, Eye, LayoutGrid, Mail, MessageSquareMore, Pencil, Plus, SlidersHorizontal, Trash2 } from 'lucide-react';
import DefaultUserImage from '@/assets/images/icons/user2.png';
import ViewerModal from '@/Components/Modals/Viewer/ViewerModal';
import Modal from '@/Components/Modals/Modal';
import { info } from 'autoprefixer';
import SendEmailModal from '@/Components/Modals/Messaging/SendEmailModal';
import SendMessageModal from '@/Components/Modals/Messaging/SendMessageModal';
import SendNotificationModal from '@/Components/Modals/Messaging/SendNotificationModal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMemberToGroup } from '@/features/group/groupSlice';

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

const SelectionTable = ({group, availableMembers, onMembersAdded }) => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const dispatch = useDispatch();
    // const [data, setData] = useState(availableMembers);
    useEffect(() => {   
        // console.log(availableMembers);
        setData(availableMembers);
        dispatch(addMemberToGroup(false));
    }, [availableMembers]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const membershipResponse = await axios.get('/memberships');
    //             const profilesResponse = await axios.get('/avatars'); // Assuming this endpoint exists

    //             const memberships = membershipResponse.data.data;
    //             const profiles = profilesResponse.data.data;
    //             // console.log(memberships);
    //             // console.log(profilesResponse);

    //             // Create a map of profiles by some key, e.g., membershipId
    //             const profileMap = profiles.reduce((map, profile) => {
    //                 map[profile.membershipId] = profile.imageUrl;
    //                 return map;
    //             }, {});

    //             // Append profile imageUrl to memberships
    //             const enrichedMemberships = memberships.map(member => ({
    //                 ...member,
    //                 imageUrl: profileMap[member.id] || DefaultUserImage
    //             }));

    //             setData(enrichedMemberships);
    //         } catch (error) {
    //             console.error('Failed to fetch data:', error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);

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
            accessorFn: row => row.image, //note: normal non-fuzzy filter column - case sensitive
            id: 'image',
            header: '',
            cell: info => {
                const imageUrl = info.row.original.imageUrl;
                // console.log(imageUrl);
                return (
                    <div className='flex items-end justify-end cursor-pointer'>
                        <img
                            onClick={() => viewRow(info.row.original)}
                            src={imageUrl}
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
            id: 'fullName',  // Unique identifier for the column.
            header: 'Full Name',  // Text to display in the column header.
            accessorFn: row => `${row.firstName} ${row.fatherName} ${row.grandFatherName}`,
            cell: info => {
                const fullName = info.getValue();
                return (
                    <button onClick={() => viewRow(info.row.original)}>
                        <span className='hover:underline'>
                            {fullName}
                        </span>
                    </button>
                );
            },
            // filterFn: 'fuzzy',
            filterFn: fuzzyFilter,  // Use the updated filter function.
            sortingFn: fuzzySort,  // Keep your custom sorting if it's applicable.
        },
      
       
    ], []);

    // Define action handlers
    const viewRow = (data) => {
        console.log('Viewing', data);
        setModalData(data);
        setIsModalOpen(true);
    };
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
            columnOrder: ['select', 'image', 'fullName',], //customize the initial column order
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
        // getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
    });

    // const { rows } = table.getRowModel()
    const { rows } = table.getCoreRowModel();


    React.useEffect(() => {
        if (table.getState().columnFilters[0]?.id === 'fullName') {
            if (table.getState().sorting[0]?.id !== 'fullName') {
                table.setSorting([{ id: 'fullName', desc: false }]);
            }
        }
    }, [table.getState().columnFilters[0]?.id]);

    const selectedMemberIds = Object.keys(rowSelection)
            .filter(key => rowSelection[key])
            .map(key => data[key].id);  // Adjust this line to match how your data structure includes the membership ID

    const handleAddMembersToGroup = () => {
        onMembersAdded(selectedMemberIds);
    }

    // const handleAddMembersToGroup = async () => {
    //     // Assuming `data` holds all row data including membership IDs
    //     const selectedMemberIds = Object.keys(rowSelection)
    //         .filter(key => rowSelection[key])
    //         .map(key => data[key].id);  // Adjust this line to match how your data structure includes the membership ID

    //     console.log("Selected Membership IDs:", selectedMemberIds);

    //     try {
    //         const response = await axios.post(`/groups/${group}/addMembers`, {
    //             members: selectedMemberIds
    //         });
    //         console.log(response.data);
    //         dispatch(addMemberToGroup(true));
    //         alert('Members added successfully!');
    //     } catch (error) {
    //         console.error('Failed to add members:', error);
    //         alert('Failed to add members');
    //     }
    // };



    return (
        <div>
            <div className='flex items-center justify-center mb-5'>
                <h1 className='text-2xl font-bold'>Add Members</h1>
            </div>
            <div className='flex items-end justify-between'>
                <div className='flex items-center justify-start w-full gap-4'>

                    <DebouncedInput
                        value={globalFilter ?? ''}
                        onChange={value => setGlobalFilter(String(value))}
                        className="flex p-2 font-lg text-black shadow border border-block rounded-md w-full dark:bg-gray-700 dark:text-white"
                        placeholder="Search ..."
                    />
            
                </div>

            </div>

            <div className="relative mt-2"
            // style={{ height: `${virtualizer.getTotalSize()}px` }}
            >
                <div className='darkBg min-w-full h-14 rounded-tl-md rounded-tr-md border-b border-gray-700 flex items-center justify-between'>
                    <div className='flex items-center justify-start space-x-4 text-white px-3 py-3'>
                     
                            <div>
                                {Object.keys(rowSelection).length}{' '}
                                {/* of{' '} */}
                                {/* {table.getPreFilteredRowModel().rows.length} */}
                                People Selected
                            </div>
                                                   </div>
                    <div className='flex items-center justify-start space-x-4 text-white px-3 py-3'>
                        <button
                            disabled={Object.keys(rowSelection).length === 0 ? true : false}
                            onClick={handleAddMembersToGroup}
                            className={`flex items-start justify-start px-2 py-1 rounded-md gap-2 border 
                            border-gray-500 text-sm  ${Object.keys(rowSelection).length === 0 ? 'bg-gray-600' : 'bg-green-600'}`}>
                            <Plus size={20} strokeWidth={1} />Add</button>
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

                    <tbody className='px-2  bg-white text-black dark:bg-gray-700 dark:text-gray-300 overflow-y-auto' style={{ height: '100px' }}>
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
                <ViewerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={modalData} />
            </div>
           </div>
    );

};

export default SelectionTable;

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
