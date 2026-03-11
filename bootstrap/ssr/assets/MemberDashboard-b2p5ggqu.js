import { jsx } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-ChtZxdhr.js";
import { useEffect } from "react";
import "./index-NxhnN3JY.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "react-redux";
import "./languageSlice-ncva5C39.js";
import "@reduxjs/toolkit";
import "./LanguageSwitcher-conunGEH.js";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
import "react-i18next";
import "react-dom";
import "lucide-react";
import "@inertiajs/inertia";
const MemberDashboard = ({ auth }) => {
  useEffect(() => {
    console.log(auth.user.name);
  }, []);
  return /* @__PURE__ */ jsx(
    MemberLayout,
    {}
  );
};
export {
  MemberDashboard as default
};
