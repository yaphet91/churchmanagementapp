import { jsx, jsxs } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";
import { useSelector } from "react-redux";
import { u as useTooltip } from "./TooltipContext-CXfF4_Yf.js";
import { useState } from "react";
import { D as DarkModeSwitcher, a as DropdownUser } from "./DarkModeSwitcher-CKEZe0FQ.js";
import { L as LanguageSwitcher } from "./LanguageSwitcher-DrORwT0e.js";
import { HomeIcon } from "lucide-react";
import ReactDOM from "react-dom";
const SidebarItem = ({ pathNameIncludes, name, icon, to, onClick, dropdownIcon, open, alert }) => {
  const { url } = usePage();
  const pathname = url;
  const { sidebarOpen } = useSelector((store) => store.sidebar);
  const { showTooltip, hideTooltip } = useTooltip();
  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const position = { x: rect.right, y: rect.top };
    showTooltip(name, position);
  };
  return /* @__PURE__ */ jsx("li", { className: "group", onMouseEnter: !sidebarOpen ? handleMouseEnter : void 0, onMouseLeave: hideTooltip, children: /* @__PURE__ */ jsxs(
    Link,
    {
      onClick,
      href: to,
      className: `group relative flex items-center justify-center gap-2.5  ${sidebarOpen ? "rounded-sm" : "rounded-lg"} py-2 px-2 font-medium
                text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4
                ${pathname.includes(pathNameIncludes) ? "bg-graydark dark:bg-meta-4" : ""}`,
      children: [
        icon,
        /* @__PURE__ */ jsx("span", { className: `overflow-hidden transition-all ${sidebarOpen ? "w-28 ml-3" : "w-0"}`, children: name }),
        alert && /* @__PURE__ */ jsx("div", { className: `absolute right-2 w-2 h-2 rounded bg-indigo-400 ${sidebarOpen ? "" : "top-2"}` }),
        sidebarOpen && dropdownIcon && /* @__PURE__ */ jsx(
          "svg",
          {
            className: `absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z",
                fill: ""
              }
            )
          }
        )
      ]
    }
  ) });
};
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const goToHome = () => {
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 flex w-full bg-white drop-shadow-1 border-b border-gray-300 dark:border-gray-700 dark:bg-boxdark dark:drop-shadow-none", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-grow items-center justify-between px-4 py-[5px] shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block  w-1/2", children: /* @__PURE__ */ jsx("form", { action: "#", method: "#", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("button", { className: "absolute left-0 top-1/2 -translate-y-1/2 pl-4", children: /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",
                fill: ""
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",
                fill: ""
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Type to search...",
          className: "w-full bg-transparent pl-10 py-1 rounded-xl pr-4 text-black focus:outline-none dark:text-white xl:w-225"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { children: " " }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 2xsm:gap-7 right-3", children: [
      /* @__PURE__ */ jsxs("ul", { className: "flex items-center gap-2 2xsm:gap-4", children: [
        /* @__PURE__ */ jsx(LanguageSwitcher, {}),
        /* @__PURE__ */ jsx(
          HomeIcon,
          {
            strokeWidth: 1,
            className: "w-6.5 h-8 text-gray-500 dark:text-gray-300",
            onClick: goToHome
          }
        ),
        /* @__PURE__ */ jsx(DarkModeSwitcher, {})
      ] }),
      /* @__PURE__ */ jsx(DropdownUser, {})
    ] })
  ] }) });
};
const SidebarLinkGroup = ({ children, activeCondition }) => {
  const [open, setOpen] = useState(activeCondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsx("ul", { children: children(handleClick, open) });
};
const AnastasiaBanner = "/build/assets/anastasia_banner-DU65QzNx.png";
const Tooltip = () => {
  const { tooltip } = useTooltip();
  if (!tooltip.visible) {
    return null;
  }
  const style = {
    position: "fixed",
    top: `${tooltip.position.y}px`,
    left: `${tooltip.position.x}px`,
    // Add more styling as needed
    color: "white"
  };
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsx("div", { class: "tooltip bg-gray-700 bg-opacity-4 flex w-24 text-white text-sm rounded-md py-2 absolute z-50 items-center justify-center", style, children: tooltip.content }),
    document.body
  );
};
const DrawerItem = ({ pathNameIncludes, name, icon, to, alert, open, onClick, dropdownIcon }) => {
  const { url } = usePage();
  const pathname = url;
  const { drawerOpen } = useSelector((state) => state.drawer);
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    Link,
    {
      onClick,
      href: to,
      className: `group w-full capitalize relative flex items-start justify-start pl-2 gap-2.5  rounded-sm py-2 px-1 font-medium
                dark:text-bodydark1 duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-meta-4 text-md
                ${pathname.includes(pathNameIncludes) ? "bg-graydark dark:bg-meta-4" : ""}`,
      children: [
        icon,
        /* @__PURE__ */ jsx("span", { className: `overflow-hidden transition-all  ml-1 font-light`, children: name }),
        alert && /* @__PURE__ */ jsx("div", { className: `absolute right-2 w-2 h-2 rounded bg-indigo-400 top-2` }),
        drawerOpen && dropdownIcon && /* @__PURE__ */ jsx(
          "svg",
          {
            className: `absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z",
                fill: ""
              }
            )
          }
        )
      ]
    }
  ) });
};
export {
  AnastasiaBanner as A,
  DrawerItem as D,
  Header as H,
  SidebarItem as S,
  Tooltip as T,
  SidebarLinkGroup as a
};
