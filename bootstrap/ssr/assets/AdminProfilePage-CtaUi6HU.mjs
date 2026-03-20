import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "./themeSlice-BmOV-XST.mjs";
import { Head } from "@inertiajs/react";
import DeleteAdminForm from "./DeleteAdminForm-dWq-MbMb.mjs";
import UpdateAdminPasswordForm from "./UpdateAdminPasswordForm-PpyiRVzv.mjs";
import UpdateAdminProfileInformation from "./UpdateAdminProfileInformation-CUtWV_Wn.mjs";
import { A as AdminLayout } from "./AdminLayout-C3jCJh_q.mjs";
import "@headlessui/react";
import "@reduxjs/toolkit";
import "./SecondaryButton-BsMNl7iC.mjs";
import "./InputError-Dm4RUL5I.mjs";
import "./InputLabel-DO02gwKJ.mjs";
import "react-redux";
import "./Modal-BZNRvUHP.mjs";
import "lucide-react";
import "./TextInput-CFLyt_ba.mjs";
import "./PrimaryButton-DXVNCsu7.mjs";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.mjs";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./userSlice-DH0slH5l.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "react-i18next";
import "./languageSlice-BzN7Wppz.mjs";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "@inertiajs/inertia";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "./adminSlice-CWD1up8r.mjs";
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
