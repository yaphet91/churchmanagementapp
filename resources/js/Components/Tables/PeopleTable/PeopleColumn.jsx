import { Eye, Pencil, Trash2 } from "lucide-react";

export const PeopleColumns =  [
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
        accessorKey: 'id',
        filterFn: 'equalsString',
    },
    {
        accessorKey: 'firstName',  // Accessor function for the data column using the property key
        header: 'First Name',
        cell: info => info.getValue(),  // Function to render the content of the cell. Here, it simply gets the value.
        filterFn: 'includesStringSensitive',  // Filter function used for this column, case-sensitive string inclusion.
    },
    {
        accessorFn: row => row.lastName,  // Function to access the data from the row object.
        id: 'lastName',  // Unique identifier for the column, especially necessary when accessor is not a simple key.
        cell: info => info.getValue(),  // Function to render the cell's content by getting the value.
        header: () => <span>Last Name </span>,  // Function to render the header, which can be JSX.
        filterFn: 'includesString',  // Filter function, checks if the cell includes a specified string, case-insensitive.
    },
    {
        accessorFn: row => `${row.firstName} ${row.lastName}`,  // Combines first and last names.
        id: 'fullName',  // Unique identifier for the column.
        header: 'Full Zen',  // Text to display in the column header.
        cell: info => info.getValue(),  // Renders the combined names in each cell.
        filterFn: fuzzyFilter,  // Custom filter function defined elsewhere in your code.
        sortingFn: fuzzySort,  // Custom sorting function to handle sorting logic, also defined elsewhere.
    },
    {

        accessorKey: 'age',
        header: 'Age',
        cell: info => info.getValue(),
        enableSorting: true,
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
];


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