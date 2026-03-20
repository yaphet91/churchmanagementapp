import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useRef, useEffect } from "react";
import { T as Tooltip, A as AnastasiaBanner, S as SidebarItem, a as SidebarLinkGroup, D as DrawerItem, H as Header } from "./DrawerItem-Ca55ty2B.mjs";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";
import { useDispatch, useSelector } from "react-redux";
import { SquareArrowLeft, SquareArrowRight, CalendarClock, Combine, Users, User, SquareX, UserRoundCog, LogOut, Sun, Languages, Globe, Settings, HelpCircle, MessageSquareWarning } from "lucide-react";
import { s as setSidebarOpen } from "./sidebarSlice-BqmTz92s.mjs";
import { T as TooltipProvider, s as setDrawerOpen } from "./TooltipContext-CXfF4_Yf.mjs";
import { useTranslation } from "react-i18next";
import { Inertia } from "@inertiajs/inertia";
import { GrVmMaintenance } from "react-icons/gr";
import { D as DrawerAvatar } from "./DrawerAvatar-Cxrl0zXL.mjs";
import { b as setMembershipId } from "./userSlice-DH0slH5l.mjs";
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
const Sidebar = () => {
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
          /* @__PURE__ */ jsx("div", { className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear", children: /* @__PURE__ */ jsx("nav", { className: "px-2 lg:mt-5 lg:px-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: `mb-4 ml-4 text-sm font-semibold text-bodydark2 overflow-x-hidden ${sidebarOpen ? "" : "w-0 h-0 mb-0"}`, children: "MENU" }),
            /* @__PURE__ */ jsxs("ul", { className: "mb-6 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "events", icon: /* @__PURE__ */ jsx(CalendarClock, {}), name: t("Events"), to: "/member/events" }),
              /* @__PURE__ */ jsx(SidebarItem, { pathNameIncludes: "groups", icon: /* @__PURE__ */ jsx(Combine, {}), name: t("Groups"), to: "/member/groups" }),
              /* @__PURE__ */ jsx(SidebarLinkGroup, { activeCondition: pathname === "/forms" || pathname.includes("forms"), children: (handleClick, open) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
                /* @__PURE__ */ jsx(
                  SidebarItem,
                  {
                    pathNameIncludes: "forms",
                    icon: /* @__PURE__ */ jsx(Users, {}),
                    name: t("Family"),
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
                  /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: t("Spouse"), to: "/member/spouse", pathname }),
                  /* @__PURE__ */ jsx(SidebarSubItem, { icon: /* @__PURE__ */ jsx(User, {}), name: t("Children"), to: "/member/children", pathname })
                ] }) })
              ] }) })
            ] })
          ] }) }) })
        ]
      }
    )
  ] });
};
const Drawer = () => {
  const { auth } = usePage().props;
  const { user } = auth;
  const { url } = usePage();
  const isAdminPath = url.includes("/admin");
  const { drawerOpen } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const drawerRef = useRef();
  const toggleRef = useRef();
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.language);
  const currentLanguage = language === "en" ? "English" : "Tigrina";
  const toggleDrawer = () => {
    dispatch(setDrawerOpen());
    console.log(auth);
  };
  const handleLogout = (event) => {
    event.preventDefault();
    Inertia.post("/logout");
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
          /* @__PURE__ */ jsx(DrawerAvatar, { name: user.name }),
          /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: user.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: user.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "flex items-start justify-start mt-2", children: [
          /* @__PURE__ */ jsx("div", {}),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-300 dark:border-gray-600 py-2", children: [
              auth.user.role === "admin" && /* @__PURE__ */ jsx(Fragment, { children: isAdminPath ? /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(UserRoundCog, { strokeWidth: 1, size: 20 }), name: "User View", to: "/member/dashboard" }) : /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(GrVmMaintenance, { strokeWidth: 1, size: 20 }), name: "Admin View", to: "/admin/dashboard" }) }),
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(User, { strokeWidth: 1, size: 20 }), name: "My Profile", to: "profile" }),
              /* @__PURE__ */ jsx(
                DrawerItem,
                {
                  icon: /* @__PURE__ */ jsx(LogOut, { strokeWidth: 1, size: 20 }),
                  name: "Sign Out",
                  to: "/logout",
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
const MemberLayout = ({ user, children, currentStep, onStepChange }) => {
  const dispatch = useDispatch();
  const getMembershipId = async () => {
    try {
      const response = await axios.get("/membership-id");
      dispatch(setMembershipId(response.data.membership_id));
      console.log("we got membership id", response.data.membership_id);
    } catch (error) {
      console.error("Error fetching membership ID:", error);
    }
  };
  useEffect(() => {
    getMembershipId();
  }, []);
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
