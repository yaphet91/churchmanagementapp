import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { b as banner } from "./banner-DXSp8PK_.mjs";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-IrQHrc9C.mjs";
import { useTranslation } from "react-i18next";
import { Inertia } from "@inertiajs/inertia";
import { useDispatch, useSelector } from "react-redux";
import { r as resetMemberState } from "./memberSlice-CZbZjefE.mjs";
import { r as resetUserImage } from "./userImageSlice-6eE4yU9I.mjs";
import { r as resetUserCourses, a as resetUserChurchHistory } from "./userChurchHistorySlice-BHxkEeSq.mjs";
import { r as resetSteps } from "./stepperSlice-DCzqqTcy.mjs";
import { r as resetNewChurch } from "./newChurchSlice-CfxFHsE6.mjs";
import "@reduxjs/toolkit";
const Home = ({ user }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const has_completed_membership_form = useSelector((state) => state.user.value.has_completed_membership_form);
  const goToForm = (event) => {
    event.preventDefault();
    dispatch(resetMemberState());
    dispatch(resetUserImage());
    dispatch(resetUserCourses());
    dispatch(resetSteps());
    dispatch(resetNewChurch());
    dispatch(resetUserChurchHistory());
    Inertia.get("/membership/form");
  };
  const goToDashboard = (event) => {
    event.preventDefault();
    Inertia.get("/member/events");
  };
  return /* @__PURE__ */ jsx("section", { className: "md:px-12 px-4 max-w-screen-2xl mx-auto mt-28", id: "home", children: /* @__PURE__ */ jsx("div", { className: "gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-10", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "md:w-3/5",
        variants: fadeIn("up", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.7 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed", children: t("landing-page-message") }),
          /* @__PURE__ */ jsx("p", { className: "text-[#EBEBEB] text-2xl mb-8", children: t("landing-page-sub-message") }),
          /* @__PURE__ */ jsxs("div", { className: "space-x-5 space-y-3", children: [
            user && has_completed_membership_form === 0 && /* @__PURE__ */ jsx("button", { onClick: goToForm, className: "btnPrimary", children: "Start Membership" }),
            user && has_completed_membership_form === 1 && /* @__PURE__ */ jsx("button", { onClick: goToDashboard, className: "btnPrimary", children: "Dashboard" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: fadeIn("down", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.7 },
        children: /* @__PURE__ */ jsx("img", { src: banner, alt: "", className: "lg:h-[386px]" })
      }
    )
  ] }) }) });
};
export {
  Home as default
};
