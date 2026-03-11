import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter, faUser, faIdCard, faContactCard, faBriefcase, faChurch, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const AnastasiaBanner2 = "/build/assets/anastasia_banner2-BZewGdij.png";
const StepperSidebar = ({ currentStep, onStepChange }) => {
  const { t } = useTranslation();
  useSelector((state) => state.language.language);
  const steps = [
    { name: t("steps.introduction"), icon: faHighlighter },
    { name: t("steps.personalDetails"), icon: faUser },
    { name: t("steps.identification"), icon: faIdCard },
    { name: t("steps.contactInformation"), icon: faContactCard },
    { name: t("steps.additionalDetails"), icon: faBriefcase },
    { name: t("steps.churchParticipation"), icon: faChurch },
    { name: t("steps.confirmation"), icon: faCheckSquare }
  ];
  const handleStepClick = (index) => {
    onStepChange(index);
  };
  return /* @__PURE__ */ jsxs("aside", { className: "hidden lg:flex absolute left-0 top-0 z-9999 h-screen bg-bodydark1\n            w-72.5 flex-col overflow-y-hidden border-r border-[#D3D3D3] dark:border-[#484848]\n             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400", children: [
    /* @__PURE__ */ jsx("div", { className: "no-scrollbar  flex items-center justify-start", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("img", { src: AnastasiaBanner2, alt: "", className: `h-[109px] w-[300px] overflow-x-hidden duration-300 ease-linear` }) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 py-5.5 lg:py-6.5 text-xl font-semibold mt-6", children: /* @__PURE__ */ jsx("p", { children: t("userRegistrationForm") }) }),
    /* @__PURE__ */ jsx("div", { className: "no-scrollbar flex flex-col overflow-y-auto", children: /* @__PURE__ */ jsx("nav", { className: "no-scrollbar mt-2 py-4 px-4 lg:mt-9 lg:px-6", children: /* @__PURE__ */ jsx("ul", { children: steps.map((step, index) => /* @__PURE__ */ jsxs(
      "li",
      {
        onClick: () => handleStepClick(index),
        className: `no-scrollbar relative cursor-pointer flex items-center gap-2.5 
                                rounded-lg my-3 py-4 px-4 font-medium text-gray-500 dark:text-gray-300 duration-300 ease-in-out
                                hover:bg-gray-300 hover:text-blue-900 dark:hover:bg-meta-4  ${currentStep === index ? "gradientBg text-white" : ""}`,
        children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: step.icon }),
          " ",
          step.name
        ]
      },
      index
    )) }) }) })
  ] });
};
export {
  StepperSidebar as default
};
