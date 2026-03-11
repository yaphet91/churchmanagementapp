import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { i as images } from "./images-SyjpYB08.js";
import { A as AutoComplete } from "./AutoComplete-blIwAEV8.js";
import { T as TextInput } from "./TextInput-8_mbY4T4.js";
import { I as InputLabel } from "./InputLabel-BppriEiK.js";
import { useSelector, useDispatch } from "react-redux";
import "@inertiajs/react";
import { f as fadeIn } from "./variants-iKvyZPjN.js";
import { createSlice } from "@reduxjs/toolkit";
import { C as CloseIcon } from "./CloseIcon-lDBYkuZD.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { s as setStepValidation, a as setValidationErrors, b as addMemberDetail } from "./validationSlice-CGq-i0Ki.js";
import { I as InputError } from "./InputError-xXRnZePM.js";
import { C as Checkbox } from "./Checkbox-5Xb-iHS2.js";
const validateChurchParticipation = (userChurchHistoryData) => {
  let isValid = true;
  const stepErrors = {};
  if (!Array.isArray(userChurchHistoryData.selectedSacraments) || userChurchHistoryData.selectedSacraments.length === 0) {
    isValid = false;
    stepErrors.selectedSacraments = "Sacraments are required";
  }
  if (!userChurchHistoryData.notServedInChurch && (!Array.isArray(userChurchHistoryData.selectedChurchService) || userChurchHistoryData.selectedChurchService.length === 0)) {
    isValid = false;
    stepErrors.selectedChurchService = "Church Service is required";
  }
  if (!userChurchHistoryData.isNewChurchSubmitted && userChurchHistoryData.churchNotListed) {
    isValid = false;
    stepErrors.addYourChurch = "Add Your Church in Eritrea";
  }
  if (!userChurchHistoryData.churchNotListed && !userChurchHistoryData.selectedDioceseCode) {
    isValid = false;
    stepErrors.selectedDioceseCode = "Diocese is required";
  }
  if (!userChurchHistoryData.churchNotListed && !userChurchHistoryData.selectedChurchCode) {
    isValid = false;
    stepErrors.selectedChurchCode = "Church name is required";
  }
  if (!userChurchHistoryData.priestInEritrea) {
    isValid = false;
    stepErrors.priestInEritrea = "Priest Name is required";
  }
  return { isValid, stepErrors };
};
const MultiSelect = ({ options: initialOptions, label, optionsPrefix = "", maxSelections, onSelectionChange, selected, setSelected, disabled }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  useState("");
  const toggleDropdown = (event) => {
    event.stopPropagation();
    if (!disabled) {
      setShow((prevShow) => !prevShow);
    }
  };
  const select = (optionValue) => {
    setSelected((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(optionValue);
      const canSelectMore = prevSelected.length < maxSelections || isAlreadySelected;
      if (isAlreadySelected) {
        const newSelection = prevSelected.filter((value) => value !== optionValue);
        onSelectionChange(newSelection);
        setSelected(newSelection);
        return newSelection;
      } else if (canSelectMore) {
        const newSelection = [...prevSelected, optionValue];
        onSelectionChange(newSelection);
        setSelected(newSelection);
        return newSelection;
      } else {
        console.log(`Selection limit of ${maxSelections} reached.`);
        return prevSelected;
      }
    });
  };
  const remove = (optionValue, event) => {
    event.stopPropagation();
    setSelected((prevSelected) => {
      const updatedSelection = prevSelected.filter((value) => value !== optionValue);
      onSelectionChange(updatedSelection);
      setSelected(updatedSelection);
      return updatedSelection;
    });
  };
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setShow(false);
      }
    };
    if (show) {
      const timer = setTimeout(() => {
        document.addEventListener("click", clickHandler);
      }, 10);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", clickHandler);
      };
    }
  }, [show]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("label", { className: "mb-3 block text-sm font-medium text-black dark:text-white", children: label }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: `relative z-10 inline-block w-full  ${disabled ? "opacity-70 cursor-not-allowed" : ""}`, "aria-disabled": disabled, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-2 flex rounded border border-stroke py-2 bg-gray-200\n                    pl-3 pr-3 outline-none transition focus:border-primary active:border-primary\n                     dark:border-form-strokedark dark:bg-form-input disabled:cursor-not-allowed", onClick: toggleDropdown, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-auto flex-wrap gap-3", children: [
          Array.isArray(selected) && selected.map((value) => {
            var _a;
            return /* @__PURE__ */ jsxs("div", { className: "my-1.5 flex items-center justify-center rounded\n                                 border-[.5px] border-gray-300 bg-gray py-.5 px-2.5  text-sm font-medium text-gray-600 dark:text-gray-200\n                                 dark:border-strokedark dark:bg-white/30", children: [
              /* @__PURE__ */ jsx("div", { className: "max-w-full flex-initial", children: (_a = initialOptions.find((option) => option.value === value)) == null ? void 0 : _a.value }),
              /* @__PURE__ */ jsx("div", { onClick: (event) => remove(value, event), className: "cursor-pointer pl-2 hover:text-danger", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "fill-current",
                  role: "button",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z",
                      fill: "currentColor"
                    }
                  )
                }
              ) })
            ] }, value);
          }),
          selected.length === 0 && /* @__PURE__ */ jsx("div", { className: "flex-1 text-gray-600", children: "Select an option" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex w-8 items-center py-1 pl-1 pr-1 text-gray-800", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: toggleDropdown,
            className: "h-6 w-6 cursor-pointer outline-none focus:outline-none",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("g", { opacity: "0.8", children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",
                    fill: "#637381"
                  }
                ) })
              }
            )
          }
        ) })
      ] }),
      show && /* @__PURE__ */ jsx("div", { className: `absolute top-full left-0 z-10 w-full overflow-y-auto border dark:border-gray-600 rounded
                         bg-white shadow dark:bg-form-input ${show ? "" : "hidden"}`, ref: dropdownRef, children: /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col", children: initialOptions.map((option) => {
        const isDisabled = maxSelections && selected.length >= maxSelections && !selected.includes(option.value);
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-full cursor-pointer text-graydark dark:text-white rounded-t border-b border-gray-300 
                                             hover:bg-gray-300 dark:border-form-strokedark 
                                     ${isDisabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} `,
            onClick: () => !isDisabled && select(option.value),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 
                                        ${selected.includes(option.value) ? "border-primary" : ""}
                                        ${isDisabled ? "bg-gray-200 text-gray-500" : ""} `,
                children: /* @__PURE__ */ jsx("div", { className: "flex w-full items-center dark:hover:text-black", children: /* @__PURE__ */ jsxs("div", { className: "mx-2 leading-6", children: [
                  optionsPrefix,
                  option.text
                ] }) })
              }
            )
          },
          option.value
        );
      }) }) })
    ] }) })
  ] });
};
const CheckboxTwo = ({ id, checked, label, onChange, name }) => {
  const theme = useSelector((store) => store.theme.theme);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    "label",
    {
      htmlFor: id,
      className: "flex cursor-pointer text-sm select-none items-center text-gray-500 dark:text-gray-300",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              id,
              name,
              className: "sr-only",
              checked,
              onChange
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `mr-4 flex h-5 w-5 items-center justify-center rounded border ${checked ? "border-primary border-2  dark:bg-transparent" : "border-gray-400 dark:border-gray"}`,
              children: checked && /* @__PURE__ */ jsx(
                "svg",
                {
                  width: "11",
                  height: "8",
                  viewBox: "0 0 11 8",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z",
                      fill: theme == "light" ? "black" : "white",
                      stroke: "#3056D3",
                      strokeWidth: "0.4"
                    }
                  )
                }
              )
            }
          )
        ] }),
        label
      ]
    }
  ) });
};
const initialState$2 = {
  value: {
    livingWithChrist: false,
    orthodoxyTeachingOfSalvation: false,
    introductionToOrthodoxy: false,
    sevenSacramentOfChurch: false,
    comparativeTheology: false,
    fiveChurchPillarsOfMystery: false,
    historicalBibleStudy: false,
    universalChurchHistory: false,
    spiritualQuiteTime: false,
    churchCanonsAndRites: false,
    repentance: false,
    spiritualService: false,
    introductionToGeez: false,
    christianDiscipline: false
  }
};
const userCoursesSlice = createSlice(
  {
    name: "userCourses",
    initialState: initialState$2,
    reducers: {
      addUserCourses: (state, action) => {
        state.value = { ...state.value, ...action.payload };
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserCourses } = userCoursesSlice.actions;
userCoursesSlice.reducer;
const initialState$1 = {
  isValid: true,
  value: {},
  errors: {}
};
const newChurchSlice = createSlice(
  {
    name: "newChurch",
    initialState: initialState$1,
    reducers: {
      addNewChurch: (state, action) => {
        state.value = action.payload;
      },
      setNewChurchErrors: (state, action) => {
        state.errors = action.payload;
      },
      setNewChurchValidation: (state, action) => {
        const { isValid, errors } = action.payload;
        state.isValid = isValid;
        state.errors = errors;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addNewChurch, setNewChurchErrors, setNewChurchValidation } = newChurchSlice.actions;
newChurchSlice.reducer;
const validateNewChurch = (churchDetails) => {
  let isValid = true;
  const stepErrors = {};
  if (!churchDetails.diocese) {
    isValid = false;
    stepErrors.diocese = "Diocese Name is required";
  }
  if (!churchDetails.surrounding) {
    isValid = false;
    stepErrors.surrounding = "Surrounding Name is required";
  }
  if (!churchDetails.churchName) {
    isValid = false;
    stepErrors.churchName = "Church Name is required";
  }
  return { isValid, stepErrors };
};
const AddChurchModal = ({ closeModal, onChurchSubmitted }) => {
  const dispatch = useDispatch();
  const [attemptedToProceed, setAttemptedToProceed] = useState(false);
  const [diocese, setDiocese] = React.useState("");
  const [surrounding, setSurrounding] = React.useState("");
  const [churchName, setChurchName] = React.useState("");
  const [churchNamePrefix, setChurchNamePrefix] = React.useState("");
  const newChurch = useSelector((state) => state.newChurch.value);
  const newChurchErrors = useSelector((state) => state.newChurch.errors);
  const isNewChurchValid = useSelector((state) => state.newChurch.isValid);
  const churchDetails = {
    diocese,
    surrounding,
    churchName,
    churchNamePrefix
  };
  useEffect(() => {
    setDiocese(newChurch.diocese);
    setSurrounding(newChurch.surrounding);
    setChurchName(newChurch.churchName);
    setChurchNamePrefix(newChurch.churchNamePrefix);
  }, []);
  useEffect(() => {
    dispatch(addNewChurch({
      ...newChurch,
      diocese,
      surrounding,
      churchName,
      churchNamePrefix
    }));
  }, [diocese, surrounding, churchName, churchNamePrefix]);
  useEffect(() => {
    if (attemptedToProceed) {
      const { isValid, stepErrors } = validateNewChurch(churchDetails);
      dispatch(setNewChurchValidation({ isValid, errors: stepErrors }));
      dispatch(setNewChurchErrors(stepErrors));
    }
  }, [attemptedToProceed, diocese, surrounding, churchName, churchNamePrefix, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedToProceed(true);
    const { isValid, stepErrors } = validateNewChurch({ diocese, surrounding, churchName, churchNamePrefix });
    dispatch(setNewChurchValidation({ isValid, errors: stepErrors }));
    if (isValid) {
      dispatch(addNewChurch({
        diocese,
        surrounding,
        churchName,
        churchNamePrefix
      }));
      setAttemptedToProceed(false);
      onChurchSubmitted(true);
      closeModal();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative z-50",
      "aria-labelledby": "add-church-dialog",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm" }),
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto ", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full justify-center px-2 py-12 text-center ", children: /* @__PURE__ */ jsx("div", { className: "relative w-[75%] sm:w-[55%] min-h-[60vh] rounded-2xl bg-gray-200 dark:bg-boxdark\n                     text-slate-100 text-left shadow-xl transition-all", children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "rounded-md p-1 inline-flex items-center justify-center text-gray-400\n                                 hover:bg-gray-700 focus:outline-none absolute top-2 right-2",
              onClick: closeModal,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                /* @__PURE__ */ jsx(CloseIcon, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxs("form", { action: "#", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center mt-5", children: "Add Your Church In Eritrea" }),
            /* @__PURE__ */ jsxs("div", { className: "p-10 flex flex-col space-y-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                !(newChurchErrors == null ? void 0 : newChurchErrors.diocese) ? /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-gray-600 dark:text-gray-300", htmlFor: "diocese", children: "Diocese Name (eg. Asmara Diocese)" }) : /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm  text-red-700", htmlFor: "diocese", children: newChurchErrors == null ? void 0 : newChurchErrors.diocese }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "diocese",
                    type: "text",
                    name: "diocese",
                    value: diocese,
                    className: "mt-3 block w-full text-gray-700 dark:text-gray-400 text-lg",
                    autoComplete: "email",
                    isFocused: true,
                    onChange: (e) => setDiocese(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                !(newChurchErrors == null ? void 0 : newChurchErrors.surrounding) ? /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-gray-600 dark:text-gray-300", htmlFor: "surrounding", children: "Surrounding Name (eg. Akria)" }) : /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-red-700", htmlFor: "surrounding", children: newChurchErrors == null ? void 0 : newChurchErrors.surrounding }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "surrounding",
                    type: "text",
                    name: "surrounding",
                    value: surrounding,
                    className: "mt-3 block w-full text-gray-700 dark:text-gray-400 text-xl",
                    autoComplete: "email",
                    isFocused: true,
                    onChange: (e) => setSurrounding(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                !(newChurchErrors == null ? void 0 : newChurchErrors.churchName) ? /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-gray-600 dark:text-gray-300", htmlFor: "churchName", children: "Church Name (eg. St. Gebriel)" }) : /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-red-700", htmlFor: "churchName", children: newChurchErrors == null ? void 0 : newChurchErrors.churchName }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "churchName",
                    type: "text",
                    name: "churchName",
                    value: churchName,
                    className: "mt-3 block w-full text-gray-700 dark:text-gray-400 text-lg",
                    autoComplete: "email",
                    isFocused: true,
                    onChange: (e) => setChurchName(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    className: "block px-1 text-sm text-gray-600 dark:text-gray-300",
                    htmlFor: "churchPrefix",
                    children: "Church Name Prefix (eg. Debre Bsrat) - Optional"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "churchPrefix",
                    type: "text",
                    name: "churchPrefix",
                    value: churchNamePrefix,
                    className: "mt-3 block w-full text-gray-700 dark:text-gray-400 text-lg",
                    autoComplete: "email",
                    isFocused: true,
                    onChange: (e) => setChurchNamePrefix(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: handleSubmit,
                  className: `p-2 ${isNewChurchValid ? " hover:bg-blue-500  bg-blue-900" : "bg-slate-500"} w-full mt-3 rounded-md`,
                  children: "Submit"
                }
              ) })
            ] })
          ] })
        ] }) }) }) })
      ]
    }
  );
};
const churchServiceOptions$1 = [
  // { value: ' - ', text: ' - ', selected: false },
  { value: "መዝሙር", text: "ክፍሊ መዝሙር", selected: false },
  { value: "ትምህርቲ", text: "ክፍሊ ትምህርቲ", selected: false },
  { value: "ስነ ጥበብ", text: "ክፍሊ ስነ ጥበብ", selected: false },
  { value: "ንብረት", text: "ክፍሊ ንብረት", selected: false },
  { value: "ተቀበልቲ ኣጋይሽ", text: "ክፍሊ ተቀበልቲ ኣጋይሽ", selected: false },
  { value: "ህጻናት", text: "ክፍሊ ህጻናት", selected: false }
];
const sacramentOptions$1 = [
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
const initialState = {
  value: {
    selectedSacraments: sacramentOptions$1.filter((option) => option.selectedSacraments).map((option) => option.value),
    selectedChurchService: churchServiceOptions$1.filter((option) => option.selectedChurchService).map((option) => option.value),
    notServedInChurch: false,
    selectedDioceseCode: "",
    selectedChurchCode: "",
    churchNotListed: false,
    isNewChurchSubmitted: false,
    priestInEritrea: ""
  }
};
const userChurchHistorySlice = createSlice(
  {
    name: "userChurchHistory",
    initialState,
    reducers: {
      addUserChurchHistory: (state, action) => {
        state.value = { ...state.value, ...action.payload };
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserChurchHistory } = userChurchHistorySlice.actions;
userChurchHistorySlice.reducer;
const questions = [
  {
    questionText: "Who is your father of Confession?",
    answers: [
      { text: "Fr. Neamn Tesfatsion", imageUrl: images.about01 },
      { text: "Fr. Tesfaldet Teame", imageUrl: images.about02 },
      { text: "Fr. Erdom Okbamikael", imageUrl: images.about03 },
      { text: "Fr. Yohans Egeliye", imageUrl: images.about04 }
    ]
  }
  // Add more questions as needed
];
const churchServiceOptions = [
  // { value: ' - ', text: ' - ', selected: false },
  { value: "መዝሙር", text: "ክፍሊ መዝሙር", selected: false },
  { value: "ትምህርቲ", text: "ክፍሊ ትምህርቲ", selected: false },
  { value: "ስነ ጥበብ", text: "ክፍሊ ስነ ጥበብ", selected: false },
  { value: "ንብረት", text: "ክፍሊ ንብረት", selected: false },
  { value: "ተቀበልቲ ኣጋይሽ", text: "ክፍሊ ተቀበልቲ ኣጋይሽ", selected: false },
  { value: "ህጻናት", text: "ክፍሊ ህጻናት", selected: false }
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
const ChurchParticipation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const userCourses = useSelector((state) => state.userCourses.value);
  const errors = useSelector((state) => state.validation.errors);
  const isNewChurchValid = useSelector((state) => state.newChurch.isValid);
  const userChurchHistory = useSelector((state) => state.userChurchHistory.value);
  useSelector((state) => state.newChurch.churchAdded);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedChurchService, setSelectedChurchService] = useState(churchServiceOptions.filter((option) => option.selectedChurchService).map((option) => option.value));
  const [selectedSacraments, setSelectedSacraments] = useState(sacramentOptions.filter((option) => option.selectedSacraments).map((option) => option.value));
  const dioceseOptions = churchesData.map((diocese) => ({ value: diocese.diocese, label: diocese.diocese }));
  const selectedDiocese = churchesData.find((diocese) => diocese.diocese === userChurchHistory.selectedDioceseCode);
  const churchOptions = selectedDiocese ? selectedDiocese.churches.map((church) => ({ value: church.name, label: church.name })) : [];
  const handleInputChange = (field, value) => {
    dispatch(addUserChurchHistory({ ...userChurchHistory, [field]: value }));
  };
  const handleChurchCoursesChange = (field, value) => {
    dispatch(addUserCourses({ ...userCourses, [field]: value }));
  };
  const handleAnswerSelect = (answerIndex, answerText) => {
    setSelectedAnswerIndex(answerIndex);
    dispatch(addMemberDetail({ ...member, "fatherOfConfession": answerText }));
    if (isSelecting)
      return;
    setIsSelecting(true);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((current) => current + 1);
        setSelectedAnswerIndex(null);
      } else {
        setQuizCompleted(true);
      }
      setIsSelecting(false);
    }, 500);
  };
  const handleChurchNotListed = () => {
    const updatedValues = {
      ...userChurchHistory,
      churchNotListed: !userChurchHistory.churchNotListed,
      selectedChurchCode: !userChurchHistory.churchNotListed ? "" : userChurchHistory.selectedChurchCode,
      selectedDioceseCode: !userChurchHistory.churchNotListed ? "" : userChurchHistory.selectedDioceseCode
    };
    dispatch(addUserChurchHistory(updatedValues));
  };
  const handleNotServedInChurch = () => {
    const updatedValues = {
      ...userChurchHistory,
      notServedInChurch: !userChurchHistory.notServedInChurch,
      selectedChurchService: !userChurchHistory.notServedInChurch ? {} : userChurchHistory.selectedChurchService
    };
    dispatch(addUserChurchHistory(updatedValues));
  };
  const handleChurchSubmission = (submitted) => {
    handleInputChange("isNewChurchSubmitted", submitted);
  };
  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateChurchParticipation(userChurchHistory);
      dispatch(setStepValidation({ step: "validChurchParticipation", isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, dispatch]);
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 h-auto  md:min-h-500 lg:min-h-[500px]`, children: [
    !quizCompleted && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: questions.map((question, index) => index === currentQuestionIndex && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl text-gray-200 dark:text-gray-100 font-bold\n                     flex items-center justify-center py-3", children: question.questionText }) }),
          /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 rounded-lg", children: question.answers.map((answer, answerIndex) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: `relative rounded-lg shadow-lg m-2 ${selectedAnswerIndex === answerIndex ? "border-4 border-blue-600" : ""}`,
              onClick: () => handleAnswerSelect(answerIndex, answer.text),
              animate: selectedAnswerIndex === answerIndex ? { scale: 0.9 } : {},
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx("img", { src: answer.imageUrl, alt: answer.text, className: "w-full h-full object-cover rounded-lg" }),
                /* @__PURE__ */ jsx("p", { className: "text-center  text-gray-200 py-2 text-lg", children: answer.text })
              ]
            },
            answer.text
          )) })
        ]
      },
      index
    )) }) }),
    quizCompleted && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "md:space-x-4  md:flex flex-row", children: [
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
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-center", children: [
                  !(errors == null ? void 0 : errors.selectedChurchService) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "churchService", value: t("Which field have you served") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.selectedChurchService }),
                  /* @__PURE__ */ jsxs("label", { className: "px-4 flex cursor-pointer text-sm select-none items-center text-gray-200 underline", children: [
                    /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        id: "notServedInChurch",
                        name: "notServedInChurch",
                        checked: userChurchHistory.notServedInChurch,
                        onChange: handleNotServedInChurch,
                        className: "mx-2"
                      }
                    ),
                    t("haven't served in Departments yet!")
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  MultiSelect,
                  {
                    disabled: userChurchHistory.notServedInChurch,
                    id: "churchService",
                    options: churchServiceOptions,
                    optionsPrefix: "",
                    maxSelections: 3,
                    selected: userChurchHistory.selectedChurchService,
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
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "orthodoxyTeachingOfSalvation",
                        label: t("Orthodoxy Teaching Of Salvation"),
                        onChange: () => handleChurchCoursesChange("orthodoxyTeachingOfSalvation", !userCourses.orthodoxyTeachingOfSalvation),
                        checked: userCourses.orthodoxyTeachingOfSalvation,
                        name: "orthodoxyTeachingOfSalvation"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "livingWithChrist",
                        label: t("Living With Christ"),
                        onChange: () => handleChurchCoursesChange("livingWithChrist", !userCourses.livingWithChrist),
                        checked: userCourses.livingWithChrist,
                        name: "livingWithChrist"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "introductionToOrthodoxy",
                        label: t("Introduction To Orthodoxy"),
                        onChange: () => handleChurchCoursesChange("introductionToOrthodoxy", !userCourses.introductionToOrthodoxy),
                        checked: userCourses.introductionToOrthodoxy,
                        name: "introductionToOrthodoxy"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "sevenSacramentOfChurch",
                        label: t("Seven Sacrament Of Church"),
                        onChange: () => handleChurchCoursesChange("sevenSacramentOfChurch", !userCourses.sevenSacramentOfChurch),
                        checked: userCourses.sevenSacramentOfChurch,
                        name: "sevenSacramentOfChurch"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "comparativeTheology",
                        label: t("Comparative Theology"),
                        onChange: () => handleChurchCoursesChange("comparativeTheology", !userCourses.comparativeTheology),
                        checked: userCourses.comparativeTheology,
                        name: "comparativeTheology"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "fiveChurchPillarsOfMystery",
                        label: t("Five Pillars Of Mystery"),
                        onChange: () => handleChurchCoursesChange("fiveChurchPillarsOfMystery", !userCourses.fiveChurchPillarsOfMystery),
                        checked: userCourses.fiveChurchPillarsOfMystery,
                        name: "fiveChurchPillarsOfMystery"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "historicalBibleStudy",
                        label: t("Historical Bible Study"),
                        onChange: () => handleChurchCoursesChange("historicalBibleStudy", !userCourses.historicalBibleStudy),
                        checked: userCourses.historicalBibleStudy,
                        name: "historicalBibleStudy"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "universalChurchHistory",
                        label: t("Universal Church History"),
                        onChange: () => handleChurchCoursesChange("universalChurchHistory", !userCourses.universalChurchHistory),
                        checked: userCourses.universalChurchHistory,
                        name: "universalChurchHistory"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "spiritualQuiteTime",
                        label: t("Spiritual Quite Time"),
                        onChange: () => handleChurchCoursesChange("spiritualQuiteTime", !userCourses.spiritualQuiteTime),
                        checked: userCourses.spiritualQuiteTime,
                        name: "spiritualQuiteTime"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "repentance",
                        label: t("Repentance"),
                        onChange: () => handleChurchCoursesChange("repentance", !userCourses.repentance),
                        checked: userCourses.repentance,
                        name: "repentance"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "churchCanonsAndRites",
                        label: t("Church Canons & Rites"),
                        onChange: () => handleChurchCoursesChange("churchCanonsAndRites", !userCourses.churchCanonsAndRites),
                        checked: userCourses.churchCanonsAndRites,
                        name: "churchCanonsAndRites"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "spiritualService",
                        label: t("Spiritual Service"),
                        onChange: () => handleChurchCoursesChange("spiritualService", !userCourses.spiritualService),
                        checked: userCourses.spiritualService,
                        name: "spiritualService"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-row", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "introductionToGeez",
                        label: t("Introduction To Geez"),
                        onChange: () => handleChurchCoursesChange("introductionToGeez", !userCourses.introductionToGeez),
                        checked: userCourses.introductionToGeez,
                        name: "introductionToGeez"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx(
                      CheckboxTwo,
                      {
                        id: "christianDiscipline",
                        label: t("Christian Discipline"),
                        onChange: () => handleChurchCoursesChange("christianDiscipline", !userCourses.christianDiscipline),
                        checked: userCourses.christianDiscipline,
                        name: "christianDiscipline"
                      }
                    ) })
                  ] })
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
                    selected: userChurchHistory.selectedSacraments,
                    setSelected: setSelectedSacraments,
                    onSelectionChange: (value) => handleInputChange("selectedSacraments", value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                  !(errors == null ? void 0 : errors.selectedDioceseCode) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "selectedDioceseCode", value: t("Select a Diocese") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.selectedDioceseCode }),
                  /* @__PURE__ */ jsxs("label", { className: "px-4 flex cursor-pointer text-sm select-none items-center text-gray-200 underline", children: [
                    /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        id: "churchNotListed",
                        name: "churchNotListed",
                        checked: userChurchHistory.churchNotListed,
                        onChange: handleChurchNotListed,
                        className: "mx-2"
                      }
                    ),
                    t("Church Not listed")
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  AutoComplete,
                  {
                    disabled: userChurchHistory.churchNotListed,
                    value: userChurchHistory.selectedDioceseCode,
                    onChange: (value) => handleInputChange("selectedDioceseCode", value),
                    options: dioceseOptions
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                !(errors == null ? void 0 : errors.selectedChurchCode) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "selectedChurchCode", value: t("Select a Church") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.selectedChurchCode }),
                /* @__PURE__ */ jsx(
                  AutoComplete,
                  {
                    value: userChurchHistory.selectedChurchCode,
                    onChange: (value) => handleInputChange("selectedChurchCode", value),
                    options: churchOptions,
                    disabled: userChurchHistory.churchNotListed
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                !(errors == null ? void 0 : errors.addYourChurch) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "selectedChurchCode", value: t("Add New Church") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.addYourChurch }),
                /* @__PURE__ */ jsxs("div", { className: ` text-md h-11 transition-all duration-700 ease-in-out ${userChurchHistory.isNewChurchSubmitted && isNewChurchValid ? "gradientBg3" : "bg-gray-200 dark:bg-form-input"} rounded-lg flex justify-start gap-4 mt-2`, children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      disabled: !userChurchHistory.churchNotListed,
                      className: "disabled:cursor-not-allowed p-2 px-4 disabled:bg-gray-400 bg-blue-600 h-full rounded-l-lg text-gray-300  hover:bg-blue-700 hover:text-white",
                      onClick: () => setModalOpen(true),
                      children: "Add Church"
                    }
                  ),
                  userChurchHistory.isNewChurchSubmitted && isNewChurchValid ? /* @__PURE__ */ jsx("p", { className: "p-3 md:p-2 text-gray-200", children: "Church is Successfully added" }) : /* @__PURE__ */ jsx("p", { disabled: !userChurchHistory.churchNotListed, className: `${!userChurchHistory.churchNotListed ? "cursor-not-allowed opacity-50" : "cursor-pointer"} p-3 md:p-2 text-gray-800 dark:text-gray-300`, onClick: userChurchHistory.churchNotListed ? () => setModalOpen(true) : void 0, children: "Church Doesn't exit in the list?" }),
                  userChurchHistory.isNewChurchSubmitted && isNewChurchValid ? /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheckCircle, className: "text-white p-2 text-2xl" }) : ""
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                !(errors == null ? void 0 : errors.priestInEritrea) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "priestInEritrea", value: t("Your Priest's full name (in Eritrea)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.priestInEritrea }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "priestInEritrea",
                    type: "text",
                    name: "priestInEritrea",
                    value: userChurchHistory.priestInEritrea,
                    className: "mt-3 block w-full",
                    autoComplete: "priestInEritrea",
                    isFocused: true,
                    onChange: (e) => handleInputChange("priestInEritrea", e.target.value)
                  }
                )
              ] })
            ]
          }
        ) })
      ] }),
      modalOpen && /* @__PURE__ */ jsx(
        AddChurchModal,
        {
          onChurchSubmitted: handleChurchSubmission,
          closeModal: () => setModalOpen(false)
        }
      )
    ] })
  ] });
};
const ChurchParticipation$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  churchesData,
  default: ChurchParticipation
}, Symbol.toStringTag, { value: "Module" }));
export {
  ChurchParticipation as C,
  ChurchParticipation$1 as a,
  validateChurchParticipation as v
};
