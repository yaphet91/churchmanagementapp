import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "./RadioGroup-DbBnnJ0e.js";
import { M as MemberLayout } from "./MemberLayout-D9juxINy.js";
import ChildDetails from "./ChildDetails-CmtTtE5T.js";
import ChildAdditionalInfo from "./ChildAdditionalInfo-1gT8gXBW.js";
import ChildIdentification from "./ChildIdentification-WkU1l0nt.js";
import ChildContactInfo from "./ChildContactInfo-COyIRKu2.js";
import ChildChurchParticipation from "./ChildChurchParticipation-DbNXXw34.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { v as validateChildForm } from "./validateChildForm-DmT6Mc6f.js";
import { C as ConfirmSubmissionModal } from "./ConfirmSubmissionModal-CRpWAwW_.js";
import { s as setChildValidationErrors, b as setAttepmtedToProceed, r as resetChildState } from "./childMemberSlice-DlhqqVZb.js";
import { p as persistor } from "./store-B1qrdlKM.js";
import { p as purgePersistedSlice } from "./persistUtils-COFRNWIk.js";
import axios from "axios";
import "./CloseIcon-CqHzHK5A.js";
import "react-image-crop";
import "./userImageSlice-6eE4yU9I.js";
import "@reduxjs/toolkit";
import "@inertiajs/inertia";
import "lucide-react";
import "./DrawerItem-CHgSUiY4.js";
import "@inertiajs/react";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.js";
import "./DarkModeSwitcher-CKEZe0FQ.js";
import "./themeSlice-BmOV-XST.js";
import "@headlessui/react";
import "./userSlice-DH0slH5l.js";
import "./LanguageSwitcher-DrORwT0e.js";
import "./languageSlice-BzN7Wppz.js";
import "react-dom";
import "./sidebarSlice-BqmTz92s.js";
import "react-icons/gr";
import "./DrawerAvatar-Cxrl0zXL.js";
import "prop-types";
import "./InputError-Dm4RUL5I.js";
import "./InputLabel-DO02gwKJ.js";
import "./TextInput-CFLyt_ba.js";
import "flatpickr";
/* empty css                       */
import "@heroicons/react/solid/esm/index.js";
import "./validationSlice-D3Qd1uIP.js";
import "./formData-Y1eGY-2d.js";
import "./BirthdayEntry-DAdqgHRX.js";
import "./AutoComplete-DeTDUJS5.js";
import "framer-motion";
import "./countries-R5VJ-91Z.js";
import "./AutoCompleteTwo-DAVTRqgJ.js";
import "./Checkbox-B46RnHis.js";
import "./MultiSelect-PyBsrJje.js";
import "./CheckboxTwo-DnAc0Jue.js";
import "./variants-IrQHrc9C.js";
import "./newChurchSlice-CfxFHsE6.js";
import "./memberSlice-CZbZjefE.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/lib/stateReconciler/autoMergeLevel2.js";
import "./stepperSlice-DCzqqTcy.js";
import "./userChurchHistorySlice-BHxkEeSq.js";
import "./donationSlice-BosuJUxM.js";
import "./eventSlice-cpfWu0eT.js";
import "./adminSlice-CWD1up8r.js";
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
