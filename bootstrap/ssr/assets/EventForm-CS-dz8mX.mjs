import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import "@inertiajs/inertia";
import { M as Modal } from "./Modal-BZNRvUHP.mjs";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.mjs";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import { P as Profile2 } from "./CustomQuill-p1ZcDQgz.mjs";
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.mjs";
import { I as InputError } from "./InputError-Dm4RUL5I.mjs";
import { C as CheckboxTwo } from "./CheckboxTwo-DnAc0Jue.mjs";
import { B as BirthdayEntry } from "./BirthdayEntry-DAdqgHRX.mjs";
import { useDispatch, useSelector } from "react-redux";
import { r as resetEvent } from "./eventSlice-cpfWu0eT.mjs";
import flatpickr from "flatpickr";
/* empty css                        */
import "@headlessui/react";
import "lucide-react";
import "axios";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "spinners-react";
import "@heroicons/react/solid/esm/index.js";
import "@reduxjs/toolkit";
const MultiSelect2 = ({ options: initialOptions, label, optionsPrefix = "", maxSelections, onSelectionChange, selected, setSelected, disabled }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleDropdown = (event) => {
    event.stopPropagation();
    if (!disabled) {
      setShow((prevShow) => !prevShow);
    }
  };
  const select = (optionValue) => {
    setSelected((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(optionValue);
      const canSelectMore = prevSelected.length < maxSelections || isAlreadySelected;
      if (isAlreadySelected) {
        const newSelection = prevSelected.filter((value) => value !== optionValue);
        onSelectionChange(newSelection);
        setSelected(newSelection);
        return newSelection;
      } else if (canSelectMore) {
        const newSelection = [...prevSelected, optionValue];
        onSelectionChange(newSelection);
        setSelected(newSelection);
        return newSelection;
      } else {
        console.log(`Selection limit of ${maxSelections} reached.`);
        return prevSelected;
      }
    });
  };
  const remove = (optionValue, event) => {
    event.stopPropagation();
    setSelected((prevSelected) => {
      const updatedSelection = prevSelected.filter((value) => value !== optionValue);
      onSelectionChange(updatedSelection);
      setSelected(updatedSelection);
      return updatedSelection;
    });
  };
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setShow(false);
      }
    };
    if (show) {
      const timer = setTimeout(() => {
        document.addEventListener("click", clickHandler);
      }, 10);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", clickHandler);
      };
    }
  }, [show]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("label", { className: "mb-3 block text-sm font-medium text-black dark:text-white", children: label }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: `relative z-10 inline-block w-full  ${disabled ? "opacity-70 cursor-not-allowed" : ""}`, "aria-disabled": disabled, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-2 flex rounded border border-gray-500 py-2 bg-gray-200 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input disabled:cursor-not-allowed", onClick: toggleDropdown, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-auto flex-wrap gap-3", children: [
          Array.isArray(selected) && selected.map((id) => {
            var _a;
            return /* @__PURE__ */ jsxs("div", { className: "my-1.5 flex items-center justify-center rounded border-[.5px] border-gray-300 bg-gray py-.5 px-2.5 text-sm font-medium text-gray-600 dark:text-gray-200 dark:border-strokedark dark:bg-white/30", children: [
              /* @__PURE__ */ jsx("div", { className: "max-w-full flex-initial", children: (_a = initialOptions.find((option) => option.id === id)) == null ? void 0 : _a.title }),
              /* @__PURE__ */ jsx("div", { onClick: (event) => remove(id, event), className: "cursor-pointer pl-2 hover:text-danger", children: /* @__PURE__ */ jsx("svg", { className: "fill-current", role: "button", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z", fill: "currentColor" }) }) })
            ] }, id);
          }),
          selected.length === 0 && /* @__PURE__ */ jsx("div", { className: "flex-1 text-gray-600", children: "Select an option" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex w-8 items-center py-1 pl-1 pr-1 text-gray-800", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: toggleDropdown, className: "h-6 w-6 cursor-pointer outline-none focus:outline-none", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("g", { opacity: "0.8", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z", fill: "#637381" }) }) }) }) })
      ] }),
      show && /* @__PURE__ */ jsx("div", { className: `absolute top-full left-0 z-10 w-full overflow-y-auto border dark:border-gray-600 rounded bg-white shadow dark:bg-form-input ${show ? "" : "hidden"}`, ref: dropdownRef, children: /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col", children: initialOptions.map((option) => {
        const isDisabled = maxSelections && selected.length >= maxSelections && !selected.includes(option.id);
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-full cursor-pointer text-graydark dark:text-white rounded-t border-b border-gray-300 
                                             hover:bg-gray-300 dark:border-form-strokedark 
                                     ${isDisabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} `,
            onClick: () => !isDisabled && select(option.id),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 
                                        ${selected.includes(option.id) ? "border-primary" : ""}
                                        ${isDisabled ? "bg-gray-200 text-gray-500" : ""} `,
                children: /* @__PURE__ */ jsx("div", { className: "flex w-full items-center dark:hover:text-black", children: /* @__PURE__ */ jsxs("div", { className: "mx-2 leading-6", children: [
                  optionsPrefix,
                  option.title
                ] }) })
              }
            )
          },
          option.id
        );
      }) }) })
    ] }) })
  ] });
};
const Switcher = ({ id, enabled, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(enabled);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("label", { htmlFor: id, className: "flex cursor-pointer select-none items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative ", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        id,
        className: "sr-only ",
        onChange
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `block h-5 w-12 rounded-full  ${enabled ? "bg-blue-300" : "bg-gray-600"} dark:bg-[#5A616B]` }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `dot absolute left-0 -top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 transition ${enabled ? "!right-1 !translate-x-full !bg-primary dark:!bg-white" : ""}`,
        children: [
          /* @__PURE__ */ jsx("span", { className: enabled ? "!block" : "hidden", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "fill-white dark:fill-black",
              width: "11",
              height: "8",
              viewBox: "0 0 11 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z",
                  fill: "",
                  stroke: "",
                  strokeWidth: "0.4"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: enabled ? "hidden" : "", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "h-4 w-4 stroke-current",
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            }
          ) })
        ]
      }
    )
  ] }) }) });
};
const DatePickerOne = ({ updateFormState, initialDate }) => {
  const datePickerRef = useRef(null);
  const fpInstance = useRef(null);
  useEffect(() => {
    if (datePickerRef.current) {
      fpInstance.current = flatpickr(datePickerRef.current, {
        mode: "single",
        static: true,
        monthSelectorType: "static",
        dateFormat: "M j, Y",
        defaultDate: initialDate,
        onChange: function(selectedDates, dateStr) {
          updateFormState(dateStr);
          console.log("dateStr: " + dateStr);
        },
        prevArrow: '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>'
      });
    }
    return () => {
      if (fpInstance.current) {
        fpInstance.current.destroy();
      }
    };
  }, [updateFormState, initialDate]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "relative md:w-[255px] w-[435px] border border-gray-400 rounded-md", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: datePickerRef,
        type: "text",
        className: "form-datepicker md:w-[255px] w-[435px] rounded-lg border-[1.5px] border-stroke bg-gray-200 \n                    px-5 py-2 font-normal outline-none transition focus:border-primary active:border-primary \n                    dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
        placeholder: "mm/dd/yyyy",
        readOnly: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 left-auto right-7 flex items-center", children: /* @__PURE__ */ jsx(
      "svg",
      {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z",
            fill: "#64748B"
          }
        )
      }
    ) })
  ] }) });
};
const attendanceOptions = [
  { value: "all", label: "All" },
  { value: "groups", label: "Groups" },
  { value: "none", label: "None" }
];
const visibilityOptions = [
  { value: "public", label: "Public" },
  { value: "members", label: "Members" },
  { value: "groups", label: "Groups" }
];
const repeatOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" }
];
const modules = {
  toolbar: [
    [{ "header": "1" }, { "header": "2" }, { "font": [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { "list": "ordered" },
      { "list": "bullet" },
      { "indent": "-1" },
      { "indent": "+1" }
    ],
    ["link", "image"],
    ["clean"]
  ]
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image"
];
const EventForm = ({ isOpen, onClose, onEventCreated }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const days = ["Sunday", "Monday", "Tueday", "Wedensday", "Thusday", "Friday", "Saturday"];
  const daysOfTheMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const quillRef = useRef(null);
  const [groupOptions, setGroupOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const imageUrlData = useSelector((state) => state.event.value.imageUrl);
  const [visibility, setVisibility] = useState("");
  const [groupIds, setGroupIds] = useState([]);
  const [attendeesType, setAttendeesType] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [dayOfTheMonth, setDayOfTheMonth] = useState("");
  const [dateOfTheYear, setDateOfTheYear] = useState("");
  const [isRepeatOn, setIsRepeatOn] = useState(false);
  const [isLocationOn, setIsLocationOn] = useState(false);
  const [isManagerOn, setIsManagerOn] = useState(false);
  const [repeat, setRepeat] = useState("");
  const [location, setLocation] = useState("");
  const [manager, setManager] = useState("");
  const handleDayOfTheMonthChange = (e) => {
    setDayOfTheMonth(e.target.value);
  };
  const fetchGroups = async () => {
    try {
      const response = await axios.get("/admin/api/groups");
      setGroupOptions(response.data.map((group) => ({
        id: group.id,
        title: group.title
      })));
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };
  useEffect(() => {
    fetchGroups();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editor = quillRef.current.getEditor();
    const plainText = editor.getText();
    const data = {
      title,
      description: plainText,
      image_url: imageUrlData,
      date,
      start_time: startTime,
      end_time: endTime,
      selected_groups: selectedGroups,
      attendees_type: attendeesType,
      visibility,
      location,
      repeat,
      manager,
      day_of_the_week: dayOfTheWeek,
      day_of_the_month: dayOfTheMonth,
      date_of_the_year: dateOfTheYear
    };
    try {
      await axios.post("/admin/api/events", data);
      alert("Event created successfully");
      onEventCreated();
      onClose();
      dispatch(resetEvent());
    } catch (error) {
      console.log(error);
    }
  };
  const handleGroupSelection = (value) => {
    setGroupIds(value);
    setSelectedGroups(value);
  };
  return /* @__PURE__ */ jsxs(Modal, { show: isOpen, onClose, maxWidth: "4xl", maxHeight: "200px", children: [
    /* @__PURE__ */ jsx("h1", { className: "px-5 py-3 text-3xl font-bold", children: "Event" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "py-4 px-6 overflow-y-auto max-h-[500px] scrollbar-hide",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-start gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-1/2", children: [
              !(errors == null ? void 0 : errors.title) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: t("Title") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.title, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "title",
                  className: "w-full dark:text-white",
                  type: "text",
                  value: title,
                  onChange: (e) => setTitle(e.target.value),
                  placeholder: "Title",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              !(errors == null ? void 0 : errors.date) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "date", value: t("Date") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.date, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                DatePickerOne,
                {
                  id: "date",
                  initialDate: date,
                  updateFormState: (value) => setDate(value),
                  onChange: (value) => setDate(value) && console.log(value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "from", value: t("From *") }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "from",
                  className: "dark:text-white",
                  type: "time",
                  value: startTime,
                  onChange: (e) => setStartTime(e.target.value),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "to", value: t("To *") }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "to",
                  className: "dark:text-white",
                  type: "time",
                  value: endTime,
                  onChange: (e) => setEndTime(e.target.value),
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[230px] rounded-md w-full flex items-center mt-5 justify-center border border-dashed border-gray-400", children: /* @__PURE__ */ jsx(Profile2, { uploadUrl: "/admin/api/upload-avatar" }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-full mt-6 h-[275px]", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "description", value: t("Description") }),
            /* @__PURE__ */ jsx("div", { className: "quill-wrapper", children: /* @__PURE__ */ jsx(
              ReactQuill,
              {
                ref: quillRef,
                theme: "snow",
                value: description,
                onChange: setDescription,
                modules,
                formats,
                className: "custom-quill-editor"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `mt-16  ${attendeesType === "groups" ? " grid grid-cols-3" : "flex flex-row space-x-6 items-start justify-start"} gap-0 items-start`, children: [
            /* @__PURE__ */ jsxs("div", { className: "w-[250px]", children: [
              !(errors == null ? void 0 : errors.attendance) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "attendance", value: t("Attendance") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.attendance, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                AutoComplete,
                {
                  options: attendanceOptions,
                  value: attendeesType,
                  onChange: (value) => setAttendeesType(value)
                }
              )
            ] }),
            attendeesType === "groups" && /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
              !(errors == null ? void 0 : errors.selectedGroups) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "selectedGroups", value: t("Select Attending Groups") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.selectedGroups }),
              /* @__PURE__ */ jsx(
                MultiSelect2,
                {
                  id: "selectedGroups",
                  options: groupOptions,
                  optionsPrefix: "",
                  maxSelections: 20,
                  selected: selectedGroups,
                  setSelected: setSelectedGroups,
                  onSelectionChange: (value) => handleGroupSelection(value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-[250px]", children: [
              !(errors == null ? void 0 : errors.visibility) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "visibility", value: t("Visibility") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.visibility, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                AutoComplete,
                {
                  options: visibilityOptions,
                  value: visibility,
                  onChange: (value) => setVisibility(value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start justify-start space-x-2", children: [
              /* @__PURE__ */ jsx(Switcher, { id: "repeat", enabled: isRepeatOn, onChange: () => setIsRepeatOn(!isRepeatOn) }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl", children: "Repeats" })
            ] }),
            isRepeatOn && /* @__PURE__ */ jsxs("div", { className: "py-2 px-2 flex flex-row items-start justify-start space-x-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-[250px]", children: [
                !(errors == null ? void 0 : errors.repeat) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "repeat", value: t("Repeat") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.repeat, className: "mb-2 text-red-700" }),
                /* @__PURE__ */ jsx(
                  AutoComplete,
                  {
                    options: repeatOptions,
                    value: repeat,
                    onChange: (value) => setRepeat(value)
                  }
                )
              ] }),
              repeat === "weekly" && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-3 py-6 px-4", children: days.map((day) => /* @__PURE__ */ jsx(
                CheckboxTwo,
                {
                  id: day,
                  label: day,
                  onChange: () => setDayOfTheWeek(day),
                  checked: dayOfTheWeek === day,
                  name: day
                },
                day
              )) }),
              repeat === "monthly" && /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsx(InputLabel, { htmlFor: "dayOfTheMonth", value: t("Date of the month") }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    id: "dayOfTheMonth",
                    value: dayOfTheMonth,
                    onChange: handleDayOfTheMonthChange,
                    className: "dark:border-gray-500 dark:bg-form-input focus:border-indigo-500\n                                             focus:ring-indigo-500 rounded-md shadow-sm mt-3 h-[48px]",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Day Of The Month" }),
                      daysOfTheMonth.map((d) => /* @__PURE__ */ jsx("option", { value: d, children: d }, d))
                    ]
                  }
                )
              ] }),
              repeat === "yearly" && /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsx(InputLabel, { htmlFor: "yearlyDate", value: t("Date of the year") }),
                /* @__PURE__ */ jsx(BirthdayEntry, { birthdayValue: dateOfTheYear, onDateChange: setDateOfTheYear })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start justify-start space-x-2", children: [
              /* @__PURE__ */ jsx(Switcher, { id: "location", enabled: isLocationOn, onChange: () => setIsLocationOn(!isLocationOn) }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl", children: "Location" })
            ] }),
            isLocationOn && /* @__PURE__ */ jsx("div", { className: "py-6 px-2 w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "location", value: t("Location") }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "location",
                  className: "dark:text-white flex-1 w-full",
                  type: "text",
                  value: location,
                  onChange: (e) => setLocation(e.target.value),
                  placeholder: "Location"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col items-start justify-start", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start justify-start space-x-2", children: [
              /* @__PURE__ */ jsx(Switcher, { id: "manager", enabled: isManagerOn, onChange: () => setIsManagerOn(!isManagerOn) }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl", children: "Manager" })
            ] }),
            isManagerOn && /* @__PURE__ */ jsx("div", { className: "py-6 px-2 w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "manager", value: t("Add Manager") }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "manager",
                  className: "dark:text-white flex-1 w-full mt-2",
                  type: "text",
                  value: manager,
                  onChange: (e) => setManager(e.target.value),
                  placeholder: "Manager"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full flex items-end justify-end space-x-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => onClose(),
                type: "button",
                className: "bg-gray-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600",
                children: "Create Event"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
export {
  EventForm as default
};
