import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import "@inertiajs/inertia-react";
import { L as LanguageSwitcher, D as DarkModeSwitcher, a as DropdownUser } from "./LanguageSwitcher-conunGEH.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter, faUser, faIdCard, faContactCard, faBriefcase, faChurch, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./languageSlice-ncva5C39.js";
import "@reduxjs/toolkit";
import "react-redux";
import "@inertiajs/react";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
const StepperHeader = ({ currentStep }) => {
  const { t } = useTranslation();
  const stepTitles = [
    t("steps.introduction"),
    t("steps.personalDetails"),
    t("steps.identification"),
    t("steps.contactInformation"),
    t("steps.additionalDetails"),
    t("steps.churchParticipation"),
    t("steps.confirmation")
  ];
  const stepIcons = [faHighlighter, faUser, faIdCard, faContactCard, faBriefcase, faChurch, faCheckSquare];
  return /* @__PURE__ */ jsx("header", { className: "sticky bg-bodydark1 dark:bg-boxdark top-0 z-40 flex w-full drop-shadow-2xl dark:drop-shadow-none border-b border-[#D3D3D3] dark:border-[#484848]", children: /* @__PURE__ */ jsxs("div", { className: "flex md:flex-grow items-center justify-between px-4 py-2.5 shadow-2 md:px-6 2xl:px-11", children: [
    /* @__PURE__ */ jsxs("div", { className: "py-3 text-gray-500 dark:text-gray-300 flex space-x-4 text-3xl justify-center items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "border-2 border-gray-400 rounded-lg flex items-center justify-center w-14 h-16", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-8 h-8", icon: stepIcons[currentStep] }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-semibold", children: stepTitles[currentStep] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3 2xsm:gap-7", children: [
      /* @__PURE__ */ jsxs("ul", { className: "flex items-center gap-2 2xsm:gap-4", children: [
        /* @__PURE__ */ jsx(LanguageSwitcher, {}),
        /* @__PURE__ */ jsx(DarkModeSwitcher, {})
      ] }),
      /* @__PURE__ */ jsx(DropdownUser, {})
    ] })
  ] }) });
};
export {
  StepperHeader as default
};
