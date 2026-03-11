import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Confirmation = () => {
  const { t } = useTranslation();
  const member = useSelector((store) => store.member.value);
  const userChurchHistory = useSelector((store) => store.userChurchHistory.value);
  const userCourses = useSelector((store) => store.userCourses.value);
  const newChurch = useSelector((store) => store.newChurch.value);
  const theme = useSelector((store) => store.theme.theme);
  const coursesTaken = Object.entries(userCourses).filter(([key, value]) => value).map(
    ([key]) => key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())
    // Capitalize the first letter
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 `, children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-4", children: /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl text-gray-500 dark:text-gray-300 uppercase mb-4", children: [
        "1. ",
        t("steps.personalDetails")
      ] }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("h3", { children: [
        " ",
        t("Full Name"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          member.title,
          " ",
          member.firstName,
          "  ",
          member.fatherName,
          "  ",
          member.grandFatherName
        ] }),
        " "
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        " ",
        t("Father's Name"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          member.fatherName,
          "  ",
          member.grandFatherName
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        " ",
        t("Mother's Name"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          member.motherName,
          " ",
          member.mothersFather
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Birthday"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.birthday })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Gender"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.gender })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 `, children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-4 text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl uppercase", children: [
        "2. ",
        t("steps.identification")
      ] }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("h3", { children: [
        " ",
        t("Nationality"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.nationality }),
        " "
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Place Of Birth"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.placeOfBirth })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Current Address"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          member.currentAddress,
          ", ",
          member.city,
          ", ",
          member.province,
          member.province ? "," : "",
          " ",
          member.addressCountry.name
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 `, children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-4 text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl uppercase", children: [
        "3. ",
        t("steps.contactInformation")
      ] }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("h3", { children: [
        " ",
        t("Email"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.email })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row gap-3", children: [
        /* @__PURE__ */ jsx(Box, { className: "flex-1", children: /* @__PURE__ */ jsxs("p", { children: [
          t("Phone"),
          ": ",
          /* @__PURE__ */ jsxs(NSpan, { children: [
            member.countryPhoneCode,
            member.phone
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Box, { className: "flex-1", children: /* @__PURE__ */ jsxs("p", { children: [
          t("WhatsApp"),
          ": ",
          /* @__PURE__ */ jsx(NSpan, { children: member.whatsApp })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:flex flex-row gap-3", children: [
        /* @__PURE__ */ jsx(Box, { className: "flex-1", children: /* @__PURE__ */ jsxs("p", { children: [
          t("Emergency Contact"),
          ": ",
          /* @__PURE__ */ jsx(NSpan, { children: member.emergencyContactNumber })
        ] }) }),
        /* @__PURE__ */ jsx(Box, { className: "flex-1", children: /* @__PURE__ */ jsxs("p", { children: [
          t("Contact Relationship"),
          ": ",
          /* @__PURE__ */ jsx(NSpan, { children: member.contactRelation })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("P.O.Box"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.postalCode }),
        " "
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 `, children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-4 text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl uppercase", children: [
        "4. ",
        t("steps.additionalDetails")
      ] }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("h3", { children: [
        t("Marital Status"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.maritalStatus }),
        " "
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "md:flex flex-row gap-3", children: /* @__PURE__ */ jsx(Box, { className: "flex-1", children: /* @__PURE__ */ jsxs("p", { children: [
        t("Children"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.childrenNumber })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "md:flex flex-row gap-3", children: /* @__PURE__ */ jsx(Box, { className: "flex-1", children: /* @__PURE__ */ jsxs("p", { children: [
        t("Languages"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          member.firstLanguage,
          member.secondLanguage ? ", " : "",
          member.secondLanguage
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Level of Education"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.levelOfEducation })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Profession"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.profession })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 `, children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-4 text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl uppercase", children: [
        "5. ",
        t("steps.churchParticipation")
      ] }),
      userChurchHistory.isNewChurchSubmitted ? /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Church"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          newChurch.churchNamePrefix,
          " ",
          newChurch.churchName,
          " ",
          newChurch.surrounding,
          ", ",
          newChurch.diocese
        ] })
      ] }) }) : /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Church"),
        ": ",
        /* @__PURE__ */ jsxs(NSpan, { children: [
          userChurchHistory.selectedChurchCode,
          ", ",
          userChurchHistory.selectedDioceseCode,
          ","
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Your Priest"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: member.fatherOfConfession })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Your Priest's full name (in Eritrea)"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: userChurchHistory.priestInEritrea })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Sacraments Recieved"),
        ": ",
        /* @__PURE__ */ jsx(NSpan, { children: userChurchHistory.selectedSacraments.length > 0 ? userChurchHistory.selectedSacraments.join(", ") : "None" })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs("p", { children: [
        t("Services Volunteered"),
        ":",
        /* @__PURE__ */ jsx(NSpan, { children: userChurchHistory.selectedChurchService.length > 0 ? userChurchHistory.selectedChurchService.join(", ") : "None" })
      ] }) }),
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          t("Courses Taken"),
          ": ",
          coursesTaken.length === 0 ? "None" : ""
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-md text-gray-700 dark:text-[#00b8e6] pl-4 font-semibold", children: /* @__PURE__ */ jsx(StateList, { stateObject: userCourses }) })
      ] })
    ] }) }) })
  ] });
};
const Box = ({ children, className = "" }) => {
  return /* @__PURE__ */ jsx("div", { className: `my-2 ${className} p-2.5 rounded-lg text-md font-bold text-gray-200 dark:text-gray-400 border
     dark:border-gray-600 border-gray-300  md:uppercase`, children });
};
const NSpan = ({ children }) => {
  return /* @__PURE__ */ jsx("span", { className: "text-gray-600  dark:text-[#00b8e6] font-bold ml-2", children });
};
const StateList = ({ stateObject }) => {
  const filteredStates = transformAndFilterStates(stateObject);
  return /* @__PURE__ */ jsx("ul", { children: filteredStates.map((name, index) => /* @__PURE__ */ jsxs("li", { children: [
    " - ",
    name
  ] }, index)) });
};
const transformAndFilterStates = (stateObject) => {
  const { t } = useTranslation();
  const friendlyNames = {
    livingWithChrist: t("Living With Christ"),
    orthodoxyTeachingOfSalvation: t("Orthodoxy Teaching Of Salvation"),
    introductionToOrthodoxy: t("Introduction To Orthodoxy"),
    sevenSacramentOfChurh: t("Seven Sacrament Of Churh"),
    comparativeTheology: t("Comparative Theology"),
    fiveChurchPillarsOfMystery: t("Five Pillars Of Mystery"),
    historicalBibleStudy: t("Historical Bible Study"),
    universalChurchHistory: t("Universal Church History"),
    spiritualQuiteTime: t("Spiritual Quite Time"),
    churchCanonsAndRites: t("Church Canons & Rites"),
    repentance: t("Repentance"),
    spiritualService: t("Spiritual Service"),
    introductionToGeez: t("Introduction To Geez"),
    christianDiscipline: t("Christian Discipline")
  };
  return Object.entries(stateObject).filter(([key, value]) => value).map(([key, value]) => friendlyNames[key]).filter((name) => name !== void 0);
};
export {
  Box,
  StateList,
  Confirmation as default
};
