import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { A as Authenticated } from "./AuthenticatedLayout-z-cbDsmy.js";
import "@inertiajs/inertia-react";
import "./languageSlice-ncva5C39.js";
import { Head } from "@inertiajs/react";
import "./Dropdown-j6l3lkWe.js";
import "@fortawesome/react-fontawesome";
import "@reduxjs/toolkit";
import "@headlessui/react";
function Dashboard({ auth }) {
  useEffect(() => {
    console.log(auth.user);
  }, []);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard pro" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
