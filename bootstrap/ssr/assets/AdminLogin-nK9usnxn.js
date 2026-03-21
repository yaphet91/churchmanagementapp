import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { C as Checkbox } from "./Checkbox-B46RnHis.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { P as PrimaryButton } from "./PrimaryButton-DXVNCsu7.js";
import { T as TextInput2 } from "./TextInput2-BnjrGL2f.js";
import "jwt-decode";
import { useTranslation } from "react-i18next";
import { G as GuestAdminLayout } from "./GuestAdminLayout-BvtYO0hp.js";
import { a as addAdminDetail } from "./adminSlice-CWD1up8r.js";
import { useDispatch } from "react-redux";
import { Inertia } from "@inertiajs/inertia";
import "@reduxjs/toolkit";
function AdminLogin({ status, canResetPassword }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.login"), {
      onSuccess: (page) => {
        console.log(page);
        dispatch(addAdminDetail(page.props.admin));
        Inertia.visit("/admin/dashboard");
      }
    });
  };
  return /* @__PURE__ */ jsxs(GuestAdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Admin Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsx("div", { className: "pb-10 flex items-center justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-2 text-indigo-700/[0.8]", children: t("Admin Login") }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("Email") }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "email",
            type: "email",
            name: t("email"),
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: t("Password") }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "password",
            type: "password",
            name: t("password"),
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block my-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600", children: t("Remember me") })
      ] }) }),
      /* @__PURE__ */ jsx(PrimaryButton, { className: "w-full h-12 justify-center text-2xl", disabled: processing, children: "Log in" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between my-7", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("admin.register"),
            className: "underline font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: [
              " ",
              t("Register")
            ]
          }
        ),
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: t("Forgot your password ?")
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { id: "googleSignInDiv", className: "flex justify-center" })
    ] })
  ] });
}
export {
  AdminLogin as default
};
