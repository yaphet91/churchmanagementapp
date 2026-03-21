import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import axios from "axios";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { useTranslation } from "react-i18next";
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.js";
import { g as getLiturgies } from "./formData-Y1eGY-2d.js";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import "react-redux";
import "@headlessui/react";
import "@heroicons/react/solid/esm/index.js";
import "lucide-react";
const PostDailyReadings = ({ isOpen, onClose, data }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(/* @__PURE__ */ new Date());
  const [readings, setReadings] = useState([]);
  const liturgies = getLiturgies();
  const [errors, setErrors] = React.useState({});
  const [epistlesOfPaul, setEpistlesOfPaul] = React.useState("");
  const [otherEpistle, setOtherEpistle] = React.useState("");
  const [acts, setActs] = React.useState("");
  const [psalm, setPsalm] = React.useState("");
  const [gospel, setGospel] = React.useState("");
  const [holyLiturgy, setHolyLiturgy] = React.useState("");
  useEffect(() => {
    axios.get("/daily-readings").then((response) => {
      setReadings(response.data);
    });
  }, []);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    axios.get(`/daily-readings/${formattedDate}`).then((response) => {
      const { reading: reading2, verse: verse2 } = response.data;
      setReading(reading2);
      setVerse(verse2);
    }).catch(() => {
      setReading("");
      setVerse("");
    });
  };
  const tileClassName = ({ date, view }) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    if (view === "month" && readings.some((reading2) => reading2.date === formattedDate)) {
      return "bg-green-500";
    }
  };
  const handleInputChange = (field, value) => {
    switch (field) {
      case "epistlesOfPaul":
        setEpistlesOfPaul(value);
        break;
      case "otherEpistle":
        setOtherEpistle(value);
        break;
      case "acts":
        setActs(value);
        break;
      case "psalm":
        setPsalm(value);
        break;
      case "gospel":
        setGospel(value);
        break;
      case "holyLiturgy":
        setHolyLiturgy(value);
        break;
    }
  };
  return /* @__PURE__ */ jsxs(Modal, { show: isOpen, onClose, maxWidth: "5xl", maxHeight: "h-[90vh]", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl  font-semibold text-gray-600", children: "ናይ ዕለቱ ንባባት" }) }),
    /* @__PURE__ */ jsx(
      Calendar,
      {
        onChange: handleDateChange,
        value: selectedDate,
        tileClassName
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
        !(errors == null ? void 0 : errors.saints) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "saints", value: t("Saints") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.saints }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "saints",
            name: "saints",
            className: "w-full p-2 border border-gray-400 rounded-md shadow-sm focus:ring   focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-gray-400 transition duration-150 ease-in-out"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
        !(errors == null ? void 0 : errors.epistlesOfPaul) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "epistlesOfPaul", value: t("Epistle Of Paul") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.epistlesOfPaul }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "epistlesOfPaul",
            type: "text",
            name: "epistlesOfPaul",
            value: epistlesOfPaul,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => handleInputChange("epistlesOfPaul", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
        !(errors == null ? void 0 : errors.otherEpistle) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "otherEpistle", value: t("Other Epistle") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.otherEpistle }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "otherEpistle",
            type: "text",
            name: "otherEpistle",
            value: otherEpistle,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => handleInputChange("otherEpistle", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
        !(errors == null ? void 0 : errors.acts) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "acts", value: t("Acts") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.acts }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "acts",
            type: "text",
            name: "acts",
            value: acts,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => handleInputChange("acts", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
        !(errors == null ? void 0 : errors.psalm) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "psalm", value: t("Psalm") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.psalm }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "psalm",
            type: "text",
            name: "psalm",
            value: psalm,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => handleInputChange("psalm", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
        !(errors == null ? void 0 : errors.gospel) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "gospel", value: t("Gospel") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.gospel }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "gospel",
            type: "text",
            name: "gospel",
            value: gospel,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => handleInputChange("gospel", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0", children: [
        !(errors == null ? void 0 : errors.holyLiturgy) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "holyLiturgy", value: t("Liturgy of the day") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.holyLiturgy }),
        /* @__PURE__ */ jsx(
          AutoComplete,
          {
            value: holyLiturgy,
            onChange: (value) => handleInputChange("holyLiturgy", value),
            options: liturgies
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { className: "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Post Readings" })
    ] })
  ] });
};
export {
  PostDailyReadings as default
};
