import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { I as InputError } from "./InputError-Dm4RUL5I.mjs";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.mjs";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { P as Profile, R as RadioGroup } from "./RadioGroup-n185qax-.mjs";
import "flatpickr";
/* empty css                        */
import "@heroicons/react/solid/esm/index.js";
import "./validationSlice-D3Qd1uIP.mjs";
import { a as getGenderOptions, b as getTitleOptions } from "./formData-Y1eGY-2d.mjs";
import { B as BirthdayEntry } from "./BirthdayEntry-DAdqgHRX.mjs";
import { a as addChildDetails } from "./childMemberSlice-DlhqqVZb.mjs";
import "./CloseIcon-CqHzHK5A.mjs";
import "react-image-crop";
import "./userImageSlice-6eE4yU9I.mjs";
import "@reduxjs/toolkit";
import "@inertiajs/inertia";
import "axios";
import "@fortawesome/react-fontawesome";
import "lucide-react";
const ChildDetails = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const child = useSelector((state) => state.child.value);
  useSelector((state) => state.profileImage.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  const genderOptions = getGenderOptions(t);
  getTitleOptions(t);
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
        // Change to 'auto' if 'smooth' causes issues
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };
  return /* @__PURE__ */ jsx("section", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, id: "child-details", children: /* @__PURE__ */ jsxs(
    "div",
    {
      children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl mb-10 font-semibold text-center", children: [
          t("Please Enter Your Child's Details !"),
          /* @__PURE__ */ jsx("span", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:flex md:flex-col gap-5 md:w-[30%]", children: [
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              !(errors == null ? void 0 : errors.imageUrl) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "profileImage", value: t("Profile Image") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.imageUrl, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx("div", { className: "border-2 border-dashed flex items-center justify-start dark:border-gray-500 p-2 mt-3 rounded-lg", children: /* @__PURE__ */ jsx(
                Profile,
                {
                  isChild: true,
                  id: "profileImage"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.gender) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "gender", value: t("Gender") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.gender, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                RadioGroup,
                {
                  selectedValue: child.gender,
                  onChange: (e) => handleInputChange("gender", e.target.value),
                  options: genderOptions,
                  name: "Gender *",
                  id: "gender"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.birthday) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "birthday", value: t("Birthday") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.birthday, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                BirthdayEntry,
                {
                  birthdayValue: child.birthday,
                  onDateChange: (value) => handleInputChange("birthday", value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-[65%] space-y-7", children: [
            /* @__PURE__ */ jsx("div", { className: "md:flex gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.firstName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstName", value: t("First Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstName }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "firstName",
                  type: "text",
                  name: "firstName",
                  value: child.firstName || "",
                  className: "mt-3 block w-full",
                  autoComplete: "username",
                  isFocused: true,
                  onChange: (e) => handleInputChange("firstName", e.target.value)
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
                !(errors == null ? void 0 : errors.fatherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherName", value: t("Father's Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherName }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "fatherName",
                    type: "text",
                    name: "fatherName",
                    value: child.fatherName,
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
                    value: child.grandFatherName,
                    className: "mt-1 block w-full",
                    autoComplete: "username",
                    isFocused: true,
                    onChange: (e) => handleInputChange("grandFatherName", e.target.value)
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
                    value: child.motherName,
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
                    value: child.mothersFather,
                    className: "mt-1 block w-full",
                    autoComplete: "username",
                    isFocused: true,
                    onChange: (e) => handleInputChange("mothersFather", e.target.value)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "md:flex gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.firstNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstNameT", value: t("First Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstNameT }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "firstNameT",
                  type: "text",
                  name: "firstNameT",
                  value: child.firstNameT,
                  className: "mt-1 block w-full",
                  autoComplete: "username",
                  isFocused: true,
                  onChange: (e) => handleInputChange("firstNameT", e.target.value)
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
                !(errors == null ? void 0 : errors.fatherNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherNameT", value: t("Father's Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherNameT }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "fatherNameT",
                    type: "text",
                    name: "fatherNameT",
                    value: child.fatherNameT,
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
                    value: child.grandFatherNameT,
                    className: "mt-1 block w-full",
                    autoComplete: "username",
                    isFocused: true,
                    onChange: (e) => handleInputChange("grandFatherNameT", e.target.value)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "md:flex gap-4 mt-6 md:mt-0", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.motherFullNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "motherFullNameT", value: t("Mother full name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.motherFullNameT }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "motherFullNameT",
                  type: "text",
                  name: "motherFullNameT",
                  value: child.motherFullNameT,
                  className: "mt-1 block w-full",
                  autoComplete: "username",
                  isFocused: true,
                  onChange: (e) => handleInputChange("motherFullNameT", e.target.value)
                }
              )
            ] }) })
          ] })
        ] })
      ]
    }
  ) });
};
export {
  ChildDetails as default
};
