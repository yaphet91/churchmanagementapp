import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { i as images } from "./images-SyjpYB08.js";
import { GrLanguage } from "react-icons/gr";
import { D as Dropdown } from "./Dropdown-j6l3lkWe.js";
import { Link as Link$1 } from "@inertiajs/inertia-react";
import { Link } from "react-scroll";
import "@inertiajs/react";
import "@headlessui/react";
const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "px-14 fixed z-10 w-full bg-white/25 backdrop-blur-lg border border-white/18 p-4 flex justify-between top-0 right-0 left-0 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "ml-2 flex space-x-14 items-center", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "text-2xl font-semibold flex items-center", children: [
        /* @__PURE__ */ jsx("img", { src: images.logo, alt: "logo", className: "w-10 md:w-14 inline-block items-center" }),
        /* @__PURE__ */ jsx("span", { className: "", children: "Anastasia" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "hidden md:flex md:justify-center md:items-center text-sm md:flex-1", children: ["home", "about", "work", "research", "honors", "skills", "contact"].map((item) => /* @__PURE__ */ jsxs("li", { className: "mx-4 group cursor-pointer uppercase font-medium text-gray-500 hover:text-blue-800 first-line:transition-colors flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx(Link, { activeClass: "active", spy: true, smooth: true, offset: -100, to: `#${item}`, children: item }),
        /* @__PURE__ */ jsx("div", { className: "w-14 h-1 mt-2 bg-transparent rounded-lg mb-1 group-hover:bg-blue-800" })
      ] }, `link-${item}`)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-x-4 hidden md:flex items-center", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "hidden md:flex items-center hover:text-blue-800 text-md text-gray-500 font-semibold", children: [
        /* @__PURE__ */ jsx(GrLanguage, { className: "mr-1" }),
        /* @__PURE__ */ jsx("span", { children: "Language" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ms-6", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex group items-center px-4 py-3 border border-gray-400 text-md leading-4 font-semibold rounded-md text-gray-500 bg-white hover:text-blue-700 focus:outline-none transition ease-in-out duration-150",
            children: [
              user.name,
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "ms-2 -me-0.5 h-4 w-4 group-hover:rotate-180",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
          /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
          /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
      /* @__PURE__ */ jsx(HiMenuAlt4, { className: "text-primary w-8 h-6", onClick: () => setToggle(true) }),
      toggle && /* @__PURE__ */ jsxs(
        motion.div,
        {
          whileInView: { x: [300, 0] },
          transition: { duration: 0.7, ease: "easeOut" },
          className: "fixed top-0 bottom-0 right-0 z-50 p-4 w-3/5 h-screen bg-white bg-cover bg-repeat shadow-md",
          style: { background: "white", borderBottomLeftRadius: "15px" },
          children: [
            /* @__PURE__ */ jsx(HiX, { className: "w-8 h-6 text-primary m-2", onClick: () => setToggle(false) }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col justify-start items-start h-full", children: ["home", "about", "work", "research", "honors", "skills", "contact"].map((item) => /* @__PURE__ */ jsx("li", { className: "my-4", children: /* @__PURE__ */ jsx(Link$1, { href: `#${item}`, className: "uppercase font-medium text-gray-500 hover:text-secondary transition-colors", onClick: () => setToggle(false), children: item }) }, item)) })
          ]
        }
      )
    ] })
  ] });
};
export {
  Navbar as default
};
