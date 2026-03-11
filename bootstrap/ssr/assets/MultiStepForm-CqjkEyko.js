import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import StepperFormLayout from "./StepperFormLayout--wfkWxqM.js";
import RegistrationIntro from "./RegistrationIntro-HaMZaAA5.js";
import { P as PersonalDetails, v as validatePersonalDetails } from "./PersonalDetails-wn6Xyfrd.js";
import { I as Identification, v as validateIdentification } from "./Identification-47IO5gt4.js";
import { C as ContactInfo, v as validateContactInfo } from "./ContactInfo-3EBoaN6f.js";
import { A as AdditionalInfo, v as validateAdditionalInfo } from "./AdditionalInfo-gX6ragHe.js";
import { C as ChurchParticipation, v as validateChurchParticipation } from "./ChurchParticipation-NOmp9RvR.js";
import Confirmation from "./Confirmation--3Rn2ZHH.js";
import Success from "./Success-9PcYb527.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { s as setStepValidation } from "./validationSlice-CGq-i0Ki.js";
import { C as CloseIcon } from "./CloseIcon-lDBYkuZD.js";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@inertiajs/inertia";
import "@inertiajs/react";
import { C as Checkbox } from "./Checkbox-5Xb-iHS2.js";
import StepperFooter from "./StepperFooter-CUyibxR4.js";
import "./StepperHeader-LWzxhwOF.js";
import "@inertiajs/inertia-react";
import "./LanguageSwitcher-conunGEH.js";
import "./languageSlice-ncva5C39.js";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
import "./StepperSidebar-f8BnsDqT.js";
import "./variants-iKvyZPjN.js";
import "./InputError-xXRnZePM.js";
import "./InputLabel-BppriEiK.js";
import "./TextInput-8_mbY4T4.js";
import "react-image-crop";
import "axios";
import "./Modal-QOpWwH75.js";
import "spinners-react";
import "flatpickr";
import "./AutoComplete-blIwAEV8.js";
import "@heroicons/react/solid/esm/index.js";
import "date-fns";
import "./formData-rEzWwvLv.js";
import "./countries-J6KwqbRl.js";
import "./images-SyjpYB08.js";
import "lottie-react";
const validateRegistrationIntro = () => {
  let isValid = true;
  const errors = {};
  return { isValid, errors };
};
const validateConfirmation = (validationStates) => {
  let isValid = true;
  const errors = {};
  const allValid = Object.entries(validationStates).every(([key, value]) => {
    if (key === "validConfirmation")
      return true;
    return value === true;
  });
  if (!allValid) {
    isValid = false;
    errors.general = "Please Complete the previous steps first.";
  }
  return { isValid, errors };
};
const initialState = {
  currentStep: 0,
  attemptedToProceed: false,
  isActiveFormValid: true,
  errors: {}
};
const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    enableAttemptedToProceed: (state, action) => {
      state.attemptedToProceed = action.payload;
    },
    addErrors: (state, action) => {
      state.errors = action.payload;
    },
    enableNext: (state) => {
      state.isActiveFormValid = true;
    },
    disableNext: (state) => {
      state.isActiveFormValid = false;
    },
    nextStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
    previousStep: (state) => {
      state.currentStep = state.currentStep - 1;
    },
    clickedStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetSteps: (state) => {
      state.currentStep = 0;
    }
  }
});
const { enableAttemptedToProceed, enableNext, disableNext, nextStep, previousStep, resetSteps, addErrors, clickedStep } = stepperSlice.actions;
stepperSlice.reducer;
const SteppingErrorModal = ({ closeModal }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();
  const firstName = useSelector((state) => state.member.value.firstName);
  useSelector((state) => state.member.value.firstNameT);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isVisible) {
      window.addEventListener("click", handleOutsideClick);
    }
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isVisible, closeModal]);
  const hours = (/* @__PURE__ */ new Date()).getHours();
  const timeOfDay = hours < 12 ? t("Good Morning") : hours < 18 ? t("Good Afternoon") : t("Good Evening");
  return /* @__PURE__ */ jsxs("div", { className: "relative z-50", "aria-labelledby": "steps-error-dialog", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
        className: "fixed inset-0 z-10 w-screen overflow-y-auto",
        children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full justify-center px-2 py-12 text-center ", children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: modalRef,
            className: `relative w-[50%] sm:w-[50%] min-h-[40vh] max-h-[60vh] rounded-2xl bg-gray-200 text-slate-100 text-left shadow-xl transition-all modal-appear ${isVisible ? "modal-visible" : ""}`,
            children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2",
                  onClick: closeModal,
                  children: [
                    /* @__PURE__ */ jsx(CloseIcon, {}),
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-yellow-500 text-8xl", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faWarning }) }),
                /* @__PURE__ */ jsxs("div", { className: "w-full text-gray-700 py-6 space-y-3 flex flex-col justify-center items-center mb-4", children: [
                  /* @__PURE__ */ jsxs("h1", { className: "p-3 text-3xl font-semibold", children: [
                    timeOfDay,
                    ", ",
                    firstName
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl mt-6", children: t("Please complete the previous steps before proceeding.") }),
                  /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-500", children: t('Completed the current step? Click "Next" to continue.') })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "h-14 text-xl w-full gradientBg3 rounded-lg hover:scale-105 transition-transform",
                    onClick: closeModal,
                    children: t("Dismiss")
                  }
                ) })
              ] })
            ] })
          }
        ) })
      }
    )
  ] });
};
const formSubmissionSlice = createSlice({
  name: "formSubmission",
  initialState: {
    isSubmitted: false
  },
  reducers: {
    setFormSubmitted: (state) => {
      state.isSubmitted = true;
    },
    resetFormSubmission: (state) => {
      state.isSubmitted = false;
    }
  }
});
const { setFormSubmitted, resetFormSubmission } = formSubmissionSlice.actions;
formSubmissionSlice.reducer;
const ConfirmSubmissionModal = ({ closeModal, confirmSubmission }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();
  useSelector((state) => state.member.value.firstName);
  useSelector((state) => state.member.value.firstNameT);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const handleAgreeToTerms = () => {
    setAgreeToTerms(!agreeToTerms);
    if (agreementError && agreeToTerms) {
      setAgreementError(false);
    }
  };
  const handleModalSubmit = () => {
    if (agreeToTerms) {
      closeModal();
      confirmSubmission();
    } else {
      setAgreementError(true);
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isVisible) {
      window.addEventListener("click", handleOutsideClick);
    }
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isVisible, closeModal]);
  const hours = (/* @__PURE__ */ new Date()).getHours();
  hours < 12 ? t("Good Morning") : hours < 18 ? t("Good Afternoon") : t("Good Evening");
  return /* @__PURE__ */ jsxs("div", { className: "relative z-50", "aria-labelledby": "steps-error-dialog", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
        className: "fixed inset-0 z-10 w-screen overflow-y-auto top-[10%]",
        children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full justify-center px-2 md:py-12 text-center ", children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: modalRef,
            className: `relative w-[70%] md:w-[50%] h-[450px] md:h-[500px] rounded-2xl
                         bg-gray-200 dark:bg-gray-600 text-slate-100 text-left shadow-xl transition-all modal-appear
                          ${isVisible ? "modal-visible" : ""}`,
            children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "rounded-md p-1 inline-flex items-center justify-center text-gray-400\n                                 hover:bg-gray-700 focus:outline-none absolute top-2 right-2",
                  onClick: closeModal,
                  children: [
                    /* @__PURE__ */ jsx(CloseIcon, {}),
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-yellow-500 text-6xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faWarning }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-full text-gray-700 dark:text-gray-200 p-2 md:p-6 space-y-3 flex flex-col justify-start items-start mb-4", children: /* @__PURE__ */ jsxs("h3", { className: "text-lg md:text-2xl mt-6", children: [
                  t("Are you sure you would like to submit?"),
                  " ",
                  /* @__PURE__ */ jsx("span", { children: t(" Please accept the terms and conditions.") })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: `${!agreeToTerms ? "border-2 border-red-500 rounded-md dark:border-gray-300 p-2 w-full" : ""}`, children: [
                  /* @__PURE__ */ jsxs("label", { className: `px-4 pt-2 flex cursor-pointer text-sm select-none items-center ${agreementError ? "text-red-800" : "text-gray-500 dark:text-blue-200"}`, children: [
                    /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        id: "agreeToTerms",
                        name: "agreeToTerms",
                        checked: agreeToTerms,
                        onChange: handleAgreeToTerms,
                        className: "mx-2"
                      }
                    ),
                    t("By clicking you agree to the terms and conditions of the use of Anastasia web app")
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pl-10 py-2", children: agreementError && /* @__PURE__ */ jsx("p", { className: "text-red-800", children: "You must agree to the terms and conditions." }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center justify-end space-x-9 mt-10 bottom-5", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: "h-10 text-xl w-1/3 bg-red-500 rounded-lg hover:scale-105 transition-transform",
                      onClick: closeModal,
                      children: t("Cancel")
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: "h-10 text-xl w-1/3 bg-blue-500 rounded-lg hover:scale-105 transition-transform",
                      onClick: handleModalSubmit,
                      children: t("Submit")
                    }
                  )
                ] })
              ] })
            ] })
          }
        ) })
      }
    )
  ] });
};
const formSteps = [
  () => /* @__PURE__ */ jsx(RegistrationIntro, {}),
  () => /* @__PURE__ */ jsx(PersonalDetails, {}),
  () => /* @__PURE__ */ jsx(Identification, {}),
  () => /* @__PURE__ */ jsx(ContactInfo, {}),
  () => /* @__PURE__ */ jsx(AdditionalInfo, {}),
  () => /* @__PURE__ */ jsx(ChurchParticipation, {}),
  () => /* @__PURE__ */ jsx(Confirmation, {})
];
const validationFunctions = {
  0: validateRegistrationIntro,
  1: validatePersonalDetails,
  2: validateIdentification,
  3: validateContactInfo,
  4: validateAdditionalInfo,
  5: validateChurchParticipation,
  6: validateConfirmation
};
const convertStepIndexToValidStateName = (index) => {
  const stepMapping = ["validRegistrationIntro", "validPersonalDetails", "validIdentification", "validContactInfo", "validAdditionalInfo", "validChurchParticipation", "validConfirmation"];
  return stepMapping[index] || null;
};
const MultiStepForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentStep } = useSelector((store) => store.stepper);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
  const memberData = useSelector((state) => state.member.value);
  const validationData = useSelector((state) => state.validation.value);
  const userImageData = useSelector((store) => store.profileImage.value);
  const userCoursesData = useSelector((store) => store.userCourses.value);
  const userChurchHistoryData = useSelector((store) => store.userChurchHistory.value);
  useSelector((store) => store.newChurch.value);
  const isFormSuccessfullySubmitted = useSelector((state) => state.formSubmission.isSubmitted);
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const renderCurrentStep = () => {
    if (isFormSuccessfullySubmitted) {
      return /* @__PURE__ */ jsx(Success, {});
    } else {
      const StepComponent = formSteps[currentStep];
      return /* @__PURE__ */ jsx(StepComponent, {});
    }
  };
  const handleConfirmSubmission = (e) => {
    setConfirmSubmissionModalOpen(true);
  };
  const handleMembershipSubmit = async () => {
    try {
      console.log(memberData);
      const response = await axios.post("/memberships", memberData);
      const membershipId = response.data.membership.id;
      const updatedUserImageData = { ...userImageData, membershipId };
      const updatedUserCoursesData = { ...userCoursesData, membershipId };
      const updatedUserChurchHistoryData = { ...userChurchHistoryData, membershipId };
      await handleAvatarUpload(updatedUserImageData);
      await handleCoursesUpdate(updatedUserCoursesData);
      await handleChurchHistoryUpdate(updatedUserChurchHistoryData);
      console.log(updatedUserChurchHistoryData);
      dispatch(setFormSubmitted());
    } catch (error) {
      console.error("Error creating membership:", error);
    }
  };
  const handleAvatarUpload = async (userImageData2) => {
    try {
      const response = await axios.post("/store-avatar-path", userImageData2);
      alert("Avatar uploaded successfully!");
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };
  const handleCoursesUpdate = async (userCoursesData2) => {
    try {
      const response = await axios.post("/courses", userCoursesData2);
      alert("courses uploaded successfully!");
    } catch (error) {
      console.error("Error uploading courses:", error);
    }
  };
  const handleChurchHistoryUpdate = async (userChurchHistoryData2) => {
    try {
      const response = await axios.post("/church-history", userChurchHistoryData2);
      alert("Church history uploaded successfully!");
    } catch (error) {
      console.error("Error uploading courses:", error);
    }
  };
  const handleNext = () => {
    dispatch(enableAttemptedToProceed(true));
    let isValid = true;
    let errors = {};
    if (attemptedToProceed) {
      if (currentStep !== 0 && validationFunctions[currentStep]) {
        let validationResults;
        if (currentStep === formSteps.length - 1) {
          validationResults = validateConfirmation(validationData);
        } else if (currentStep === 1) {
          validationResults = validatePersonalDetails(memberData, userImageData);
        } else if (currentStep === 5) {
          validationResults = validateChurchParticipation(userChurchHistoryData);
        } else {
          const currentValidationFn = validationFunctions[currentStep];
          validationResults = currentValidationFn(memberData);
        }
        isValid = validationResults.isValid;
        errors = validationResults.errors;
        if (isValid) {
          dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
          dispatch(nextStep());
          dispatch(enableAttemptedToProceed(false));
        } else {
          dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
          console.log("Validation failed with errors:", errors);
          return;
        }
      } else {
        dispatch(nextStep());
        dispatch(enableAttemptedToProceed(false));
      }
    }
  };
  const handleStepChange = (newStep) => {
    if (!isFormSuccessfullySubmitted) {
      if (newStep > currentStep) {
        let isValid = true;
        let errors = {};
        const currentStepValidatedAndPassed = validationData[convertStepIndexToValidStateName(currentStep)];
        if (validationFunctions[currentStep] && !currentStepValidatedAndPassed) {
          const validationResults = validationFunctions[currentStep](memberData);
          isValid = validationResults.isValid;
          errors = validationResults.errors;
          if (isValid) {
            dispatch(clickedStep(newStep));
            dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
            setAttemptedToProceed(false);
          } else {
            dispatch(setStepValidation({ step: convertStepIndexToValidStateName(currentStep), isValid, errors }));
            console.log("Validation failed with errors:", errors);
            setErrorModalOpen(true);
            return;
          }
        } else {
          dispatch(clickedStep(newStep));
          setAttemptedToProceed(false);
        }
      } else {
        dispatch(clickedStep(newStep));
      }
    }
  };
  const handleBack = () => {
    dispatch(previousStep());
    dispatch(enableAttemptedToProceed(false));
  };
  return /* @__PURE__ */ jsxs(StepperFormLayout, { currentStep, onStepChange: handleStepChange, children: [
    renderCurrentStep(),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row pt-6", children: [
      !isFormSuccessfullySubmitted && /* @__PURE__ */ jsxs(
        "button",
        {
          className: `${currentStep === 0 ? "cursor-not-allowed opacity-50" : ""} mr-1 gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
          disabled: currentStep === 0,
          onClick: handleBack,
          children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowLeft, className: "mx-2" }),
            t("Back")
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
      !isFormSuccessfullySubmitted && /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: `gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
          onClick: currentStep === formSteps.length - 1 ? handleConfirmSubmission : handleNext,
          children: [
            currentStep === formSteps.length - 1 ? t("Finish and Submit") : t("Next"),
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowRight, className: "mx-2" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(StepperFooter, {}) }),
    errorModalOpen && /* @__PURE__ */ jsx(
      SteppingErrorModal,
      {
        closeModal: () => setErrorModalOpen(false)
      }
    ),
    confirmSubmissionModalOpen && /* @__PURE__ */ jsx(
      ConfirmSubmissionModal,
      {
        confirmSubmission: handleMembershipSubmit,
        closeModal: () => setConfirmSubmissionModalOpen(false)
      }
    )
  ] });
};
export {
  MultiStepForm as default
};
