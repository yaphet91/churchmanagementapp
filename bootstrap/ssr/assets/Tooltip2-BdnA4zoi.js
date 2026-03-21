import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Tooltip2 = ({ text, maxLength, className }) => {
  const [show, setShow] = useState(false);
  if ((text == null ? void 0 : text.length) <= maxLength) return /* @__PURE__ */ jsx("span", { className: "italic", children: text });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false),
      className: `relative cursor-pointer ${className}`,
      children: [
        text.substr(0, maxLength),
        "...",
        show && /* @__PURE__ */ jsx("div", { className: ` absolute text-black left-0 top-100% z-10 w-auto p-2 bg-white border rounded shadow-lg`, children: text })
      ]
    }
  );
};
export {
  Tooltip2 as T
};
