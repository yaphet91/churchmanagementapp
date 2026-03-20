import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import StepperFormLayout from "./StepperFormLayout-BDPFcgCq.mjs";
import RegistrationIntro from "./RegistrationIntro-B_EjgiZ5.mjs";
import { v as validatePersonalDetails, P as PersonalDetails } from "./PersonalDetails-CGp3O5de.mjs";
import { v as validateIdentification, I as Identification } from "./Identification-BFj1JI_h.mjs";
import { v as validateContactInfo, C as ContactInfo } from "./ContactInfo-Cgb4gaKD.mjs";
import { v as validateAdditionalInfo, A as AdditionalInfo } from "./AdditionalInfo-BOqoKipE.mjs";
import { v as validateChurchParticipation, C as ChurchParticipation } from "./ChurchParticipation-BILCF937.mjs";
import Confirmation from "./Confirmation-BMrQlBOv.mjs";
import Success from "./Success-BUl8Jt5K.mjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { c as clickedStep, p as previousStep, e as enableAttemptedToProceed, n as nextStep } from "./stepperSlice-DCzqqTcy.mjs";
import { s as setStepValidation } from "./validationSlice-D3Qd1uIP.mjs";
import { C as CloseIcon } from "./CloseIcon-CqHzHK5A.mjs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@inertiajs/inertia";
import "@inertiajs/react";
import { s as setFormSubmitted } from "./store-CNHt6RMI.mjs";
import { C as ConfirmSubmissionModal } from "./ConfirmSubmissionModal-J4EtePW0.mjs";
import "./userImageSlice-6eE4yU9I.mjs";
import StepperFooter from "./StepperFooter-BQhrpoom.mjs";
import "./memberSlice-CZbZjefE.mjs";
import "redux-persist";
import "./userChurchHistorySlice-BHxkEeSq.mjs";
import { L as LoadingModal } from "./RadioGroup-n185qax-.mjs";
import "./StepperHeader-Dux1DnGq.mjs";
import "@inertiajs/inertia-react";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@reduxjs/toolkit";
import "./themeSlice-BmOV-XST.mjs";
import "@headlessui/react";
import "./userSlice-DH0slH5l.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "./languageSlice-BzN7Wppz.mjs";
import "./StepperSidebar-C8JFBYpo.mjs";
import "./variants-IrQHrc9C.mjs";
import "./InputError-Dm4RUL5I.mjs";
import "./InputLabel-DO02gwKJ.mjs";
import "./TextInput-CFLyt_ba.mjs";
import "flatpickr";
/* empty css                        */
import "./AutoComplete-DeTDUJS5.mjs";
import "@heroicons/react/solid/esm/index.js";
import "date-fns";
import "./formData-Y1eGY-2d.mjs";
import "./BirthdayEntry-DAdqgHRX.mjs";
import "./countries-R5VJ-91Z.mjs";
import "./AutoCompleteTwo-DAVTRqgJ.mjs";
import "./Checkbox-B46RnHis.mjs";
import "./images-2LzdHB5O.mjs";
import "./anastasia_logo-LmIUZM3a.mjs";
import "./MultiSelect-PyBsrJje.mjs";
import "./CheckboxTwo-DnAc0Jue.mjs";
import "./newChurchSlice-CfxFHsE6.mjs";
import "lottie-react";
import "./success_tick_animation_2-Bg8C_DIT.mjs";
import "./Modal-BZNRvUHP.mjs";
import "lucide-react";
import "redux-persist/lib/storage/index.js";
import "redux-persist/lib/stateReconciler/autoMergeLevel2.js";
import "./sidebarSlice-BqmTz92s.mjs";
import "./donationSlice-BosuJUxM.mjs";
import "./childMemberSlice-DlhqqVZb.mjs";
import "./eventSlice-cpfWu0eT.mjs";
import "./adminSlice-CWD1up8r.mjs";
import "react-image-crop";
import "axios";
const validateRegistrationIntro = () => {
  let isValid = true;
  const errors = {};
  return { isValid, errors };
};
const validateConfirmation = (validationStates) => {
  let isValid = true;
  const errors = {};
  const allValid = Object.entries(validationStates).every(([key, value]) => {
    if (key === "validConfirmation") return true;
    return value === true;
  });
  if (!allValid) {
    isValid = false;
    errors.general = "Please Complete the previous steps first.";
  }
  return { isValid, errors };
};
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
  const { currentStep } = useSelector((store2) => store2.stepper);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
  const [loaddingModalOpen, setLoadingModalOpen] = useState(false);
  const memberData = useSelector((state) => state.member.value);
  const validationData = useSelector((state) => state.validation.value);
  const userImageData = useSelector((store2) => store2.profileImage.value);
  const userCoursesData = useSelector((store2) => store2.userCourses.value);
  const userChurchHistoryData = useSelector((store2) => store2.userChurchHistory.value);
  useSelector((store2) => store2.newChurch.value);
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
    setLoadingModalOpen(true);
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
      await axios.post("/membership/complete");
      dispatch(setFormSubmitted());
    } catch (error) {
      console.error("Error creating membership:", error);
    } finally {
      setLoadingModalOpen(false);
    }
  };
  const handleAvatarUpload = async (userImageData2) => {
    try {
      const response = await axios.post("/store-avatar-path", userImageData2);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };
  const handleCoursesUpdate = async (userCoursesData2) => {
    try {
      const response = await axios.post("/courses", userCoursesData2);
    } catch (error) {
      console.error("Error uploading courses:", error);
    }
  };
  const handleChurchHistoryUpdate = async (userChurchHistoryData2) => {
    try {
      const response = await axios.post("/church-history", userChurchHistoryData2);
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
    ),
    loaddingModalOpen && /* @__PURE__ */ jsx(LoadingModal, {})
  ] });
};
export {
  MultiStepForm as default
};
