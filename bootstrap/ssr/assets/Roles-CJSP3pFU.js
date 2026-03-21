import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-CPnwM-vu.js";
import { useState, useEffect } from "react";
import RolesForm from "./RolesForm-yNAx-0kk.js";
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
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./adminSlice-CWD1up8r.js";
import "./InputError-Dm4RUL5I.js";
import "./InputLabel-DO02gwKJ.js";
import "./TextInput-CFLyt_ba.js";
import "./Modal-BZNRvUHP.js";
const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [isRoleFormModalOpen, setIsRoleFormModalOpen] = useState(false);
  const fetchRoles = async () => {
    try {
      const response = await axios.get("/admin/api/roles");
      setRoles(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  useEffect(() => {
    fetchRoles();
  }, []);
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-slate-900 dark:text-white", children: "Roles & Permissions" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500 dark:text-slate-400", children: "Roles are now loaded from the backend and can be created locally for dashboard testing." })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsRoleFormModalOpen(true),
            className: "rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900",
            children: "Add Role"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full text-left text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "Role" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "Description" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "Users" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "Permissions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: roles.length ? roles.map((role) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-100 dark:border-slate-800", children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-slate-900 dark:text-white", children: role.name }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-slate-500 dark:text-slate-400", children: role.description || "No description" }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-slate-500 dark:text-slate-400", children: role.users_count || 0 }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-slate-500 dark:text-slate-400", children: role.permissions_count || 0 })
        ] }, role.id)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "px-5 py-6 text-slate-500", colSpan: "4", children: "No roles found." }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      RolesForm,
      {
        isOpen: isRoleFormModalOpen,
        onClose: () => setIsRoleFormModalOpen(false),
        onRoleCreated: fetchRoles
      }
    )
  ] });
};
export {
  Roles as default
};
