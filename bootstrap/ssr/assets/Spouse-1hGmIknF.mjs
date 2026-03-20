import { jsx, jsxs } from "react/jsx-runtime";
import { N as NoDataFound } from "./NoDataFound-DT-Qkifc.mjs";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Inertia } from "@inertiajs/inertia";
import LinkSpouses from "./LinkSpouses-BIXPERtk.mjs";
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
import "react-i18next";
import "./languageSlice-BzN7Wppz.mjs";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "axios";
import "./Modal-BZNRvUHP.mjs";
import "./TextInput-CFLyt_ba.mjs";
const Spouse = () => {
  const theme = useSelector((store) => store.theme.theme);
  const membershipId = useSelector((store) => store.user.value.membershipId);
  const [spouse, setSpouse] = useState([]);
  const [spouseAvatar, setSpouseAvatar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const spouseLinked = useSelector((state) => state.user.value.hasLinkedSpouse);
  const fetchSpouse = async (membershipId2) => {
    try {
      const response = await axios.get(`/memberships/${membershipId2}/spouse`);
      console.log(response.data);
      setSpouse(response.data.spouse);
      setSpouseAvatar(response.data.avatar);
    } catch (error) {
      console.error("Error fetching spouse:", error);
    }
  };
  useEffect(() => {
    if (spouseLinked) {
      fetchSpouse(membershipId);
    }
  }, [membershipId]);
  const handleLinkSpouse = () => {
    setIsModalOpen(true);
  };
  const handleRegisterSpouse = () => {
    Inertia.get("/membership/form");
  };
  return /* @__PURE__ */ jsx(MemberLayout, { children: /* @__PURE__ */ jsxs("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`, children: [
    !spouseLinked && /* @__PURE__ */ jsxs("div", { className: "w-full space-x-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleLinkSpouse,
          className: "hover:bg-green-800 cursor-pointer p-2 px-4 bg-black border border-gray-400 rounded-md",
          children: "+ Link Spouse"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleRegisterSpouse,
          className: "hover:bg-green-800 cursor-pointer p-2 px-4 bg-black border border-gray-400 rounded-md",
          children: "Register Spouse"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold", children: "Spouse" }) }),
    spouseLinked ? /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "h-[120px] w-[430px] rounded-md flex items-start justify-start space-x-6 border  border-gray-500 p-4 bg-gray-700", children: [
      /* @__PURE__ */ jsx("img", { src: spouseAvatar, alt: "profile", className: "rounded-md w-[70px]" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl", children: `${spouse.first_name} ${spouse.father_name} ${spouse.grand_father_name}` }),
        /* @__PURE__ */ jsxs("h1", { children: [
          spouse.country_phone_code,
          spouse.phone
        ] }),
        /* @__PURE__ */ jsx("h2", { children: spouse.email })
      ] })
    ] }) }) : /* @__PURE__ */ jsx(NoDataFound, {}),
    /* @__PURE__ */ jsx(LinkSpouses, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), data: membershipId })
  ] }) });
};
export {
  Spouse as default
};
