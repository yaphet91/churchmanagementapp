import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import StepperHeader from "./StepperHeader-CEXsia2n.js";
import StepperSidebar from "./StepperSidebar-C8JFBYpo.js";
import "@inertiajs/inertia-react";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./TooltipContext-CXfF4_Yf.js";
import "@reduxjs/toolkit";
import "react-redux";
import "@inertiajs/react";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-i18next";
import "./LanguageSwitcher-DrORwT0e.js";
import "./languageSlice-BzN7Wppz.js";
const StepperFormLayout = ({ children, currentStep, onStepChange }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-[#000033]  dark:text-bodydark", children: /* @__PURE__ */ jsxs("div", { className: "flex h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(StepperSidebar, { currentStep, onStepChange }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ jsx(StepperHeader, { currentStep }),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10", children }) })
    ] })
  ] }) });
};
export {
  StepperFormLayout as default
};
