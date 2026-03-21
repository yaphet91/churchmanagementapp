import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { a as addDonation } from "./donationSlice-BosuJUxM.js";
import "@reduxjs/toolkit";
const FundRaise = "/build/assets/fund_raise-DTmVAGVI.jpg";
const BaptismImage = "/build/assets/baptism2-Cjv3KjCX.png";
const TithesImage = "/build/assets/tithes-RViF_DuE.jpeg";
const OfferingImage = "/build/assets/offering-DY_YJn6l.jpeg";
const WeddingImage = "/build/assets/wedding2-lA4rcwZn.png";
const ContributionImage = "/build/assets/contribution-DNdnayLC.jpeg";
const PaymentReasonCard = ({ onClick, reason, image, animate, transition, paymentReason }) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: `w-48 h-44 shadow-md flex flex-col items-center justify-center border
        rounded-md bg-slate-700 overflow-hidden ${paymentReason === reason ? "border-yellow-400 border-2" : ""}`,
      onClick,
      animate,
      transition,
      children: [
        /* @__PURE__ */ jsx("img", { src: image, className: "h-32 w-full object-cover" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold uppercase p-4", children: reason })
      ]
    }
  );
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};
const DonationSelection = ({ goToNextStep }) => {
  const dispatch = useDispatch();
  const donation = useSelector((state) => state.donation.value);
  const [paymentReason, setPaymentReason] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const handleCardClick = (reason) => {
    setPaymentReason(reason);
    dispatch(addDonation({ ...donation, reason }));
    {
      goToNextStep();
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "p-2 flex flex-col items-center",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants,
      children: [
        /* @__PURE__ */ jsx("div", { className: "p-4 my-6", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold", children: "Please select the type of contribution you would like to make" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-10 mb-10", children: [
            /* @__PURE__ */ jsx(
              PaymentReasonCard,
              {
                reason: "tithes",
                onClick: () => handleCardClick("tithes"),
                paymentReason,
                image: TithesImage,
                animate: { scale: paymentReason === "tithes" ? 0.9 : 1 },
                transition: { duration: 0.5 }
              }
            ),
            /* @__PURE__ */ jsx(
              PaymentReasonCard,
              {
                reason: "offerings",
                onClick: () => handleCardClick("offerings"),
                image: OfferingImage,
                paymentReason,
                animate: { scale: paymentReason === "offerings" ? 0.9 : 1 },
                transition: { duration: 0.5 }
              }
            ),
            /* @__PURE__ */ jsx(
              PaymentReasonCard,
              {
                reason: "contribution",
                onClick: () => handleCardClick("contribution"),
                image: ContributionImage,
                paymentReason,
                animate: { scale: paymentReason === "contribution" ? 0.9 : 1 },
                transition: { duration: 0.5 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-10 ", children: [
            /* @__PURE__ */ jsx(
              PaymentReasonCard,
              {
                reason: "wedding",
                onClick: () => handleCardClick("wedding"),
                image: WeddingImage,
                paymentReason,
                animate: { scale: paymentReason === "wedding" ? 0.9 : 1 },
                transition: { duration: 0.5 }
              }
            ),
            /* @__PURE__ */ jsx(
              PaymentReasonCard,
              {
                reason: "baptism",
                onClick: () => handleCardClick("baptism"),
                image: BaptismImage,
                paymentReason,
                animate: { scale: paymentReason === "baptism" ? 0.9 : 1 },
                transition: { duration: 0.5 }
              }
            ),
            /* @__PURE__ */ jsx(
              PaymentReasonCard,
              {
                reason: "funding",
                onClick: () => handleCardClick("funding"),
                image: FundRaise,
                paymentReason,
                animate: { scale: paymentReason === "funding" ? 0.9 : 1 },
                transition: { duration: 0.5 }
              }
            )
          ] })
        ] })
      ]
    }
  );
};
export {
  DonationSelection as default
};
