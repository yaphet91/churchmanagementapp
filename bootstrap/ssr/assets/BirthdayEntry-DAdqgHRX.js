import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
const BirthdayEntry = ({ birthdayValue, onDateChange }) => {
  const parseDate = (date) => {
    if (!date) return { day: "", month: "", year: "" };
    const [month2, day2, year2] = date.split(" ");
    return { day: parseInt(day2, 10), month: month2, year: year2 };
  };
  const { day: initialDay, month: initialMonth, year: initialYear } = parseDate(birthdayValue);
  const [day, setDay] = useState(initialDay || "");
  const [month, setMonth] = useState(initialMonth || "");
  const [year, setYear] = useState(initialYear || "");
  const birthday = day && month && year ? `${month} ${day}, ${year}` : "";
  useEffect(() => {
    onDateChange(birthday);
  }, [birthday]);
  const handleDayChange = (e) => {
    setDay(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleYearChange = (e) => {
    const inputYear = e.target.value;
    setYear(inputYear);
    const currentYear2 = (/* @__PURE__ */ new Date()).getFullYear();
    if (inputYear && (inputYear < 1900 || inputYear > currentYear2)) {
      setYearError(`Year must be between 1900 and ${currentYear2}.`);
    } else {
      setYearError("");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-2 border-gray-300 dark:border-gray-500 dark:bg-form-input focus:border-indigo-500\n         focus:ring-indigo-500 rounded-md shadow-sm flex flex-row space-x-2 p-2 min-w-[340px]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col min-w-[77px]", children: /* @__PURE__ */ jsxs("select", { id: "day", value: day, onChange: handleDayChange, className: "dark:border-gray-500 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm", children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "Day" }),
      days.map((d) => /* @__PURE__ */ jsx("option", { value: d, children: d }, d))
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxs("select", { id: "month", value: month, onChange: handleMonthChange, className: "dark:border-gray-500 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm", children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "Month" }),
      months.map((m, index) => /* @__PURE__ */ jsx("option", { value: m, children: m }, m))
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col min-w-[100px] w-[200px]", children: /* @__PURE__ */ jsxs("select", { id: "year", value: year, onChange: handleYearChange, className: "dark:border-gray-500 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full", children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "Year" }),
      years.map((y) => /* @__PURE__ */ jsx("option", { value: y, children: y }, y))
    ] }) })
  ] });
};
export {
  BirthdayEntry as B
};
