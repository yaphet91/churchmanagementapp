import { jsxs, jsx } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import "@inertiajs/inertia";
import { ArrowLeft, LogIn } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import QRCodeScanner from "./QRCodeScanner-DV9LFLS1.js";
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
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./Modal-BZNRvUHP.js";
const EventDetailsMember = ({ event }) => {
  const theme = useSelector((store) => store.theme.theme);
  event.repeat !== null;
  const [isQrScannerOpen, setIsQrScannerOpen] = React.useState(false);
  const handleCheckIn = () => {
    setIsQrScannerOpen(true);
  };
  const handleRegister = () => {
  };
  const handleEditEvent = () => {
  };
  return /* @__PURE__ */ jsxs(MemberLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold", children: "Event Details" }) }),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-4 ${theme === "light" ? "bg-gray-300" : "darkBg"} rounded-sm md:p-6 md:pt-9 px-4 py-9`, children: [
        /* @__PURE__ */ jsxs("div", { className: `w-[50%] `, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex space-x-6 mb-3", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => window.history.back(),
                className: "p-2 px-4 rounded-md flex items-start justify-center gap-2 hover:bg-gray-700 hover:text-white",
                children: [
                  /* @__PURE__ */ jsx(ArrowLeft, {}),
                  "Back"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex h-24 items-start justify-start space-x-6", children: [
              /* @__PURE__ */ jsx("div", { className: "h-full w-2 bg-green-600" }),
              /* @__PURE__ */ jsxs("div", { className: "py-4 px-2", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold mb-2", children: event.title }),
                /* @__PURE__ */ jsxs("p", { children: [
                  event.start_time,
                  " to ",
                  event.end_time
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "my-2 text-black dark:text-white", children: "Description" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-start justify-start shadow-black", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("img", { src: event.image_url, alt: event.title, className: "w-full h-80" }),
            /* @__PURE__ */ jsxs("p", { className: "py-2 italic font-bold", children: [
              '"',
              event.description,
              '"'
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "my-2 text-black dark:text-white", children: "Details" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3  border-gray-300 dark:border-gray-700 p-2 py-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-white", children: "Start Date" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl ", children: event.start_time })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-white", children: "End Date" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl ", children: event.end_time })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-white", children: "Visibility" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl ", children: event.visibility })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-white", children: "Location" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl ", children: event.location ? event.location : " ------------" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-white", children: "Manager" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl ", children: event.manager ? event.manager : " ------------" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-white", children: "Repeats" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl ", children: event.repeat ? event.repeat : "No" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-[49%]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-end space-x-6 text-black dark:text-white", children: [
          /* @__PURE__ */ jsxs("button", { className: "flex items-start justify-start px-4 py-2 rounded-md gap-2 border border-gray-500 text-sm bg-gray-400 dark:bg-gray-600 hover:bg-green-800", onClick: () => handleCheckIn(), children: [
            " ",
            /* @__PURE__ */ jsx(LogIn, { size: 20, strokeWidth: 1 }),
            "Check In"
          ] }),
          /* @__PURE__ */ jsx("button", { className: "flex items-start justify-start px-4 py-2 rounded-md gap-2 border border-gray-500 text-sm bg-gray-400 dark:bg-gray-600 hover:bg-green-800", onClick: () => handleRegister(), children: "Register" }),
          /* @__PURE__ */ jsx("button", { className: "flex items-start justify-start px-4 py-2 rounded-md gap-2 border border-gray-500 text-sm bg-gray-400 dark:bg-gray-600 hover:bg-green-800", onClick: () => handleEditEvent(), children: "Edit" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(QRCodeScanner, { onScanSuccess: (data) => console.log(data), isOpen: isQrScannerOpen, onClose: () => setIsQrScannerOpen(false) })
  ] });
};
export {
  EventDetailsMember as default
};
