import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { C as Checkbox } from "./Checkbox-B46RnHis.mjs";
import { C as CloseIcon } from "./CloseIcon-CqHzHK5A.mjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
export {
  ConfirmSubmissionModal as C
};
