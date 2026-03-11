import { jsxs, jsx } from "react/jsx-runtime";
import React, { useRef } from "react";
import { T as Tooltip, A as AnastasiaBanner, S as SidebarItem, a as SidebarLinkGroup, b as SidebarSubItem, H as HelpIcon, s as setSidebarOpen, c as Header, D as Drawer } from "./index-NxhnN3JY.js";
import { usePage } from "@inertiajs/react";
import "@inertiajs/inertia-react";
import { useDispatch, useSelector } from "react-redux";
import { SquareArrowLeft, SquareArrowRight, Church, LayoutGrid, MessageSquareMore, HandCoins, Combine, CalendarDays, NotebookTabs, Users, MonitorPlay, Music4, BookHeadphones, BookPlus, ShieldPlus, PieChart, Settings } from "lucide-react";
import { T as TooltipProvider } from "./languageSlice-ncva5C39.js";
const Sidebar = () => {
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
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "church", icon: /* @__PURE__ */ jsx(Church, {}), name: "Church", to: "/church" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "dashboard", icon: /* @__PURE__ */ jsx(LayoutGrid, {}), name: "Dashboard", to: "/member/dashboard" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "messages", icon: /* @__PURE__ */ jsx(MessageSquareMore, {}), name: "Messages", to: "/messages" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "donations", icon: /* @__PURE__ */ jsx(HandCoins, {}), name: "Donations", to: "/donations" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "groups", icon: /* @__PURE__ */ jsx(Combine, {}), name: "Groups", to: "/groups" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "calendar", icon: /* @__PURE__ */ jsx(CalendarDays, {}), name: "Calendar", to: "/calendar" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "directory", icon: /* @__PURE__ */ jsx(NotebookTabs, {}), name: "Directory", to: "/directory" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/forms" || pathname.includes("forms"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "forms",
                      icon: /* @__PURE__ */ jsx(Users, {}),
                      name: "Family",
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
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Spouse", to: "form/spouse" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Parent", to: "form/parent" }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { name: "Child", to: "ui/child" })
                  ] }) })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 pt-4 border-t border-gray-700", children: [
              /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "EXPLORE" }),
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
const MemberLayout = ({ user, children, currentStep, onStepChange }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-[#000033]  dark:text-bodydark", children: /* @__PURE__ */ jsxs("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(Sidebar, { currentStep, onStepChange }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ jsx(Header, { currentStep, user }),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10", children }) })
    ] }),
    /* @__PURE__ */ jsx(Drawer, { isOpen: true })
  ] }) });
};
export {
  MemberLayout as M
};
