import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { C as CloseIcon } from "./CloseIcon-CqHzHK5A.js";
import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from "react-image-crop";
import { useDispatch, useSelector } from "react-redux";
import { a as addUserImage } from "./userImageSlice-6eE4yU9I.js";
import "@inertiajs/inertia";
import axios from "axios";
import "@fortawesome/react-fontawesome";
import { PenIcon } from "lucide-react";
import { a as addChildDetails } from "./childMemberSlice-DlhqqVZb.js";
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
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      var _a2;
      const imageElement = new Image();
      const imageUrl = ((_a2 = reader.result) == null ? void 0 : _a2.toString()) || "";
      imageElement.src = imageUrl;
      imageElement.addEventListener("load", (e2) => {
        if (error) setError("");
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
const LoadingModal = () => {
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-80 backdrop-blur-sm z-50", children: /* @__PURE__ */ jsx("div", { className: "border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin" }) });
};
const defaultAvatar = "/build/assets/default-avatar-profile-icon-DY67Tyn5.jpg";
const Profile = ({ isChild }) => {
  const dispatch = useDispatch();
  const profileImage = useSelector((store) => store.profileImage.value);
  const childImage = useSelector((store) => store.child.value);
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
          "Accept": "application/json"
        }
      }).then(({ data }) => {
        if (isChild) {
          dispatch(addChildDetails({ ...childImage, imageUrl: data, imageSize: avatar.size }));
        } else {
          dispatch(addUserImage({ ...profileImage, imageUrl: data, imageSize: avatar.size }));
        }
        setAvatar(null);
        URL.revokeObjectURL(avatar.url);
        setTimeout(() => {
          setLoadSpinner(false);
        }, 3e3);
      }).catch((error) => {
        console.error("Upload error:", error);
      });
    } else {
      setModalOpen(true);
    }
  };
  const currentImageUrl = isChild ? childImage.imageUrl : profileImage.imageUrl;
  const avatarSrc = currentImageUrl ? currentImageUrl : (avatar == null ? void 0 : avatar.url) || defaultAvatar;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-3 justify-center items-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: avatarSrc,
          alt: "Avatar",
          className: "w-[150px] h-[180px] rounded-lg border-2 border-gray-400",
          onClick: () => setModalOpen(true)
        },
        avatarSrc
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btnPrimary md:hidden lg:flex",
          onClick: avatar ? uploadAvatar : () => setModalOpen(true),
          children: avatar ? "upload" : /* @__PURE__ */ jsx(PenIcon, { size: 24 })
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
    loadSpinner && /* @__PURE__ */ jsx(LoadingModal, {})
  ] });
};
const RadioGroup = ({ options, name, selectedValue, onChange }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex flex-row space-x-8 p-6 mt-3 border border-gray-400 dark:border-gray-500 bg-gray-200  dark:bg-form-input \n            rounded-lg md:h-[138px]", children: options.map((option) => /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center text-2xl ", children: [
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
export {
  LoadingModal as L,
  Profile as P,
  RadioGroup as R
};
