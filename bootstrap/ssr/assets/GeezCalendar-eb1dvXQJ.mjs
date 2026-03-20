import { jsx } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import { A as AdminLayout } from "./AdminLayout-C3jCJh_q.mjs";
import "react";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "react-redux";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./themeSlice-BmOV-XST.mjs";
import "@headlessui/react";
import "./userSlice-DH0slH5l.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "react-i18next";
import "./languageSlice-BzN7Wppz.mjs";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "@inertiajs/inertia";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "./adminSlice-CWD1up8r.mjs";
const GeezCalendar = ({ user }) => {
  const Layout = user.role === "admin" ? AdminLayout : MemberLayout;
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Geez Calendar" }) }) });
};
export {
  GeezCalendar as default
};
