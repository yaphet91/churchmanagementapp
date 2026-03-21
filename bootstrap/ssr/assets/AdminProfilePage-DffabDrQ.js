import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "./themeSlice-BmOV-XST.js";
import { Head } from "@inertiajs/react";
import DeleteAdminForm from "./DeleteAdminForm-D7I6k0P3.js";
import UpdateAdminPasswordForm from "./UpdateAdminPasswordForm-C6IM-WB7.js";
import UpdateAdminProfileInformation from "./UpdateAdminProfileInformation-CNpCRtvg.js";
import { A as AdminLayout } from "./AdminLayout-CPnwM-vu.js";
import "@headlessui/react";
import "@reduxjs/toolkit";
import "./SecondaryButton-BsMNl7iC.js";
import "./InputError-Dm4RUL5I.js";
import "./InputLabel-DO02gwKJ.js";
import "react-redux";
import "./Modal-BZNRvUHP.js";
import "lucide-react";
import "./TextInput-CFLyt_ba.js";
import "./PrimaryButton-DXVNCsu7.js";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.js";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "react-i18next";
import "./languageSlice-BzN7Wppz.js";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "@inertiajs/inertia";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./adminSlice-CWD1up8r.js";
function AdminProfilePage({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Admin Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800  shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateAdminProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdateAdminPasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteAdminForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  AdminProfilePage as default
};
