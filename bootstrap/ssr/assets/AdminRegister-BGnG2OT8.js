import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { G as GuestAdminLayout } from "./GuestAdminLayout-BvtYO0hp.js";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { P as PrimaryButton } from "./PrimaryButton-DXVNCsu7.js";
import { T as TextInput2 } from "./TextInput2-BnjrGL2f.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { d as getTitleOptions2 } from "./formData-Y1eGY-2d.js";
import { useTranslation } from "react-i18next";
import { Listbox } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid/esm/index.js";
import "react-redux";
const AutoComplete3 = ({ id, name, value, onChange, label, options, disabled }) => {
  const [dropdownDirection, setDropdownDirection] = useState("below");
  const buttonRef = useRef(null);
  useEffect(() => {
    const checkDropdownDirection = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const maxHeight = 200;
        if (spaceBelow >= maxHeight || spaceBelow >= spaceAbove) {
          setDropdownDirection("below");
        } else {
          setDropdownDirection("above");
        }
      }
    };
    checkDropdownDirection();
    window.addEventListener("resize", checkDropdownDirection);
    return () => window.removeEventListener("resize", checkDropdownDirection);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "space-y-3 w-full", id, name, children: /* @__PURE__ */ jsx(Listbox, { value, onChange, disabled, children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Listbox.Label, { className: "block text-sm font-medium text-gray-200 ", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        Listbox.Button,
        {
          ref: buttonRef,
          className: `disabled:cursor-not-allowed disabled:opacity-50 relative w-full h-12 cursor-default
                                 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none
                                 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border
                                 ${disabled ? "bg-gray-100 text-gray-500" : ""}`,
          children: [
            value,
            /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx(SelectorIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Listbox.Options, { className: `absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${dropdownDirection === "above" ? "bottom-full mb-1" : "mt-1"}`, children: options.map((option, personIdx) => /* @__PURE__ */ jsx(
        Listbox.Option,
        {
          className: ({ active }) => `relative cursor-default select-none hover:bg-gray-300 py-2 pl-10 pr-4 ${active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"}`,
          value: option.value,
          children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: `block truncate ${selected ? "font-medium" : "font-normal"}`, children: option.label }),
            selected ? /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
          ] })
        },
        personIdx
      )) })
    ] })
  ] }) }) });
};
function AdminRegister() {
  const { t } = useTranslation();
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const [passwordError, setPasswordError] = useState("");
  const titleOptions2 = getTitleOptions2(t);
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const isStrongPassword = (password) => {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return regex.test(password);
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setData("password", password);
    if (!isStrongPassword(password)) {
      setPasswordError("Password must be at least 8 characters long and include a mix of upper and lower case letters and numbers.");
    } else {
      setPasswordError("");
    }
  };
  const submit = (e) => {
    e.preventDefault();
    if (!isStrongPassword(data.password)) {
      setPasswordError("Password is not strong enough.");
      return;
    }
    post(route("admin.register"), {
      onSuccess: (page) => {
        console.log(page);
        dispatch(addAdminDetail(page.props.admin));
        Inertia.visit("/admin/dashboard");
      }
    });
  };
  return /* @__PURE__ */ jsxs(GuestAdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Admin Register" }),
    /* @__PURE__ */ jsx("div", { className: "pb-4", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold ", children: "Admin Register" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: " items-center justify-center my-3 md:mt-0", children: [
        !(errors == null ? void 0 : errors.title) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: t("Title") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.title, className: "mb-2 text-red-700" }),
        /* @__PURE__ */ jsx(
          AutoComplete3,
          {
            id: "title",
            name: "title",
            options: titleOptions2,
            value: data.title,
            onChange: (e) => setData("title", e)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: "Phone" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "phone",
            name: "phone",
            value: data.phone,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("phone", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
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
            onChange: (e) => setData("email", e.target.value),
            required: true
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
            autoComplete: "new-password",
            onChange: handlePasswordChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password || passwordError, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("admin.login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing || passwordError, children: "Register" })
      ] })
    ] })
  ] });
}
export {
  AdminRegister as default
};
