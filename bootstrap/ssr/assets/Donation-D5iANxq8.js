import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import DonationSelection from "./DonationSelection-Cb-ZkBD9.js";
import AmountSelection from "./AmountSelection-uyvHTGuX.js";
import "./Checkout-BNI7k7KU.js";
import { Inertia } from "@inertiajs/inertia";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "react-redux";
import "./TooltipContext-CXfF4_Yf.js";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "react-i18next";
import "./languageSlice-BzN7Wppz.js";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "framer-motion";
import "./donationSlice-BosuJUxM.js";
import "./TextInput-CFLyt_ba.js";
import "@fortawesome/react-fontawesome";
import "@stripe/react-stripe-js";
import "./CardPay-BRweFDx-.js";
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
