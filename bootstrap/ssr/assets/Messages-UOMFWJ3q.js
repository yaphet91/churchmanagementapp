import { jsxs, jsx } from "react/jsx-runtime";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import "react";
import { useSelector } from "react-redux";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
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
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
const Messages = () => {
  const theme = useSelector((store) => store.theme.theme);
  return /* @__PURE__ */ jsxs(MemberLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Messages" }) }),
    /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "white" : "darkBg"} rounded-sm  lg:max-h-[850vh]`, children: /* @__PURE__ */ jsxs("div", { class: "w-1/4 bg-transparent border-r border-gray-300 dark:border-gray-700  lg:max-h-[850vh]", children: [
      /* @__PURE__ */ jsx("header", { class: "p-4 h-24 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center bg-indigo-600 dark:bg-gray-600 text-white", children: /* @__PURE__ */ jsx("h1", { class: "text-2xl font-semibold", children: "Chat Web" }) }),
      /* @__PURE__ */ jsxs("div", { class: "overflow-y-auto h-screen p-3 mb-9 pb-20", children: [
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Alice" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-400", children: "Hoorayy!!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Charlie" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "Hey, do you have any recommendations for a good movie to watch?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "David" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "I just finished reading a great book! It was so captivating." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Ella" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "What's the plan for this weekend? Anything fun?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/ffc2e2/ffdbdb.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Fiona" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "I heard there's a new exhibit at the art museum. Interested?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/f83f3f/4f4f4f.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "George" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "I tried that new cafe downtown. The coffee was fantastic!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Hannah" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "I'm planning a hiking trip next month. Want to join?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/70ff33/501616.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Ian" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "Let's catch up soon. It's been too long!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md", children: [
          /* @__PURE__ */ jsx("div", { class: "w-12 h-12 bg-gray-300 rounded-full mr-3", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x/30916c/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato", alt: "User Avatar", class: "w-12 h-12 rounded-full" }) }),
          /* @__PURE__ */ jsxs("div", { class: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { class: "text-lg font-semibold", children: "Jack" }),
            /* @__PURE__ */ jsx("p", { class: "text-gray-600", children: "Remember that hilarious joke you told me? I can't stop laughing!" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Messages as default
};
