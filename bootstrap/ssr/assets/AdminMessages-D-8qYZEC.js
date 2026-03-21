import { jsx, jsxs } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-CPnwM-vu.js";
import { usePage, Link } from "@inertiajs/react";
import "react";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/inertia-react";
import "react-redux";
import "./TooltipContext-CXfF4_Yf.js";
import "@reduxjs/toolkit";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "react-i18next";
import "./languageSlice-BzN7Wppz.js";
import "lucide-react";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "@inertiajs/inertia";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./adminSlice-CWD1up8r.js";
const formatName = (record) => {
  return [record.first_name, record.father_name, record.grand_father_name].filter(Boolean).join(" ");
};
const AdminMessages = () => {
  const { admin, messageSummary } = usePage().props;
  const totals = (messageSummary == null ? void 0 : messageSummary.totals) || {};
  const recipients = (messageSummary == null ? void 0 : messageSummary.recentRecipients) || [];
  return /* @__PURE__ */ jsx(AdminLayout, { admin, children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-slate-900 dark:text-white", children: "Messaging Overview" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400", children: "There is no dedicated messaging backend in this repo yet, so this screen now exposes live contact readiness data from memberships and users to support dashboard testing." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-emerald-50 p-5 text-emerald-950", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wide", children: "Members with email" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-semibold", children: totals.membersWithEmail || 0 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-sky-50 p-5 text-sky-950", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wide", children: "Members with phone" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-semibold", children: totals.membersWithPhone || 0 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-violet-50 p-5 text-violet-950", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wide", children: "Users with email" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-semibold", children: totals.usersWithEmail || 0 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-amber-50 p-5 text-amber-950", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wide", children: "Missing contact info" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-semibold", children: totals.missingContactInfo || 0 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: "Recent Recipients" }),
        /* @__PURE__ */ jsx(Link, { className: "text-sm text-blue-600", href: "/admin/people/adults", children: "Open people list" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full text-left text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "border-b border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 pr-4", children: "Name" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 pr-4", children: "Card" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 pr-4", children: "Email" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 pr-4", children: "Phone" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: recipients.length ? recipients.map((recipient) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-100 dark:border-slate-800", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 pr-4 text-slate-900 dark:text-white", children: formatName(recipient) }),
          /* @__PURE__ */ jsx("td", { className: "py-3 pr-4 text-slate-500 dark:text-slate-400", children: recipient.card_number || "-" }),
          /* @__PURE__ */ jsx("td", { className: "py-3 pr-4 text-slate-500 dark:text-slate-400", children: recipient.email || "-" }),
          /* @__PURE__ */ jsx("td", { className: "py-3 pr-4 text-slate-500 dark:text-slate-400", children: recipient.phone || "-" })
        ] }, recipient.id)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "py-4 text-slate-500", colSpan: "4", children: "No recipients available." }) }) })
      ] }) })
    ] })
  ] }) });
};
export {
  AdminMessages as default
};
