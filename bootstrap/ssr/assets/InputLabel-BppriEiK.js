import { jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
function InputLabel({ value, className = "", children, ...props }) {
  const language = useSelector((state) => state.language.language);
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium ${language === "en" ? "text-sm" : "text-md"} text-gray-600 dark:text-blue-400` + className, children: value ? value : children });
}
export {
  InputLabel as I
};
