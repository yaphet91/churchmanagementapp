import { jsxs, jsx } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import "@heroicons/react/solid/esm/index.js";
import { Cross } from "lucide-react";
import "react";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "react-redux";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./themeSlice-BmOV-XST.mjs";
import "@headlessui/react";
import "./userSlice-DH0slH5l.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "react-i18next";
import "./languageSlice-BzN7Wppz.mjs";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "@inertiajs/inertia";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
const MemberDashboard2 = ({ auth }) => {
  return /* @__PURE__ */ jsxs(
    MemberLayout,
    {
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl  font-bold text-gray-600", children: "Member Dashboard" }),
          /* @__PURE__ */ jsx("button", { className: "p-2 px-4 hover:bg-gray-400 rounded-lg text-lg font-semibold hover:text-black bg-gray-700", children: "Request Service " })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "h-[130px] w-full border border-[#D3D3D3] dark:border-[#484848] flex\n       flex-col items-center justify-center\n       bg-bodydark1 rounded-sm  py-5  mt-3\n             overflow-x-hidden\n             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-600", children: "Daily Bible Verse" }),
          /* @__PURE__ */ jsxs("p", { className: "px-6 py-2 text-lg", children: [
            "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth. ",
            /* @__PURE__ */ jsx("span", { className: "ml-2 text-blue-700", children: "John 1:14" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-bodydark1 rounded-sm flex flex-col w-[50%] py-5 px-5 items-start justify-center mt-3\n             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]\n             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-5 font-bold text-gray-600", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl flex font-bold text-gray-500", children: "Daily Readings  " }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col mt-4 gap-2 items-left justify-start font-semibold text-xl text-gray-400", children: [
              /* @__PURE__ */ jsxs("h1", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(Cross, { size: 20 }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Rome 3: 5 - 15" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(Cross, { size: 20 }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "ml-2", children: "1 Peter 2: 1 - 10" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(Cross, { size: 20 }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Acts 6: 25 - 36" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(Cross, { size: 20 }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Psalms 10: 5 - 7" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(Cross, { size: 20 }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "ml-2", children: "John 1: 1 - 20" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-center gap-5 font-bold text-gray-600", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl flex font-bold text-gray-500", children: "Commeration  " }) }),
            /* @__PURE__ */ jsx("p", { children: "The saints that are commemerated in this day are _______ their blessing and interession be with us" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-bodydark1 rounded-sm flex flex-col w-full py-5 items-center justify-center mt-3\n             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]\n             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row space-x-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-bodydark1 rounded-sm flex flex-row w-full items-center justify-between mt-3\n             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]\n             dark:bg-boxdark text-gray-400 py-3 pt-5", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-600 border-r border-gray-700 h-[400px] w-full md:w-1/3 p-2 flex items-start justify-start", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl pl-3", children: "Recent Nofications" }) }),
          /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-600 border-r border-gray-700 h-full w-full md:w-1/3 p-2 flex items-start justify-start", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl pl-3", children: "Recent Messages" }) }),
          /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-600 h-full w-full md:w-1/3 p-2 flex items-start justify-start", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl pl-3", children: "Up Coming Events" }) })
        ] }) })
      ]
    }
  );
};
export {
  MemberDashboard2 as default
};
