import { jsxs, jsx } from "react/jsx-runtime";
import { M as Modal } from "./Modal-BZNRvUHP.js";
import { useState } from "react";
import "@headlessui/react";
import "lucide-react";
import "react-redux";
const QRCodeScanner = ({ onScanSuccess, isOpen, onClose }) => {
  const [error, setError] = useState(null);
  return /* @__PURE__ */ jsxs(Modal, { show: isOpen, onClose, maxWidth: "5xl", maxHeight: "h-[90vh]", children: [
    /* @__PURE__ */ jsx("h3", { children: "Scan Event QR Code" }),
    error && /* @__PURE__ */ jsx("p", { className: "error", children: error })
  ] });
};
export {
  QRCodeScanner as default
};
