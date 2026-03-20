import { jsx, jsxs } from "react/jsx-runtime";
import { N as NoDataFound } from "./NoDataFound-DT-Qkifc.mjs";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import "@inertiajs/inertia";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { T as Tooltip2 } from "./Tooltip2-BdnA4zoi.mjs";
import "lucide-react";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./themeSlice-BmOV-XST.mjs";
import "@headlessui/react";
import "./userSlice-DH0slH5l.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "./languageSlice-BzN7Wppz.mjs";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
const MemberGroups = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.user.value.membershipId);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetchGroups();
  }, []);
  const fetchGroups = async () => {
    try {
      const response = await axios.get("/groups");
      setGroups(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };
  return /* @__PURE__ */ jsx(MemberLayout, { children: /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`, children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold", children: t("Groups") }) }),
    groups.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-4", children: groups.map((data) => /* @__PURE__ */ jsxs("div", { className: "h-[120px] w-[430px] rounded-md flex items-start justify-start space-x-6 border border-gray-500 p-4 bg-gray-700 cursor-pointer", children: [
      /* @__PURE__ */ jsx("img", { src: data.avatar, alt: "profile", className: "rounded-md w-[70px]" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl capitalize", children: `${data.title}` }),
        /* @__PURE__ */ jsx(Tooltip2, { className: "italic", text: data.description ? data.description : "", maxLength: 80 })
      ] })
    ] }, data.id)) }) : /* @__PURE__ */ jsx(NoDataFound, {})
  ] }) });
};
export {
  MemberGroups as default
};
