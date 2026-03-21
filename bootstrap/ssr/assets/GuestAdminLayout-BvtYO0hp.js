import { jsx } from "react/jsx-runtime";
import "react";
import "@inertiajs/react";
function GuestAdminLayout({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-3 sm:pt-0 bg-yellow-100", children: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 w-full sm:max-w-xl mt-3 px-6 py-3 bg-gray-300 overflow-hidden sm:rounded-lg", children }) });
}
export {
  GuestAdminLayout as G
};
