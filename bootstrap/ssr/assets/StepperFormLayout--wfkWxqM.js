import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import StepperHeader from "./StepperHeader-LWzxhwOF.js";
import StepperSidebar from "./StepperSidebar-f8BnsDqT.js";
import "@inertiajs/inertia-react";
import "./LanguageSwitcher-conunGEH.js";
import "./languageSlice-ncva5C39.js";
import "@reduxjs/toolkit";
import "react-redux";
import "@inertiajs/react";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
import "react-i18next";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
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
