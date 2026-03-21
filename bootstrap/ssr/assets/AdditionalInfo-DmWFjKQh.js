import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import "@inertiajs/react";
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.js";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-IrQHrc9C.js";
import { a as addMemberDetail } from "./memberSlice-CZbZjefE.js";
import { useDispatch, useSelector } from "react-redux";
import { s as setStepValidation, a as setValidationErrors } from "./validationSlice-D3Qd1uIP.js";
import { useTranslation } from "react-i18next";
import { e as getMaritalStatusOptions, f as getYesOrNo, h as getEducationLevels } from "./formData-Y1eGY-2d.js";
const validateAdditionalInfo = (userAdditionalInfoData) => {
  let isValid = true;
  const stepErrors = {};
  const textEntryRegex = /[\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?]+/;
  if (!userAdditionalInfoData.maritalStatus) {
    isValid = false;
    stepErrors.maritalStatus = "Marital Status is required";
  }
  if (!userAdditionalInfoData.haveChildren) {
    isValid = false;
    stepErrors.haveChildren = "This field is required";
  }
  if (userAdditionalInfoData.haveChildren == "Yes") {
    if (!userAdditionalInfoData.childrenNumber) {
      isValid = false;
      stepErrors.childrenNumber = "Number of Children is required";
    }
    if (userAdditionalInfoData.childrenNumber <= 0 || userAdditionalInfoData.childrenNumber > 17) {
      isValid = false;
      stepErrors.childrenNumber = "Invalid Number of children";
    }
  }
  if (!userAdditionalInfoData.firstLanguage) {
    isValid = false;
    stepErrors.firstLanguage = "First Language is required";
  }
  if (userAdditionalInfoData.firstLanguage.trim() && textEntryRegex.test(userAdditionalInfoData.firstLanguage.trim())) {
    isValid = false;
    stepErrors.firstLanguage = "This Field must contain only alphabets";
  }
  if (userAdditionalInfoData.secondLanguage.trim() && textEntryRegex.test(userAdditionalInfoData.secondLanguage.trim())) {
    isValid = false;
    stepErrors.secondLanguage = "This Field must contain only alphabets";
  }
  if (!userAdditionalInfoData.profession) {
    isValid = false;
    stepErrors.profession = "Profession is required";
  }
  if (userAdditionalInfoData.profession.trim() && textEntryRegex.test(userAdditionalInfoData.profession.trim())) {
    isValid = false;
    stepErrors.profession = "This Field must contain only alphabets";
  }
  if (!userAdditionalInfoData.levelOfEducation) {
    isValid = false;
    stepErrors.levelOfEducation = "Level Of Education is required";
  }
  return { isValid, stepErrors };
};
const AdditionalInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  const yesOrNo = getYesOrNo();
  const educationLevels = getEducationLevels();
  const maritalStatusOptions = getMaritalStatusOptions();
  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateAdditionalInfo(member);
      dispatch(setStepValidation({ step: "validAdditionalInfo", isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, dispatch]);
  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };
  const handleHaveChildren = (value) => {
    const updatedMemberDetails = { ...member, "haveChildren": value };
    if (value === "No") {
      updatedMemberDetails["childrenNumber"] = "0";
    }
    dispatch(addMemberDetail(updatedMemberDetails));
  };
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "whiterBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-3 flex items-center justify-center text-gray-500 dark:text-gray-200", children: [
      t(" Tell us More about you! we are exited"),
      " ",
      /* @__PURE__ */ jsx("span", { className: "ml-4", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPerson }) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "space-y-3",
        variants: fadeIn("center", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.7 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "w-0.45", children: [
            !(errors == null ? void 0 : errors.maritalStatus) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "maritalStatus", value: t("Marital Status") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.maritalStatus }),
            /* @__PURE__ */ jsx(
              AutoComplete,
              {
                value: member.maritalStatus,
                onChange: (value) => handleInputChange("maritalStatus", value),
                options: maritalStatusOptions
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.haveChildren) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "haveChildren", value: t("Do You have children") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.haveChildren }),
              /* @__PURE__ */ jsx(
                AutoComplete,
                {
                  value: member.haveChildren,
                  onChange: handleHaveChildren,
                  options: yesOrNo
                }
              )
            ] }),
            member.haveChildren == "Yes" && /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.childrenNumber) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "childrenNumber", value: t("Number of children") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.childrenNumber }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "childrenNumber",
                  type: "number",
                  name: "childrenNumber",
                  value: member.childrenNumber,
                  className: "mt-3 block w-full",
                  autoComplete: "childrenNumber",
                  isFocused: true,
                  onChange: (e) => handleInputChange("childrenNumber", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.firstLanguage) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstLanguage", value: t("First Language") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstLanguage }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "firstLanguage",
                  type: "text",
                  name: "firstLanguage",
                  value: member.firstLanguage,
                  className: "mt-3 block w-full",
                  autoComplete: "firstLanguage",
                  isFocused: true,
                  onChange: (e) => handleInputChange("firstLanguage", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.secondLanguage) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "secondLanguage", value: t("Second Language") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.secondLanguage }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "secondLanguage",
                  type: "text",
                  name: "secondLanguage",
                  value: member.secondLanguage,
                  className: "mt-3 block w-full",
                  autoComplete: "secondLanguage",
                  isFocused: true,
                  onChange: (e) => handleInputChange("secondLanguage", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.profession) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "profession", value: t("Profession") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.profession }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "profession",
                  type: "text",
                  name: "profession",
                  value: member.profession,
                  className: "mt-3 block w-full",
                  autoComplete: "profession",
                  isFocused: true,
                  onChange: (e) => handleInputChange("profession", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.levelOfEducation) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "levelOfEducation", value: t("Level of Education") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.levelOfEducation }),
              /* @__PURE__ */ jsx(
                AutoComplete,
                {
                  value: member.levelOfEducation,
                  onChange: (value) => handleInputChange("levelOfEducation", value),
                  options: educationLevels
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
};
const AdditionalInfo$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdditionalInfo
}, Symbol.toStringTag, { value: "Module" }));
export {
  AdditionalInfo as A,
  AdditionalInfo$1 as a,
  validateAdditionalInfo as v
};
