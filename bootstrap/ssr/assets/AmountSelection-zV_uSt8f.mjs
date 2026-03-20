import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { a as addDonation } from "./donationSlice-BosuJUxM.mjs";
import "@fortawesome/react-fontawesome";
import "@reduxjs/toolkit";
const PaymentAmountCard = ({ onClick, amount, animate, transition, paymentAmount }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: `h-20 shadow-md flex flex-col items-center justify-center border cursor-pointer
        hover:bg-slate-500
        rounded-md bg-slate-700 overflow-hidden ${paymentAmount === amount ? "border-yellow-400 border-2" : ""}`,
      onClick,
      animate,
      transition,
      children: /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold uppercase p-2 text-white", children: [
        amount,
        " AED"
      ] })
    }
  );
};
const ConfirmPaymentModal = ({ closeModal, completeAmountSelection }) => {
  const { t } = useTranslation();
  const donation = useSelector((state) => state.donation.value);
  const modalRef = useRef();
  const handleAccept = () => {
    closeModal();
    completeAmountSelection();
  };
  const handleBack = () => {
    closeModal();
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative z-50", "aria-labelledby": "steps-error-dialog", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-800 bg-opacity-15 transition-all backdrop-blur-sm" }),
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
            className: `relative max-h-[50vh] 
                        rounded-2xl bg-gray-200 text-slate-100 text-left shadow-xl transition-all
                        modal-appear modal-visible`,
            children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 text-gray-800 ", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-10 flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold", children: "Confirm Payment Intent" }),
                /* @__PURE__ */ jsxs("h3", { className: "text-2xl mt-10", children: [
                  "Are you sure to pay",
                  /* @__PURE__ */ jsxs("span", { className: "text-blue-700 font-bold", children: [
                    " ",
                    donation.amount,
                    " AED"
                  ] }),
                  " as",
                  /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
                    " ",
                    donation.reason,
                    "?"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-[60%] flex items-center justify-center", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "h-14 text-lg w-full gradientBg3 rounded-lg hover:scale-105 transition-transform",
                    onClick: handleAccept,
                    children: "Accept Payment"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center mt-3", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "h-14 text-xl rounded-lg",
                    onClick: handleBack,
                    children: "Back"
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
function AmountSelection({ goToNextStep, goToPreviousStep }) {
  let defaultAmounts = ["50.00", "100.00", "200.00", "300.00", "400.00", "500.00", "1000.00", "2000.00"];
  const [paymentAmount, setPaymentAmount] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const donation = useSelector((state) => state.donation.value);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleCardClick = (amount) => {
    dispatch(addDonation({ ...donation, amount }));
    setPaymentAmount(amount);
    setOpenModal(true);
  };
  const completeAmountSelection = () => {
    if (paymentAmount) {
      goToNextStep();
    }
    setOpenModal(false);
  };
  const handleAmountEntry = (manualAmount) => {
    dispatch(addDonation({ ...donation, amount: manualAmount }));
    setPaymentAmount(manualAmount);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentAmount) {
      setOpenModal(true);
    }
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "p-2 flex flex-col items-center",
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 my-6", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold", children: "Please select the amount of contribution you would like to make" }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-4 gap-4", children: [
            " ",
            defaultAmounts.map((amount, index) => /* @__PURE__ */ jsx(
              PaymentAmountCard,
              {
                amount,
                onClick: () => handleCardClick(amount),
                paymentAmount,
                animate: { scale: paymentAmount === amount ? 0.9 : 1 },
                transition: { duration: 0.5 }
              },
              index
            ))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full my-10 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 mt-4 md:mt-0", children: /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "manualAmount",
                type: "number",
                name: "manualAmount",
                value: paymentAmount,
                className: "mt-3 block w-full",
                autoComplete: "amount",
                isFocused: true,
                onChange: (e) => handleAmountEntry(e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "my-6 flex justify-between", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "btnPrimary",
                  onClick: goToPreviousStep,
                  children: "Back"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "btnPrimary",
                  onClick: handleSubmit,
                  children: "Submit"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    openModal && /* @__PURE__ */ jsx(
      ConfirmPaymentModal,
      {
        closeModal,
        completeAmountSelection
      }
    )
  ] });
}
export {
  AmountSelection as default
};
