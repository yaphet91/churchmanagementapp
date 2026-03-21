import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import { Listbox } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid/esm/index.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import "./validationSlice-D3Qd1uIP.js";
import { useTranslation } from "react-i18next";
import { c as countries } from "./countries-R5VJ-91Z.js";
import { a as addChildDetails } from "./childMemberSlice-DlhqqVZb.js";
import "@reduxjs/toolkit";
const nationalityOptions = ["Eritrea", "Ethiopea", "Other"];
const ChildIdentification = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const child = useSelector((state) => state.child.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);
  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };
  return /* @__PURE__ */ jsxs("section", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[370px]`, id: "child-identification", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-6 flex items-center justify-center text-gray-200", children: [
      t("Identification"),
      /* @__PURE__ */ jsx("span", { className: "ml-4 hidden md:flex", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMapLocationDot }) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        children: /* @__PURE__ */ jsxs("form", { action: "#", className: "space-y-6 mt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row  md:space-x-6", children: [
            /* @__PURE__ */ jsx("div", { className: "md:space-y-3 md:w-1/2", children: /* @__PURE__ */ jsx(Listbox, { value: child.nationality, onChange: (value) => handleInputChange("nationality", value), children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              !(errors == null ? void 0 : errors.nationality) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "nationality", value: t("Nationality") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.nationality }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs(Listbox.Button, { className: `relative w-full h-11 cursor-default rounded-lg bg-white dark:bg-form-input py-2 pl-3 
                  pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                   focus:border-indigo-500 border-gray-600
                   border`, children: [
                  child.nationality,
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx(SelectorIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) })
                ] }),
                /* @__PURE__ */ jsx(Listbox.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md\n                       bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: nationalityOptions.map((option, personIdx) => /* @__PURE__ */ jsx(
                  Listbox.Option,
                  {
                    className: ({ active }) => `relative cursor-default hover:bg-gray-300 select-none py-2 pl-10 pr-4 ${active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"}`,
                    value: option,
                    children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("span", { className: `block truncate ${selected ? "font-medium" : "font-normal"}`, children: option }),
                      selected ? /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
                    ] })
                  },
                  personIdx
                )) })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.placeOfBirth) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "placeOfBirth", value: t("Place Of Birth") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.placeOfBirth }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "placeOfBirth",
                  type: "text",
                  name: "placeOfBirth",
                  value: child.placeOfBirth,
                  className: "mt-3 block w-full",
                  autoComplete: "placeOfBirth",
                  isFocused: true,
                  onChange: (e) => handleInputChange("placeOfBirth", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(Listbox, { value: child.addressCountry.label, onChange: (value) => handleInputChange("addressCountry", value.label), children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              !(errors == null ? void 0 : errors.addressCountry) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "addressCountry", value: t("Country of Address") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.addressCountry }),
              /* @__PURE__ */ jsxs("div", { className: "mt-1 relative", children: [
                /* @__PURE__ */ jsxs(Listbox.Button, { className: `relative h-11 w-full cursor-default rounded-lg bg-white dark:bg-form-input py-2 pl-3 
                  pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                   focus:border-indigo-500 border-gray-600
                   border`, children: [
                  /* @__PURE__ */ jsx("span", { className: "block truncate", children: child.addressCountry }),
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx(SelectorIcon, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) })
                ] }),
                /* @__PURE__ */ jsx(Listbox.Options, { className: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm", children: countries.map((country, countryIdx) => /* @__PURE__ */ jsx(
                  Listbox.Option,
                  {
                    className: ({ active }) => `${active ? "text-white bg-indigo-600" : "text-gray-900"} cursor-default select-none relative py-2 pl-3 pr-9`,
                    value: country,
                    children: ({ selected, active }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx("img", { src: `https://flagcdn.com/w20/${country.code.toLowerCase()}.png`, alt: "", className: "w-8 h-5 flex-shrink-0 mr-2" }),
                        /* @__PURE__ */ jsx("span", { className: `${selected ? "font-semibold" : "font-normal"} block truncate`, children: country.label })
                      ] }),
                      selected ? /* @__PURE__ */ jsx("span", { className: `${active ? "text-white" : "text-indigo-600"} absolute inset-y-0 right-0 flex items-center pr-4`, children: /* @__PURE__ */ jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) }) : null
                    ] })
                  },
                  countryIdx
                )) })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 md:w-1/2 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.currentAddress) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "currentAddress", value: t("Current Address") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.currentAddress }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "currentAddress",
                  type: "text",
                  name: "currentAddress",
                  value: child.currentAddress,
                  className: "mt-1 block w-full",
                  autoComplete: "address-level1",
                  isFocused: true,
                  onChange: (e) => handleInputChange("currentAddress", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:w-1/2", children: [
              !(errors == null ? void 0 : errors.province) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "province", value: t("Province") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.province }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "province",
                  type: "text",
                  name: "province",
                  value: child.province,
                  className: "mt-1 block w-full",
                  autoComplete: "address-level1",
                  isFocused: true,
                  onChange: (e) => handleInputChange("province", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 md:w-1/2 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.city) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "city", value: t("City") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.city }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "city",
                  type: "text",
                  name: "city",
                  value: child.city,
                  className: "mt-1 block w-full",
                  autoComplete: "name",
                  isFocused: true,
                  onChange: (e) => handleInputChange("city", e.target.value)
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] });
};
export {
  ChildIdentification as default
};
