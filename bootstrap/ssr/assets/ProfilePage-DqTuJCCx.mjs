import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "./themeSlice-BmOV-XST.mjs";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./DeleteUserForm-DA3LU5G8.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm-1aEL0AWT.mjs";
import UpdateProfileInformation from "./UpdateProfileInformationForm-tsKGfBM9.mjs";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
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
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
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
