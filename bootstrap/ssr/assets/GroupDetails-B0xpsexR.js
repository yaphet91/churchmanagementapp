import { jsx, jsxs } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-CPnwM-vu.js";
import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import axios from "axios";
/* empty css                          */
import { Eye, Pencil, Trash2, SlidersHorizontal, MessageSquareMore, Mail, BellRing, Download, LayoutGrid, ArrowUp, ArrowDown, ArrowDownUp, Plus, ArrowLeft, X } from "lucide-react";
import "@inertiajs/inertia";
import { useReactTable, getSortedRowModel, getPaginationRowModel, getGroupedRowModel, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel, getFacetedMinMaxValues, getExpandedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuCheckboxItem } from "./TextInput3-BMVzEz0F.js";
import { compareItems, rankItem } from "@tanstack/match-sorter-utils";
import { V as ViewerModal, S as SendEmailModal, a as SendMessageModal, b as SendNotificationModal, c as DefaultUserImage } from "./ViewerModal-CvZCa4DO.js";
import "autoprefixer";
import { a as addMemberToGroup } from "./store-B1qrdlKM.js";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.js";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "react-i18next";
import "./languageSlice-BzN7Wppz.js";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./adminSlice-CWD1up8r.js";
import "@radix-ui/react-dropdown-menu";
import "./Modal-BZNRvUHP.js";
import "react-circular-progressbar";
/* empty css                */
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/lib/stateReconciler/autoMergeLevel2.js";
import "./stepperSlice-DCzqqTcy.js";
import "./memberSlice-CZbZjefE.js";
import "./validationSlice-D3Qd1uIP.js";
import "./userImageSlice-6eE4yU9I.js";
import "./userChurchHistorySlice-BHxkEeSq.js";
import "./newChurchSlice-CfxFHsE6.js";
import "./donationSlice-BosuJUxM.js";
import "./childMemberSlice-DlhqqVZb.js";
import "./eventSlice-cpfWu0eT.js";
const fuzzyFilter$1 = (row, columnId, value, addMeta) => {
  const rowData = row.getValue(columnId);
  if (typeof rowData === "string") {
    const names = rowData.split(" ");
    const matches = names.map((name) => rankItem(name, value));
    const bestMatch = matches.reduce((best, current) => current.passed && current.rank > best.rank ? current : best, { rank: -Infinity, passed: false });
    addMeta({
      itemRank: bestMatch
    });
    return bestMatch.passed;
  } else if (rowData && typeof rowData === "object") {
    const { fullName } = rowData;
    const names = fullName.split(" ");
    const matches = names.map((name) => rankItem(name, value));
    const bestMatch = matches.reduce((best, current) => current.passed && current.rank > best.rank ? current : best, { rank: -Infinity, passed: false });
    addMeta({
      itemRank: bestMatch
    });
    return bestMatch.passed;
  }
  const itemRank = rankItem(rowData, value);
  addMeta({
    itemRank
  });
  return itemRank.passed;
};
const fuzzySort$1 = (rowA, rowB, columnId) => {
  let dir = 0;
  if (rowA.columnFiltersMeta[columnId] && rowB.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId].itemRank,
      rowB.columnFiltersMeta[columnId].itemRank
    );
  }
  return dir === 0 ? rowA.getValue(columnId).localeCompare(rowB.getValue(columnId)) : dir;
};
const GroupMembersTable = ({ membersList }) => {
  var _a;
  const [data, setData] = useState(membersList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { membersAdded } = useSelector((store2) => store2.group.value);
  const columns = useMemo(() => [
    {
      id: "select",
      header: ({ table: table2 }) => /* @__PURE__ */ jsxs("div", { className: "px-2 flex items-center justify-start", children: [
        /* @__PURE__ */ jsx(
          IndeterminateCheckbox$1,
          {
            className: "p-2 rounded-sm bg-gray-400",
            ...{
              checked: table2.getIsAllRowsSelected(),
              indeterminate: table2.getIsSomeRowsSelected(),
              onChange: table2.getToggleAllRowsSelectedHandler()
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "" })
      ] }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "px-2", children: /* @__PURE__ */ jsx(
        IndeterminateCheckbox$1,
        {
          className: "p-2 rounded-sm bg-gray-400",
          ...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }
        }
      ) })
    },
    {
      accessorFn: (row) => row.image,
      //note: normal non-fuzzy filter column - case sensitive
      id: "image",
      header: "",
      cell: (info2) => {
        const imageUrl = info2.row.original.imageUrl;
        return /* @__PURE__ */ jsx("div", { className: "flex items-end justify-end cursor-pointer", children: /* @__PURE__ */ jsx(
          "img",
          {
            onClick: () => viewRow(info2.row.original),
            src: imageUrl,
            alt: "Profile",
            style: {
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
              objectFit: "cover"
            }
          }
        ) });
      },
      enableSorting: false
      // filterFn: 'includesString', //note: normal non-fuzzy filter column - case insensitive
    },
    {
      id: "fullName",
      // Unique identifier for the column.
      header: "Full Name",
      // Text to display in the column header.
      accessorFn: (row) => `${row.first_name} ${row.father_name} ${row.grand_father_name}`,
      cell: (info2) => {
        const fullName = info2.getValue();
        return /* @__PURE__ */ jsx("button", { onClick: () => viewRow(info2.row.original), children: /* @__PURE__ */ jsx("span", { className: "hover:underline", children: fullName }) });
      },
      // filterFn: 'fuzzy',
      filterFn: fuzzyFilter$1,
      // Use the updated filter function.
      sortingFn: fuzzySort$1
      // Keep your custom sorting if it's applicable.
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (info2) => info2.getValue(),
      filterFn: "includesStringSensitive"
      //note: normal non-fuzzy filter column
    },
    {
      accessorFn: (row) => `${row.country_phone_code}${row.phone}`,
      //note: normal non-fuzzy filter column - case sensitive
      id: "phone",
      cell: (info2) => info2.getValue(),
      header: () => /* @__PURE__ */ jsx("span", { children: "Phone Number" }),
      filterFn: "includesString"
      //note: normal non-fuzzy filter column - case insensitive
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-3 px-2", children: [
        /* @__PURE__ */ jsx("button", { className: "hover:text-blue-300", title: "View", onClick: () => viewRow(row.original), children: /* @__PURE__ */ jsx(Eye, { size: 20, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "hover:text-green-300", title: "Edit", onClick: () => editRow(row.original), children: /* @__PURE__ */ jsx(Pencil, { size: 20, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "hover:text-red-500 text-red-500", title: "Delete", onClick: () => deleteRow(row.original), children: /* @__PURE__ */ jsx(Trash2, { size: 20, strokeWidth: 1 }) })
      ] })
    }
  ], []);
  const viewRow = (data2) => {
    console.log("Viewing", data2);
    setModalData(data2);
    setIsModalOpen(true);
  };
  const editRow = (data2) => {
    console.log("Editing", data2);
  };
  const deleteRow = (data2) => {
    console.log("Deleting", data2);
  };
  React.useReducer(() => ({}), {})[1];
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter$1
    },
    initialState: {
      columnOrder: ["select", "image", "fullName", "age"],
      //customize the initial column order
      columnVisibility: {
        id: false
        //hide the id column by default
      },
      expanded: true,
      //expand all rows by default
      sorting
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter
    },
    enableRowSelection: true,
    //enable row selection for all rows
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
    onGlobalFilterChange: setGlobalFilter
  });
  const { rows } = table.getRowModel();
  React.useEffect(() => {
    var _a2, _b;
    if (((_a2 = table.getState().columnFilters[0]) == null ? void 0 : _a2.id) === "fullName") {
      if (((_b = table.getState().sorting[0]) == null ? void 0 : _b.id) !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [(_a = table.getState().columnFilters[0]) == null ? void 0 : _a.id]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start w-1/2 gap-4", children: [
        /* @__PURE__ */ jsx(
          DebouncedInput$1,
          {
            value: globalFilter ?? "",
            onChange: (value) => setGlobalFilter(String(value)),
            className: "flex p-2 font-lg text-black shadow border border-block rounded-md w-full",
            placeholder: "Search all columns..."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "border border-gray-500", children: /* @__PURE__ */ jsx(SlidersHorizontal, { size: 20, strokeWidth: 1 }) })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx("div", { variant: "outline", className: "px-4 py-2 rounded-sm bg-black text-white", children: "Columns" }) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "bg-black w-[150px]", children: table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
          return /* @__PURE__ */ jsx(
            DropdownMenuCheckboxItem,
            {
              className: "capitalize text-white text-2xl border-b border-gray-700 hover:bg-gray-500",
              checked: column.getIsVisible(),
              onCheckedChange: (value) => {
                column.toggleVisibility(!!value);
              },
              children: column.id
            },
            column.id
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative mt-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "darkBg min-w-full h-14 rounded-tl-md rounded-tr-md border-b border-gray-700 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start space-x-4 text-white px-3 py-3", children: [
              Object.keys(rowSelection).length > 0 ? /* @__PURE__ */ jsxs("div", { children: [
                Object.keys(rowSelection).length,
                " ",
                "People Selected"
              ] }) : /* @__PURE__ */ jsx("h1", { children: "Send All People: " }),
              /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800", onClick: () => setIsMessageModalOpen(true), children: [
                " ",
                /* @__PURE__ */ jsx(MessageSquareMore, { size: 20, strokeWidth: 1 }),
                "Text"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800", onClick: () => setIsEmailModalOpen(true), children: [
                " ",
                /* @__PURE__ */ jsx(Mail, { size: 20, strokeWidth: 1 }),
                "Email"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800", onClick: () => setIsNotificationModalOpen(true), children: [
                " ",
                /* @__PURE__ */ jsx(BellRing, { size: 20, strokeWidth: 1 }),
                "Push Notification"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start space-x-4 text-white px-3 py-3", children: [
              /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800", children: [
                " ",
                /* @__PURE__ */ jsx(Download, { size: 20, strokeWidth: 1 }),
                "Export"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800", children: [
                " ",
                /* @__PURE__ */ jsx(LayoutGrid, { size: 20, strokeWidth: 1 }),
                "More Actions"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-400 border border-gray-500 dark:border-gray-700", children: [
            /* @__PURE__ */ jsx("thead", { className: "darkBg h-12", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx("tr", { children: headerGroup.headers.map((header) => {
              return /* @__PURE__ */ jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder ? null : /* @__PURE__ */ jsxs(
                "div",
                {
                  className: header.column.getCanSort() ? "cursor-pointer select-none flex items-start justify-start gap-4 uppercase text-white text-sm" : "",
                  onClick: header.column.getToggleSortingHandler(),
                  title: header.column.getCanSort() ? header.column.getNextSortingOrder() === "asc" ? "Sort ascending" : header.column.getNextSortingOrder() === "desc" ? "Sort descending" : "Clear sort" : void 0,
                  children: [
                    flexRender(header.column.columnDef.header, header.getContext()),
                    header.column.getIsSorted() ? header.column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { size: 20, strokeWidth: 1 }) : /* @__PURE__ */ jsx(ArrowDown, { size: 20, strokeWidth: 1 }) : header.column.getCanSort() ? /* @__PURE__ */ jsx(ArrowDownUp, { size: 20, strokeWidth: 1 }) : ""
                  ]
                }
              ) }, header.id);
            }) }, headerGroup.id)) }),
            /* @__PURE__ */ jsx("tbody", { className: "px-2  bg-white text-black dark:bg-gray-700 dark:text-gray-300 overflow-y-auto", style: { height: "100px" }, children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: /* @__PURE__ */ jsx("td", { colSpan: table.getAllColumns().length, className: "text-center", children: "No results found" }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-x-4 min-w-full border border-gray-500 darkBg p-1 rounded-b-md", children: [
            /* @__PURE__ */ jsx("button", { className: "hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: " < " }),
            /* @__PURE__ */ jsx("button", { className: "hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: " > " }),
            /* @__PURE__ */ jsx("button", { className: "hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: "<<" }),
            /* @__PURE__ */ jsx("button", { className: "hover:bg-gray-400 bg-gray-500 border font-semibold border-gray-500 rounded-sm px-2 cursor-pointer", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: ">>" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-300", children: [
              "Page",
              " ",
              /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                table.getState().pagination.pageIndex + 1,
                " of ",
                table.getPageCount()
              ] }),
              " "
            ] }),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: table.getState().pagination.pageSize,
                onChange: (e) => table.setPageSize(Number(e.target.value)),
                className: "py-1 rounded-sm bg-gray-500 hover:bg-gray-400",
                children: [10, 20, 30, 40, 50, 100].map((pageSize) => /* @__PURE__ */ jsxs("option", { value: pageSize, children: [
                  "Show ",
                  pageSize
                ] }, pageSize))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(ViewerModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), data: modalData }),
    /* @__PURE__ */ jsx(SendEmailModal, { isOpen: isEmailModalOpen, onClose: () => setIsEmailModalOpen(false), data: modalData }),
    /* @__PURE__ */ jsx(SendMessageModal, { isOpen: isMessageModalOpen, onClose: () => setIsMessageModalOpen(false), data: modalData }),
    /* @__PURE__ */ jsx(SendNotificationModal, { isOpen: isNotificationModalOpen, onClose: () => setIsNotificationModalOpen(false), data: modalData })
  ] });
};
function IndeterminateCheckbox$1({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [indeterminate, rest.checked]);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      ref,
      className: className + " cursor-pointer",
      ...rest
    }
  );
}
function DebouncedInput$1({ value, onChange, debounce = 500, ...props }) {
  const [innerValue, setInnerValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      onChange(innerValue);
    }, debounce);
    return () => clearTimeout(handler);
  }, [innerValue]);
  return /* @__PURE__ */ jsx(
    "input",
    {
      value: innerValue,
      onChange: (e) => setInnerValue(e.target.value),
      ...props
    }
  );
}
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const rowData = row.getValue(columnId);
  if (typeof rowData === "string") {
    const names = rowData.split(" ");
    const matches = names.map((name) => rankItem(name, value));
    const bestMatch = matches.reduce((best, current) => current.passed && current.rank > best.rank ? current : best, { rank: -Infinity, passed: false });
    addMeta({
      itemRank: bestMatch
    });
    return bestMatch.passed;
  } else if (rowData && typeof rowData === "object") {
    const { fullName } = rowData;
    const names = fullName.split(" ");
    const matches = names.map((name) => rankItem(name, value));
    const bestMatch = matches.reduce((best, current) => current.passed && current.rank > best.rank ? current : best, { rank: -Infinity, passed: false });
    addMeta({
      itemRank: bestMatch
    });
    return bestMatch.passed;
  }
  const itemRank = rankItem(rowData, value);
  addMeta({
    itemRank
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
const SelectionTable = ({ group, availableMembers, onMembersAdded }) => {
  var _a;
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setData(availableMembers);
    dispatch(addMemberToGroup(false));
  }, [availableMembers]);
  const columns = useMemo(() => [
    {
      id: "select",
      header: ({ table: table2 }) => /* @__PURE__ */ jsxs("div", { className: "px-2 flex items-center justify-start", children: [
        /* @__PURE__ */ jsx(
          IndeterminateCheckbox,
          {
            className: "p-2 rounded-sm bg-gray-400",
            ...{
              checked: table2.getIsAllRowsSelected(),
              indeterminate: table2.getIsSomeRowsSelected(),
              onChange: table2.getToggleAllRowsSelectedHandler()
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "" })
      ] }),
      cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "px-2", children: /* @__PURE__ */ jsx(
        IndeterminateCheckbox,
        {
          className: "p-2 rounded-sm bg-gray-400",
          ...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }
        }
      ) })
    },
    {
      accessorFn: (row) => row.image,
      //note: normal non-fuzzy filter column - case sensitive
      id: "image",
      header: "",
      cell: (info2) => {
        const imageUrl = info2.row.original.imageUrl;
        return /* @__PURE__ */ jsx("div", { className: "flex items-end justify-end cursor-pointer", children: /* @__PURE__ */ jsx(
          "img",
          {
            onClick: () => viewRow(info2.row.original),
            src: imageUrl,
            alt: "Profile",
            style: {
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
              objectFit: "cover"
            }
          }
        ) });
      },
      enableSorting: false
      // filterFn: 'includesString', //note: normal non-fuzzy filter column - case insensitive
    },
    {
      id: "fullName",
      // Unique identifier for the column.
      header: "Full Name",
      // Text to display in the column header.
      accessorFn: (row) => `${row.firstName} ${row.fatherName} ${row.grandFatherName}`,
      cell: (info2) => {
        const fullName = info2.getValue();
        return /* @__PURE__ */ jsx("button", { onClick: () => viewRow(info2.row.original), children: /* @__PURE__ */ jsx("span", { className: "hover:underline", children: fullName }) });
      },
      // filterFn: 'fuzzy',
      filterFn: fuzzyFilter,
      // Use the updated filter function.
      sortingFn: fuzzySort
      // Keep your custom sorting if it's applicable.
    }
  ], []);
  const viewRow = (data2) => {
    console.log("Viewing", data2);
    setModalData(data2);
    setIsModalOpen(true);
  };
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  console.log(rowSelection);
  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    initialState: {
      columnOrder: ["select", "image", "fullName"],
      //customize the initial column order
      columnVisibility: {
        id: false
        //hide the id column by default
      },
      expanded: true,
      //expand all rows by default
      sorting
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter
    },
    enableRowSelection: true,
    //enable row selection for all rows
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
    onGlobalFilterChange: setGlobalFilter
  });
  const { rows } = table.getCoreRowModel();
  React.useEffect(() => {
    var _a2, _b;
    if (((_a2 = table.getState().columnFilters[0]) == null ? void 0 : _a2.id) === "fullName") {
      if (((_b = table.getState().sorting[0]) == null ? void 0 : _b.id) !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [(_a = table.getState().columnFilters[0]) == null ? void 0 : _a.id]);
  const selectedMemberIds = Object.keys(rowSelection).filter((key) => rowSelection[key]).map((key) => data[key].id);
  const handleAddMembersToGroup = () => {
    onMembersAdded(selectedMemberIds);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Add Members" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start w-full gap-4", children: /* @__PURE__ */ jsx(
      DebouncedInput,
      {
        value: globalFilter ?? "",
        onChange: (value) => setGlobalFilter(String(value)),
        className: "flex p-2 font-lg text-black shadow border border-block rounded-md w-full dark:bg-gray-700 dark:text-white",
        placeholder: "Search ..."
      }
    ) }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative mt-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "darkBg min-w-full h-14 rounded-tl-md rounded-tr-md border-b border-gray-700 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start space-x-4 text-white px-3 py-3", children: /* @__PURE__ */ jsxs("div", { children: [
              Object.keys(rowSelection).length,
              " ",
              "People Selected"
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start space-x-4 text-white px-3 py-3", children: /* @__PURE__ */ jsxs(
              "button",
              {
                disabled: Object.keys(rowSelection).length === 0 ? true : false,
                onClick: handleAddMembersToGroup,
                className: `flex items-start justify-start px-2 py-1 rounded-md gap-2 border 
                            border-gray-500 text-sm  ${Object.keys(rowSelection).length === 0 ? "bg-gray-600" : "bg-green-600"}`,
                children: [
                  /* @__PURE__ */ jsx(Plus, { size: 20, strokeWidth: 1 }),
                  "Add"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-400 border border-gray-500 dark:border-gray-700", children: [
            /* @__PURE__ */ jsx("thead", { className: "darkBg h-12", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx("tr", { children: headerGroup.headers.map((header) => {
              return /* @__PURE__ */ jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder ? null : /* @__PURE__ */ jsxs(
                "div",
                {
                  className: header.column.getCanSort() ? "cursor-pointer select-none flex items-start justify-start gap-4 uppercase text-white text-sm" : "",
                  onClick: header.column.getToggleSortingHandler(),
                  title: header.column.getCanSort() ? header.column.getNextSortingOrder() === "asc" ? "Sort ascending" : header.column.getNextSortingOrder() === "desc" ? "Sort descending" : "Clear sort" : void 0,
                  children: [
                    flexRender(header.column.columnDef.header, header.getContext()),
                    header.column.getIsSorted() ? header.column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { size: 20, strokeWidth: 1 }) : /* @__PURE__ */ jsx(ArrowDown, { size: 20, strokeWidth: 1 }) : header.column.getCanSort() ? /* @__PURE__ */ jsx(ArrowDownUp, { size: 20, strokeWidth: 1 }) : ""
                  ]
                }
              ) }, header.id);
            }) }, headerGroup.id)) }),
            /* @__PURE__ */ jsx("tbody", { className: "px-2  bg-white text-black dark:bg-gray-700 dark:text-gray-300 overflow-y-auto", style: { height: "100px" }, children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: /* @__PURE__ */ jsx("td", { colSpan: table.getAllColumns().length, className: "text-center", children: "No results found" }) }) })
          ] }),
          /* @__PURE__ */ jsx(ViewerModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), data: modalData })
        ]
      }
    )
  ] });
};
function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [indeterminate, rest.checked]);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      ref,
      className: className + " cursor-pointer",
      ...rest
    }
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
  return /* @__PURE__ */ jsx(
    "input",
    {
      value: innerValue,
      onChange: (e) => setInnerValue(e.target.value),
      ...props
    }
  );
}
const GroupDetails = ({ group }) => {
  const [isParticipantDrawerOpen, setIsParticipantDrawerOpen] = useState(false);
  const theme = useSelector((store) => store.theme.theme);
  const membersAdded = useSelector((store) => store.group.value.membersAdded);
  const [groupMembers, setGroupMembers] = useState(group.members || []);
  const [availableMembers, setAvailableMembers] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const fetchMembers = async () => {
    try {
      const membershipResponse = await axios.get("/memberships");
      const profilesResponse = await axios.get("/avatars");
      const memberships = membershipResponse.data.data;
      const filteredMembers = memberships.filter((member) => !group.members.some((gMember) => gMember.id === member.id));
      const profiles = profilesResponse.data.data;
      const profileMap = profiles.reduce((map, profile) => {
        map[profile.membershipId] = profile.imageUrl;
        return map;
      }, {});
      const enrichedMemberships = filteredMembers.map((member) => ({
        ...member,
        imageUrl: profileMap[member.id] || DefaultUserImage
      }));
      console.log("enrichedMemberships", enrichedMemberships);
      setAvailableMembers(enrichedMemberships);
    } catch (error) {
      console.error("Failed to fetch data:", error.message);
    }
  };
  useEffect(() => {
    fetchMembers();
  }, [group.members, membersAdded]);
  const fetchUpdatedGroupMembers = async () => {
    try {
      const response = await axios.get(`/groups/${group.id}/members`);
      console.log("Updated group members:", response.data);
      setGroupMembers([...groupMembers, ...response.data.members]);
    } catch (error) {
      console.error("Failed to fetch updated group members:", error);
    }
  };
  const handleAddMembers = async (selectedMemberIds) => {
    try {
      const response = await axios.post(`/groups/${group.id}/addMembers`, {
        members: selectedMemberIds
      });
      const addedMembers = availableMembers.filter(
        (member) => selectedMemberIds.includes(member.id)
      );
      fetchUpdatedGroupMembers();
      setAvailableMembers(availableMembers.filter(
        (member) => !selectedMemberIds.includes(member.id)
      ));
    } catch (error) {
      console.error("Failed to add members:", error);
      alert("Failed to add members");
    }
  };
  const handleAddParticipant = () => {
    setIsParticipantDrawerOpen(true);
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
    /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "bg-gray-300" : "darkBg"} rounded-sm md:p-6 md:pt-9 px-4 py-9 ${isParticipantDrawerOpen ? "w-[70%]" : "w-full"} `, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-56 mb-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-6", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => window.history.back(),
              className: "p-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, {}),
                "Back"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleAddParticipant,
              className: "p-2 rounded-md flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-400 hover:text-black",
              children: [
                /* @__PURE__ */ jsx(GrAddCircle, {}),
                "Add Participants"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold", children: group.title }) })
      ] }),
      /* @__PURE__ */ jsx(GroupMembersTable, { membersList: groupMembers })
    ] }),
    isParticipantDrawerOpen && /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "bg-gray-300" : "darkBg"} rounded-sm p-2 lg:min-h-[87vh] w-[30%]`, children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mb-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "right-2",
          onClick: () => setIsParticipantDrawerOpen(false),
          children: /* @__PURE__ */ jsx(X, {})
        }
      ) }),
      /* @__PURE__ */ jsx(SelectionTable, { group: group.id, availableMembers, onMembersAdded: handleAddMembers })
    ] })
  ] }) });
};
export {
  GroupDetails as default
};
