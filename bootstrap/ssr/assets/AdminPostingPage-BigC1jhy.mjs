import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { toEthiopian } from "ethiopian-date";
import { A as AdminLayout } from "./AdminLayout-C3jCJh_q.mjs";
import { useSelector } from "react-redux";
import PostDailyReadings from "./PostDailyReadings-DOlU_jNl.mjs";
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
import "react-i18next";
import "./languageSlice-BzN7Wppz.mjs";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "@inertiajs/inertia";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "./adminSlice-CWD1up8r.mjs";
import "dayjs";
const GeezDateDisplay = () => {
  const today = /* @__PURE__ */ new Date();
  if (isNaN(today)) {
    console.error("Invalid Date:", today);
    return /* @__PURE__ */ jsx("div", { children: "Error: Invalid Date" });
  }
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  let ethiopianDate;
  try {
    ethiopianDate = toEthiopian(year, month, day);
  } catch (error) {
    console.error("Conversion Error:", error);
    return /* @__PURE__ */ jsxs("div", { children: [
      "Error converting date: ",
      error.message
    ] });
  }
  const [etYear, etMonth, etDay] = ethiopianDate;
  const ethiopianMonths = [
    "መስከረም",
    "ጥቅምቲ",
    "ሕዳር",
    "ታሕሳስ",
    "ጥሪ",
    "የካቲት",
    "መጋቢት",
    "ምያዝያ",
    "ግንቦት",
    "ሰነ",
    "ሓምለ",
    "ነሓሰ",
    "ግንቦት"
  ];
  return /* @__PURE__ */ jsxs("p", { children: [
    ethiopianMonths[etMonth - 1],
    " ",
    etDay,
    ", ",
    etYear
  ] });
};
const AdminPostingPage = () => {
  const theme = useSelector((store) => store.theme.theme);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "whiterBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-3 font-bold text-2xl underline mb-5", children: [
      /* @__PURE__ */ jsx("h1", { children: "ዕለት ብግእዝ ፥" }),
      /* @__PURE__ */ jsx(GeezDateDisplay, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: " overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "p-1", style: { maxHeight: "calc(100vh - 200px)" }, children: /* @__PURE__ */ jsx(PostDailyReadings, {}) }) })
  ] }) });
};
export {
  AdminPostingPage as default
};
