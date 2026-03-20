import { jsxs, jsx } from "react/jsx-runtime";
import { Info } from "lucide-react";
import "react";
const NoDataFound = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-3 py-10 w-full items-center justify-center text-2xl", children: [
    /* @__PURE__ */ jsx(Info, { strokeWidth: 1 }),
    /* @__PURE__ */ jsx("h1", { className: "uppercase", children: "No data found" })
  ] });
};
export {
  NoDataFound as N
};
