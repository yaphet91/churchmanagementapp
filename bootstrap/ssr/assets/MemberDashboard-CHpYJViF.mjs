import { jsx, jsxs } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
/* empty css                 */
import { i as images } from "./images-2LzdHB5O.mjs";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Rectangle } from "recharts";
import { M as Modal } from "./Modal-BZNRvUHP.mjs";
import { motion } from "framer-motion";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/react";
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
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "./anastasia_logo-LmIUZM3a.mjs";
const DashCard = ({ children, className }) => {
  return /* @__PURE__ */ jsx("div", { className: `bg-bodydark1 rounded-lg
             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]
             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400 ${className}`, children });
};
const data = [
  { month: "Jan", Tithes: 4e3, Offerings: 2400 },
  { month: "Feb", Tithes: 3e3, Offerings: 1398 },
  { month: "Mar", Tithes: 2e3, Offerings: 9800 },
  { month: "Apr", Tithes: 2780, Offerings: 3908 },
  { month: "May", Tithes: 1890, Offerings: 4800 },
  { month: "Jun", Tithes: 2390, Offerings: 3800 },
  { month: "Jul", Tithes: 3490, Offerings: 4300 },
  { month: "Aug", Tithes: 4e3, Offerings: 2400 },
  { month: "Sep", Tithes: 3e3, Offerings: 1398 },
  { month: "Oct", Tithes: 2e3, Offerings: 9800 },
  { month: "Nov", Tithes: 2780, Offerings: 3908 },
  { month: "Dec", Tithes: 1890, Offerings: 4800 }
];
const EshirMobaeBarChart = () => /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 500, children: /* @__PURE__ */ jsxs(
  BarChart,
  {
    data,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    },
    children: [
      /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
      /* @__PURE__ */ jsx(XAxis, { dataKey: "month" }),
      /* @__PURE__ */ jsx(YAxis, {}),
      /* @__PURE__ */ jsx(Tooltip, {}),
      /* @__PURE__ */ jsx(Legend, {}),
      /* @__PURE__ */ jsx(Bar, { dataKey: "Tithes", fill: "#8884d8", activeBar: /* @__PURE__ */ jsx(Rectangle, { fill: "pink", stroke: "blue" }) }),
      /* @__PURE__ */ jsx(Bar, { dataKey: "Offerings", fill: "#82ca9d", activeBar: /* @__PURE__ */ jsx(Rectangle, { fill: "gold", stroke: "purple" }) })
    ]
  }
) });
const ServiceCard = ({ onClick, service, animate, transition }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: `h-32 shadow-md flex flex-col items-center justify-center border cursor-pointer
        gradientBg
        rounded-md hover:bg-slate-700 overflow-hidden`,
      onClick,
      animate,
      transition,
      children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold uppercase p-2", children: service })
    }
  );
};
const ServiceOptions = ["Baptism", "Wedding", "Visit", "Confession", "Counselling", "Prayer of Sick", "Attestation", "Call", "Others"];
const RequestService = ({ isOpen, onClose }) => {
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "3xl", maxHeight: "h-[80vh]", children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-center mb-4", children: "Request a Service" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      " ",
      ServiceOptions.map((service, index) => /* @__PURE__ */ jsx(
        ServiceCard,
        {
          service,
          transition: { duration: 0.5 }
        },
        index
      ))
    ] })
  ] }) });
};
const messages = [
  { profile: images.user, username: "Gebray Weldu", time: "02:10pm", message: "Hello Nahom, I am glad to inform you ..." },
  { profile: images.user, username: "Francis Tran", time: "09:10pm", message: "Hello Nahom, I am glad to inform you ..." },
  { profile: images.user, username: "Elina Palacios", time: "11:10pm", message: "Hello Nahom, I am glad to inform yoo..." },
  { profile: images.user, username: "Katherine Webster", time: "04:10pm", message: "Hello Nahom, I am glad to inform..." }
];
const MemberDashboard = () => {
  const [isRequestServiceOpen, setIsRequestServiceOpen] = useState(false);
  return /* @__PURE__ */ jsxs(MemberLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl  font-bold text-gray-600", children: "Member Dashboard" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsRequestServiceOpen(true),
          className: "p-2 px-4 hover:bg-gray-400 rounded-lg text-lg font-semibold\n                 hover:text-gray-400 btnPrimary dark:bg-gray-700",
          children: "Request Service "
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-start space-x-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-2/3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-col p-6 gradientBg rounded-md", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white upper", children: "Welcome back! Nahom" }),
          /* @__PURE__ */ jsx("div", { className: "w-[65%] mt-3", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-700 font-semibold text-lg", children: [
            '"No man has seen God at any time; the only begotten Son, who is in the bosom of the Father, he has declared him". ',
            /* @__PURE__ */ jsx("span", { className: "text-white", children: "John 1. 18" })
          ] }) }),
          /* @__PURE__ */ jsx("button", { className: "btnPrimary w-[170px] p-2 mt-4 text-black font-semibold rounded-md ", children: "Mark as read" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 mb-6 flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl mb-3 font-semibold", children: "Personal Statistics" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs(DashCard, { className: "flex p-5", children: [
                /* @__PURE__ */ jsx("div", { className: "w-[100px]", children: /* @__PURE__ */ jsx(
                  CircularProgressbar,
                  {
                    value: 20,
                    text: `${20}%`,
                    styles: buildStyles({
                      // rotation: 0.25,
                      // strokeLinecap: 'butt',
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      // pathTransition: 'none',
                      pathColor: `rgba(62, 152, 199, ${100 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7"
                    })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-4 p-2", children: [
                  /* @__PURE__ */ jsx("h1", { className: "font-semibold text-xl text-gray-600 dark:text-gray-300", children: "Your Engagment" }),
                  /* @__PURE__ */ jsx("h2", { children: "Sunday Masses" }),
                  /* @__PURE__ */ jsx("h2", { className: "italic", children: "Since 12 Sep 2018" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(DashCard, { className: "flex p-5", children: [
                /* @__PURE__ */ jsx("div", { className: "w-[100px]", children: /* @__PURE__ */ jsx(
                  CircularProgressbar,
                  {
                    value: 50,
                    text: `${50}%`,
                    styles: buildStyles({
                      rotation: 0.25,
                      // strokeLinecap: 'butt',
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      // pathTransition: 'none',
                      pathColor: `rgba(62, 152, 199, ${100 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7"
                    })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-4 p-2", children: [
                  /* @__PURE__ */ jsx("h1", { className: "font-semibold text-xl  text-gray-600 dark:text-gray-300", children: "Your Engagment" }),
                  /* @__PURE__ */ jsx("h2", { children: "Sunday Masses" }),
                  /* @__PURE__ */ jsx("h2", { className: "italic", children: "Since 12 Sep 2018" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold mb-3", children: "Inboxes" }),
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(DashCard, { className: "p-3 py-9", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 items-start justify-start", children: [
                /* @__PURE__ */ jsx("img", { src: images.user, className: "w-16 h-16", alt: "placeholder" }),
                /* @__PURE__ */ jsxs("div", { className: "", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-start space-x-16", children: [
                    /* @__PURE__ */ jsx("h1", { className: "font-bold  text-gray-600 dark:text-gray-300 text-xl", children: "Gebray Weldu" }),
                    /* @__PURE__ */ jsx("p", { children: "09:10pm" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Hello Nahom, I am glad to inform you that the church has decided to..." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("hr", { class: "h-px my-[35px] bg-gray-200 border-0 dark:bg-gray-700" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 items-start justify-start", children: [
                /* @__PURE__ */ jsx("img", { src: images.user, className: "w-16 h-16", alt: "placeholder" }),
                /* @__PURE__ */ jsxs("div", { className: "", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-start space-x-16", children: [
                    /* @__PURE__ */ jsx("h1", { className: "font-bold  text-gray-600 dark:text-gray-300 text-xl", children: "Gebray Weldu" }),
                    /* @__PURE__ */ jsx("p", { children: "09:10pm" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Hello Nahom, I am glad to inform you that the church has decided to..." })
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl mb-3 font-semibold", children: "Monthly Eshir and Mobae tracker" }),
        /* @__PURE__ */ jsx(DashCard, { className: "flex-col mt-2", children: /* @__PURE__ */ jsx(EshirMobaeBarChart, {}) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-1/3 flex flex-col items-start", children: [
        /* @__PURE__ */ jsxs(DashCard, { className: "flex flex-row items-center justify-between p-7 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-2 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Attendance" }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-green-600", children: "340" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-2 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Late" }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-yellow-600", children: "12" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-2 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Absent" }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-red-600", children: "4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl my-3.5 font-semibold", children: "Messages" }),
        /* @__PURE__ */ jsx(DashCard, { className: "flex flex-col  mb-7 pt-1", children: messages.map((message, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-start gap-3 px-4 py-1 mb-6", children: [
          /* @__PURE__ */ jsx("img", { src: message.profile, className: "w-16 h-16", alt: "placeholder" }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between space-x-16", children: [
              /* @__PURE__ */ jsx("h1", { className: "font-bold dark:text-white text-black text-lg", children: message.username }),
              /* @__PURE__ */ jsx("p", { children: message.time })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: message.message })
          ] })
        ] }, index)) }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl mb-3 font-semibold", children: "Up coming events" }),
        /* @__PURE__ */ jsx(DashCard, { className: "flex-col  w-full h-[500px] p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-start gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-center justify-start my-3 space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: images.about01, className: "w-[70px] h-[60px] rounded-sm", alt: "placeholder" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Sunday Mass" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Every Sunday at 9:00am" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-center justify-start my-3 space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: images.about02, className: "w-[70px] h-[60px] rounded-sm", alt: "placeholder" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Bible Study" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Every Wednesday at 6:00pm" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-center justify-start my-3 space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: images.about03, className: "w-[70px] h-[60px] rounded-sm", alt: "placeholder" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Tesfa choir practice" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Every Sunday at 6:00pm" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-center justify-start my-3 space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: images.about04, className: "w-[70px] h-[60px] rounded-sm", alt: "placeholder" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Sunday Mass" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Every Sunday at 9:00am" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-center justify-start my-3 space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: images.about04, className: "w-[70px] h-[60px] rounded-sm", alt: "placeholder" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Sunday Mass" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Every Sunday at 9:00am" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(RequestService, { isOpen: isRequestServiceOpen, onClose: () => setIsRequestServiceOpen(false) })
    ] })
  ] });
};
export {
  MemberDashboard as default
};
