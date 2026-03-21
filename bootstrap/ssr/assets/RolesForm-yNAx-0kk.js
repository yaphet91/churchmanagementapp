import { jsx, jsxs } from "react/jsx-runtime";
import { I as InputError } from "./InputError-Dm4RUL5I.js";
import { I as InputLabel } from "./InputLabel-DO02gwKJ.js";
import { T as TextInput } from "./TextInput-CFLyt_ba.js";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import { useState } from "react";
import "react-redux";
import "@headlessui/react";
import "lucide-react";
const RolesForm = ({ isOpen, onClose, onRoleCreated }) => {
  var _a, _b;
  const [form, setForm] = useState({
    title: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };
  const handleSubmit = async (event) => {
    var _a2;
    event.preventDefault();
    setSubmitting(true);
    setErrors({});
    try {
      await axios.post("/admin/api/roles", form);
      setForm({ title: "", description: "" });
      onRoleCreated == null ? void 0 : onRoleCreated();
      onClose();
    } catch (error) {
      if (((_a2 = error.response) == null ? void 0 : _a2.status) === 422) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error("Error creating role:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(Modal, { show: isOpen, onClose, maxWidth: "2xl", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5 p-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Add Role" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Create a role record for testing user and permission screens." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      !errors.title && !errors.name ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: "Role Name" }) : /* @__PURE__ */ jsx(InputError, { message: ((_a = errors.title) == null ? void 0 : _a[0]) || ((_b = errors.name) == null ? void 0 : _b[0]) }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "title",
          type: "text",
          value: form.title,
          className: "mt-1 block w-full",
          onChange: (event) => handleChange("title", event.target.value),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: "description", value: "Description" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "description",
          value: form.description,
          onChange: (event) => handleChange("description", event.target.value),
          className: "mt-1 block w-full rounded-md border border-slate-300 p-3 dark:border-slate-700 dark:bg-slate-900",
          rows: "4"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: onClose, className: "rounded-md border border-slate-300 px-4 py-2 text-sm", children: "Cancel" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: submitting,
          className: "rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900",
          children: submitting ? "Saving..." : "Save Role"
        }
      )
    ] })
  ] }) });
};
export {
  RolesForm as default
};
