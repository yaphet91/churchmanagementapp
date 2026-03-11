import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import "./Dropdown-j6l3lkWe.js";
import { Head } from "@inertiajs/react";
import Navbar from "./Navbar-arJuwAs1.js";
import Home from "./Home-Ruc0pKlG.js";
import About from "./About-hxrbXcs9.js";
import Mission from "./Mission-_4N3bW3H.js";
import { useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import "@headlessui/react";
import "react-icons/hi";
import "framer-motion";
import "./images-SyjpYB08.js";
import "react-icons/gr";
import "@inertiajs/inertia-react";
import "react-scroll";
import "./variants-iKvyZPjN.js";
import "react-i18next";
import "@inertiajs/inertia";
const initialState = {
  value: {
    name: "",
    email: "",
    has_completed_membership_form: false
  }
};
const userSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers: {
      addUserDetail: (state, action) => {
        state.value = action.payload;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserDetail } = userSlice.actions;
userSlice.reducer;
function MembershipBoarding({ auth }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth && auth.user) {
      const { name, email, has_completed_membership_form } = auth.user;
      dispatch(addUserDetail({ name, email, has_completed_membership_form }));
    }
  }, [auth, dispatch]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Anastasia | Membership Boarding" }),
    /* @__PURE__ */ jsx(Navbar, { user: auth.user }),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Mission, {})
  ] });
}
export {
  MembershipBoarding as default
};
