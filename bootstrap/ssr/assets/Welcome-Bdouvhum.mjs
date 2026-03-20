import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import Login from "./Login-D4aJHRCD.mjs";
import Register from "./Register-Jb773b8w.mjs";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { s as setLanguage } from "./languageSlice-BzN7Wppz.mjs";
import "./Checkbox-B46RnHis.mjs";
import "./GuestLayout-DIi4-xNo.mjs";
import "./InputError-Dm4RUL5I.mjs";
import "./InputLabel-DO02gwKJ.mjs";
import "./PrimaryButton-DXVNCsu7.mjs";
import "./TextInput2-BnjrGL2f.mjs";
import "jwt-decode";
import "@reduxjs/toolkit";
const EritreaFlag = "/build/assets/eritrea_flag-BHH5prNC.png";
const USAFlag = "/build/assets/usa_flag-CXrMqO9C.png";
const bg_1_imageUrl = "/build/assets/Login_bg_1-DBUx0rW1.png";
const signup_bg_imageUrl = "/build/assets/signup_bg_1-C4wtQ-0T.png";
function Welcome({ auth }) {
  const [signIn, setSignIn] = React.useState(true);
  const language = useSelector((store) => store.language.language);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "relative sm:flex sm:justify-center sm:items-start min-h-screen bg-dots-darker\n             bg-center  dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-end  -space-x-2 p-5 mr-32 z-50 w-full h-10", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => dispatch(setLanguage("tg")),
            className: `flex items-center justify-start ${language === "tg" ? "border" : ""} border-gray-400 rounded-md px-4 py-1 text-black`,
            children: [
              /* @__PURE__ */ jsx("img", { src: EritreaFlag, alt: "translate", className: "w-6 h-4 mr-2" }),
              "ትግርኛ"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => dispatch(setLanguage("en")),
            className: `flex items-center justify-start ${language === "en" ? "border" : ""} border-gray-400 rounded-md px-4 py-1 text-black`,
            children: [
              /* @__PURE__ */ jsx("img", { src: USAFlag, alt: "translate", className: "w-6 h-4 mr-2" }),
              "English"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white shadow-lg absolute overflow-hidden w-screen h-screen top-0 left-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute top-14 h-full transition-all ease-in-out duration-600 left-0 w-1/2 opacity-0 z-10 ${!signIn ? "translate-x-full opacity-100 z-50" : ""}`, children: /* @__PURE__ */ jsx(Register, {}) }),
            /* @__PURE__ */ jsx("div", { className: `absolute  h-full transition-all ease-in-out duration-600 left-0 w-1/2 z-20 ${!signIn && "translate-x-full"}`, children: /* @__PURE__ */ jsx(Login, {}) }),
            /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-600 z-40 ${!signIn && "translate-x-[-100%]"}`, children: /* @__PURE__ */ jsxs("div", { className: `absolute left-[-100%] h-full w-[200%] text-black transition-transform ease-in-out duration-600 ${!signIn && "translate-x-[50%]"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: `absolute top-0 h-full w-1/2 flex items-center justify-center flex-col p-0 mx-10 text-center transition-transform ease-in-out duration-600 ${!signIn ? "translate-x-0" : "translate-x-[-20%]"}`, children: [
                /* @__PURE__ */ jsx("img", { src: signup_bg_imageUrl, alt: "bg", className: "max-w-lg mx-auto my-5" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-light leading-5 tracking-wide my-5", children: "To keep connected with us please login with your personal info" }),
                /* @__PURE__ */ jsx("button", { onClick: () => setSignIn(true), className: "bg-transparent border border-blue-800 text-black rounded-lg text-sm font-bold \n                                py-3 px-12 uppercase tracking-wide transition-transform duration-75 ease-in-out hover:scale-95 focus:outline-none", children: "Sign In" })
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `absolute right-0  top-0 h-full w-1/2 flex items-center justify-center flex-col p-0 mx-10 text-center 
                            transition-transform ease-in-out duration-600 ${!signIn && "translate-x-[20%]"}`,
                  children: [
                    /* @__PURE__ */ jsx("img", { src: bg_1_imageUrl, alt: "bg" }),
                    /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm", children: t("Hello friend, are you new here? Please register!") }),
                    /* @__PURE__ */ jsx("button", { onClick: () => setSignIn(false), className: "bg-transparent border border-blue-800 text-black rounded-lg \n                                text-sm font-bold py-3 px-12 uppercase tracking-wide transition-transform duration-75 ease-in-out hover:scale-95\n                                focus:outline-none", children: "Sign Up" })
                  ]
                }
              )
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  Welcome as default
};
