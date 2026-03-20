import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import { s as successAnimation } from "./success_tick_animation_2-Bg8C_DIT.mjs";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@inertiajs/react";
import "./themeSlice-BmOV-XST.mjs";
import "./userSlice-DH0slH5l.mjs";
import "@fortawesome/react-fontawesome";
import "./languageSlice-BzN7Wppz.mjs";
import { Inertia } from "@inertiajs/inertia";
import { M as Modal } from "./Modal-BZNRvUHP.mjs";
import "@reduxjs/toolkit";
import "@headlessui/react";
import "lucide-react";
const Success = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme.theme);
  const [animationStage, setAnimationStage] = useState(1);
  const [showAnimation, setShowAnimation] = useState(true);
  const gender = useSelector((store) => store.member.value.gender);
  const [openModal, setOpenModal] = useState(false);
  const goToForm = (event) => {
    event.preventDefault();
    Inertia.get("/membership/form");
  };
  const goToChildForm = (event) => {
    event.preventDefault();
    Inertia.get("/form/child");
  };
  const goToDashboard = (event) => {
    event.preventDefault();
    Inertia.get("/member/events");
  };
  useEffect(() => {
    console.log(gender);
    if (!showAnimation) {
      const timer = setTimeout(() => {
        setAnimationStage(2);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);
  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center text-black", children: /* @__PURE__ */ jsxs("div", { className: "bg-white black_dent w-5/6 h-[400px] mt-3 relative border rounded-lg dark:border-gray-500", children: [
      showAnimation && /* @__PURE__ */ jsx(
        Lottie,
        {
          animationData: successAnimation,
          loop: false,
          style: { width: 300, height: 300 },
          onComplete: handleAnimationComplete
        }
      ),
      animationStage >= 2 && /* @__PURE__ */ jsxs("div", { className: "content slide-up flex flex-col -mt-20 items-center justify-center relative", children: [
        /* @__PURE__ */ jsx(
          Lottie,
          {
            animationData: successAnimation,
            loop: false,
            style: { width: 100, height: 100 }
          }
        ),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl text-gray-600 font-semibold", children: [
          gender === "male" ? t("God bless you!-m") : t("God bless you!-w"),
          " "
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-gray-500 font-semibold", children: t("Thank you! You have Successfully submitted your information.") }),
        /* @__PURE__ */ jsxs("div", { className: "space-x-4 mt-14", children: [
          /* @__PURE__ */ jsx("button", { onClick: goToDashboard, className: "btnPrimary border", children: t("Dashboard") }),
          /* @__PURE__ */ jsx("button", { onClick: () => setOpenModal(true), className: "btnPrimary border", children: t("Add Family Members") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Modal, { show: openModal, onClose: () => setOpenModal(false), maxHeight: "300px", children: /* @__PURE__ */ jsxs("div", { className: "p-7 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium text-gray-900 mb-5 dark:text-white", children: "Do you want to add Spouse or Children?" }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-6", children: [
        /* @__PURE__ */ jsx("button", { onClick: goToForm, className: "btnPrimary border mt-4", children: "Add Spouse" }),
        /* @__PURE__ */ jsx("button", { onClick: goToChildForm, className: "btnPrimary border mt-4", children: "Add Children" })
      ] })
    ] }) })
  ] });
};
export {
  Success as default
};
