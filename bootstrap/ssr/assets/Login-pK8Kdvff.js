import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { C as Checkbox } from "./Checkbox-5Xb-iHS2.js";
import { G as Guest } from "./GuestLayout-S_C0HcSu.js";
import { I as InputError } from "./InputError-xXRnZePM.js";
import { I as InputLabel } from "./InputLabel-BppriEiK.js";
import { P as PrimaryButton } from "./PrimaryButton-tCuq_nFx.js";
import { T as TextInput2 } from "./TextInput2-YNZAhZPl.js";
import { useForm, Head, Link } from "@inertiajs/react";
import "jwt-decode";
import "react-redux";
const googleIcon = "/build/assets/google-gaC5UyY-.png";
const facebookIcon = "/build/assets/facebook-sP4DAsDk.jpeg";
const lindedinIcon = "/build/assets/linkedIn-pVDzCKwA.png";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const handleGoogleLogin = () => {
    window.location.href = "/auth/google";
  };
  const handleFaceLogin = () => {
    window.location.href = "/auth/facebook";
  };
  const handleLinkedinLogin = () => {
    window.location.href = "/auth/linkedin";
  };
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("div", { className: "pb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-2 text-indigo-700/[0.8]", children: "Login" }),
      /* @__PURE__ */ jsx("p", { className: "text-l font-normal", children: "Welcome back to anastasia login and enjoy our services" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "email",
            type: "email",
            name: "email",
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
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Log in" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-sm align-middle justify-center pl-3 mb-4", children: /* @__PURE__ */ jsx("p", { className: "mb-2", children: "or you can sign in with .. " }) }),
      /* @__PURE__ */ jsxs("div", { id: "googleSignInDiv", className: "flex justify-start space-x-6", children: [
        /* @__PURE__ */ jsx("a", { onClick: handleGoogleLogin, className: "bg-white h-14 border\n                    rounded-lg shadow-2xl hover:shadow-xl transition-shadow tracking-wide duration-300 ease-in-out hover:scale-95", children: /* @__PURE__ */ jsx("img", { src: googleIcon, alt: "Sign in with google", className: "h-10 w-28" }) }),
        /* @__PURE__ */ jsx("a", { onClick: handleFaceLogin, className: "bg-white h-14 border\n                    rounded-lg shadow-2xl hover:shadow-xl transition-shadow tracking-wide duration-300 ease-in-out hover:scale-95", children: /* @__PURE__ */ jsx("img", { src: facebookIcon, alt: "Sign in with facebook", className: "h-12 w-28" }) }),
        /* @__PURE__ */ jsx("a", { onClick: handleLinkedinLogin, className: "bg-white h-14 border\n                     rounded-lg shadow-2xl hover:shadow-xl transition-shadow tracking-wide duration-300 ease-in-out hover:scale-95", children: /* @__PURE__ */ jsx("img", { src: lindedinIcon, alt: "Sign in with facebook", className: "h-12 w-28" }) })
      ] })
    ] })
  ] });
}
export {
  Login as default
};
