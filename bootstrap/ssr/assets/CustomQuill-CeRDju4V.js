import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import { SpinnerCircular } from "spinners-react";
import { useSelector, useDispatch } from "react-redux";
import { b as addEventImage } from "./eventSlice-cpfWu0eT.js";
const LoadingSpinner = () => {
  return /* @__PURE__ */ jsx(Modal, { children: /* @__PURE__ */ jsx(
    SpinnerCircular,
    {
      size: 50,
      thickness: 100,
      speed: 100,
      color: "rgba(172, 57, 133, 1)",
      secondaryColor: "rgba(0, 0, 0, 0.44)"
    }
  ) });
};
const Profile2 = ({ isChild, uploadUrl = "/upload-avatar" }) => {
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const imageUrlData = useSelector((state) => state.event.value.imageUrl);
  const dispatch = useDispatch();
  const updateAvatar = (file) => {
    const objectURL = URL.createObjectURL(file);
    setAvatar({ file, url: objectURL });
  };
  useEffect(() => {
    if (avatar) {
      uploadAvatar();
    }
  }, [avatar]);
  const uploadAvatar = () => {
    setLoadSpinner(true);
    if (avatar && avatar.file) {
      const formData = new FormData();
      formData.append("image", avatar.file);
      axios.post(uploadUrl, formData, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Accept": "application/json"
        }
      }).then(({ data }) => {
        dispatch(addEventImage(data));
        URL.revokeObjectURL(avatar.url);
        setLoadSpinner(false);
      }).catch((error) => {
        console.error("Upload error:", error);
        setLoadSpinner(false);
      });
    }
  };
  const removeAvatar = () => {
    setAvatar(null);
    dispatch(addEventImage(""));
    setDropdownOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center w-full", children: [
    avatar && /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "absolute top-2 right-2 btnPrimary",
        onClick: () => setDropdownOpen(!dropdownOpen),
        children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPen })
      }
    ),
    dropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-10 right-2 text-black bg-white border border-gray-300 rounded-lg shadow-lg", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { className: "px-4 py-2 hover:bg-gray-300 cursor-pointer", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "fileInput", className: "cursor-pointer", children: "Edit" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            id: "fileInput",
            onChange: (event) => {
              const file = event.target.files[0];
              if (file) {
                setDropdownOpen(false);
                updateAvatar(file);
              }
            },
            className: "sr-only w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-xs dark:file:bg-indigo-950 file:bg-gray-700 file:text-sky-400 dark:file:text-sky-200 hover:file:bg-gray-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("li", { className: "px-4 py-2 hover:bg-gray-300 cursor-pointer", onClick: removeAvatar, children: "Remove" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex space-x-3 justify-center items-center", children: avatar ? /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imageUrlData ? imageUrlData : avatar.url,
        alt: "Avatar",
        className: "max-h-[200px] rounded-lg border-2 border-gray-400 object-cover"
      }
    ) }) : /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        id: "fileInput",
        onChange: (event) => {
          const file = event.target.files[0];
          if (file) {
            updateAvatar(file);
          }
        },
        className: "block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-xs dark:file:bg-indigo-950 file:bg-gray-700 file:text-sky-400 dark:file:text-sky-200 hover:file:bg-gray-600"
      }
    ) }),
    loadSpinner && /* @__PURE__ */ jsx(LoadingSpinner, {})
  ] });
};
export {
  Profile2 as P
};
