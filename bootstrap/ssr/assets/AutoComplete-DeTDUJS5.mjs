import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid/esm/index.js";
const AutoComplete = ({ id, name, value, onChange, label, options, disabled }) => {
  const [dropdownDirection, setDropdownDirection] = useState("below");
  const buttonRef = useRef(null);
  useEffect(() => {
    const checkDropdownDirection = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const maxHeight = 200;
        if (spaceBelow >= maxHeight || spaceBelow >= spaceAbove) {
          setDropdownDirection("below");
        } else {
          setDropdownDirection("above");
        }
      }
    };
    checkDropdownDirection();
    window.addEventListener("resize", checkDropdownDirection);
    return () => window.removeEventListener("resize", checkDropdownDirection);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "space-y-3 w-full", id, name, children: /* @__PURE__ */ jsx(Listbox, { value, onChange, disabled, children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Listbox.Label, { className: "block text-sm font-medium text-gray-200 ", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        Listbox.Button,
        {
          ref: buttonRef,
          className: `disabled:cursor-not-allowed disabled:opacity-50 relative w-full h-12 cursor-default
                                 rounded-lg bg-white dark:bg-form-input py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none
                                 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 border-gray-500 border dark:text-gray-300
                                 ${disabled ? "bg-gray-100 text-gray-500" : ""}`,
          children: [
            value,
            /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx(SelectorIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Listbox.Options, { className: `absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${dropdownDirection === "above" ? "bottom-full mb-1" : "mt-1"}`, children: options.map((option, personIdx) => /* @__PURE__ */ jsx(
        Listbox.Option,
        {
          className: ({ active }) => `relative cursor-default select-none hover:bg-gray-300 py-2 pl-10 pr-4 ${active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"}`,
          value: option.value,
          children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: `block truncate ${selected ? "font-medium" : "font-normal"}`, children: option.label }),
            selected ? /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
          ] })
        },
        personIdx
      )) })
    ] })
  ] }) }) });
};
export {
  AutoComplete as A
};
