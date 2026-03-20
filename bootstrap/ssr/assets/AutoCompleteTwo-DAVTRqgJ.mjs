import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, Fragment as Fragment$1 } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid/esm/index.js";
const AutoCompleteTwo = ({ options, value, onChange, errors }) => {
  const [query, setQuery] = useState("");
  const filteredOptions = query === "" ? options : options.filter(
    (option) => option.label.toLowerCase().includes(query.toLowerCase())
  );
  return /* @__PURE__ */ jsx(Listbox, { value, onChange, children: ({ open }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative w-full ", children: [
    /* @__PURE__ */ jsxs(Listbox.Button, { className: "relative w-full cursor-default rounded-l-lg bg-white dark:bg-form-input py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none border border-gray-400 dark:border-gray-600", children: [
      /* @__PURE__ */ jsx("span", { className: "block truncate", children: value || "Select a country" }),
      /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx(SelectorIcon, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) })
    ] }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment$1,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsxs(Listbox.Options, { className: "absolute z-10 mt-1 w-[150%] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "px-3 pt-2", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50",
              placeholder: "Search...",
              onChange: (event) => setQuery(event.target.value)
            }
          ) }),
          filteredOptions.map((option, optionIdx) => /* @__PURE__ */ jsx(
            Listbox.Option,
            {
              className: ({ active }) => `${active ? "text-white bg-indigo-600" : "text-gray-900"} cursor-default select-none relative py-2 pl-3 pr-9`,
              value: option.phone,
              children: ({ selected, active }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("img", { src: `https://flagcdn.com/w20/${option.code.toLowerCase()}.png`, alt: "", className: "w-8 h-5 flex-shrink-0 mr-2" }),
                  /* @__PURE__ */ jsxs("span", { className: `${selected ? "font-semibold" : "font-normal"} block truncate`, children: [
                    option.label,
                    " (",
                    option.phone,
                    ")"
                  ] })
                ] }),
                selected && /* @__PURE__ */ jsx("span", { className: `${active ? "text-white" : "text-indigo-600"} absolute inset-y-0 right-0 flex items-center pr-4`, children: /* @__PURE__ */ jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) })
              ] })
            },
            optionIdx
          ))
        ] })
      }
    )
  ] }) }) });
};
export {
  AutoCompleteTwo as A
};
