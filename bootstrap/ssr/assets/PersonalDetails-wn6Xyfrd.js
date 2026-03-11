import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { I as InputError } from "./InputError-xXRnZePM.js";
import { I as InputLabel } from "./InputLabel-BppriEiK.js";
import { T as TextInput } from "./TextInput-8_mbY4T4.js";
import { C as CloseIcon } from "./CloseIcon-lDBYkuZD.js";
import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from "react-image-crop";
import { createSlice } from "@reduxjs/toolkit";
import "@inertiajs/inertia";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { M as Modal } from "./Modal-QOpWwH75.js";
import { SpinnerCircular } from "spinners-react";
import flatpickr from "flatpickr";
import { A as AutoComplete } from "./AutoComplete-blIwAEV8.js";
import { s as setStepValidation, a as setValidationErrors, b as addMemberDetail } from "./validationSlice-CGq-i0Ki.js";
import { parse, differenceInYears } from "date-fns";
import { c as getGenderOptions, d as getTitleOptions } from "./formData-rEzWwvLv.js";
const setCanvasPreview = (image, canvas, crop) => {
  return new Promise((resolve, reject) => {
    try {
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("No 2d context");
      }
      const pixelRatio = window.devicePixelRatio;
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
      canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingQuality = "high";
      ctx.save();
      const cropX = crop.x * scaleX;
      const cropY = crop.y * scaleY;
      ctx.translate(-cropX, -cropY);
      ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight
      );
      ctx.restore();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
const ASPECT_RATIO = 5 / 6;
const MIN_DIMENSION = 150;
const ImageCropper = ({ closeModal, updateAvatar }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    aspect: ASPECT_RATIO
  });
  const [error, setError] = useState("");
  const onSelectFile = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file)
      return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      var _a2;
      const imageElement = new Image();
      const imageUrl = ((_a2 = reader.result) == null ? void 0 : _a2.toString()) || "";
      imageElement.src = imageUrl;
      imageElement.addEventListener("load", (e2) => {
        if (error)
          setError("");
        const { naturalWidth, naturalHeight } = e2.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels.");
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };
  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = MIN_DIMENSION / width * 100;
    const crop2 = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop2, width, height);
    setCrop(centeredCrop);
  };
  const handleCropImage = (e) => {
    e.preventDefault();
    if (!crop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    setCanvasPreview(
      imgRef.current,
      previewCanvasRef.current,
      convertToPixelCrop(
        crop,
        imgRef.current.width,
        imgRef.current.height
      )
    ).then(() => {
      previewCanvasRef.current.toBlob((blob) => {
        updateAvatar(blob, blob.size);
        closeModal();
      }, "image/png");
    }).catch((error2) => console.error("Error in creating blob:", error2));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { className: "block mb-3 w-fit", children: [
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Choose profile photo" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: onSelectFile,
          className: "block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4\n                    file:rounded-md file:border-0 file:text-xs dark:file:bg-indigo-950 file:bg-gray-700 file:text-sky-400 \n                    dark:file:text-sky-200 hover:file:bg-gray-600"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-xs", children: error }),
    imgSrc && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(
        ReactCrop,
        {
          crop,
          onChange: (pixelCrop, percentCrop) => setCrop(percentCrop),
          keepSelection: true,
          aspect: ASPECT_RATIO,
          minWidth: MIN_DIMENSION,
          children: /* @__PURE__ */ jsx(
            "img",
            {
              ref: imgRef,
              src: imgSrc,
              alt: "Upload",
              style: { maxHeight: "70vh" },
              onLoad: onImageLoad
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600",
          onClick: handleCropImage,
          children: "Crop Image"
        }
      )
    ] }),
    crop && /* @__PURE__ */ jsx(
      "canvas",
      {
        ref: previewCanvasRef,
        className: "mt-4",
        style: {
          display: "none",
          border: "1px solid black",
          objectFit: "contain",
          width: 150,
          height: 150
        }
      }
    )
  ] });
};
const ImageModal = ({ updateAvatar, closeModal }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative z-50",
      "aria-labelledby": "crop-image-dialog",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm" }),
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full justify-center px-2 py-12 text-center ", children: /* @__PURE__ */ jsx("div", { className: "relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-gray-200 dark:bg-gray-700\n                     text-slate-100 text-left shadow-xl transition-all", children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "rounded-md p-1 inline-flex items-center justify-center text-gray-400 dark:hover:text-gray-800\n                                 hover:bg-gray-700 dark:hover:bg-gray-400 focus:outline-none absolute top-2 right-2 ",
              onClick: closeModal,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                /* @__PURE__ */ jsx(CloseIcon, {})
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            ImageCropper,
            {
              updateAvatar,
              closeModal
            }
          )
        ] }) }) }) })
      ]
    }
  );
};
const initialState = {
  value: {
    imageUrl: "",
    imageSize: ""
  },
  loading: false,
  isSuccess: false
};
const userImageSlice = createSlice(
  {
    name: "profileImage",
    initialState,
    reducers: {
      addUserImage: (state, action) => {
        state.value = action.payload;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserImage } = userImageSlice.actions;
userImageSlice.reducer;
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
const Profile = () => {
  const dispatch = useDispatch();
  const profileImage = useSelector((store) => store.profileImage.value);
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const updateAvatar = (blob, fileSize) => {
    const objectURL = URL.createObjectURL(blob);
    setAvatar({ blob, url: objectURL, size: blob.size });
  };
  const uploadAvatar = () => {
    setLoadSpinner(true);
    if (avatar && avatar.blob) {
      const formData = new FormData();
      formData.append("image", avatar.blob);
      axios.post("/upload-avatar", formData, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          // Ensures Laravel treats this as an AJAX request
          "Accept": "application/json"
          // Explicitly expect JSON response
        }
      }).then(({ data }) => {
        dispatch(addUserImage({ ...profileImage, imageUrl: data, imageSize: avatar.size }));
        setAvatar(null);
        URL.revokeObjectURL(avatar.url);
        setTimeout(() => {
          setLoadSpinner(false);
          setErrorMessage("");
        }, 3e3);
      }).catch((error) => {
        console.error("Upload error:", error);
      });
    } else {
      setModalOpen(true);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-3 justify-center items-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: profileImage.imageUrl ? (avatar == null ? void 0 : avatar.url) || profileImage.imageUrl : avatarUrl.current,
          alt: "Avatar",
          className: "w-[150px] h-[180px] rounded-lg border-2 border-gray-400",
          onClick: () => setModalOpen(true)
        },
        profileImage.imageUrl
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btnPrimary md:hidden lg:flex",
          onClick: avatar ? uploadAvatar : () => setModalOpen(true),
          children: avatar ? "upload" : /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faAdd })
        }
      )
    ] }),
    modalOpen && /* @__PURE__ */ jsx(
      ImageModal,
      {
        updateAvatar,
        closeModal: () => setModalOpen(false)
      }
    ),
    loadSpinner && /* @__PURE__ */ jsx(LoadingSpinner, {})
  ] });
};
const RadioGroup = ({ options, name, selectedValue, onChange }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex flex-row space-x-8 p-6 mt-3 border dark:border-gray-500 bg-gray-200  dark:bg-form-input \n            rounded-lg md:h-[138px]", children: options.map((option) => /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center text-2xl ", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "radio",
        id: `${name}-${option.value}`,
        name,
        value: option.value,
        checked: selectedValue === option.value,
        onChange,
        className: "w-5 h-5 text-blue-600 dark:text-blue-500 border-gray-800  focus:ring-blue-500\n                             dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 \n                             "
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "ml-2 text-lg text-gray-800 dark:text-gray-300", htmlFor: `${name}-${option.value}`, children: option.label })
  ] }, option.label)) }) });
};
const DatePickerOne = ({ updateFormState, initialDate }) => {
  const datePickerRef = useRef(null);
  useEffect(() => {
    const fp = flatpickr(datePickerRef.current, {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      defaultDate: initialDate,
      // Ensure the initial date is set if provided
      onChange: function(selectedDates, dateStr) {
        updateFormState(dateStr);
        console.log("dateStr" + dateStr);
      },
      prevArrow: '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow: '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>'
    });
    return () => fp.destroy();
  }, [updateFormState, initialDate]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "relative md:w-[455px] w-[435px] mt-2 ", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: datePickerRef,
        type: "text",
        className: "form-datepicker md:w-[455px] w-[435px] rounded-lg border-[1.5px] border-stroke bg-gray-200 \n                    px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary \n                    dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
        placeholder: "mm/dd/yyyy",
        readOnly: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 left-auto right-5 flex items-center", children: /* @__PURE__ */ jsx(
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
const GenderOptions = [
  { id: "male", label: "Male", value: "male" },
  { id: "female", label: "Female", value: "female" }
  // Add any other options as needed
];
const titleOptions = [
  { value: "Deacon", label: "Deacon" },
  { value: "Mr.", label: "Mr." },
  { value: "Ms.", label: "Ms." },
  { value: "Miss.", label: "Miss." },
  { value: "Mrs.", label: "Mrs." },
  { value: "Dr.", label: "Dr." },
  { value: "Prof.", label: "Prof." },
  { value: "Lt.", label: "Lt." },
  { value: "Capt.", label: "Capt." }
];
const validatePersonalDetails = (userData, userImageData) => {
  const tigrinyaRegex = /^[\u1200-\u137F\s]+$/;
  let isValid = true;
  const stepErrors = {};
  if (!userImageData || !userImageData.imageUrl) {
    isValid = false;
    stepErrors.imageUrl = "Profile Image is required";
  }
  if (!userData.title || !titleOptions.some((option) => option.value === userData.title)) {
    isValid = false;
    stepErrors.title = "Invalid or missing title";
  }
  if (!userData.gender || !GenderOptions.some((option) => option.value === userData.gender)) {
    isValid = false;
    stepErrors.gender = "Invalid or missing gender selection";
  }
  const birthdayValidation = validateBirthday(userData.birthday);
  if (!birthdayValidation.isValid) {
    isValid = false;
    Object.assign(stepErrors, birthdayValidation.stepErrors);
  }
  if (!userData.firstName.trim()) {
    isValid = false;
    stepErrors.firstName = "First Name is required";
  }
  if (userData.firstName.trim() && !/^[A-Za-z]+$/.test(userData.firstName)) {
    isValid = false;
    stepErrors.firstName = "First Name must contain only English alphabets";
  }
  if (!userData.fatherName) {
    isValid = false;
    stepErrors.fatherName = "Father's Name is required";
  }
  if (userData.fatherName && !/^[A-Za-z]+$/.test(userData.fatherName)) {
    isValid = false;
    stepErrors.fatherName = "Father's Name must contain only English alphabets";
  }
  if (!userData.grandFatherName) {
    isValid = false;
    stepErrors.grandFatherName = "Grand Father's Name is required";
  }
  if (userData.grandFatherName && !/^[A-Za-z]+$/.test(userData.grandFatherName)) {
    isValid = false;
    stepErrors.grandFatherName = "Grand Father's Name must contain only English alphabets";
  }
  if (!userData.motherName) {
    isValid = false;
    stepErrors.motherName = "Mother's Name is required";
  }
  if (userData.motherName && !/^[A-Za-z]+$/.test(userData.motherName)) {
    isValid = false;
    stepErrors.motherName = "Mother's Name must contain only English alphabets";
  }
  if (!userData.mothersFather) {
    isValid = false;
    stepErrors.mothersFather = "Grand Father Name (Mother Side) is required";
  }
  if (userData.mothersFather && !/^[A-Za-z]+$/.test(userData.mothersFather.trim())) {
    isValid = false;
    stepErrors.mothersFather = "This field must contain only English alphabets";
  }
  if (!userData.firstNameT) {
    isValid = false;
    stepErrors.firstNameT = "First Name(Tigrina) is required";
  }
  if (userData.firstNameT && !tigrinyaRegex.test(userData.firstNameT)) {
    isValid = false;
    stepErrors.firstNameT = "This field must be in ትግርኛ";
  }
  if (!userData.fatherNameT) {
    isValid = false;
    stepErrors.fatherNameT = "This field (Tigrina) is required";
  }
  if (userData.fatherNameT && !tigrinyaRegex.test(userData.fatherNameT)) {
    isValid = false;
    stepErrors.fatherNameT = "This field must be in ትግርኛ";
  }
  if (!userData.grandFatherNameT) {
    isValid = false;
    stepErrors.grandFatherNameT = "This field (Tigrina) is required";
  }
  if (userData.grandFatherNameT && !tigrinyaRegex.test(userData.grandFatherNameT)) {
    isValid = false;
    stepErrors.grandFatherNameT = "This field must be in ትግርኛ";
  }
  if (!userData.motherFullNameT) {
    isValid = false;
    stepErrors.motherFullNameT = "Mother's Name (Tigrina) is required";
  }
  if (userData.motherFullNameT && !tigrinyaRegex.test(userData.motherFullNameT)) {
    isValid = false;
    stepErrors.motherFullNameT = "This field must be in ትግርኛ";
  }
  return { isValid, stepErrors };
};
const validateBirthday = (birthday) => {
  let isValid = true;
  const stepErrors = {};
  if (!birthday) {
    isValid = false;
    stepErrors.birthday = "Birthday is required";
  } else {
    const birthdayDate = parse(birthday, "MMM d, yyyy", /* @__PURE__ */ new Date());
    const today = /* @__PURE__ */ new Date();
    const age = differenceInYears(today, birthdayDate);
    if (isNaN(age)) {
      return { isValid: false, stepErrors: { birthday: "Invalid birthday format" } };
    }
    if (age < 18) {
      return { isValid: false, stepErrors: { birthday: "You must be at least 18 years old" } };
    }
  }
  return { isValid, stepErrors };
};
const PersonalDetails = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const userImage = useSelector((state) => state.profileImage.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  useSelector((store) => store.stepper.value);
  const genderOptions = getGenderOptions(t);
  const titleOptions2 = getTitleOptions(t);
  useEffect(() => {
    console.log("personal details");
    console.log(attemptedToProceed);
    if (attemptedToProceed) {
      const validationResults = validatePersonalDetails(member, userImage);
      dispatch(setStepValidation({ step: "validPersonalDetails", isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, userImage, dispatch]);
  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };
  return /* @__PURE__ */ jsx("div", { className: `${theme === "light" ? "gradientBg" : "darkBg"} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`, children: /* @__PURE__ */ jsx(
    "div",
    {
      children: /* @__PURE__ */ jsxs("form", { action: "#", className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            !(errors == null ? void 0 : errors.imageUrl) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "profileImage", value: t("Profile Image") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.imageUrl, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx("div", { className: "border-2 border-dashed  dark:border-gray-500 p-2 mt-3 rounded-lg", children: /* @__PURE__ */ jsx(
              Profile,
              {
                id: "profileImage"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-[250px] mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.gender) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "gender", value: t("Gender") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.gender, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx(
              RadioGroup,
              {
                selectedValue: member.gender,
                onChange: (e) => handleInputChange("gender", e.target.value),
                options: genderOptions,
                name: "Gender *",
                id: "gender"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 items-center justify-center mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.title) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: t("Title") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.title, className: "mb-2 text-red-700" }),
            /* @__PURE__ */ jsx(
              AutoComplete,
              {
                options: titleOptions2,
                value: member.title,
                onChange: (value) => handleInputChange("title", value)
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "w-full mt-6 md:mt-0", children: [
              !(errors == null ? void 0 : errors.birthday) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "birthday", value: t("Birthday") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.birthday, className: "mb-2 text-red-700" }),
              /* @__PURE__ */ jsx(
                DatePickerOne,
                {
                  id: "birthday",
                  initialDate: member.birthday,
                  updateFormState: (value) => handleInputChange("birthday", value)
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.firstName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstName", value: t("First Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "firstName",
                type: "text",
                name: "firstName",
                value: member.firstName || "",
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("firstName", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.fatherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherName", value: t("Father's Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "fatherName",
                type: "text",
                name: "fatherName",
                value: member.fatherName,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("fatherName", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.grandFatherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "grandFatherName", value: t("Grand FatherName Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.grandFatherName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "grandFatherName",
                type: "text",
                name: "grandFatherName",
                value: member.grandFatherName,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("grandFatherName", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.firstNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "firstNameT", value: t("First Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.firstNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "firstNameT",
                type: "text",
                name: "firstNameT",
                value: member.firstNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("firstNameT", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.fatherNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "fatherNameT", value: t("Father's Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.fatherNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "fatherNameT",
                type: "text",
                name: "fatherNameT",
                value: member.fatherNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("fatherNameT", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.grandFatherNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "grandFatherNameT", value: t("Grand FatherName Name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.grandFatherNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "grandFatherNameT",
                type: "text",
                name: "grandFatherNameT",
                value: member.grandFatherNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("grandFatherNameT", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:flex gap-4 mt-6 md:mt-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            !(errors == null ? void 0 : errors.motherName) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "motherName", value: t("Mother's Name") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.motherName }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "motherName",
                type: "text",
                name: "motherName",
                value: member.motherName,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("motherName", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.mothersFather) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "mothersFather", value: t("Grand Father Name (Mother side)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.mothersFather }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "mothersFather",
                type: "text",
                name: "mothersFather",
                value: member.mothersFather,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("mothersFather", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-6 md:mt-0", children: [
            !(errors == null ? void 0 : errors.motherFullNameT) ? /* @__PURE__ */ jsx(InputLabel, { htmlFor: "motherFullNameT", value: t("Mother full name (Tigrina)") }) : /* @__PURE__ */ jsx(InputError, { message: errors == null ? void 0 : errors.motherFullNameT }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "motherFullNameT",
                type: "text",
                name: "motherFullNameT",
                value: member.motherFullNameT,
                className: "mt-1 block w-full",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => handleInputChange("motherFullNameT", e.target.value)
              }
            )
          ] })
        ] })
      ] })
    }
  ) });
};
const PersonalDetails$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PersonalDetails
}, Symbol.toStringTag, { value: "Module" }));
export {
  PersonalDetails as P,
  PersonalDetails$1 as a,
  validatePersonalDetails as v
};
