import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
const CustomCalendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState({});
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startOfWeek = startOfMonth.startOf("week");
  const endOfWeek = endOfMonth.endOf("week");
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };
  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };
  const handleDateClick = (day) => {
    if (onDateSelect) {
      onDateSelect(day.toDate());
    }
  };
  const renderDays = () => {
    const days = [];
    let day = startOfWeek;
    while (day.isBefore(endOfWeek)) {
      const formattedDate = dayjs(day).format("YYYY-MM-DD");
      days.push(
        /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => handleDateClick(day),
            className: `flex justify-center items-center border border-gray-300 hover:bg-blue-300 hover:text-black rounded ${day.month() === currentDate.month() ? "bg-white text-black" : "bg-gray-100 text-gray-400"} ${day.isSame(dayjs(), "day") ? "bg-blue-400" : ""}`,
            style: { width: "70%", height: "3rem", cursor: "pointer" },
            children: /* @__PURE__ */ jsxs("span", { children: [
              day.date(),
              events[formattedDate] && /* @__PURE__ */ jsx("span", { className: "block mt-1 text-xs text-green-500", children: "●" })
            ] })
          },
          day.toString()
        )
      );
      day = day.add(1, "day");
    }
    return days;
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto my-2 p-4 bg-white shadow-md rounded-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handlePrevMonth,
          className: "text-blue-500 hover:text-blue-700",
          children: "< Previous"
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: currentDate.format("MMMM YYYY") }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleNextMonth,
          className: "text-blue-500 hover:text-blue-700",
          children: "Next >"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
      ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-center font-semibold text-gray-700",
          style: { width: "14.28%" },
          children: day
        },
        day
      )),
      renderDays()
    ] })
  ] });
};
const PostDailyReadings = () => {
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [ethiopianDate, setEthiopianDate] = useState("");
  useEffect(() => {
    const convertToEthiopian = (gregorianDate) => {
      const year = gregorianDate.getFullYear() - 8;
      const month = (gregorianDate.getMonth() + 1 + 4) % 12;
      const day = gregorianDate.getDate();
      return `${year}-${month + 1}-${day}`;
    };
    const ethiopianDate2 = convertToEthiopian(date);
    setEthiopianDate(ethiopianDate2);
  }, [date]);
  return /* @__PURE__ */ jsx("div", { className: "shadow-md rounded-md", children: /* @__PURE__ */ jsx(CustomCalendar, {}) });
};
export {
  PostDailyReadings as default
};
