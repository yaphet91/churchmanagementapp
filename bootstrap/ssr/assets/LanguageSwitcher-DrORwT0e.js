import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { s as setLanguage } from "./languageSlice-BzN7Wppz.js";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tg" : "en";
    dispatch(setLanguage(newLanguage));
  };
  return /* @__PURE__ */ jsx("div", { className: "relative mt-2 block h-7 w-8 px-2", children: /* @__PURE__ */ jsx(
    "button",
    {
      className: "ml-[-60px] w-20 font-light text-md px-1  rounded-md",
      onClick: handleLanguageChange,
      children: language === "en" ? "ትግርኛ" : "English"
    }
  ) });
}
export {
  LanguageSwitcher as L
};
