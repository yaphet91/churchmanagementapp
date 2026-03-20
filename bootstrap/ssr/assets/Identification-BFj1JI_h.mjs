import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid/esm/index.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.mjs";
import { I as InputError } from "./InputError-Dm4RUL5I.mjs";
import "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-IrQHrc9C.mjs";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { a as addMemberDetail } from "./memberSlice-CZbZjefE.mjs";
import { s as setStepValidation, a as setValidationErrors } from "./validationSlice-D3Qd1uIP.mjs";
import { c as countries } from "./countries-R5VJ-91Z.mjs";
const validateIdentification = (userIdentificationData) => {
  let isValid = true;
  const stepErrors = {};
  const textEntryRegex = /[\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?]+/;
  if (!userIdentificationData.nationality.trim()) {
    isValid = false;
    stepErrors.nationality = "Nationality is required";
  }
  if (!userIdentificationData.addressCountry) {
    isValid = false;
    stepErrors.addressCountry = "Address Country is required";
  }
  if (!userIdentificationData.currentAddress) {
    isValid = false;
    stepErrors.currentAddress = "Your Address is required";
  }
  if (!userIdentificationData.placeOfBirth.trim()) {
    isValid = false;
    stepErrors.placeOfBirth = "Place Of Birth is required";
  }
  if (userIdentificationData.placeOfBirth.trim() && textEntryRegex.test(userIdentificationData.placeOfBirth.trim())) {
    isValid = false;
    stepErrors.placeOfBirth = "This Field must contain only alphabets";
  }
  if (userIdentificationData.province.trim() && textEntryRegex.test(userIdentificationData.province.trim())) {
    isValid = false;
    stepErrors.province = "This Field must contain only alphabets";
  }
  if (!userIdentificationData.city.trim()) {
    isValid = false;
    stepErrors.city = "City is required";
  }
  return { isValid, stepErrors };
};
const nationalityOptions = ["Eritrea", "Ethiopea", "Other"];
const Identification = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateIdentification(member);
      dispatch(setStepValidation({ step: "validIdentification", isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, dispatch]);
  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "whiterBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-6 flex items-center justify-center dark:text-gray-200 text-gray-500", children: [
      t("Tell us About your whereabouts"),
      /* @__PURE__ */ jsx("span", { className: "ml-4 hidden md:flex", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMapLocationDot }) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: fadeIn("down", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.7 },
        children: /* @__PURE__ */ jsxs("form", { action: "#", className: "space-y-6 mt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row  md:space-x-6", children: [
            /* @__PURE__ */ jsx("div", { className: "md:space-y-3 md:w-1/2", children: /* @__PURE__ */ jsx(Listbox, { value: member.nationality, onChange: (value) => handleInputChange("nationality", value), children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              !(errors == null ? void 0 : errors.nationality) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "nationality", value: t("Nationality") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.nationality }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs(Listbox.Button, { className: `relative w-full h-11 cursor-default rounded-lg bg-white dark:bg-form-input py-2 pl-3 
                  pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                   focus:border-indigo-500 dark:border-gray-600 border-gray-400
                   border`, children: [
                  member.nationality,
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
                  value: member.placeOfBirth,
                  className: "mt-3 block w-full",
                  autoComplete: "placeOfBirth",
                  isFocused: true,
                  onChange: (e) => handleInputChange("placeOfBirth", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(Listbox, { value: member.addressCountry.label, onChange: (value) => handleInputChange("addressCountry", value.label), children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              !(errors == null ? void 0 : errors.addressCountry) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "addressCountry", value: t("Country of Address") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.addressCountry }),
              /* @__PURE__ */ jsxs("div", { className: "mt-1 relative", children: [
                /* @__PURE__ */ jsxs(Listbox.Button, { className: `relative h-11 w-full cursor-default rounded-lg bg-white dark:bg-form-input py-2 pl-3 
                  pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                   focus:border-indigo-500 border-gray-400 dark:border-gray-600
                   border`, children: [
                  /* @__PURE__ */ jsx("span", { className: "block truncate", children: member.addressCountry }),
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
                  value: member.currentAddress,
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
                  value: member.province,
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
                  value: member.city,
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
const Identification$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Identification
}, Symbol.toStringTag, { value: "Module" }));
export {
  Identification as I,
  Identification$1 as a,
  validateIdentification as v
};
