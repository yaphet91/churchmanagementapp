import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "./RadioGroup-n185qax-.mjs";
import { M as MemberLayout } from "./MemberLayout-BTF45TRD.mjs";
import ChildDetails from "./ChildDetails-DuxLLvvm.mjs";
import ChildAdditionalInfo from "./ChildAdditionalInfo-CI-sO22S.mjs";
import ChildIdentification from "./ChildIdentification-ByGqqEan.mjs";
import ChildContactInfo from "./ChildContactInfo-CI7ryoE9.mjs";
import ChildChurchParticipation from "./ChildChurchParticipation--RVl2RYW.mjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { v as validateChildForm } from "./validateChildForm-DmT6Mc6f.mjs";
import { C as ConfirmSubmissionModal } from "./ConfirmSubmissionModal-J4EtePW0.mjs";
import { s as setChildValidationErrors, b as setAttepmtedToProceed, r as resetChildState } from "./childMemberSlice-DlhqqVZb.mjs";
import { p as persistor } from "./store-CNHt6RMI.mjs";
import { p as purgePersistedSlice } from "./persistUtils-COFRNWIk.mjs";
import axios from "axios";
import "./CloseIcon-CqHzHK5A.mjs";
import "react-image-crop";
import "./userImageSlice-6eE4yU9I.mjs";
import "@reduxjs/toolkit";
import "@inertiajs/inertia";
import "lucide-react";
import "./DrawerItem-Ca55ty2B.mjs";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.mjs";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./themeSlice-BmOV-XST.mjs";
import "@headlessui/react";
import "./userSlice-DH0slH5l.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
import "./languageSlice-BzN7Wppz.mjs";
import "react-dom";
import "./sidebarSlice-BqmTz92s.mjs";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import "prop-types";
import "./InputError-Dm4RUL5I.mjs";
import "./InputLabel-DO02gwKJ.mjs";
import "./TextInput-CFLyt_ba.mjs";
import "flatpickr";
/* empty css                        */
import "@heroicons/react/solid/esm/index.js";
import "./validationSlice-D3Qd1uIP.mjs";
import "./formData-Y1eGY-2d.mjs";
import "./BirthdayEntry-DAdqgHRX.mjs";
import "./AutoComplete-DeTDUJS5.mjs";
import "framer-motion";
import "./countries-R5VJ-91Z.mjs";
import "./AutoCompleteTwo-DAVTRqgJ.mjs";
import "./Checkbox-B46RnHis.mjs";
import "./MultiSelect-PyBsrJje.mjs";
import "./CheckboxTwo-DnAc0Jue.mjs";
import "./variants-IrQHrc9C.mjs";
import "./newChurchSlice-CfxFHsE6.mjs";
import "./memberSlice-CZbZjefE.mjs";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/lib/stateReconciler/autoMergeLevel2.js";
import "./stepperSlice-DCzqqTcy.mjs";
import "./userChurchHistorySlice-BHxkEeSq.mjs";
import "./donationSlice-BosuJUxM.mjs";
import "./eventSlice-cpfWu0eT.mjs";
import "./adminSlice-CWD1up8r.mjs";
const ChildMembershipForm = () => {
  const [membershipId, setMembershipId] = useState("");
  const getMembershipId = async () => {
    try {
      const response = await axios.get("/membership-id");
      setMembershipId(response.data.membership_id);
      console.log("we got membership id", response.data.membership_id);
    } catch (error) {
      console.error("Error fetching membership ID:", error);
    }
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.child);
  const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
  const childData = useSelector((state) => state.child.value);
  useEffect(() => {
    console.log("attemptedToProceed:", attemptedToProceed);
    if (attemptedToProceed) {
      const validationResults = validateChildForm(childData);
      dispatch(setChildValidationErrors(validationResults.errors));
    }
  }, [childData, dispatch]);
  const handleConfirmSubmission = (e) => {
    e.preventDefault();
    dispatch(setAttepmtedToProceed(true));
    const validationResults = validateChildForm(childData);
    dispatch(setChildValidationErrors(validationResults.errors));
    console.log(validationResults);
    if (validationResults.isValid) {
      setConfirmSubmissionModalOpen(true);
    }
  };
  const handleMembershipSubmit = async () => {
    try {
      const updatedChildData = { ...childData, membershipId };
      const response = await axios.post("/child/register", updatedChildData);
      alert("Child registered successfully!");
      window.location.href = "/form/child/success";
      dispatch(resetChildState());
      purgePersistedSlice(persistor, "child");
    } catch (error) {
      console.error("Error registering child:", error);
    }
  };
  useEffect(() => {
    getMembershipId();
  }, []);
  return /* @__PURE__ */ jsxs(MemberLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
      /* @__PURE__ */ jsx(ChildDetails, {}),
      /* @__PURE__ */ jsx(ChildIdentification, {}),
      /* @__PURE__ */ jsx(ChildContactInfo, {}),
      /* @__PURE__ */ jsx(ChildAdditionalInfo, {}),
      /* @__PURE__ */ jsx(ChildChurchParticipation, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row pt-6 gap-5 justify-end", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `mr-1 gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
            children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSave, className: "mx-2" }),
              t("Save")
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: `gradientBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
            onClick: handleConfirmSubmission,
            children: [
              t("Submit"),
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowRight, className: "mx-2" })
            ]
          }
        )
      ] })
    ] }),
    confirmSubmissionModalOpen && /* @__PURE__ */ jsx(
      ConfirmSubmissionModal,
      {
        confirmSubmission: handleMembershipSubmit,
        closeModal: () => setConfirmSubmissionModalOpen(false)
      }
    )
  ] });
};
export {
  ChildMembershipForm as default
};
