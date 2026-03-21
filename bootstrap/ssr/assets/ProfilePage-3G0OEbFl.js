import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "./themeSlice-BmOV-XST.js";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./DeleteUserForm-DIc-AteI.js";
import UpdatePasswordForm from "./UpdatePasswordForm-BRXD5gMA.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-B1qo7ZSL.js";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
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
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    MemberLayout,
    {
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
