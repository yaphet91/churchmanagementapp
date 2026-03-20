import { jsxs, jsx } from "react/jsx-runtime";
import React, { useRef, useEffect } from "react";
import { T as Tooltip, A as AnastasiaBanner, S as SidebarItem, a as SidebarLinkGroup, D as DrawerItem, H as Header } from "./DrawerItem-Ca55ty2B.mjs";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";
import { useDispatch, useSelector } from "react-redux";
import { SquareArrowLeft, SquareArrowRight, LayoutGrid, User, Combine, MessageSquareMore, Users, UserPlus, CalendarClock, Users2, BookPlus, SquareX, LogOut, Sun, Languages, Globe, Settings, HelpCircle, MessageSquareWarning } from "lucide-react";
import { s as setSidebarOpen } from "./sidebarSlice-BqmTz92s.mjs";
import { T as TooltipProvider, s as setDrawerOpen } from "./TooltipContext-CXfF4_Yf.mjs";
import { useTranslation } from "react-i18next";
import { Inertia } from "@inertiajs/inertia";
import { D as DrawerAvatar } from "./DrawerAvatar-Cxrl0zXL.mjs";
import { b as adminLogout, a as addAdminDetail } from "./adminSlice-CWD1up8r.mjs";
const AdminSidebar = () => {
  const dispatch = useDispatch();
  const { imageUrl } = useSelector((store) => store.profileImage.value);
  const { sidebarOpen } = useSelector((store) => store.sidebar);
  const { t } = useTranslation();
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
                w-72.5 flex-col bg-black duration-300 ease-linear dark:bg-boxdark
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
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "dashboard", icon: /* @__PURE__ */ jsx(LayoutGrid, {}), name: t("Dashboard"), to: "/admin/dashboard" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/people" || pathname.includes("people"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "people",
                      icon: /* @__PURE__ */ jsx(User, {}),
                      name: t("People"),
                      to: "people",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        handleClick();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: t("Adults"), to: "/admin/people/adults", pathname }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: t("Children"), to: "/admin/people/children", pathname })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "groups", icon: /* @__PURE__ */ jsx(Combine, {}), name: t("Groups"), to: "/admin/groups" }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "messages", icon: /* @__PURE__ */ jsx(MessageSquareMore, {}), name: "Messages", to: "/admin/messages" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "form" || pathname.includes("form"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "form",
                      icon: /* @__PURE__ */ jsx(Users, {}),
                      name: t("Add Users"),
                      to: "form",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        handleClick();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(UserPlus, {}), name: t("Adult"), to: "/admin/form/adult", pathname }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(UserPlus, {}), name: t("Child"), to: "/admin/form/child", pathname })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "events", icon: /* @__PURE__ */ jsx(CalendarClock, {}), name: t("Events"), to: "/admin/event/page/" }),
                /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/users-roles" || pathname.includes("users-roles"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    SidebarItem,
                    {
                      pathNameIncludes: "users-roles",
                      icon: /* @__PURE__ */ jsx(Users2, {}),
                      name: t("Users & Roles "),
                      to: "users-roles",
                      dropdownIcon: true,
                      open,
                      onClick: (e) => {
                        e.preventDefault();
                        handleClick();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `translate transform overflow-hidden ${!open && "hidden"}`, children: /* @__PURE__ */ jsxs("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6", children: [
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: t("Users"), to: "/admin/users", pathname }),
                    /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: t("Roles & Permissions"), to: "/admin/roles", pathname })
                  ] }) })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 pt-4 border-t border-gray-700", children: [
              /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "MEDIA" }),
              /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "readings", icon: /* @__PURE__ */ jsx(BookPlus, {}), name: t("Readings"), to: "/admin/readings" }) })
            ] })
          ] }) })
        ]
      }
    )
  ] });
};
const SidebarSubItem = ({ icon, name, to, pathname }) => {
  const isActive = pathname === to || pathname.includes(to);
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    Link,
    {
      href: to,
      className: `flex items-center gap-2 p-2 text-sm font-medium transition-colors duration-200 rounded-lg ${isActive ? "bg-gray-800 text-white" : "text-bodydark hover:bg-gray-700 hover:text-white"}`,
      children: [
        icon,
        /* @__PURE__ */ jsx("span", { children: name })
      ]
    }
  ) });
};
const AdminDrawer = () => {
  const admin = useSelector((store) => store.admin.value);
  const { drawerOpen } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const drawerRef = useRef();
  const toggleRef = useRef();
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.language);
  const currentLanguage = language === "en" ? "English" : "Tigrina";
  const toggleDrawer = () => {
    dispatch(setDrawerOpen());
  };
  const handleLogout = (event) => {
    dispatch(adminLogout());
    event.preventDefault();
    Inertia.post("/admin/logout");
  };
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      ref: drawerRef,
      className: `fixed top-16 right-0 h-full bg-gray-200 shadow-xl z-20 transform transition-transform duration-300 ease-in-out dark:bg-boxdark border border-gray-300 dark:border-gray-700 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`,
      style: { width: "250px" },
      children: [
        /* @__PURE__ */ jsx("button", { ref: toggleRef, onClick: toggleDrawer, className: "p-2 text-gray-500 dark:text-gray-300 hover:text-gray-900", children: /* @__PURE__ */ jsx(SquareX, { strokeWidth: 1, size: 30, className: "hover:text-red-900" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start pb-4 pl-4 border-b border-gray-300 dark:border-gray-600", children: [
          /* @__PURE__ */ jsx(DrawerAvatar, { name: admin.name }),
          /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: admin.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: admin.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "flex items-start justify-start mt-2", children: [
          /* @__PURE__ */ jsx("div", {}),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-300 dark:border-gray-600 py-2", children: [
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(User, { strokeWidth: 1, size: 20 }), name: "My Admin Profile", to: "/admin/profile" }),
              /* @__PURE__ */ jsx(
                DrawerItem,
                {
                  icon: /* @__PURE__ */ jsx(LogOut, { strokeWidth: 1, size: 20 }),
                  name: "Sign Out",
                  to: "/admin/logout",
                  onClick: handleLogout
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-300 dark:border-gray-600 py-2", children: [
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(Sun, { strokeWidth: 1, size: 20 }), name: "Appearance: " + theme }),
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(Languages, { strokeWidth: 1, size: 20 }), name: "Language: " + currentLanguage, to: "language" }),
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(Globe, { strokeWidth: 1, size: 20 }), name: "Location:", to: "location" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-b border-gray-300 dark:border-gray-600 py-2", children: /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(Settings, { strokeWidth: 1, size: 20 }), name: "Settings" }) }),
            /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-300 dark:border-gray-600 py-2", children: [
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(HelpCircle, { strokeWidth: 1, size: 20 }), name: "Help" }),
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(MessageSquareWarning, { strokeWidth: 1, size: 20 }), name: "Feedback" })
            ] })
          ] })
        ] })
      ]
    }
  );
};
const AdminLayout = ({ admin, children }) => {
  const { props } = usePage();
  const dispatch = useDispatch();
  const resolvedAdmin = admin || props.admin;
  const adminForUi = resolvedAdmin || {
    name: "Local Admin",
    email: "local-admin@example.com"
  };
  useEffect(() => {
    dispatch(addAdminDetail(adminForUi));
  }, [dispatch, adminForUi.id, adminForUi.name, adminForUi.email]);
  return /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-[#000033]  dark:text-bodydark", children: /* @__PURE__ */ jsxs("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ jsx(Header, { admin: adminForUi }),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10", children }) })
    ] }),
    /* @__PURE__ */ jsx(AdminDrawer, { isOpen: true })
  ] }) });
};
export {
  AdminLayout as A
};
