import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import DonationSelection from "./DonationSelection-B6Xh1Dri.mjs";
import AmountSelection from "./AmountSelection-zV_uSt8f.mjs";
import "./Checkout-Dz5bd8tj.mjs";
import { Inertia } from "@inertiajs/inertia";
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
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "framer-motion";
import "./donationSlice-BosuJUxM.mjs";
import "./TextInput-CFLyt_ba.mjs";
import "@fortawesome/react-fontawesome";
import "@stripe/react-stripe-js";
import "./CardPay-BRweFDx-.mjs";
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
