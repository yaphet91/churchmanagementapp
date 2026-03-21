import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { useSelector, useDispatch } from "react-redux";
import { s as setHasLinkedSpouse } from "./userSlice-DH0slH5l.js";
import "@headlessui/react";
import "lucide-react";
import "@reduxjs/toolkit";
const LinkSpouses = ({ isOpen, onClose }) => {
  const membershipId = useSelector((store) => store.user.value.membershipId);
  const [spouseId, setSpouseId] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const handleLinkSpouses = async () => {
    try {
      const verifyResponse = await axios.post("/memberships/verify", {
        membership_id: spouseId
      });
      console.log(verifyResponse);
      if (verifyResponse.data.exists) {
        if (membershipId === spouseId) {
          setErrorMessage("Please Enter your Spouse's ID, not your ID");
        }
        const linkResponse = await axios.post("/memberships/link-spouses", {
          membership_id: membershipId,
          spouse_id: spouseId
        });
        setMessage("Spouses linked successfully!");
        dispatch(setHasLinkedSpouse(true));
      } else {
        setErrorMessage("Spouse ID not found.");
      }
    } catch (error) {
      setErrorMessage("Error linking spouses: Spouse Id not found");
    }
  };
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "2xl", maxHeight: "h-[50vh]", children: /* @__PURE__ */ jsxs("div", { className: "p-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold py-3", children: "Link with your Spouse" }),
    /* @__PURE__ */ jsx("h2", { className: "text-md py-3", children: "Please Enter the Church Card Id of your spouse in the field below" }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        className: "w-full dark:text-white",
        type: "text",
        placeholder: "Spouse ID",
        value: spouseId,
        onChange: (e) => setSpouseId(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "p-3 gradientBg mt-4 rounded-md",
        onClick: membershipId ? handleLinkSpouses : null,
        children: "Link My Spouse"
      }
    ),
    errorMessage && /* @__PURE__ */ jsx("p", { className: "mt-4 bg-red-500 p-1 px-3 rounded-sm", children: errorMessage }),
    message && /* @__PURE__ */ jsx("p", { className: "mt-4 bg-green-500 p-1 px-3 rounded-sm", children: message })
  ] }) });
};
export {
  LinkSpouses as default
};
