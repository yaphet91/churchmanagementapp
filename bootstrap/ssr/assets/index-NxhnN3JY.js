import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";
import { useSelector, useDispatch } from "react-redux";
import { u as useTooltip, s as setDrawerOpen } from "./languageSlice-ncva5C39.js";
import { useState, useRef, useEffect } from "react";
import { L as LanguageSwitcher, D as DarkModeSwitcher, a as DropdownUser } from "./LanguageSwitcher-conunGEH.js";
import { createSlice } from "@reduxjs/toolkit";
import ReactDOM from "react-dom";
import { SquareX, User, LogOut, Sun, Languages, Globe, Settings, HelpCircle, MessageSquareWarning } from "lucide-react";
import { Inertia } from "@inertiajs/inertia";
const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxs("li", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        ref: trigger,
        onClick: (e) => {
          e.preventDefault();
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        },
        className: "relative flex h-8.5 w-8.5 p-1.5 items-center justify-center rounded-full bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white",
        to: "#",
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? "hidden" : "inline"}`,
              children: /* @__PURE__ */ jsx("span", { className: "absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75" })
            }
          ),
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "fill-current duration-300 ease-in-out",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z",
                    fill: ""
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z",
                    fill: ""
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z",
                    fill: ""
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z",
                    fill: ""
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        className: `absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${dropdownOpen === true ? "block" : "hidden"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "px-4 py-4", children: /* @__PURE__ */ jsx("h5", { className: "text-sm font-medium text-bodydark2", children: "Messages" }) }),
          /* @__PURE__ */ jsxs("ul", { className: "flex h-auto flex-col overflow-y-auto p-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex gap-4 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "/messages",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-black dark:text-white", children: "Mariya Desoja" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "I like your confidence 💪" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs", children: "2min ago" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex gap-4 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "/messages",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-black dark:text-white", children: "Robert Jhon" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Can you share your offer?" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs", children: "10min ago" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex gap-4 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "/messages",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-black dark:text-white", children: "Henry Dholi" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "I cam across your profile and..." }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs", children: "1day ago" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex gap-4 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "/messages",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-black dark:text-white", children: "Cody Fisher" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "I’m waiting for you response!" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs", children: "5days ago" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex gap-4 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "/messages",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h6", { className: "text-sm font-medium text-black dark:text-white", children: "Mariya Desoja" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "I like your confidence 💪" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs", children: "2min ago" })
                  ] })
                ]
              }
            ) })
          ] })
        ]
      }
    )
  ] });
};
const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current || !trigger.current)
        return;
      if (dropdownOpen && !(dropdown.current.contains(target) || trigger.current.contains(target))) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (dropdownOpen && keyCode === 27) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxs("li", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        ref: trigger,
        onClick: (e) => {
          e.preventDefault();
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        },
        to: "#",
        className: "relative flex h-8.5 w-8.5 p-1.5 items-center justify-center rounded-full bg-gray hover:text-primary  dark:bg-meta-4 dark:text-white",
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? "hidden" : "inline"}`,
              children: /* @__PURE__ */ jsx("span", { className: "absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75" })
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "fill-current duration-300 ease-in-out",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z",
                  fill: ""
                }
              )
            }
          )
        ]
      }
    ),
    dropdownOpen && /* @__PURE__ */ jsxs(
      "div",
      {
        ref: dropdown,
        className: "absolute -right-27 mt-2.5 p-3 flex h-90 w-75 flex-col rounded-lg bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80",
        children: [
          /* @__PURE__ */ jsx("div", { className: "px-4.5 py-3", children: /* @__PURE__ */ jsx("h5", { className: "text-sm font-medium text-bodydark2", children: "Notification" }) }),
          /* @__PURE__ */ jsxs("ul", { className: "flex h-auto flex-col overflow-y-auto", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex flex-col gap-2.5 border-b-2 border-strokedark px-4.5 py-3 hover:bg-gray-3 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-black dark:text-white", children: "Edit your information in a swipe" }),
                    " ",
                    "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs", children: "12 May, 2025" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex flex-col gap-2.5 border-t border-strokedark px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-black dark:text-white", children: "It is a long established fact" }),
                    " ",
                    "that a reader will be distracted by the readable."
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs", children: "24 Feb, 2025" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-black dark:text-white", children: "There are many variations" }),
                    " ",
                    "of passages of Lorem Ipsum available, but the majority have suffered"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs", children: "04 Jan, 2025" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-black dark:text-white", children: "There are many variations" }),
                    " ",
                    "of passages of Lorem Ipsum available, but the majority have suffered"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs", children: "01 Dec, 2024" })
                ]
              }
            ) })
          ] })
        ]
      }
    )
  ] });
};
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
const Header = ({ sidebarOpen, setSidebarOpen: setSidebarOpen2 }) => {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 flex w-full bg-white drop-shadow-1 border-b border-gray-300 dark:border-gray-700 dark:bg-boxdark dark:drop-shadow-none", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-grow items-center justify-between px-4 py-[5px] shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block  w-1/2", children: /* @__PURE__ */ jsx("form", { action: "https://formbold.com/s/unique_form_id", method: "POST", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
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
        /* @__PURE__ */ jsx(DarkModeSwitcher, {}),
        /* @__PURE__ */ jsx(DropdownNotification, {}),
        /* @__PURE__ */ jsx(DropdownMessage, {})
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
  return /* @__PURE__ */ jsx("li", { children: children(handleClick, open) });
};
const AnastasiaBanner = "/build/assets/anastasia_banner-1OuUMzcV.png";
const HelpIcon = ({ className = "", width = "10", height = "10", fill = "currentColor" }) => {
  return /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) });
};
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarOpen: true
  },
  reducers: {
    setSidebarOpen: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    }
  }
});
const { setSidebarOpen } = sidebarSlice.actions;
sidebarSlice.reducer;
const SidebarSubItem = ({ icon, name, to }) => {
  const { url } = usePage();
  const pathname = url;
  const isActive = pathname === `/${to}` || pathname.startsWith(`/${to}`);
  const linkClassName = `group relative flex items-center gap-2.5 rounded-md px-4 font-medium
     text-bodydark2 duration-300 ease-in-out hover:text-white ${isActive ? "!text-white hover:bg-gray-400" : ""}`;
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/" + to,
      className: linkClassName,
      children: [
        "   ",
        icon,
        name
      ]
    }
  ) });
};
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
      to: "/" + to,
      className: `group w-full relative flex items-start justify-start pl-2 gap-2.5  rounded-sm py-2 px-1 font-medium
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
const Drawer = () => {
  const { drawerOpen } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const drawerRef = useRef();
  const toggleRef = useRef();
  const toggleDrawer = () => {
    dispatch(setDrawerOpen());
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
        /* @__PURE__ */ jsx("button", { ref: toggleRef, onClick: toggleDrawer, className: "p-2 text-gray-500 dark:text-gray-300 hover:text-gray-900", children: /* @__PURE__ */ jsx(SquareX, { strokeWidth: 1, size: 30 }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pb-4 border-b border-gray-300 dark:border-gray-600", children: /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Saron Tesfagabir" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Chemical Engineer" })
        ] }) }),
        /* @__PURE__ */ jsxs("nav", { className: "flex items-start justify-start mt-2", children: [
          /* @__PURE__ */ jsx("div", {}),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-300 dark:border-gray-600 py-2", children: [
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
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(Sun, { strokeWidth: 1, size: 20 }), name: "Appearance:" }),
              /* @__PURE__ */ jsx(DrawerItem, { icon: /* @__PURE__ */ jsx(Languages, { strokeWidth: 1, size: 20 }), name: "Language:", to: "language" }),
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
export {
  AnastasiaBanner as A,
  Drawer as D,
  HelpIcon as H,
  SidebarItem as S,
  Tooltip as T,
  SidebarLinkGroup as a,
  SidebarSubItem as b,
  Header as c,
  setSidebarOpen as s
};
