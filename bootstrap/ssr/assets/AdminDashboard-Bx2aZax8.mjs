import { jsx, jsxs } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-C3jCJh_q.mjs";
import { usePage, Link } from "@inertiajs/react";
import "react";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/inertia-react";
import "react-redux";
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
const StatCard = ({ label, value, href }) => {
  const content = /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-semibold text-slate-900 dark:text-white", children: value })
  ] });
  return href ? /* @__PURE__ */ jsx(Link, { href, children: content }) : content;
};
const formatName = (record) => {
  return [record.first_name, record.father_name, record.grand_father_name].filter(Boolean).join(" ");
};
const AdminDashboard = () => {
  const { admin, summary } = usePage().props;
  const totals = (summary == null ? void 0 : summary.totals) || {};
  const recentMembers = (summary == null ? void 0 : summary.recentMembers) || [];
  const recentGroups = (summary == null ? void 0 : summary.recentGroups) || [];
  const recentEvents = (summary == null ? void 0 : summary.recentEvents) || [];
  return /* @__PURE__ */ jsx(AdminLayout, { admin, children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "rounded-2xl bg-slate-950 px-6 py-8 text-white shadow-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-slate-300", children: "Admin Dashboard" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-3xl font-semibold", children: "Testing workspace for the church admin portal" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-sm text-slate-300", children: "Authentication barriers are relaxed for local testing. The cards and lists below are now backed by live database counts so you can validate the admin flow without signing in." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ jsx(StatCard, { label: "Members", value: totals.members || 0, href: "/admin/people/adults" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Children", value: totals.children || 0, href: "/admin/people/children" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Groups", value: totals.groups || 0, href: "/admin/groups" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Events", value: totals.events || 0, href: "/admin/event/page/" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Users", value: totals.users || 0, href: "/admin/users" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Roles", value: totals.roles || 0, href: "/admin/roles" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Admins", value: totals.admins || 0 })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid gap-6 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: "Recent Members" }),
          /* @__PURE__ */ jsx(Link, { className: "text-sm text-blue-600", href: "/admin/people/adults", children: "View all" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: recentMembers.length ? recentMembers.map((member) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/60", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-slate-900 dark:text-white", children: formatName(member) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-slate-500 dark:text-slate-400", children: [
            member.card_number || "No card",
            member.email ? ` • ${member.email}` : ""
          ] })
        ] }, member.id)) : /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "No members found." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: "Recent Groups" }),
          /* @__PURE__ */ jsx(Link, { className: "text-sm text-blue-600", href: "/admin/groups", children: "Manage groups" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: recentGroups.length ? recentGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/60", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-slate-900 dark:text-white", children: group.title }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-slate-500 dark:text-slate-400", children: [
            group.members_count || 0,
            " members • ",
            group.visibility || "private"
          ] })
        ] }, group.id)) : /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "No groups found." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: "Recent Events" }),
          /* @__PURE__ */ jsx(Link, { className: "text-sm text-blue-600", href: "/admin/event/page/", children: "Open events" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: recentEvents.length ? recentEvents.map((event) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/60", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-slate-900 dark:text-white", children: event.title }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-slate-500 dark:text-slate-400", children: [event.date, event.start_time, event.location].filter(Boolean).join(" • ") || "Schedule not set" })
        ] }, event.id)) : /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "No events found." }) })
      ] })
    ] })
  ] }) });
};
export {
  AdminDashboard as default
};
