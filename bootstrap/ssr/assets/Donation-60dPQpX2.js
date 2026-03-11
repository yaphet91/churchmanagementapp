import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { M as MemberLayout } from "./MemberLayout-ChtZxdhr.js";
import DonationSelection from "./DonationSelection-cmlkbV8M.js";
import AmountSelection from "./AmountSelection-XboUpQ6_.js";
import "./Checkout-xAZWq6FU.js";
import { Inertia } from "@inertiajs/inertia";
import "./index-NxhnN3JY.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "react-redux";
import "./languageSlice-ncva5C39.js";
import "@reduxjs/toolkit";
import "./LanguageSwitcher-conunGEH.js";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
import "react-i18next";
import "react-dom";
import "lucide-react";
import "framer-motion";
import "./donationSlice-iUD5AJBC.js";
import "./TextInput-8_mbY4T4.js";
import "@fortawesome/react-fontawesome";
import "@stripe/react-stripe-js";
import "./CardPay-whZCIDNf.js";
import "@stripe/stripe-js";
const Donation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return /* @__PURE__ */ jsx(DonationSelection, { goToNextStep: () => setCurrentStep(2) });
      case 2:
        return /* @__PURE__ */ jsx(AmountSelection, { goToNextStep: () => setCurrentStep(3), goToPreviousStep });
      case 3:
        Inertia.visit("/donation/checkout");
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx(MemberLayout, { children: /* @__PURE__ */ jsx("div", { className: "top-0 left-0 flex items-center justify-center m-2 pb-10 duration-300 ease-linear dark:bg-boxdark", children: renderStep() }) });
};
export {
  Donation as default
};
