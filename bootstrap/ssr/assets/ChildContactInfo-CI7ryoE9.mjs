import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { I as InputError } from "./InputError-Dm4RUL5I.mjs";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.mjs";
import "@inertiajs/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import "./validationSlice-D3Qd1uIP.mjs";
import "@heroicons/react/solid/esm/index.js";
import { c as countries } from "./countries-R5VJ-91Z.mjs";
import { A as AutoCompleteTwo } from "./AutoCompleteTwo-DAVTRqgJ.mjs";
import { C as Checkbox } from "./Checkbox-B46RnHis.mjs";
import { useTranslation } from "react-i18next";
import { a as addChildDetails } from "./childMemberSlice-DlhqqVZb.mjs";
import "@reduxjs/toolkit";
import "@headlessui/react";
const ChildContactInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const child = useSelector((state) => state.child.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    if (child.sameAsPhoneNumber && child.countryPhoneCode && child.phone) {
      handleInputChange("whatsApp", `${child.countryPhoneCode}${child.phone}`);
    }
  }, [child.sameAsPhoneNumber, child.countryPhoneCode, child.phone]);
  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numericInput = Number(input);
    if (input.length === 1 && input.startsWith("0")) {
      handleInputChange("phone", "");
    } else if (numericInput < 0) {
      handleInputChange("phone", "");
    } else if (input.replace(/^0+/, "").length > 10) ;
    else {
      handleInputChange("phone", input);
    }
  };
  const handleSameAsPhoneNumber = () => {
    handleInputChange("sameAsPhoneNumber", !child.sameAsPhoneNumber);
  };
  return /* @__PURE__ */ jsxs("section", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, id: "child-contact-info", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-6 flex items-center justify-center text-gray-200", children: [
      t("Contact Information"),
      /* @__PURE__ */ jsx("span", { className: "hidden md:flex ml-4", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMapLocationDot }) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        children: [
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.email) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("Email") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.email }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "email",
                  type: "email",
                  name: "email",
                  value: child.email,
                  className: "mt-3 block w-full",
                  autoComplete: "email",
                  isFocused: true,
                  onChange: (e) => handleInputChange("email", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.phone) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "Phone", value: t("Phone") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.phone }),
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3/5 mt-3 ", children: /* @__PURE__ */ jsx(
                  AutoCompleteTwo,
                  {
                    options: countries,
                    value: child.countryPhoneCode,
                    onChange: (value) => handleInputChange("countryPhoneCode", value)
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "phone",
                    type: "number",
                    name: "phone",
                    value: child.phone,
                    className: "mt-3 block w-full rounded-l-none",
                    autoComplete: "phone",
                    onChange: handlePhoneChange
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row gap-6 mt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.emergencyContactNumber) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "emergencyContactNumber", value: t("Parent/guardian Contact Number") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.emergencyContactNumber }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "emergencyContactNumber",
                  type: "tel",
                  name: "emergencyContactNumber",
                  value: child.emergencyContactNumber,
                  className: "mt-3 block w-full",
                  autoComplete: "emergencyContactNumber",
                  isFocused: true,
                  onChange: (e) => handleInputChange("emergencyContactNumber", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.contactRelation) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "contactRelation", value: t("Specify Contact Relationship") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.contactRelation }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "contactRelation",
                  type: "text",
                  name: "contactRelation",
                  value: child.contactRelation,
                  className: "mt-3 block w-full",
                  autoComplete: "contactRelation",
                  isFocused: true,
                  onChange: (e) => handleInputChange("contactRelation", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row gap-6 mt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                !(errors == null ? void 0 : errors.whatsApp) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "whatsApp", value: t("WhatsApp") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.whatsApp }),
                /* @__PURE__ */ jsxs("label", { className: "px-4 flex cursor-pointer text-sm select-none items-center text-gray-200 underline", children: [
                  /* @__PURE__ */ jsx(
                    Checkbox,
                    {
                      id: "sameAsPhoneNumber",
                      name: "sameAsPhoneNumber",
                      checked: child.sameAsPhoneNumber,
                      onChange: handleSameAsPhoneNumber,
                      className: "mx-2"
                    }
                  ),
                  t("Same as phone number")
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  disabled: child.sameAsPhoneNumber,
                  id: "whatsApp",
                  type: "tel",
                  name: "whatsApp",
                  value: child.whatsApp,
                  className: "mt-3 block w-full disabled:cursor-not-allowed disabled:opacity-50",
                  autoComplete: "phone",
                  onChange: (e) => handleInputChange("whatsApp", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-3", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "postalCode", value: t("P.O.Box (Optional)") }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "postalCode",
                  type: "text",
                  name: "postalCode",
                  value: child.postalCode,
                  className: "mt-3 block w-full",
                  autoComplete: "postalCode",
                  onChange: (e) => handleInputChange("postalCode", e.target.value),
                  maxLength: 10
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
};
export {
  ChildContactInfo as default
};
