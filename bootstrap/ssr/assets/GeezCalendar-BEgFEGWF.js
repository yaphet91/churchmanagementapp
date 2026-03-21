import { jsx } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import { A as AdminLayout } from "./AdminLayout-CPnwM-vu.js";
import "react";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "react-redux";
import "./TooltipContext-CXfF4_Yf.js";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "react-i18next";
import "./languageSlice-BzN7Wppz.js";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "@inertiajs/inertia";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./adminSlice-CWD1up8r.js";
const GeezCalendar = ({ user }) => {
  const Layout = user.role === "admin" ? AdminLayout : MemberLayout;
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Geez Calendar" }) }) });
};
export {
  GeezCalendar as default
};
