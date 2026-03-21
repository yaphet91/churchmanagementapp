import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import { s as successAnimation } from "./success_tick_animation_2-Bg8C_DIT.js";
import { Inertia } from "@inertiajs/inertia";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.js";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "./languageSlice-BzN7Wppz.js";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
const ChildSuccess = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme.theme);
  const [animationStage, setAnimationStage] = useState(1);
  const [showAnimation, setShowAnimation] = useState(true);
  useSelector((store) => store.member.value.gender);
  const goToForm = (event) => {
    event.preventDefault();
    Inertia.get("/form/child");
  };
  const goToDashboard = (event) => {
    event.preventDefault();
    Inertia.get("/member/dashboard");
  };
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(MemberLayout, { children: /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center text-black", children: /* @__PURE__ */ jsxs("div", { className: "bg-white black_dent w-5/6 h-[400px] mt-10 relative border rounded-lg dark:border-gray-500", children: [
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
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-gray-500 font-semibold", children: t("Thank you! You have Successfully registered your child.") }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-4 mt-14", children: [
        /* @__PURE__ */ jsx("button", { onClick: goToDashboard, className: "btnPrimary border", children: t("Dashboard") }),
        /* @__PURE__ */ jsx("button", { onClick: goToForm, className: "btnPrimary border", children: t("Add Other Child") })
      ] })
    ] })
  ] }) }) }) });
};
export {
  ChildSuccess as default
};
