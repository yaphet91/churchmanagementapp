import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-z-cbDsmy.js";
import DeleteUserForm from "./DeleteUserForm-3WTSGmc-.js";
import UpdatePasswordForm from "./UpdatePasswordForm-yVAvObyx.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-erY4afHr.js";
import { Head } from "@inertiajs/react";
import "react";
import "./Dropdown-j6l3lkWe.js";
import "@headlessui/react";
import "./InputError-xXRnZePM.js";
import "./InputLabel-BppriEiK.js";
import "react-redux";
import "./Modal-QOpWwH75.js";
import "./TextInput-8_mbY4T4.js";
import "./PrimaryButton-tCuq_nFx.js";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
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
