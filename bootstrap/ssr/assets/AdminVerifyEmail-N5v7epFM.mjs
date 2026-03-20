import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { useForm, Link } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-DXVNCsu7.mjs";
import { l as logo } from "./anastasia_logo-LmIUZM3a.mjs";
function AdminVerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.verification.send"));
  };
  return /* @__PURE__ */ jsx("div", { className: "h-screen w-full flex flex-col justify-center items-center  bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "w-[60%] h-[70%] p-8 border border-gray-400 bg-gray-300 rounded-lg flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("img", { src: logo, alt: "logo", className: "h-20 -top-5" }),
    /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold my-4", children: "Verify Email" }),
    /* @__PURE__ */ jsx("div", { className: "m-8 text-md text-gray-600", children: "Thanks for signing up as an Admin! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "my-6 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "h-12 flex items-center justify-center", children: processing ? "Sending..." : "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("admin.logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] })
  ] }) });
}
export {
  AdminVerifyEmail as default
};
