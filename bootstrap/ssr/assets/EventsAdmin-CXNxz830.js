import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-CPnwM-vu.js";
import { useState, useEffect } from "react";
import { GrAddCircle } from "react-icons/gr";
import EventForm from "./EventForm-8nCtYvsC.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DatePicker from "react-datepicker";
/* empty css                          */
import { N as NoDataFound } from "./NoDataFound-DT-Qkifc.js";
import "@inertiajs/inertia-react";
import { T as Tooltip2 } from "./Tooltip2-BdnA4zoi.js";
import { a as setSelectedEvent } from "./eventSlice-cpfWu0eT.js";
import { Inertia } from "@inertiajs/inertia";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
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
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./adminSlice-CWD1up8r.js";
import "./Modal-BZNRvUHP.js";
import "./TextInput-CFLyt_ba.js";
import "./InputLabel-DO02gwKJ.js";
import "react-quill";
import "./CustomQuill-CeRDju4V.js";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "spinners-react";
import "./AutoComplete-DeTDUJS5.js";
import "@heroicons/react/solid/esm/index.js";
import "./InputError-Dm4RUL5I.js";
import "./CheckboxTwo-DnAc0Jue.js";
import "./BirthdayEntry-DAdqgHRX.js";
import "flatpickr";
/* empty css                       */
const EventsAdmin = () => {
  const [isEventFormModalOpen, setIsEventFormModalOpen] = useState(false);
  const theme = useSelector((store) => store.theme.theme);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();
  const handleAddEvent = () => {
    setIsEventFormModalOpen(true);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  useEffect(() => {
    filterEvents();
  }, [startDate, endDate, events]);
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/admin/api/events");
      setEvents(response.data);
      setFilteredEvents([...response.data].reverse());
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  const handleEventClick = async (event) => {
    try {
      dispatch(setSelectedEvent(event));
      Inertia.visit(`/events/${event.id}`, { event });
    } catch (error) {
      console.error(`Error fetching details for event ${event.id}:`, error);
    }
  };
  const filterEvents = () => {
    let filtered = events;
    if (startDate && endDate) {
      filtered = events.filter((event) => {
        const eventStart = new Date(event.start_time);
        const eventEnd = new Date(event.end_time);
        return eventStart >= startDate && eventEnd <= endDate;
      });
    }
    setFilteredEvents([...filtered].reverse());
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "bg-white" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleAddEvent,
          className: "p-2 rounded-md flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-400 hover:text-black",
          children: [
            /* @__PURE__ */ jsx(GrAddCircle, {}),
            "Add Event"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold", children: "Events" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 my-4", children: [
        /* @__PURE__ */ jsx(
          DatePicker,
          {
            selected: startDate,
            onChange: (date) => setStartDate(date),
            selectsStart: true,
            startDate,
            endDate,
            placeholderText: "Start Date",
            className: "p-2 border rounded"
          }
        ),
        /* @__PURE__ */ jsx(
          DatePicker,
          {
            selected: endDate,
            onChange: (date) => setEndDate(date),
            selectsEnd: true,
            startDate,
            endDate,
            placeholderText: "End Date",
            className: "p-2 border rounded"
          }
        )
      ] }),
      filteredEvents.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-4", children: filteredEvents.map((event) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => handleEventClick(event),
          className: "flex min-h-[130px] w-full items-start justify-start space-x-6 rounded-lg bg-gray-700 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-[10px] h-full bg-green-600" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center p-4 justify-start space-x-6", children: [
              /* @__PURE__ */ jsx("img", { src: event.image_url, alt: "Event", className: "rounded-md h-[90px] w-[120px] object-cover" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-xl capitalize", children: `${event.title}` }),
                /* @__PURE__ */ jsx(Tooltip2, { className: "italic", text: event.description ? event.description : "", maxLength: 80 }),
                /* @__PURE__ */ jsxs("h2", { className: "mt-2 font-bold", children: [
                  "From ",
                  event.start_time,
                  " to ",
                  event.end_time
                ] })
              ] })
            ] })
          ]
        },
        event.id
      )) }) : /* @__PURE__ */ jsx(NoDataFound, {})
    ] }),
    /* @__PURE__ */ jsx(EventForm, { isOpen: isEventFormModalOpen, onClose: () => setIsEventFormModalOpen(false), onEventCreated: fetchEvents })
  ] });
};
export {
  EventsAdmin as default
};
