import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import "@inertiajs/react";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-IrQHrc9C.js";
import { useDispatch, useSelector } from "react-redux";
import { a as addMemberDetail } from "./memberSlice-CZbZjefE.js";
import { useTranslation } from "react-i18next";
import { s as setStepValidation, a as setValidationErrors } from "./validationSlice-D3Qd1uIP.js";
import "@heroicons/react/solid/esm/index.js";
import { c as countries } from "./countries-R5VJ-91Z.js";
import { A as AutoCompleteTwo } from "./AutoCompleteTwo-DAVTRqgJ.js";
import { C as Checkbox } from "./Checkbox-B46RnHis.js";
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
    } else if (input.replace(/^0+/, "").length > 10) ;
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
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "whiterBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-6 flex items-center justify-center text-gray-500 dark:text-gray-200", children: [
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
                /* @__PURE__ */ jsxs("label", { className: "px-4 flex cursor-pointer text-sm select-none items-center text-gray-600 dark:text-gray-200 underline", children: [
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
