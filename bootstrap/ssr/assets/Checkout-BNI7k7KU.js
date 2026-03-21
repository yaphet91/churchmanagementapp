import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { C as CardPay, L as LoadingScreen } from "./CardPay-BRweFDx-.js";
import { useSelector } from "react-redux";
import "./TextInput-CFLyt_ba.js";
import { useTranslation } from "react-i18next";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import { loadStripe } from "@stripe/stripe-js";
import "./donationSlice-BosuJUxM.js";
import { Inertia } from "@inertiajs/inertia";
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
import "./languageSlice-BzN7Wppz.js";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
const stripePromise = loadStripe("pk_test_51O2opBBoCA0aBp3IuGY6fWkCOQAi9XcmzO84LZ5DiMTpVi7vfkQK7iPap59sCjn4wX6GGshbOuGaWnwKfYYIYIUC00rc6KHo8Q");
const appearance = {
  theme: "night",
  variables: {
    colorPrimary: "#0570de",
    colorBackground: "#ffffff",
    colorText: "#30313d",
    colorDanger: "#df1b41",
    fontFamily: "Ideal Sans, system-ui, sans-serif",
    spacingUnit: "5px",
    borderRadius: "4px"
  }
};
const CheckoutForm = ({ auth }) => {
  const { t } = useTranslation();
  const donation = useSelector((state) => state.donation.value);
  const today = /* @__PURE__ */ new Date();
  const [fullName, setFullName] = useState("");
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const goToPreviousStep = () => {
    Inertia.visit("/donations");
  };
  return /* @__PURE__ */ jsx(MemberLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full p-10  dark:bg-boxdark", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-gray-500 mb-5", children: "Donation Details" }),
      /* @__PURE__ */ jsx("div", { className: "w-[80%]", children: /* @__PURE__ */ jsx("div", { className: "flex-1 mt-6 md:mt-0", children: /* @__PURE__ */ jsx(
        "input",
        {
          id: "fullName",
          type: "text",
          name: "fullName",
          value: fullName || auth.user.name,
          placeholder: "Full Name",
          className: "mt-1 block w-full drop-shadow-xl font-Sohne text-lg border-b-2 border-gray-300 dark:border-gray-600 rounded-md dark:bg-boxdark",
          autoComplete: "username",
          isFocused: true,
          onChange: (e) => setFullName(e.target.value)
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 py-4 px-2 text-gray-600 dark:text-gray-300 mb-10", children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          "Date: ",
          formattedDate
        ] }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Donation reason: ",
          /* @__PURE__ */ jsxs("span", { className: "uppercase", children: [
            " ",
            donation.reason
          ] })
        ] }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Description : ",
          donation.discription
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 w-[70%]", children: [
        /* @__PURE__ */ jsx("h1", { children: "Total Amount of Donation" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl text-blue-900 dark:text-gray-200 font-semibold py-6 px-4 rounded-md border-gray-300 dark:border-gray-600 border", children: [
          donation.amount,
          " AED"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "p-1 text-gray-300 dark:text-gray-500 rounded-md bg-gray-200 w-[100px]  dark:bg-gray-900",
          onClick: goToPreviousStep,
          children: "Back"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(CardPay, { auth })
  ] }) });
};
const Checkout = ({ auth, goToPreviousStep }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const donation = useSelector((state) => state.donation.value);
  useEffect(() => {
    axios.post("/create_donation_intent", {
      amount: donation.amount,
      reason_of_donation: donation.reason
    }).then((response) => {
      setClientSecret(response.data.clientSecret);
      setIsLoading(false);
    }).catch((error2) => {
      console.error("Error fetching client secret:", error2);
      setError("Failed to load payment information.");
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsx(LoadingScreen, {});
  }
  if (error) {
    return /* @__PURE__ */ jsxs("div", { children: [
      "Error: ",
      error
    ] });
  }
  const options = {
    clientSecret,
    appearance
  };
  return /* @__PURE__ */ jsx(Elements, { stripe: stripePromise, options, children: /* @__PURE__ */ jsx(CheckoutForm, { auth, goToPreviousStep }) });
};
export {
  CheckoutForm,
  Checkout as default
};
