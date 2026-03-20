import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { M as MultiSelect } from "./MultiSelect-PyBsrJje.mjs";
import "@heroicons/react/solid/esm/index.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.mjs";
import { C as CheckboxTwo } from "./CheckboxTwo-DnAc0Jue.mjs";
import "@inertiajs/react";
import { f as fadeIn } from "./variants-IrQHrc9C.mjs";
import { useDispatch, useSelector } from "react-redux";
import { I as InputError } from "./InputError-Dm4RUL5I.mjs";
import "./newChurchSlice-CfxFHsE6.mjs";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import "./validationSlice-D3Qd1uIP.mjs";
import "./memberSlice-CZbZjefE.mjs";
import { a as addChildDetails } from "./childMemberSlice-DlhqqVZb.mjs";
import "@reduxjs/toolkit";
const churchServiceOptions = [
  // { value: ' - ', text: ' - ', selected: false },
  { value: "መዝሙር", text: "ክፍሊ መዝሙር", selected: false },
  { value: "ስነ ጥበብ", text: "ክፍሊ ስነ ጥበብ", selected: false }
];
const sacramentOptions = [
  { value: "ንስሓ", text: "ንስሓ", selected: false },
  { value: "ጥምቀት", text: "ጥምቀት", selected: false },
  { value: "ቁርባን", text: "ቁርባን", selected: false },
  // { value: 'ሜሮን', text: 'ሜሮን', selected: false },
  { value: "ቀንዴል", text: "ቀንዴል", selected: false },
  { value: "ተኽሊል", text: "ተኽሊል", selected: false },
  { value: "ክህነት", text: "ክህነት", selected: false },
  {
    value: "ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን",
    text: "ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን",
    selected: false
  }
];
const churchesData = [
  {
    diocese: "Asmara",
    churches: [
      { id: "A01", name: "St. Mary Cathedral" },
      { id: "A02", name: "st. Gebriel Akria" },
      { id: "A03", name: "st. Geiorgis Alfermayo" }
    ]
  },
  {
    diocese: "United Arab Emirates",
    churches: [
      { id: "D01", name: "Holy Trinity Church Dubai" },
      { id: "D01", name: "Kidane Mehret Abu Dhabi" }
    ]
  }
];
const ChildChurchParticipation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const child = useSelector((state) => state.child.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedChurchService, setSelectedChurchService] = useState(churchServiceOptions.filter((option) => option.selectedChurchService).map((option) => option.value));
  const [selectedSacraments, setSelectedSacraments] = useState(sacramentOptions.filter((option) => option.selectedSacraments).map((option) => option.value));
  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };
  return /* @__PURE__ */ jsxs("section", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 h-auto  md:min-h-500 lg:min-h-[500px]`, id: "child-church-participation", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-10 flex items-center justify-center text-gray-200", children: [
      t("Church participation Information"),
      /* @__PURE__ */ jsx("span", { className: "hidden md:flex ml-4", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChurch }) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "md:space-x-4  md:flex flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 gap-3", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex-1",
            variants: fadeIn("down", 0.2),
            initial: "show",
            whileInView: "show",
            viewport: { once: true, amount: 0.7 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-between items-center", children: !(errors == null ? void 0 : errors.selectedChurchService) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "churchService", value: t("Which field do you want to served in") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.selectedChurchService }) }),
              /* @__PURE__ */ jsx(
                MultiSelect,
                {
                  disabled: child.notServedInChurch,
                  id: "churchService",
                  options: churchServiceOptions,
                  optionsPrefix: "",
                  maxSelections: 3,
                  selected: child.selectedChurchService,
                  setSelected: setSelectedChurchService,
                  onSelectionChange: (value) => handleInputChange("selectedChurchService", value)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "space-y-2 flex-1 mt-4",
            variants: fadeIn("right", 0.2),
            initial: "show",
            whileInView: "show",
            viewport: { once: true, amount: 0.7 },
            children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "selectCourses", value: "Select Courses you have taken" }),
              /* @__PURE__ */ jsxs("div", { className: "border border-gray-500 rounded-lg w-full p-6 bg-gray-200 dark:bg-form-input space-y-5", children: [
                /* @__PURE__ */ jsx("div", { className: " flex flex-row", children: /* @__PURE__ */ jsx("div", { className: "min-w-full", children: /* @__PURE__ */ jsx(
                  CheckboxTwo,
                  {
                    id: "level1SundaySchool",
                    label: t("Level 1 Sunday School"),
                    onChange: () => handleInputChange("level1SundaySchool", !child.level1SundaySchool),
                    checked: child.level1SundaySchool,
                    name: "level1SundaySchool"
                  }
                ) }) }),
                /* @__PURE__ */ jsx("div", { className: " flex flex-row", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
                  CheckboxTwo,
                  {
                    id: "level2SundaySchool",
                    label: t("Level 2 Sunday School"),
                    onChange: () => handleInputChange("level2SundaySchool", !child.level2SundaySchool),
                    checked: child.level2SundaySchool,
                    name: "level2SundaySchool"
                  }
                ) }) }),
                /* @__PURE__ */ jsx("div", { className: " flex flex-row", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
                  CheckboxTwo,
                  {
                    id: "level3SundaySchool",
                    label: t("Level 3 Sunday School"),
                    onChange: () => handleInputChange("level3SundaySchool", !child.level3SundaySchool),
                    checked: child.level3SundaySchool,
                    name: "level3SundaySchool"
                  }
                ) }) }),
                /* @__PURE__ */ jsx("div", { className: " flex flex-row", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
                  CheckboxTwo,
                  {
                    id: "level4SundaySchool",
                    label: t("Level 4 Sunday School"),
                    onChange: () => handleInputChange("level4SundaySchool", !child.level4SundaySchool),
                    checked: child.level4SundaySchool,
                    name: "level4SundaySchool"
                  }
                ) }) })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gap-4 space-y-2 md:w-1/2 mt-3 md:mt-0", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "space-y-3",
          variants: fadeIn("down", 0.2),
          initial: "show",
          whileInView: "show",
          viewport: { once: true, amount: 0.7 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.selectedSacraments) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "selectedSacraments", value: t("Which Sacraments have you recieved") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.selectedSacraments }),
              /* @__PURE__ */ jsx(
                MultiSelect,
                {
                  id: "selectedSacraments",
                  options: sacramentOptions,
                  optionsPrefix: "",
                  maxSelections: 7,
                  selected: child.selectedSacraments,
                  setSelected: setSelectedSacraments,
                  onSelectionChange: (value) => handleInputChange("selectedSacraments", value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              !(errors == null ? void 0 : errors.fatherOfConfession) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherOfConfession", value: t("Child's priest (if different from parents')") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherOfConfession }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "fatherOfConfession",
                  type: "text",
                  name: "fatherOfConfession",
                  value: child.fatherOfConfession,
                  className: "mt-3 block w-full",
                  autoComplete: "fatherOfConfession",
                  isFocused: true,
                  onChange: (e) => handleInputChange("fatherOfConfession", e.target.value)
                }
              )
            ] })
          ]
        }
      ) })
    ] }) })
  ] });
};
export {
  churchesData,
  ChildChurchParticipation as default
};
