import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-iKvyZPjN.js";
import { useTranslation } from "react-i18next";
import { Inertia } from "@inertiajs/inertia";
const banner = "/build/assets/banner-W2XsRtVh.png";
const Home = () => {
  useTranslation();
  const goToForm = (event) => {
    event.preventDefault();
    Inertia.get("/membership/form");
  };
  const goToDashboard = (event) => {
    event.preventDefault();
    Inertia.get("/member/dashboard");
  };
  return /* @__PURE__ */ jsx("div", { className: "md:px-12 px-4 max-w-screen-2xl mx-auto mt-28", id: "home", children: /* @__PURE__ */ jsx("div", { className: "gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-10", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "md:w-3/5",
        variants: fadeIn("up", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.7 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed", children: "Get in touch with your Orthodox Holy Church" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#EBEBEB] text-2xl mb-8", children: "To have a great relationship with your church and your priest, anastasia gives you all the tools you need for church experience." }),
          /* @__PURE__ */ jsxs("div", { className: "space-x-5 space-y-3", children: [
            /* @__PURE__ */ jsx("button", { onClick: goToForm, className: "btnPrimary", children: "Start Membership" }),
            /* @__PURE__ */ jsx("button", { onClick: goToDashboard, className: "btnPrimary", children: "Dashboard" })
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
