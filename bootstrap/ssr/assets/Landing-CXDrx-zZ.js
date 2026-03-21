import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import "./themeSlice-BmOV-XST.js";
import { Head } from "@inertiajs/react";
import Navbar from "./Navbar-Cs--ZYIm.js";
import Home from "./Home-J7Pz6uMX.js";
import About from "./About-C3k3P85Y.js";
import Mission from "./Mission-V30PQWwJ.js";
import { useDispatch } from "react-redux";
import { a as addUserDetail } from "./userSlice-DH0slH5l.js";
import Media from "./Media-DQ2yRaRS.js";
import Services from "./Services-Ch9Q1OWz.js";
import Contact from "./Contact-Mb21YJf2.js";
import "@headlessui/react";
import "@reduxjs/toolkit";
import "react-icons/hi";
import "framer-motion";
import "./images-Vl6MKc8t.js";
import "./anastasia_logo-LmIUZM3a.js";
import "react-i18next";
import "react-scroll";
import "./LanguageSwitcher-DrORwT0e.js";
import "./languageSlice-BzN7Wppz.js";
import "@inertiajs/inertia";
import "./memberSlice-CZbZjefE.js";
import "./userChurchHistorySlice-BHxkEeSq.js";
import "./userImageSlice-6eE4yU9I.js";
import "./stepperSlice-DCzqqTcy.js";
import "./newChurchSlice-CfxFHsE6.js";
import "./banner-DXSp8PK_.js";
import "./variants-IrQHrc9C.js";
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
