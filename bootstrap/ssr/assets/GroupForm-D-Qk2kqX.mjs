import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { M as Modal } from "./Modal-BZNRvUHP.mjs";
import { T as TextInput } from "./TextInput-CFLyt_ba.mjs";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.mjs";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import { P as Profile2 } from "./CustomQuill-p1ZcDQgz.mjs";
import { A as AutoComplete } from "./AutoComplete-DeTDUJS5.mjs";
import { I as InputError } from "./InputError-Dm4RUL5I.mjs";
import { useSelector } from "react-redux";
import "./BirthdayEntry-DAdqgHRX.mjs";
import { toast } from "sonner";
import "@headlessui/react";
import "lucide-react";
import "axios";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "spinners-react";
import "./eventSlice-cpfWu0eT.mjs";
import "@reduxjs/toolkit";
import "@heroicons/react/solid/esm/index.js";
const visibilityOptions = [
  { value: "public", label: "Public" },
  { value: "private", label: "Private" }
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
const GroupForm = ({ isOpen, onClose, onGroupCreated }) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const quillRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const imageUrlData = useSelector((state) => state.event.value.imageUrl);
  const [visibility, setVisibility] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editor = quillRef.current.getEditor();
    const plainText = editor.getText();
    const data = {
      title,
      description: plainText,
      avatar: imageUrlData,
      visibility
    };
    try {
      await axios.post("/admin/api/groups", data);
      toast.success("Group created successfully!");
      onGroupCreated();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(Modal, { show: isOpen, onClose, maxWidth: "4xl", maxHeight: "200px", children: [
    /* @__PURE__ */ jsx("h1", { className: "px-5 py-3 text-3xl font-bold", children: "Group" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "py-4 px-6 overflow-y-auto max-h-[500px] scrollbar-hide",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-start justify-start gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
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
          ] }) }),
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
          /* @__PURE__ */ jsx("div", { className: "mt-14 flex flex-col items-start justify-start", children: /* @__PURE__ */ jsxs("div", { className: "w-[250px]", children: [
            !(errors == null ? void 0 : errors.visibility) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "visibility", value: t("Visibility") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.visibility, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx(
              AutoComplete,
              {
                options: visibilityOptions,
                value: visibility,
                onChange: (value) => setVisibility(value)
              }
            )
          ] }) }),
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
                children: "Create Group"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
export {
  GroupForm as default
};
