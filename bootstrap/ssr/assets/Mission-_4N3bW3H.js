import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useTranslation } from "react-i18next";
const Mission = () => {
  useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "my-24 md:px-14 px-4 max-w-screen-2xl max-auto", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold mb-5 text-center", children: [
      "Our ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "Mission" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-center gap-8", children: /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx("img", { src: "", alt: "" }) }) })
  ] });
};
export {
  Mission as default
};
