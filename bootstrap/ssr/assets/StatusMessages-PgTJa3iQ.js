import { jsx } from "react/jsx-runtime";
import { useReducer } from "react";
const StatusMessages = ({ messages }) => messages.length ? /* @__PURE__ */ jsx("div", { id: "messages", role: "alert", children: messages.map((m, i) => /* @__PURE__ */ jsx("div", { children: maybeLink(m) }, i)) }) : "";
const maybeLink = (m) => {
  const piDashboardBase = "https://dashboard.stripe.com/test/payments";
  return /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: {
    __html: m.replace(
      /(pi_(\S*)\b)/g,
      `<a href="${piDashboardBase}/$1" target="_blank">$1</a>`
    )
  } });
};
const useMessages = () => {
  return useReducer((messages, message) => {
    return [...messages, message];
  }, []);
};
export {
  StatusMessages as default,
  useMessages
};
