import { jsx } from "react/jsx-runtime";
import "react";
import "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-3 sm:pt-0 bg-gray-100", children: /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-lg mt-6 px-3 py-2 bg-white overflow-hidden sm:rounded-lg", children }) });
}
export {
  Guest as G
};
