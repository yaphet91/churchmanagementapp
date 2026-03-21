import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import "@inertiajs/react";
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.js";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import "./validationSlice-D3Qd1uIP.js";
import { useTranslation } from "react-i18next";
import { c as getSchoolLevels } from "./formData-Y1eGY-2d.js";
import { a as addChildDetails } from "./childMemberSlice-DlhqqVZb.js";
import "@headlessui/react";
import "@heroicons/react/solid/esm/index.js";
import "@reduxjs/toolkit";
const ChildAdditionalInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const child = useSelector((state) => state.child.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);
  const schoolLevels = getSchoolLevels();
  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };
  return /* @__PURE__ */ jsxs("section", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[300px]`, id: "child-additional-info", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold py-3 flex items-center justify-center text-gray-200", children: [
      t("Additional Details !"),
      " ",
      /* @__PURE__ */ jsx("span", { className: "ml-4", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPerson }) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row md:space-x-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.firstLanguage) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstLanguage", value: t("First Language") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstLanguage }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "firstLanguage",
                  type: "text",
                  name: "firstLanguage",
                  value: child.firstLanguage,
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
                  value: child.secondLanguage,
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
              !(errors == null ? void 0 : errors.hobbies) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "hobbies", value: t("Hobbies") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.hobbies }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "hobbies",
                  type: "text",
                  name: "hobbies",
                  value: child.hobbies,
                  className: "mt-3 block w-full",
                  autoComplete: "hobbies",
                  isFocused: true,
                  onChange: (e) => handleInputChange("hobbies", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
              !(errors == null ? void 0 : errors.levelOfEducation) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "levelOfEducation", value: t("Level of Education") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.levelOfEducation }),
              /* @__PURE__ */ jsx(
                AutoComplete,
                {
                  value: child.levelOfEducation,
                  onChange: (value) => handleInputChange("levelOfEducation", value),
                  options: schoolLevels
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
  ChildAdditionalInfo as default
};
