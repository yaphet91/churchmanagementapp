import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-C3jCJh_q.mjs";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { s as setEventMembers } from "./eventSlice-cpfWu0eT.mjs";
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
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "@inertiajs/inertia";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "./adminSlice-CWD1up8r.mjs";
const AttendancePage = ({ event }) => {
  const selectedEvent = useSelector((store) => store.event.selectedEvent);
  const eventMembers = useSelector((store) => store.event.eventMembers);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchGroupMembers();
  }, []);
  const fetchGroupMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/events/${selectedEvent.id}/members`);
      const membersWithStatus = response.data.map((member) => ({
        ...member,
        isCheckedIn: true
        // Assume all members initially not checked in
      }));
      console.log(membersWithStatus);
      dispatch(setEventMembers(membersWithStatus));
    } catch (error) {
      console.error("Failed to fetch members", error);
    } finally {
      setLoading(false);
    }
  };
  const handleToggleCheck = async (member) => {
    try {
      const action2 = member.isCheckedIn ? "check-out" : "check-in";
      const response = await axios.post(`/events/${selectedEvent.id}/${action2}`, { membership_id: member.id });
      const updatedMembers = eventMembers.map(
        (m) => m.id === member.id ? { ...m, isCheckedIn: !m.isCheckedIn } : m
      );
      dispatch(setEventMembers(updatedMembers));
    } catch (error) {
      console.error(`Failed to ${action}`, error);
      alert(`Failed to ${action === "check-out" ? "check out" : "check in"}`);
    }
  };
  const getComponent = () => {
    switch (activeTab) {
      case "All":
        return /* @__PURE__ */ jsx(All, { members: eventMembers, onHandleToggleCheck: handleToggleCheck });
      case "Attendees":
        return /* @__PURE__ */ jsx(Attendees, { members: eventMembers.filter((member) => member.isCheckedIn) });
      case "Absentees":
        return /* @__PURE__ */ jsx(Absentees, { members: eventMembers.filter((member) => !member.isCheckedIn) });
      default:
        return /* @__PURE__ */ jsx("div", { children: "Select a category" });
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => window.history.back(),
        className: "p-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, {}),
          "Back"
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Event Attendance" }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "darkBg p-2 rounded-t-md", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[75%]", children: /* @__PURE__ */ jsx(
          DebouncedInput,
          {
            className: "flex p-2 font-lg text-black dark:text-white bg-transparent border-none rounded-md w-full",
            placeholder: "Search all columns..."
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start justify-between mt-2 border-t border-gray-700", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "cursor-pointer flex justify-center space-x-2 px-4 py-2 w-full border-r border-gray-600",
              onClick: () => setActiveTab("All"),
              children: [
                /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "All" }),
                /* @__PURE__ */ jsxs("h1", { children: [
                  "(",
                  eventMembers.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "cursor-pointer flex justify-center space-x-2 px-4 py-2 w-full border-r border-gray-600",
              onClick: () => setActiveTab("Attendees"),
              children: [
                /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "Attendees" }),
                /* @__PURE__ */ jsxs("h1", { children: [
                  "(",
                  eventMembers.filter((member) => member.isCheckedIn).length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "cursor-pointer flex justify-center space-x-2 px-4 py-2 w-full",
              onClick: () => setActiveTab("Absentees"),
              children: [
                /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "Absentees" }),
                /* @__PURE__ */ jsxs("h1", { children: [
                  "(",
                  eventMembers.filter((member) => !member.isCheckedIn).length,
                  ")"
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative overflow-auto transition-all duration-300 max-h-[70vh] p-3", children: getComponent() })
    ] })
  ] });
};
function All({ members, onHandleToggleCheck }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-4", children: members.map((member, index) => /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center justify-between border-b border-gray-600 p-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-6", children: [
      /* @__PURE__ */ jsx("img", { src: member.image_url || "path/to/default/avatar.jpg", alt: member.first_name, className: "w-10 h-10 rounded-full" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: member.first_name }),
        /* @__PURE__ */ jsx("p", { children: member.email })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onHandleToggleCheck(member),
        className: `p-2 rounded-md ${member.isCheckedIn ? "bg-green-500" : "bg-gray-500"} text-white`,
        children: member.isCheckedIn ? "Check Out" : "Check In"
      }
    )
  ] }, index)) });
}
function Attendees({ members }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-4", children: members.map((member, index) => /* @__PURE__ */ jsx(MemberCard, { member }, index)) });
}
function Absentees({ members }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-4", children: members.map((member, index) => /* @__PURE__ */ jsx(MemberCard, { member }, index)) });
}
function MemberCard({ member }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-between border-b border-gray-600 p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-6", children: [
    /* @__PURE__ */ jsx("img", { src: member.image_url || "path/to/default/avatar.jpg", alt: member.first_name, className: "w-10 h-10 rounded-full" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: member.first_name }),
      /* @__PURE__ */ jsx("p", { children: member.email })
    ] })
  ] }) });
}
function DebouncedInput({ placeholder, className }) {
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(null);
  const handleInputChange = (e) => {
    clearTimeout(timer);
    const newValue = e.target.value;
    setValue(newValue);
    const newTimer = setTimeout(() => {
    }, 500);
    setTimer(newTimer);
  };
  return /* @__PURE__ */ jsx(
    "input",
    {
      value,
      onChange: () => handleInputChange,
      placeholder,
      className
    }
  );
}
export {
  AttendancePage as default
};
