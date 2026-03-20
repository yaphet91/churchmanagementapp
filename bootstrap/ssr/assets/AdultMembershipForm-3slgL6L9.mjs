import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "./RadioGroup-n185qax-.mjs";
import "@inertiajs/inertia-react";
import "./TooltipContext-CXfF4_Yf.mjs";
import "@inertiajs/react";
import "./themeSlice-BmOV-XST.mjs";
import "./userSlice-DH0slH5l.mjs";
import "./languageSlice-BzN7Wppz.mjs";
import "./sidebarSlice-BqmTz92s.mjs";
import "react-dom";
import "@inertiajs/inertia";
import "./DrawerAvatar-Cxrl0zXL.mjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { C as ConfirmSubmissionModal } from "./ConfirmSubmissionModal-J4EtePW0.mjs";
import "./childMemberSlice-DlhqqVZb.mjs";
import { p as persistor } from "./store-CNHt6RMI.mjs";
import { p as purgePersistedSlice } from "./persistUtils-COFRNWIk.mjs";
import { P as PersonalDetails } from "./PersonalDetails-CGp3O5de.mjs";
import { I as Identification } from "./Identification-BFj1JI_h.mjs";
import { C as ContactInfo } from "./ContactInfo-Cgb4gaKD.mjs";
import { A as AdditionalInfo } from "./AdditionalInfo-BOqoKipE.mjs";
import { C as ChurchParticipation } from "./ChurchParticipation-BILCF937.mjs";
import { A as AdminLayout } from "./AdminLayout-C3jCJh_q.mjs";
import "./CloseIcon-CqHzHK5A.mjs";
import "react-image-crop";
import "./userImageSlice-6eE4yU9I.mjs";
import "@reduxjs/toolkit";
import "axios";
import "lucide-react";
import "@headlessui/react";
import "prop-types";
import "./Checkbox-B46RnHis.mjs";
import "framer-motion";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/lib/stateReconciler/autoMergeLevel2.js";
import "./stepperSlice-DCzqqTcy.mjs";
import "./memberSlice-CZbZjefE.mjs";
import "./validationSlice-D3Qd1uIP.mjs";
import "./userChurchHistorySlice-BHxkEeSq.mjs";
import "./newChurchSlice-CfxFHsE6.mjs";
import "./donationSlice-BosuJUxM.mjs";
import "./eventSlice-cpfWu0eT.mjs";
import "./adminSlice-CWD1up8r.mjs";
import "./InputError-Dm4RUL5I.mjs";
import "./InputLabel-DO02gwKJ.mjs";
import "./TextInput-CFLyt_ba.mjs";
import "flatpickr";
/* empty css                        */
import "./AutoComplete-DeTDUJS5.mjs";
import "@heroicons/react/solid/esm/index.js";
import "date-fns";
import "./formData-Y1eGY-2d.mjs";
import "./BirthdayEntry-DAdqgHRX.mjs";
import "./variants-IrQHrc9C.mjs";
import "./countries-R5VJ-91Z.mjs";
import "./AutoCompleteTwo-DAVTRqgJ.mjs";
import "./images-2LzdHB5O.mjs";
import "./anastasia_logo-LmIUZM3a.mjs";
import "./MultiSelect-PyBsrJje.mjs";
import "./CheckboxTwo-DnAc0Jue.mjs";
import "./DrawerItem-Ca55ty2B.mjs";
import "./DarkModeSwitcher-D8n0EoR1.mjs";
import "./LanguageSwitcher-CF5nruY4.mjs";
const AdultMembershipForm = () => {
  const [membershipId, setMembershipId] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);
  const memberData = useSelector((state) => state.member.value);
  useSelector((state) => state.validation.value);
  const userImageData = useSelector((store) => store.profileImage.value);
  const userCoursesData = useSelector((store) => store.userCourses.value);
  const userChurchHistoryData = useSelector((store) => store.userChurchHistory.value);
  const handleConfirmSubmission = (e) => {
    setConfirmSubmissionModalOpen(true);
  };
  const handleMembershipSubmit = async () => {
    try {
      console.log(memberData);
      const response = await axios.post("/memberships", memberData);
      const membershipId2 = response.data.membership.id;
      const updatedUserImageData = { ...userImageData, membershipId: membershipId2 };
      const updatedUserCoursesData = { ...userCoursesData, membershipId: membershipId2 };
      const updatedUserChurchHistoryData = { ...userChurchHistoryData, membershipId: membershipId2 };
      await handleAvatarUpload(updatedUserImageData);
      await handleCoursesUpdate(updatedUserCoursesData);
      await handleChurchHistoryUpdate(updatedUserChurchHistoryData);
      console.log(updatedUserChurchHistoryData);
      await axios.post("/membership/complete");
      dispatch(setFormSubmitted());
      dispatch(resetMemberState());
      dispatch(resetSteps());
      purgePersistedSlice(persistor, "member");
    } catch (error) {
      console.error("Error creating membership:", error);
    }
  };
  const handleAvatarUpload = async (userImageData2) => {
    try {
      const response = await axios.post("/store-avatar-path", userImageData2);
      alert("Avatar uploaded successfully!");
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };
  const handleCoursesUpdate = async (userCoursesData2) => {
    try {
      const response = await axios.post("/courses", userCoursesData2);
      alert("courses uploaded successfully!");
    } catch (error) {
      console.error("Error uploading courses:", error);
    }
  };
  const handleChurchHistoryUpdate = async (userChurchHistoryData2) => {
    try {
      const response = await axios.post("/church-history", userChurchHistoryData2);
      alert("Church history uploaded successfully!");
    } catch (error) {
      console.error("Error uploading courses:", error);
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
      /* @__PURE__ */ jsx(PersonalDetails, {}),
      /* @__PURE__ */ jsx(Identification, {}),
      /* @__PURE__ */ jsx(ContactInfo, {}),
      /* @__PURE__ */ jsx(AdditionalInfo, {}),
      /* @__PURE__ */ jsx(ChurchParticipation, {}),
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
  AdultMembershipForm as default
};
