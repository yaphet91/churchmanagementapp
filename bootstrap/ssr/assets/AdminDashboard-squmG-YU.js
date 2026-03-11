import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useReactTable, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import React, { useMemo, useRef, useEffect } from "react";
import { T as Tooltip, A as AnastasiaBanner, S as SidebarItem, a as SidebarLinkGroup, b as SidebarSubItem, H as HelpIcon, s as setSidebarOpen, c as Header, D as Drawer } from "./index-NxhnN3JY.js";
import { usePage } from "@inertiajs/react";
import "@inertiajs/inertia-react";
import { useDispatch, useSelector } from "react-redux";
import { SquareArrowLeft, SquareArrowRight, LayoutGrid, User, Combine, MessageSquareMore, Receipt, BookUser, ContactRound, Users, UserPlus, CalendarDays, Handshake, MonitorPlay, Music4, BookHeadphones, BookPlus, ShieldPlus, PieChart, Settings } from "lucide-react";
import { T as TooltipProvider } from "./languageSlice-ncva5C39.js";
import { GrMoney } from "react-icons/gr";
import "./LanguageSwitcher-conunGEH.js";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
import "react-i18next";
import "@reduxjs/toolkit";
import "react-dom";
import "@inertiajs/inertia";
const Table = () => {
  const data = useMemo(() => [
    { firstName: "Jane", lastName: "Doe", age: 28 },
    { firstName: "John", lastName: "Doe", age: 26 }
  ], []);
  const columns = useMemo(() => [
    {
      accessorKey: "firstName",
      // accessor is the "key" in the data
      header: "First Name"
    },
    {
      accessorKey: "lastName",
      header: "Last Name"
    },
    {
      accessorKey: "age",
      header: "Age"
    }
  ], []);
  const table = useReactTable({
    columns,
    data,
    // initialState: {
    //     columnOrder: ['age', 'firstName', 'lastName'], //customize the initial column order
    //     columnVisibility: {
    //         id: false //hide the id column by default
    //     },
    //     expanded: true, //expand all rows by default
    //     sorting: [
    //         {
    //             id: 'age',
    //             desc: true //sort by age in descending order by default
    //         }
    //     ]
    // },
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        onChange: (e) => setGlobalFilter(e.target.value),
        placeholder: `Search records...`
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: table.getHeaderGroups().map((headerGroup) => {
        return /* @__PURE__ */ jsx("tr", { className: "bg-gray-100", children: headerGroup.headers.map((header) => (
          // map over the headerGroup headers array
          /* @__PURE__ */ jsx("th", { colSpan: header.colSpan }, header.id)
        )) }, headerGroup.id);
      }) }),
      /* @__PURE__ */ jsx("tbody", { children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx("tr", { children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) })
    ] }) })
  ] });
};
const AdminSidebar = () => {
  const dispatch = useDispatch();
  useSelector((store) => store.profileImage.value);
  const { sidebarOpen } = useSelector((store) => store.sidebar);
  const { url } = usePage();
  const pathname = url;
  useRef(null);
  useRef(null);
  const toggleSidebar = () => {
    dispatch(setSidebarOpen());
  };
  return /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Tooltip, {}),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `left-0 top-0 hidden lg:flex h-screen border-r border-gray-700
            w-72.5 flex-col  bg-black duration-300 ease-linear dark:bg-boxdark
            lg:static lg:translate-x-0`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 lg:py-6.5 border-b-2 border-gray-700 ", children: /* @__PURE__ */ jsxs("div", { className: "text-white", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleSidebar,
                className: "p-1.5 rounded-lg hover:bg-gray-700 absolute left-3.5 top-4 bg-inherit text-xl",
                children: sidebarOpen ? /* @__PURE__ */ jsx(SquareArrowLeft, {}) : /* @__PURE__ */ jsx(SquareArrowRight, {})
              }
            ),
            /* @__PURE__ */ jsx("img", { src: AnastasiaBanner, alt: "", className: `h-14 overflow-x-hidden duration-300 ease-linear ${sidebarOpen ? "" : "w-0"}` })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear", children: /* @__PURE__ */ jsxs("nav", { className: "px-2 lg:mt-5 lg:px-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "MENU" }),
              /* @__PURE__ */ jsxs("ul", { className: "mb-6 flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "dashboard", icon: /* @__PURE__ */ jsx(LayoutGrid, {}), name: "Dashboard", to: "/member/dashboard" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "people", icon: /* @__PURE__ */ jsx(User, {}), name: "People", to: "/people" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "groups", icon: /* @__PURE__ */ jsx(Combine, {}), name: "Groups", to: "/groups" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "messages", icon: /* @__PURE__ */ jsx(MessageSquareMore, {}), name: "Messages", to: "/messages" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/accounting" || pathname.includes("accounting"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "accounting",
                      icon: /* @__PURE__ */ jsx(Receipt, {}),
                      name: "Accounting",
                      to: "accounting",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        sidebarOpen ? handleClick() : setSidebarExpanded(true);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(GrMoney, {}), name: "Accounts", to: "accounting/accounts" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(GrMoney, {}), name: "Income", to: "accounting/income" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(GrMoney, {}), name: "Expenses", to: "accounting/expenses" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(GrMoney, {}), name: "Requests", to: "accounting/requests" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(GrMoney, {}), name: "Reports", to: "accounting/reports" })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/ministries" || pathname.includes("ministries"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "ministries",
                      icon: /* @__PURE__ */ jsx(BookUser, {}),
                      name: "Ministries",
                      to: "ministries",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        sidebarOpen ? handleClick() : setSidebarExpanded(true);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(ContactRound, {}), name: "Employees", to: "ministries/employees" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: "Volunteers", to: "ministries/volunteers" })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/forms" || pathname.includes("forms"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "forms",
                      icon: /* @__PURE__ */ jsx(Users, {}),
                      name: "Add Users",
                      to: "forms",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        sidebarOpen ? handleClick() : setSidebarExpanded(true);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(UserPlus, {}), name: "Adult", to: "form/adult" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(UserPlus, {}), name: "Child", to: "ui/child" })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "calendar", icon: /* @__PURE__ */ jsx(CalendarDays, {}), name: "Calendar", to: "/calendar" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "fellowups", icon: /* @__PURE__ */ jsx(Handshake, {}), name: "Fellowups", to: "/fellowups" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 pt-4 border-t border-gray-700", children: [
              /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "MEDIA" }),
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "videos", icon: /* @__PURE__ */ jsx(MonitorPlay, {}), name: "Videos", to: "/videos" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "mezmur", icon: /* @__PURE__ */ jsx(Music4, {}), name: "Mezmur", to: "/mezmur" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "sermon", icon: /* @__PURE__ */ jsx(BookHeadphones, {}), name: "Sermon", to: "/sermon" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "books", icon: /* @__PURE__ */ jsx(BookPlus, {}), name: "Books", to: "/books" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/store" || pathname.includes("/store"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "store",
                      icon: /* @__PURE__ */ jsx(ShieldPlus, {}),
                      name: "Store",
                      to: "store",
                      dropdownIcon: true,
                      open,
                      alert: false,
                      onClick: (e) => {
                        e.preventDefault();
                        sidebarOpen ? handleClick() : setSidebarExpanded(true);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Alerts", to: "ui/alerts" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Buttons", to: "ui/buttons" })
                  ] }) })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-gray-700", children: [
              /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "OTHERS" }),
              /* @__PURE__ */ jsxs("ul", { className: "mb-6 flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "help", icon: /* @__PURE__ */ jsx(HelpIcon, {}), name: "Help", to: "help" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "analysis", icon: /* @__PURE__ */ jsx(PieChart, {}), name: "Analysis", to: "analysis" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-10 pt-4 border-t border-gray-700", children: [
              /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "CONFIGURATION" }),
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "setting", icon: /* @__PURE__ */ jsx(Settings, {}), name: "Setting", to: "setting" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/ui" || pathname.includes("ui"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "ui",
                      icon: /* @__PURE__ */ jsx(ShieldPlus, {}),
                      name: "UI Elements",
                      to: "ui",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        sidebarOpen ? handleClick() : setSidebarExpanded(true);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Alerts", to: "ui/alerts" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Buttons", to: "ui/buttons" })
                  ] }) })
                ] }) })
              ] })
            ] })
          ] }) })
        ]
      }
    )
  ] });
};
const AdminLayout = ({ admin, children }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-[#000033]  dark:text-bodydark", children: /* @__PURE__ */ jsxs("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ jsx(Header, { admin }),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10", children }) })
    ] }),
    /* @__PURE__ */ jsx(Drawer, { isOpen: true })
  ] }) });
};
const AdminDashboard = ({ auth }) => {
  useEffect(() => {
    console.log(auth.user);
  }, []);
  return /* @__PURE__ */ jsx(
    AdminLayout,
    {
      children: /* @__PURE__ */ jsx(Table, {})
    }
  );
};
export {
  AdminDashboard as default
};
