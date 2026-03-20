import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import "./themeSlice-BmOV-XST.mjs";
import { Head } from "@inertiajs/react";
import Navbar from "./Navbar-fXjnmkcA.mjs";
import Home from "./Home-YMd3ghPS.mjs";
import About from "./About-CD5QtrjX.mjs";
import Mission from "./Mission-CwYk55NM.mjs";
import { useDispatch } from "react-redux";
import { a as addUserDetail } from "./userSlice-DH0slH5l.mjs";
import Media from "./Media-dRs_kaAv.mjs";
import Services from "./Services-V4DQt8fh.mjs";
import Contact from "./Contact-DXKqCaCs.mjs";
import "@headlessui/react";
import "@reduxjs/toolkit";
import "react-icons/hi";
import "framer-motion";
import "./images-2LzdHB5O.mjs";
import "./anastasia_logo-LmIUZM3a.mjs";
import "react-i18next";
import "react-scroll";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "./languageSlice-BzN7Wppz.mjs";
import "@inertiajs/inertia";
import "./memberSlice-CZbZjefE.mjs";
import "./userChurchHistorySlice-BHxkEeSq.mjs";
import "./userImageSlice-6eE4yU9I.mjs";
import "./stepperSlice-DCzqqTcy.mjs";
import "./newChurchSlice-CfxFHsE6.mjs";
import "./banner-DXSp8PK_.mjs";
import "./variants-IrQHrc9C.mjs";
import "@inertiajs/inertia-react";
function Landing({ auth }) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(auth);
    if (auth && auth.user) {
      const { name, email, has_completed_membership_form } = auth.user;
      dispatch(addUserDetail({ name, email, has_completed_membership_form }));
    }
  }, [auth, dispatch]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Anastasia | Membership Boarding" }),
    /* @__PURE__ */ jsx(Navbar, { user: auth.user }),
    /* @__PURE__ */ jsx(Home, { user: auth.user }),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Mission, {}),
    /* @__PURE__ */ jsx(Media, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  Landing as default
};
