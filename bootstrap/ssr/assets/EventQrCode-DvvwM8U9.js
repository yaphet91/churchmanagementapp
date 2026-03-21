import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import QRCode from "qrcode.react";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import { Share } from "lucide-react";
import "@headlessui/react";
import "react-redux";
const EventQRCode = ({ event, isOpen, onClose }) => {
  const qrValue = `https://localhost/events/${event.id}/check-in`;
  const qrRef = useRef(null);
  const shareQrCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    if (navigator.canShare && navigator.canShare({ files: [image] })) {
      const file = dataUrlToFile(image, "qr-code.png");
      navigator.share({
        title: "Event QR Code",
        files: [file],
        text: "Scan to Check-in"
      }).then(() => {
        console.log("Thanks for sharing!");
      }).catch(console.error);
    } else {
      console.log("Web Share API not supported or cannot share files.");
    }
  };
  function dataUrlToFile(dataUrl, filename) {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  return /* @__PURE__ */ jsxs(Modal, { show: isOpen, onClose, maxWidth: "xl", maxHeight: "h-[75vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 items-center justify-center mt-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-4xl text-blue-300 font-bold", children: "Event QR Code" }),
      /* @__PURE__ */ jsx("div", { className: "p-4 border-2 bg-white border-gray-300", ref: qrRef, children: /* @__PURE__ */ jsx(QRCode, { value: qrValue, size: 256 }) }),
      /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Scan to Check-in" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 p-3", children: /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-center space-x-3 p-2 bg-gray-400 text-white rounded-md hover:bg-gray-600 w-36", onClick: shareQrCode, children: [
      "Share",
      /* @__PURE__ */ jsx(Share, { size: 20, className: "ml-3" })
    ] }) })
  ] });
};
export {
  EventQRCode as default
};
