import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, Fragment as Fragment$1, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { T as TextInput } from "./TextInput-8_mbY4T4.js";
import { I as InputError } from "./InputError-xXRnZePM.js";
import { I as InputLabel } from "./InputLabel-BppriEiK.js";
import "@inertiajs/react";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-iKvyZPjN.js";
import { useDispatch, useSelector } from "react-redux";
import { b as addMemberDetail, s as setStepValidation, a as setValidationErrors } from "./validationSlice-CGq-i0Ki.js";
import { useTranslation } from "react-i18next";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid/esm/index.js";
import { c as countries } from "./countries-J6KwqbRl.js";
import { Listbox, Transition } from "@headlessui/react";
import { C as Checkbox } from "./Checkbox-5Xb-iHS2.js";
const validateContactInfo = (userContactData) => {
  let isValid = true;
  const stepErrors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
  if (!userContactData.email.trim()) {
    isValid = false;
    stepErrors.email = "Email is required";
  } else if (!regex.test(userContactData.email)) {
    isValid = false;
    stepErrors.email = "Email you provided is not valid!";
  }
  if (!userContactData.countryPhoneCode && !userContactData.phone) {
    isValid = false;
    stepErrors.phone = "Country Code and Phone number are required";
  } else if (!userContactData.countryPhoneCode) {
    isValid = false;
    stepErrors.phone = "Country Code is required";
  } else if (!userContactData.phone) {
    isValid = false;
    stepErrors.phone = "Phone is required";
  }
  if (!userContactData.sameAsPhoneNumber && !userContactData.whatsApp) {
    isValid = false;
    stepErrors.whatsApp = "WhatsApp is required";
  }
  if (!userContactData.emergencyContactNumber) {
    isValid = false;
    stepErrors.emergencyContactNumber = "Emergency Contact is required";
  } else if (!phoneNumberRegex.test(userContactData.emergencyContactNumber)) {
    isValid = false;
    stepErrors.emergencyContactNumber = "Not Valid Format! (Format it like +2917233423)";
  }
  if (!userContactData.contactRelation) {
    isValid = false;
    stepErrors.contactRelation = "Contact Relationship is required";
  }
  return { isValid, stepErrors };
};
const AutoCompleteTwo = ({ options, value, onChange, errors }) => {
  const [query, setQuery] = useState("");
  const filteredOptions = query === "" ? options : options.filter(
    (option) => option.label.toLowerCase().includes(query.toLowerCase())
  );
  return /* @__PURE__ */ jsx(Listbox, { value, onChange, children: ({ open }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative w-full ", children: [
    /* @__PURE__ */ jsxs(Listbox.Button, { className: "relative w-full cursor-default rounded-l-lg bg-white dark:bg-form-input py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none border border-gray-600", children: [
      /* @__PURE__ */ jsx("span", { className: "block truncate", children: value || "Select a country" }),
      /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx(SelectorIcon, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) })
    ] }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment$1,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsxs(Listbox.Options, { className: "absolute z-10 mt-1 w-[150%] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "px-3 pt-2", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50",
              placeholder: "Search...",
              onChange: (event) => setQuery(event.target.value)
            }
          ) }),
          filteredOptions.map((option, optionIdx) => /* @__PURE__ */ jsx(
            Listbox.Option,
            {
              className: ({ active }) => `${active ? "text-white bg-indigo-600" : "text-gray-900"} cursor-default select-none relative py-2 pl-3 pr-9`,
              value: option.phone,
              children: ({ selected, active }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("img", { src: `https://flagcdn.com/w20/${option.code.toLowerCase()}.png`, alt: "", className: "w-8 h-5 flex-shrink-0 mr-2" }),
                  /* @__PURE__ */ jsxs("span", { className: `${selected ? "font-semibold" : "font-normal"} block truncate`, children: [
                    option.label,
                    " (",
                    option.phone,
                    ")"
                  ] })
                ] }),
                selected && /* @__PURE__ */ jsx("span", { className: `${active ? "text-white" : "text-indigo-600"} absolute inset-y-0 right-0 flex items-center pr-4`, children: /* @__PURE__ */ jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) })
              ] })
            },
            optionIdx
          ))
        ] })
      }
    )
  ] }) }) });
};
const ContactInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  useEffect(() => {
    if (member.sameAsPhoneNumber && member.countryPhoneCode && member.phone) {
      handleInputChange("whatsApp", `${member.countryPhoneCode}${member.phone}`);
    }
  }, [member.sameAsPhoneNumber, member.countryPhoneCode, member.phone]);
  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numericInput = Number(input);
    if (input.length === 1 && input.startsWith("0")) {
      handleInputChange("phone", "");
    } else if (numericInput < 0) {
      handleInputChange("phone", "");
    } else if (input.replace(/^0+/, "").length > 10)
      ;
    else {
      handleInputChange("phone", input);
    }
  };
  const handleSameAsPhoneNumber = () => {
    handleInputChange("sameAsPhoneNumber", !member.sameAsPhoneNumber);
  };
  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateContactInfo(member);
      dispatch(setStepValidation({ step: "validContactInfo", isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, dispatch]);
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-6 flex items-center justify-center text-gray-200", children: [
      t("We are committed to tightly connect with you"),
      /* @__PURE__ */ jsx("span", { className: "hidden md:flex ml-4", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMapLocationDot }) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn("up", 0.1),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.7 },
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
                  value: member.email,
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
                    value: member.countryPhoneCode,
                    onChange: (value) => handleInputChange("countryPhoneCode", value)
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "phone",
                    type: "number",
                    name: "phone",
                    value: member.phone,
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
              !(errors == null ? void 0 : errors.emergencyContactNumber) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "emergencyContactNumber", value: t("Emergency Contact") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.emergencyContactNumber }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "emergencyContactNumber",
                  type: "tel",
                  name: "emergencyContactNumber",
                  value: member.emergencyContactNumber,
                  className: "mt-3 block w-full",
                  autoComplete: "emergencyContactNumber",
                  isFocused: true,
                  onChange: (e) => handleInputChange("emergencyContactNumber", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.contactRelation) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "contactRelation", value: t("Contact Relationship") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.contactRelation }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "contactRelation",
                  type: "text",
                  name: "contactRelation",
                  value: member.contactRelation,
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
                      checked: member.sameAsPhoneNumber,
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
                  disabled: member.sameAsPhoneNumber,
                  id: "whatsApp",
                  type: "tel",
                  name: "whatsApp",
                  value: member.whatsApp,
                  className: "mt-3 block w-full disabled:cursor-not-allowed disabled:opacity-50",
                  autoComplete: "phone",
                  onChange: (e) => handleInputChange("whatsApp", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-3", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "postalCode", value: t("P.O.Box") }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "postalCode",
                  type: "text",
                  name: "postalCode",
                  value: member.postalCode,
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
const ContactInfo$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactInfo
}, Symbol.toStringTag, { value: "Module" }));
export {
  ContactInfo as C,
  ContactInfo$1 as a,
  validateContactInfo as v
};
