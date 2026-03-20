import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useTranslation } from "react-i18next";
import { b as banner } from "./banner-DXSp8PK_.mjs";
import { motion } from "framer-motion";
import { f as fadeIn } from "./variants-IrQHrc9C.mjs";
import "@inertiajs/inertia";
const Mission = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("section", { className: "my-24 md:px-14 px-4 max-w-screen-2xl max-auto", id: "mission", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold mb-5 text-center", children: [
      "Our ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "Mission" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "gradientBg rounded-xl rounded-tl-[80px] rounded-br-[80px] md:p-9 px-4 py-9", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-10", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            variants: fadeIn("down", 0.2),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.7 },
            children: /* @__PURE__ */ jsx("img", { src: banner, alt: "", className: "lg:h-[386px] transform scale-x-[-1]" })
          }
        ),
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
              /* @__PURE__ */ jsx("p", { className: "text-[#EBEBEB] text-2xl mb-8", children: "To have a great relationship with your church and your priest, anastasia gives you all the tools you need for church experience." })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-24 flex flex-col md:flex-row justify-between items-center gap-10", children: [
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
              /* @__PURE__ */ jsx("p", { className: "text-[#EBEBEB] text-2xl mb-8", children: "To have a great relationship with your church and your priest, anastasia gives you all the tools you need for church experience." })
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
            children: /* @__PURE__ */ jsx("img", { src: banner, alt: "", className: "lg:h-[386px] transform scale-x-[-1]" })
          }
        )
      ] })
    ] })
  ] });
};
export {
  Mission as default
};
