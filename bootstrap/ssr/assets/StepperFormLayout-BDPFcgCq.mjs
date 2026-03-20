import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import StepperHeader from "./StepperHeader-Dux1DnGq.mjs";
import StepperSidebar from "./StepperSidebar-C8JFBYpo.mjs";
import "@inertiajs/inertia-react";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@reduxjs/toolkit";
import "react-redux";
import "@inertiajs/react";
import "./themeSlice-BmOV-XST.mjs";
import "@headlessui/react";
import "./userSlice-DH0slH5l.mjs";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-i18next";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "./languageSlice-BzN7Wppz.mjs";
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
