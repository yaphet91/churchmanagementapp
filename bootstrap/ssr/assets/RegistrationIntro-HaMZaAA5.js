import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { useTranslation } from "react-i18next";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-iKvyZPjN.js";
import { useSelector } from "react-redux";
const IntroBanner = "/build/assets/prist_intro_banner-pE35XgAD.png";
const RegistrationIntro = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme.theme);
  return /* @__PURE__ */ jsx("div", { className: `rounded-sm ${theme === "light" ? "gradientBg" : "darkBg"} md:p-9 px-4 py-9 lg:min-h-[470px]`, children: /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl uppercase font-bold py-1 flex items-center justify-start text-gray-200", children: [
      t("In the Name of Father Son and Holy Spirit One God"),
      "!",
      /* @__PURE__ */ jsx("span", { className: "ml-4 hidden lg:flex", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCross }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "hidden md:flex",
          variants: fadeIn("right", 0.1),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.7 },
          children: /* @__PURE__ */ jsx("img", { src: IntroBanner, alt: "", className: "lg:h-[360px]" })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "md:w-4/5",
          variants: fadeIn("up", 0.2),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.7 },
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-[#EBEBEB] text-lg md:text-xl mb-8 md:pr-16", children: t("greetingAndIntro") }),
            /* @__PURE__ */ jsx("p", { className: "text-[#EBEBEB] mb-3 underline", children: t("informationReady") }),
            /* @__PURE__ */ jsx("div", {}),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-800 dark:text-blue-500 text-md font-semibold mb-1", children: [
              " -  ",
              t("Passport Size Photo")
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-800 dark:text-blue-500 text-md font-semibold mb-1", children: [
              " -  ",
              t("Information about your previous church (In Eritrea)"),
              " "
            ] })
          ]
        }
      )
    ] })
  ] }) });
};
export {
  RegistrationIntro as default
};
