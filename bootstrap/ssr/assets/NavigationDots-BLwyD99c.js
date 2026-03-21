import { jsx } from "react/jsx-runtime";
import "react";
const NavigationDots = ({ active }) => /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center flex-col p-4", children: ["home", "about", "work", "research", "honors", "skills", "contact"].map((item, index) => /* @__PURE__ */ jsx(
  "a",
  {
    href: `#${item}`,
    className: `w-2 h-2 md:w-4 md:h-4 rounded-full bg-gray-300 m-2 
                transition-colors duration-200 ease-in-out hover:bg-[var(--secondary-color)]
                ${active === item ? "bg-[#313BAC]" : ""}`,
    style: active === item ? { backgroundColor: "#313BAC" } : {}
  },
  item + index
)) });
export {
  NavigationDots as default
};
