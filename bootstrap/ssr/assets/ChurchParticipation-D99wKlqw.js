import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { i as images } from "./images-Vl6MKc8t.js";
import { M as MultiSelect } from "./MultiSelect-PyBsrJje.js";
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { C as CheckboxTwo } from "./CheckboxTwo-DnAc0Jue.js";
import "@inertiajs/react";
import { f as fadeIn } from "./variants-IrQHrc9C.js";
import { useDispatch, useSelector } from "react-redux";
import { c as addUserChurchHistory, d as addUserCourses } from "./userChurchHistorySlice-BHxkEeSq.js";
import { C as CloseIcon } from "./CloseIcon-CqHzHK5A.js";
import { a as addNewChurch, s as setNewChurchValidation, b as setNewChurchErrors } from "./newChurchSlice-CfxFHsE6.js";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { s as setStepValidation, a as setValidationErrors } from "./validationSlice-D3Qd1uIP.js";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { C as Checkbox } from "./Checkbox-B46RnHis.js";
import { a as addMemberDetail } from "./memberSlice-CZbZjefE.js";
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
  const { t } = useTranslation();
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
    churchName
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttemptedToProceed(true);
    const { isValid, stepErrors } = validateNewChurch({ diocese, surrounding, churchName });
    dispatch(setNewChurchValidation({ isValid, errors: stepErrors }));
    if (isValid) {
      const churchData = {
        church_name: churchName,
        surrounding,
        diocese,
        church_name_prefix: churchNamePrefix
        // Add other optional fields if necessary
      };
      try {
        console.log("Church details:", churchData);
        const response = await axios.post("/churches", churchData);
        console.log("New church added:", response.data);
        setAttemptedToProceed(false);
        onChurchSubmitted(true);
        closeModal();
      } catch (error) {
        console.error("Error adding new church:", error);
      }
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
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center mt-5", children: t("Add Your Church In Eritrea") }),
            /* @__PURE__ */ jsxs("div", { className: "p-10 flex flex-col space-y-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    className: "block px-1 text-sm text-gray-600 dark:text-gray-300",
                    htmlFor: "churchPrefix",
                    children: t("Church Name Prefix (eg. Debre Bsrat) - Optional")
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
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                !(newChurchErrors == null ? void 0 : newChurchErrors.churchName) ? /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-gray-600 dark:text-gray-300", htmlFor: "churchName", children: t("Church Name (eg. St. Gebriel)") }) : /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-red-700", htmlFor: "churchName", children: newChurchErrors == null ? void 0 : newChurchErrors.churchName }),
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
                !(newChurchErrors == null ? void 0 : newChurchErrors.surrounding) ? /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-gray-600 dark:text-gray-300", htmlFor: "surrounding", children: t("Surrounding Name (eg. Akria)") }) : /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-red-700", htmlFor: "surrounding", children: newChurchErrors == null ? void 0 : newChurchErrors.surrounding }),
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
                !(newChurchErrors == null ? void 0 : newChurchErrors.diocese) ? /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm text-gray-600 dark:text-gray-300", htmlFor: "diocese", children: t("Diocese Name (eg. Asmara Diocese)") }) : /* @__PURE__ */ jsx("label", { className: "block px-1 text-sm  text-red-700", htmlFor: "diocese", children: newChurchErrors == null ? void 0 : newChurchErrors.diocese }),
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
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: handleSubmit,
                  className: `p-2 ${isNewChurchValid ? " hover:bg-blue-500  bg-blue-900" : "bg-slate-500"} w-full mt-3 rounded-md`,
                  children: t("Submit")
                }
              ) })
            ] })
          ] })
        ] }) }) }) })
      ]
    }
  );
};
const churchesData = [
  {
    diocese: "ሃገረ ስብከት ኣስመራ",
    churches: [
      { id: "A01", name: "ደብረ ግእዛን መድሃኔ ኣለም" },
      { id: "A02", name: "መካነ ህይወት መንድሃኔ ኣለም" },
      { id: "A03", name: "ርእሰ ኣድባራት ቅድስት ማርያም" },
      { id: "A04", name: "ደብረ ብሥራት ቅዱስ ገብርኤል ኣኽርያ" },
      { id: "A05", name: "ቅዱስ ገብርኤል ሓሊበት" },
      { id: "A06", name: "ቅዱስ ሜካኤል ምህራም ጭራ" },
      { id: "A07", name: "ቅዱስ ሚካኤል ጸጸራት" },
      { id: "A08", name: "ኣቡነ ገብረ መንፈስ ቅዱስ ኣኽርያ" },
      { id: "A09", name: "ኣቡነ ገብረ መንፈስ ቅዱስ ገጀረት" },
      { id: "A010", name: "ርእሰ ኣድባራት ቅድስት መላእክቲ" },
      { id: "A011", name: "ቅዱስ ቂርቆስ ቀሓውታ" },
      { id: "A012", name: "ቅዱስ ሩፋኤል" },
      { id: "A013", name: "ኣቡነ ተክለሃይማኖት ሓዝሓዝ" },
      { id: "A014", name: "ኣቡነ ተክለሃይማኖት ሓዝሓዝ" },
      { id: "A015", name: "ኣቡነ ተክለሃይማኖት ሓዝሓዝ" }
    ]
  },
  {
    diocese: "ሃገረ ሰብከት ሰሜናዊን ደቡባውን ቀይሕ ባሕሪ",
    churches: [
      { id: "U01", name: "ደብረ ብርሃን ቅድስት ሥላሴ ዱባይ" },
      { id: "U02", name: "ደብረ ፍቅር ወሰላም ኪዳነ ምህረት ኣቡዳቢ" }
    ]
  }
];
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
    if (isSelecting) return;
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
      selectedChurchService: !userChurchHistory.notServedInChurch ? [] : userChurchHistory.selectedChurchService
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
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "whiterBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 h-auto  md:min-h-500 lg:min-h-[500px]`, children: [
    !quizCompleted && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: questions.map((question, index) => index === currentQuestionIndex && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-8", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl text-gray-500 dark:text-gray-200 font-bold\n                     flex items-center justify-center py-3", children: question.questionText }) }),
          /* @__PURE__ */ jsx("div", { className: "p-2  mb-4 flex items-center justify-center", children: !(errors == null ? void 0 : errors.fatherOfConfession) ? "" : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherOfConfession }) }),
          /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 rounded-lg", children: question.answers.map((answer, answerIndex) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: `relative rounded-lg shadow-lg m-2 ${selectedAnswerIndex === answerIndex ? "border-4 border-blue-600" : ""}`,
              onClick: () => handleAnswerSelect(answerIndex, answer.text),
              animate: selectedAnswerIndex === answerIndex ? { scale: 0.9 } : {},
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsx("img", { src: answer.imageUrl, alt: answer.text, className: "w-full h-full object-cover rounded-lg" }),
                /* @__PURE__ */ jsx("p", { className: "text-center  text-gray-600 font-semibold dark:text-gray-200 py-2 text-lg", children: answer.text })
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
                  /* @__PURE__ */ jsxs("label", { className: "px-4 flex cursor-pointer text-sm select-none items-center text-gray-500 dark:text-gray-200 underline", children: [
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
                  /* @__PURE__ */ jsxs("label", { className: "px-4 flex cursor-pointer text-sm select-none items-center text-gray-500 dark:text-gray-200 underline", children: [
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
  default: ChurchParticipation
}, Symbol.toStringTag, { value: "Module" }));
export {
  ChurchParticipation as C,
  ChurchParticipation$1 as a,
  validateChurchParticipation as v
};
