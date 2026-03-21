import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { P as Profile, R as RadioGroup } from "./RadioGroup-DbBnnJ0e.js";
import "flatpickr";
/* empty css                       */
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.js";
import { a as addMemberDetail } from "./memberSlice-CZbZjefE.js";
import { parse, differenceInYears } from "date-fns";
import { s as setStepValidation, a as setValidationErrors } from "./validationSlice-D3Qd1uIP.js";
import { a as getGenderOptions, b as getTitleOptions } from "./formData-Y1eGY-2d.js";
import { B as BirthdayEntry } from "./BirthdayEntry-DAdqgHRX.js";
const GenderOptions = [
  { id: "male", label: "Male", value: "male" },
  { id: "female", label: "Female", value: "female" }
  // Add any other options as needed
];
const titleOptions = [
  { value: "Deacon", label: "Deacon" },
  { value: "Mr.", label: "Mr." },
  { value: "Ms.", label: "Ms." },
  { value: "Miss.", label: "Miss." },
  { value: "Mrs.", label: "Mrs." },
  { value: "Dr.", label: "Dr." },
  { value: "Prof.", label: "Prof." },
  { value: "Lt.", label: "Lt." },
  { value: "Capt.", label: "Capt." }
];
const validatePersonalDetails = (userData, userImageData) => {
  const tigrinyaRegex = /^[\u1200-\u137F\s]+$/;
  let isValid = true;
  const stepErrors = {};
  if (!userImageData || !userImageData.imageUrl) {
    isValid = false;
    stepErrors.imageUrl = "Profile Image is required";
  }
  if (!userData.title || !titleOptions.some((option) => option.value === userData.title)) {
    isValid = false;
    stepErrors.title = "Invalid or missing title";
  }
  if (!userData.gender || !GenderOptions.some((option) => option.value === userData.gender)) {
    isValid = false;
    stepErrors.gender = "Invalid or missing gender selection";
  }
  const birthdayValidation = validateBirthday(userData.birthday);
  if (!birthdayValidation.isValid) {
    isValid = false;
    Object.assign(stepErrors, birthdayValidation.stepErrors);
  }
  if (!userData.firstName.trim()) {
    isValid = false;
    stepErrors.firstName = "First Name is required";
  }
  if (userData.firstName.trim() && !/^[A-Za-z]+$/.test(userData.firstName)) {
    isValid = false;
    stepErrors.firstName = "First Name must contain only English alphabets";
  }
  if (!userData.fatherName) {
    isValid = false;
    stepErrors.fatherName = "Father's Name is required";
  }
  if (userData.fatherName && !/^[A-Za-z]+$/.test(userData.fatherName)) {
    isValid = false;
    stepErrors.fatherName = "Father's Name must contain only English alphabets";
  }
  if (!userData.grandFatherName) {
    isValid = false;
    stepErrors.grandFatherName = "Grand Father's Name is required";
  }
  if (userData.grandFatherName && !/^[A-Za-z]+$/.test(userData.grandFatherName)) {
    isValid = false;
    stepErrors.grandFatherName = "Grand Father's Name must contain only English alphabets";
  }
  if (!userData.motherName) {
    isValid = false;
    stepErrors.motherName = "Mother's Name is required";
  }
  if (userData.motherName && !/^[A-Za-z]+$/.test(userData.motherName)) {
    isValid = false;
    stepErrors.motherName = "Mother's Name must contain only English alphabets";
  }
  if (!userData.mothersFather) {
    isValid = false;
    stepErrors.mothersFather = "Grand Father Name (Mother Side) is required";
  }
  if (userData.mothersFather && !/^[A-Za-z]+$/.test(userData.mothersFather.trim())) {
    isValid = false;
    stepErrors.mothersFather = "This field must contain only English alphabets";
  }
  if (!userData.firstNameT) {
    isValid = false;
    stepErrors.firstNameT = "First Name(Tigrina) is required";
  }
  if (userData.firstNameT && !tigrinyaRegex.test(userData.firstNameT)) {
    isValid = false;
    stepErrors.firstNameT = "This field must be in ትግርኛ";
  }
  if (!userData.fatherNameT) {
    isValid = false;
    stepErrors.fatherNameT = "This field (Tigrina) is required";
  }
  if (userData.fatherNameT && !tigrinyaRegex.test(userData.fatherNameT)) {
    isValid = false;
    stepErrors.fatherNameT = "This field must be in ትግርኛ";
  }
  if (!userData.grandFatherNameT) {
    isValid = false;
    stepErrors.grandFatherNameT = "This field (Tigrina) is required";
  }
  if (userData.grandFatherNameT && !tigrinyaRegex.test(userData.grandFatherNameT)) {
    isValid = false;
    stepErrors.grandFatherNameT = "This field must be in ትግርኛ";
  }
  if (!userData.motherFullNameT) {
    isValid = false;
    stepErrors.motherFullNameT = "Mother's Name (Tigrina) is required";
  }
  if (userData.motherFullNameT && !tigrinyaRegex.test(userData.motherFullNameT)) {
    isValid = false;
    stepErrors.motherFullNameT = "This field must be in ትግርኛ";
  }
  return { isValid, stepErrors };
};
const validateBirthday = (birthday) => {
  if (!birthday) {
    return { isValid: false, stepErrors: { birthday: "Birthday is required" } };
  }
  const birthdayDate = parse(birthday, "MMMM d, yyyy", /* @__PURE__ */ new Date());
  const today = /* @__PURE__ */ new Date();
  const age = differenceInYears(today, birthdayDate);
  if (age < 18) {
    return { isValid: false, stepErrors: { birthday: "You must be at least 18 years old" } };
  }
  return { isValid: true, stepErrors: {} };
};
const PersonalDetails = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const userImage = useSelector((state) => state.profileImage.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  const genderOptions = getGenderOptions(t);
  const titleOptions2 = getTitleOptions(t);
  useEffect(() => {
    console.log("personal details");
    console.log(attemptedToProceed);
    if (attemptedToProceed) {
      const validationResults = validatePersonalDetails(member, userImage);
      dispatch(setStepValidation({ step: "validPersonalDetails", isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, userImage, dispatch]);
  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };
  return /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "whiterBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: /* @__PURE__ */ jsx(
    "div",
    {
      children: /* @__PURE__ */ jsxs("form", { action: "#", className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            !(errors == null ? void 0 : errors.imageUrl) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "profileImage", value: t("Profile Image") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.imageUrl, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx("div", { className: "border-2 border-dashed  dark:border-gray-500 p-2 mt-3 rounded-lg", children: /* @__PURE__ */ jsx(
              Profile,
              {
                id: "profileImage"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-[250px] mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.gender) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "gender", value: t("Gender") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.gender, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx(
              RadioGroup,
              {
                selectedValue: member.gender,
                onChange: (e) => handleInputChange("gender", e.target.value),
                options: genderOptions,
                name: "Gender *",
                id: "gender"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 items-center justify-center mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.title) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: t("Title") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.title, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx(
              AutoComplete,
              {
                options: titleOptions2,
                value: member.title,
                onChange: (value) => handleInputChange("title", value)
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "w-full mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.birthday) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "birthday", value: t("Birthday") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.birthday, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                BirthdayEntry,
                {
                  birthdayValue: member.birthday,
                  onDateChange: (value) => handleInputChange("birthday", value)
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.firstName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstName", value: t("First Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "firstName",
                type: "text",
                name: "firstName",
                value: member.firstName || "",
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("firstName", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.fatherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherName", value: t("Father's Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "fatherName",
                type: "text",
                name: "fatherName",
                value: member.fatherName,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("fatherName", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.grandFatherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "grandFatherName", value: t("Grand FatherName Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.grandFatherName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "grandFatherName",
                type: "text",
                name: "grandFatherName",
                value: member.grandFatherName,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("grandFatherName", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.firstNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstNameT", value: t("First Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "firstNameT",
                type: "text",
                name: "firstNameT",
                value: member.firstNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("firstNameT", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.fatherNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherNameT", value: t("Father's Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "fatherNameT",
                type: "text",
                name: "fatherNameT",
                value: member.fatherNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("fatherNameT", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.grandFatherNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "grandFatherNameT", value: t("Grand FatherName Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.grandFatherNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "grandFatherNameT",
                type: "text",
                name: "grandFatherNameT",
                value: member.grandFatherNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("grandFatherNameT", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4 mt-6 md:mt-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            !(errors == null ? void 0 : errors.motherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "motherName", value: t("Mother's Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.motherName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "motherName",
                type: "text",
                name: "motherName",
                value: member.motherName,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("motherName", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.mothersFather) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "mothersFather", value: t("Grand Father Name (Mother side)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.mothersFather }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "mothersFather",
                type: "text",
                name: "mothersFather",
                value: member.mothersFather,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("mothersFather", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
          !(errors == null ? void 0 : errors.motherFullNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "motherFullNameT", value: t("Mother full name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.motherFullNameT }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "motherFullNameT",
              type: "text",
              name: "motherFullNameT",
              value: member.motherFullNameT,
              className: "mt-1 block w-full",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => handleInputChange("motherFullNameT", e.target.value)
            }
          )
        ] })
      ] })
    }
  ) });
};
const PersonalDetails$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PersonalDetails
}, Symbol.toStringTag, { value: "Module" }));
export {
  PersonalDetails as P,
  PersonalDetails$1 as a,
  validatePersonalDetails as v
};
