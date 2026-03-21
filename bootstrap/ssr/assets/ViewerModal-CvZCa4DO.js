import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useMemo } from "react";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import { MessageSquare, Phone, Mail, QrCode, SlidersHorizontal, Download, ArrowUp, ArrowDown, ArrowDownUp, Eye, Pencil, Trash2, MessageSquareMore, BellRing, LayoutGrid, Save, Settings, User, CalendarCheck, Cross, Banknote, MessageSquareText, Handshake, Hand } from "lucide-react";
import { useReactTable, getSortedRowModel, getPaginationRowModel, getGroupedRowModel, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel, getFacetedMinMaxValues, getExpandedRowModel, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuCheckboxItem, T as TextInput3 } from "./TextInput3-BMVzEz0F.js";
import { rankItem, compareItems } from "@tanstack/match-sorter-utils";
import { useSelector } from "react-redux";
import axios from "axios";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
/* empty css                */
import "autoprefixer";
const DefaultUserImage = "/build/assets/user2-CarsMfkG.png";
const DefaultGroupsIcon = "/build/assets/defaultGroupIcon-N9ZOOcWU.png";
const UserDetails = ({ data }) => {
  function getAge(birthday) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden scroll-auto pb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-start gap-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-sm flex flex-col w-1/4 py-5 items-center justify-center mt-3  bg-gray-300", children: [
        /* @__PURE__ */ jsx("img", { src: data.imageUrl, alt: "avatar", className: "w-[180px] h-[200px] rounded-sm" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-3", children: [
          /* @__PURE__ */ jsx("div", { title: "message", className: "border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300", children: /* @__PURE__ */ jsx(MessageSquare, { size: 18, strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx("div", { title: "call", className: "border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300", children: /* @__PURE__ */ jsx(Phone, { size: 18, strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx("div", { title: "email", className: "border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300", children: /* @__PURE__ */ jsx(Mail, { size: 18, strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx("div", { title: "QR code", className: "border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300", children: /* @__PURE__ */ jsx(QrCode, { size: 18, strokeWidth: 1 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-sm mt-3  bg-gray-300 h-[287px] w-3/4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start space-x-24 px-5 py-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-sm uppercase text-gray-900", children: "Father Name" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-md text-gray-600", children: [
              data.fatherNameT,
              " ",
              data.grandFatherNameT
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-md text-gray-600", children: [
              data.fatherName,
              " ",
              data.grandFatherName
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-sm uppercase text-gray-900", children: "Mother's Name" }),
            /* @__PURE__ */ jsx("h2", { className: "text-md text-gray-600", children: data.motherFullNameT }),
            /* @__PURE__ */ jsxs("h2", { className: "text-md text-gray-600", children: [
              data.motherName,
              " ",
              data.mothersFather
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start space-x-24 px-5 py-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-sm uppercase text-gray-900", children: "Birth Date" }),
            /* @__PURE__ */ jsx("h2", { className: "text-md text-gray-600", children: data.birthday }),
            /* @__PURE__ */ jsxs("h2", { className: "text-md text-gray-600", children: [
              "( ",
              getAge(data.birthday),
              " Years Old )"
            ] })
          ] }),
          /* @__PURE__ */ jsx(InfoCell$1, { name: "Gender", content: data.gender }),
          /* @__PURE__ */ jsx(InfoCell$1, { name: "Place of Birth", content: data.placeOfBirth })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-5 py-3", children: /* @__PURE__ */ jsx(InfoCell$1, { name: "Father Of Confession", content: data.fatherOfConfession }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-sm mt-1   h-[220px] w-full flex items-start justify-start space-x-1", children: [
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 bg-gray-300 p-5 h-full", children: [
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Nationality", content: data.nationality }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Address Country", content: data.addressCountry }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Province", content: data.province }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Current Address", content: data.city + ", " + data.currentAddress })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 bg-gray-300 p-5 h-full", children: [
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Email", content: data.email }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Phone", content: data.countryPhoneCode + data.phone }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Whatsapp", content: data.whatsApp }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Emergency Contact", content: data.emergencyContactNumber + " ( " + data.contactRelation + " )" }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Postal Code", content: data.postalCode })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-sm mt-1 bg-gray-300 h-[220px] w-full flex items-start justify-start space-x-1", children: [
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 p-5 h-full", children: [
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Profession", content: data.profession }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Level Of Education", content: data.levelOfEducation }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "First Language", content: data.firstLanguage }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Second Language", content: data.secondLanguage })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 p-5 h-full", children: [
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Email", content: data.email }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Phone", content: data.countryPhoneCode + data.phone }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Whatsapp", content: data.whatsApp }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Emergency Contact", content: data.emergencyContactNumber + " ( " + data.contactRelation + " )" }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Postal Code", content: data.postalCode })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-sm mt-1 w-full flex items-start justify-start space-x-1 bg-gray-300 ", children: [
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 p-5 h-full", children: [
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Marital Status", content: data.maritalStatus }),
        data.haveChildren === "Yes" && /* @__PURE__ */ jsx(InfoCell$1, { name: "Children", content: data.childrenNumber + data.childrenNumber > 1 ? " children" : " child" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 w-1/2 p-5 h-full", children: [
        data.isNewChurchSubmitted ? /* @__PURE__ */ jsx(InfoCell$1, { name: "Church", content: data.newChurch + ", " + data.newDiocese }) : /* @__PURE__ */ jsx(InfoCell$1, { name: "Church", content: data.church + ", " + data.diocese }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Priest In Eritrea", content: data.priestInEritrea }),
        /* @__PURE__ */ jsx(InfoCell$1, { name: "Previous Church Service", content: data.selectedChurchService })
      ] })
    ] })
  ] });
};
const InfoCell$1 = ({ name, content }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-semibold text-sm text-gray-900 uppercase", children: name }),
    /* @__PURE__ */ jsx("h2", { className: "text-md text-gray-600 ", children: content })
  ] });
};
const SendEmailModal = ({ isOpen, onClose, data }) => {
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "2xl", maxHeight: "h-[50vh]" });
};
const SendMessageModal = ({ isOpen, onClose, data }) => {
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "2xl", maxHeight: "h-[50vh]" });
};
const SendNotificationModal = ({ isOpen, onClose, data }) => {
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "2xl", maxHeight: "h-[50vh]" });
};
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
    const { name } = rowData;
    const names = name.split(" ");
    const matches = names.map((name2) => rankItem(name2, value));
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
const EventsTable = () => {
  var _a;
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen2] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsResponse = await axios.get("/groups");
        const groups = groupsResponse.data;
        console.log(groups);
        setData(groups);
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
      }
    };
    fetchData();
  }, []);
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
      accessorFn: (row) => row.avatar,
      //note: normal non-fuzzy filter column - case sensitive
      id: "avatar",
      header: "",
      cell: (info) => {
        const avatar = info.row.original.avatar;
        return /* @__PURE__ */ jsx("div", { className: "flex items-end justify-end cursor-pointer", children: /* @__PURE__ */ jsx(
          "img",
          {
            onClick: () => viewRow(info.row.original),
            src: avatar || DefaultGroupsIcon,
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
      id: "title",
      // Unique identifier for the column.
      header: "Group Title",
      // Text to display in the column header.
      accessorFn: (row) => row.title,
      cell: (info) => {
        const title = info.getValue();
        return /* @__PURE__ */ jsx(InertiaLink, { href: `/groups/${info.row.original.id}`, children: /* @__PURE__ */ jsx("span", { className: "hover:underline", children: title }) });
      },
      filterFn: "fuzzy"
      // filterFn: fuzzyFilter,  // Use the updated filter function.
      // sortingFn: fuzzySort,  // Keep your custom sorting if it's applicable.
    },
    {
      accessorKey: "members_count",
      // This is the count field provided by `withCount`
      header: "People",
      cell: (info) => {
        const peopleCount = info.getValue();
        return `${peopleCount}`;
      },
      enableSorting: true
    },
    {
      accessorFn: (row) => row.description,
      //note: normal non-fuzzy filter column - case sensitive
      id: "description",
      cell: (info) => info.getValue(),
      header: () => /* @__PURE__ */ jsx("span", { children: "Description" }),
      filterFn: "includesString"
      //note: normal non-fuzzy filter column - case insensitive
    }
  ], []);
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
      columnOrder: ["select", "avatar", "name", "member_count"],
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
    if (((_a2 = table.getState().columnFilters[0]) == null ? void 0 : _a2.id) === "name") {
      if (((_b = table.getState().sorting[0]) == null ? void 0 : _b.id) !== "name") {
        table.setSorting([{ id: "name", desc: false }]);
      }
    }
  }, [(_a = table.getState().columnFilters[0]) == null ? void 0 : _a.id]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start w-1/2 gap-4", children: [
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
    ] }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative mt-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "darkBg min-w-full h-14 rounded-tl-md rounded-tr-md border-b border-gray-700 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start space-x-4 text-white px-3 py-3", children: /* @__PURE__ */ jsx("h1", { children: "The member participated in the below events" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start space-x-4 text-white px-3 py-3", children: /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-2 py-1 rounded-md gap-2 border border-gray-500 text-sm bg-gray-600 hover:bg-green-800", children: [
              " ",
              /* @__PURE__ */ jsx(Download, { size: 20, strokeWidth: 1 }),
              "Export"
            ] }) })
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
            /* @__PURE__ */ jsx("tbody", { className: "px-2 bg-gray-700 text-gray-300 overflow-auto", children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: /* @__PURE__ */ jsx("td", { colSpan: table.getAllColumns().length, className: "text-center", children: "No results found" }) }) })
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
    /* @__PURE__ */ jsx(ViewerModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen2(false), data: modalData }),
    /* @__PURE__ */ jsx(SendEmailModal, { isOpen: isEmailModalOpen, onClose: () => setIsEmailModalOpen(false), data: modalData }),
    /* @__PURE__ */ jsx(SendMessageModal, { isOpen: isMessageModalOpen, onClose: () => setIsMessageModalOpen(false), data: modalData }),
    /* @__PURE__ */ jsx(SendNotificationModal, { isOpen: isNotificationModalOpen, onClose: () => setIsNotificationModalOpen(false), data: modalData })
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
const UserAttendance = () => {
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden scroll-auto p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-green-500 text-4xl font-bold", children: "27" }),
        /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Attendance" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-yellow-500 text-4xl font-bold", children: "4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Late" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-red-500 text-4xl font-bold", children: "5" }),
        /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Absent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: /* @__PURE__ */ jsx(
        CircularProgressbar,
        {
          value: 50,
          text: `${50}%`,
          styles: buildStyles({
            // rotation: 0.25,
            // strokeLinecap: 'butt',
            textSize: "16px",
            pathTransitionDuration: 0.5,
            // pathTransition: 'none',
            pathColor: `rgba(62, 152, 199, ${100 / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7"
          })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(EventsTable, {})
  ] });
};
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
const DonationsTable = () => {
  var _a;
  useSelector((state) => state.theme.theme);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen2] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const membershipResponse = await axios.get("/memberships");
        const profilesResponse = await axios.get("/avatars");
        const memberships = membershipResponse.data.data;
        const profiles = profilesResponse.data.data;
        console.log(memberships);
        console.log(profilesResponse);
        const profileMap = profiles.reduce((map, profile) => {
          map[profile.membershipId] = profile.imageUrl;
          return map;
        }, {});
        const enrichedMemberships = memberships.map((member) => ({
          ...member,
          imageUrl: profileMap[member.id] || DefaultUserImage
        }));
        setData(enrichedMemberships);
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
      }
    };
    fetchData();
  }, []);
  const columns = useMemo(() => [
    {
      id: "fullName",
      // Unique identifier for the column.
      header: "Full Name",
      // Text to display in the column header.
      accessorFn: (row) => `${row.firstName} ${row.fatherName} ${row.grandFatherName}`,
      cell: (info2) => {
        const fullName = info2.getValue();
        return /* @__PURE__ */ jsx("button", { onClick: () => viewRow2(info2.row.original), children: /* @__PURE__ */ jsx("span", { className: "hover:underline pl-3", children: fullName }) });
      },
      // filterFn: 'fuzzy',
      filterFn: fuzzyFilter,
      // Use the updated filter function.
      sortingFn: fuzzySort
      // Keep your custom sorting if it's applicable.
    },
    {
      accessorKey: "profession",
      header: "Profession",
      cell: (info2) => info2.getValue(),
      filterFn: "includesStringSensitive"
      //note: normal non-fuzzy filter column
    },
    {
      accessorFn: (row) => `${row.countryPhoneCode}${row.phone}`,
      //note: normal non-fuzzy filter column - case sensitive
      id: "phone",
      cell: (info2) => info2.getValue(),
      header: () => /* @__PURE__ */ jsx("span", { children: "Phone Number" }),
      filterFn: "includesString"
      //note: normal non-fuzzy filter column - case insensitive
    },
    {
      accessorKey: "birthday",
      header: "Age",
      cell: (info2) => {
        const birthday = new Date(info2.getValue());
        const age = getAge(birthday);
        return `${age}`;
      },
      enableSorting: true
    },
    {
      accessorFn: (row) => row.whatsApp,
      //note: normal non-fuzzy filter column - case sensitive
      id: "whatsApp",
      cell: (info2) => info2.getValue(),
      header: () => /* @__PURE__ */ jsx("span", { children: "WhatsApp" }),
      filterFn: "includesString"
      //note: normal non-fuzzy filter column - case insensitive
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-3 px-2", children: [
        /* @__PURE__ */ jsx("button", { className: "hover:text-blue-300", title: "View", onClick: () => viewRow2(row.original), children: /* @__PURE__ */ jsx(Eye, { size: 20, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "hover:text-green-300", title: "Edit", onClick: () => editRow(row.original), children: /* @__PURE__ */ jsx(Pencil, { size: 20, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "hover:text-red-500 text-red-500", title: "Delete", onClick: () => deleteRow(row.original), children: /* @__PURE__ */ jsx(Trash2, { size: 20, strokeWidth: 1 }) })
      ] })
    }
  ], []);
  function getAge(birthday) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  const viewRow2 = (data2) => {
    console.log("Viewing", data2);
    setModalData(data2);
    setIsModalOpen2(true);
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
  console.log(rowSelection);
  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter
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
          DebouncedInput,
          {
            value: globalFilter ?? "",
            onChange: (value) => setGlobalFilter(String(value)),
            className: "flex p-2 font-lg text-black dark:bg-gray-700 dark:text-white shadow border border-block rounded-md w-full",
            placeholder: "Search all columns..."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "border border-gray-500", children: /* @__PURE__ */ jsx(SlidersHorizontal, { size: 20, strokeWidth: 1 }) })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx("button", { variant: "outline", className: "px-4 py-2 rounded-sm bg-black text-white", children: "Columns" }) }),
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
            /* @__PURE__ */ jsx("thead", { className: `darkBg h-12`, children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx("tr", { children: headerGroup.headers.map((header) => {
              return /* @__PURE__ */ jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder ? null : /* @__PURE__ */ jsxs(
                "div",
                {
                  className: header.column.getCanSort() ? "cursor-pointer select-none flex items-start justify-start gap-4 pl-2 uppercase text-white text-sm" : "",
                  onClick: header.column.getToggleSortingHandler(),
                  title: header.column.getCanSort() ? header.column.getNextSortingOrder() === "asc" ? "Sort ascending" : header.column.getNextSortingOrder() === "desc" ? "Sort descending" : "Clear sort" : void 0,
                  children: [
                    flexRender(header.column.columnDef.header, header.getContext()),
                    header.column.getIsSorted() ? header.column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { size: 20, strokeWidth: 1 }) : /* @__PURE__ */ jsx(ArrowDown, { size: 20, strokeWidth: 1 }) : header.column.getCanSort() ? /* @__PURE__ */ jsx(ArrowDownUp, { size: 20, strokeWidth: 1 }) : ""
                  ]
                }
              ) }, header.id);
            }) }, headerGroup.id)) }),
            /* @__PURE__ */ jsx("tbody", { className: "px-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 overflow-auto", children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-500 h-14", children: /* @__PURE__ */ jsx("td", { colSpan: table.getAllColumns().length, className: "text-center", children: "No results found" }) }) })
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
    )
  ] });
};
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
const UserDonations = () => {
  return /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(DonationsTable, {}) });
};
const UserMessages = () => {
  return /* @__PURE__ */ jsx("div", { children: "messages" });
};
const UserVolunteering = () => {
  return /* @__PURE__ */ jsx("div", { children: "volunteering" });
};
const UserFellowups = () => {
  return /* @__PURE__ */ jsx("div", { children: "fellowups" });
};
const UserSacraments = () => {
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden scroll-auto p-5", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4 mb-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-green-500 text-4xl font-bold", children: "27" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Communion" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-yellow-500 text-4xl font-bold", children: "4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Repentance" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-500 text-4xl font-bold", children: "5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Baptism" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-500 text-4xl font-bold", children: "5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Chrismation" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-500 text-4xl font-bold", children: "5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Matrimony" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-500 text-4xl font-bold", children: "5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Unction of the Sick" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-500 text-4xl font-bold", children: "5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-700 dark:text-gray-300 text-xl", children: "Eucharist" })
    ] })
  ] }) });
};
const EditableMemberDetails = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data);
  function getAge(birthday) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    onSave(formData);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "overflow-hidden scroll-auto pb-10 bg-gray-200 dark:bg-inherit   p-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-start gap-1 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-sm border flex flex-col w-1/4 py-5 items-center justify-center mt-3 ", children: [
        /* @__PURE__ */ jsx("img", { src: formData.imageUrl, alt: "avatar", className: "w-[180px] h-[200px] rounded-sm" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-3", children: [
          /* @__PURE__ */ jsx("div", { title: "message", className: "border border-green-700 hover:bg-green-400 rounded-full p-2 bg-inherit", children: /* @__PURE__ */ jsx(MessageSquare, { size: 18, strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx("div", { title: "call", className: "border border-green-700 hover:bg-green-400 rounded-full p-2  bg-inherit", children: /* @__PURE__ */ jsx(Phone, { size: 18, strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx("div", { title: "email", className: "border border-green-700 hover:bg-green-400 rounded-full p-2  bg-inherit", children: /* @__PURE__ */ jsx(Mail, { size: 18, strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx("div", { title: "QR code", className: "border border-green-700 hover:bg-green-400 rounded-full p-2  bg-inherit", children: /* @__PURE__ */ jsx(QrCode, { size: 18, strokeWidth: 1 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-sm mt-3 h-[287px] w-3/4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start space-x-10 px-5 py-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-start", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row -space-x-20 ml-5", children: [
          /* @__PURE__ */ jsx(InfoCell, { name: "Title", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "title", value: formData.title, onChange: handleChange, className: "text-md " }) }),
          /* @__PURE__ */ jsx(InfoCell, { name: "Name", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "firstName", value: formData.firstName, onChange: handleChange, className: "text-md " }) }),
          /* @__PURE__ */ jsx(InfoCell, { name: "Marital Status", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "maritalStatus", value: formData.maritalStatus, onChange: handleChange, className: "text-md " }) })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-start px-5 pb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-start -ml-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row -space-x-14 py-6", children: [
            /* @__PURE__ */ jsx(InfoCell, { name: "Father Name", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "fatherName", value: formData.fatherName, onChange: handleChange, className: "text-md " }) }),
            /* @__PURE__ */ jsx(InfoCell, { name: "Grand Father Name", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "grandFatherName", value: formData.grandFatherName, onChange: handleChange, className: "text-md " }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-start -ml-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row -space-x-14", children: [
            /* @__PURE__ */ jsx(InfoCell, { name: "Mother Name", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "motherName", value: formData.motherName, onChange: handleChange, className: "text-md " }) }),
            /* @__PURE__ */ jsx(InfoCell, { name: "Mothers Father Name", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "mothersFather", value: formData.mothersFather, onChange: handleChange, className: "text-md " }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start space-x-24 px-5 pt-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-sm uppercase text-gray-900 dark:text-gray-500", children: "Birth Date" }),
            /* @__PURE__ */ jsx(TextInput3, { type: "date", name: "birthday", value: formData.birthday, onChange: handleChange, className: "text-md " }),
            /* @__PURE__ */ jsxs("h2", { className: "text-md text-gray-600 dark:text-white", children: [
              "( ",
              getAge(formData.birthday),
              " Years Old )"
            ] })
          ] }),
          /* @__PURE__ */ jsx(InfoCell, { name: "Gender", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "gender", value: formData.gender, onChange: handleChange }) }),
          /* @__PURE__ */ jsx(InfoCell, { name: "Place of Birth", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "placeOfBirth", value: formData.placeOfBirth, onChange: handleChange }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-start justify-start mt-11 gap-1", children: /* @__PURE__ */ jsx("div", { className: "px-5 py-3", children: /* @__PURE__ */ jsx(InfoCell, { name: "Father Of Confession", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "fatherOfConfession", value: formData.fatherOfConfession, onChange: handleChange }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex px-5 -space-x-16", children: [
        /* @__PURE__ */ jsx(InfoCell, { name: "Email", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "email", value: formData.email, onChange: handleChange }) }),
        /* @__PURE__ */ jsx(InfoCell, { name: "Phone", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "phone", value: formData.phone, onChange: handleChange }) }),
        /* @__PURE__ */ jsx(InfoCell, { name: "Whatsapp", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "whatsApp", value: formData.whatsApp, onChange: handleChange }) }),
        /* @__PURE__ */ jsx(InfoCell, { name: "Emergency Contact", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "emergencyContactNumber", value: formData.emergencyContactNumber, onChange: handleChange }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "px-5 py-8 flex space-x-3 ", children: /* @__PURE__ */ jsx(InfoCell, { name: "Postal Code", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "postalCode", value: formData.postalCode, onChange: handleChange }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-start justify-start mt-12 gap-1", children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-3 flex -space-x-16", children: [
      /* @__PURE__ */ jsx(InfoCell, { name: "Nationality", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "nationality", value: formData.nationality, onChange: handleChange }) }),
      /* @__PURE__ */ jsx(InfoCell, { name: "Address Country", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "addressCountry", value: formData.addressCountry, onChange: handleChange }) }),
      /* @__PURE__ */ jsx(InfoCell, { name: "Province", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "province", value: formData.province, onChange: handleChange }) }),
      /* @__PURE__ */ jsx(InfoCell, { name: "Current Address", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "currentAddress", value: formData.currentAddress, onChange: handleChange }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-start justify-start mt-12 gap-1", children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-3 flex -space-x-16", children: [
      /* @__PURE__ */ jsx(InfoCell, { name: "Profession", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "profession", value: formData.profession, onChange: handleChange }) }),
      /* @__PURE__ */ jsx(InfoCell, { name: "Level Of Education", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "levelOfEducation", value: formData.levelOfEducation, onChange: handleChange }) }),
      /* @__PURE__ */ jsx(InfoCell, { name: "First Language", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "firstLanguage", value: formData.firstLanguage, onChange: handleChange }) }),
      /* @__PURE__ */ jsx(InfoCell, { name: "Second Language", content: /* @__PURE__ */ jsx(TextInput3, { type: "text", name: "secondLanguage", value: formData.secondLanguage, onChange: handleChange }) })
    ] }) })
  ] });
};
const InfoCell = ({ name, content }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start w-[20rem]", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-semibold text-sm text-gray-900 uppercase dark:text-gray-500", children: name }),
    /* @__PURE__ */ jsx("div", { className: "text-md text-gray-600 dark:text-white", children: content })
  ] });
};
const MemberEditorModal = ({ isOpen, onClose, data, onSave }) => {
  const [activeTab, setActiveTab] = useState("Details");
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "5xl", maxHeight: "h-[90vh]", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold mb-4", children: [
      data.title,
      " ",
      data.firstName,
      " ",
      data.fatherName,
      " ",
      data.grandFatherName
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-auto transition-all duration-300 max-h-[70vh] p-0", children: /* @__PURE__ */ jsx(EditableMemberDetails, { data, onSave }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-2 right-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "px-4 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded-md flex items-center justify-start gap-2",
          onClick: () => onClose(),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "px-4 py-1 bg-gray-600 hover:bg-blue-900 text-white rounded-md flex items-center justify-start gap-2",
          onClick: () => onSave(data),
          children: [
            /* @__PURE__ */ jsx(Save, { size: 18 }),
            "Save"
          ]
        }
      )
    ] }) })
  ] }) });
};
const ViewerModal = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState("Details");
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
  const navigationButtons = [
    { icon: /* @__PURE__ */ jsx(User, { size: 20, strokeWidth: 1 }), name: "Details" },
    { icon: /* @__PURE__ */ jsx(CalendarCheck, { size: 20, strokeWidth: 1 }), name: "Attendance" },
    { icon: /* @__PURE__ */ jsx(Cross, { size: 20, strokeWidth: 1 }), name: "Sacraments" },
    { icon: /* @__PURE__ */ jsx(Banknote, { size: 20, strokeWidth: 1 }), name: "Donations" },
    { icon: /* @__PURE__ */ jsx(MessageSquareText, { size: 20, strokeWidth: 1 }), name: "Messages" },
    { icon: /* @__PURE__ */ jsx(Handshake, { size: 20, strokeWidth: 1 }), name: "Fellow Ups" },
    { icon: /* @__PURE__ */ jsx(Hand, { size: 20, strokeWidth: 1 }), name: "Volunteering" }
  ];
  const getComponent = () => {
    switch (activeTab) {
      case "Details":
        return /* @__PURE__ */ jsx(UserDetails, { data });
      case "Attendance":
        return /* @__PURE__ */ jsx(UserAttendance, {});
      case "Sacraments":
        return /* @__PURE__ */ jsx(UserSacraments, {});
      case "Donations":
        return /* @__PURE__ */ jsx(UserDonations, {});
      case "Messages":
        return /* @__PURE__ */ jsx(UserMessages, {});
      case "Fellow Ups":
        return /* @__PURE__ */ jsx(UserFellowups, {});
      case "Volunteering":
        return /* @__PURE__ */ jsx(UserVolunteering, {});
      default:
        return /* @__PURE__ */ jsx("div", { children: "Select a category" });
    }
  };
  const handleEditClick = () => {
    setIsEditorModalOpen(true);
  };
  const handleSave = (updatedMember) => {
    console.log("Updated member:", updatedMember);
    setIsEditorModalOpen(false);
  };
  const handleEditorClose = () => {
    setIsEditorModalOpen(false);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Modal, { show: isOpen && !isEditorModalOpen, onClose, maxWidth: "5xl", maxHeight: "h-[90vh]", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold mb-4", children: [
        data.title,
        " ",
        data.firstName,
        " ",
        data.fatherName,
        " ",
        data.grandFatherName
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between hover:cursor-pointer", children: navigationButtons.map((navigator) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center flex-col p-1 ${activeTab === navigator.name ? "text-blue-500" : "text-gray-600 dark:text-white"}`,
          onClick: () => setActiveTab(navigator.name),
          children: [
            navigator.icon,
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-gray-600 dark:text-white", children: navigator.name })
          ]
        },
        navigator.name
      )) }),
      /* @__PURE__ */ jsx("div", { className: "relative overflow-auto transition-all duration-300 max-h-[70vh]", children: getComponent() }),
      /* @__PURE__ */ jsx("div", { className: "fixed bottom-2 right-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          className: "px-4 py-1 bg-gray-600 text-white rounded-md flex items-center justify-start gap-2",
          onClick: handleEditClick,
          children: [
            /* @__PURE__ */ jsx(Settings, { size: 18 }),
            "Edit"
          ]
        }
      ) })
    ] }) }),
    isEditorModalOpen && /* @__PURE__ */ jsx(
      MemberEditorModal,
      {
        isOpen: isEditorModalOpen,
        onClose: handleEditorClose,
        data,
        onSave: handleSave
      }
    )
  ] });
};
export {
  DefaultGroupsIcon as D,
  MemberEditorModal as M,
  SendEmailModal as S,
  ViewerModal as V,
  SendMessageModal as a,
  SendNotificationModal as b,
  DefaultUserImage as c
};
