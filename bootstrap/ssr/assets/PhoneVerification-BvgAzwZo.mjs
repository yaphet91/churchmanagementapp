import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
const PhoneVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const sendVerificationCode = async () => {
    var _a, _b, _c;
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const response = await axios.post("/send-code", { phone_number: phoneNumber });
      setVerificationSent(true);
      setMessage(response.data.message);
    } catch (error2) {
      setError(((_c = (_b = (_a = error2.response) == null ? void 0 : _a.data) == null ? void 0 : _b.phone_number) == null ? void 0 : _c[0]) || "Failed to send verification code");
    } finally {
      setLoading(false);
    }
  };
  const verifyCode = async () => {
    var _a, _b;
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const response = await axios.post("/verify-code", { code });
      setMessage(response.data.message);
    } catch (error2) {
      setError(((_b = (_a = error2.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || "Invalid verification code");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Phone Verification" }),
    !verificationSent ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Enter phone number",
          value: phoneNumber,
          onChange: (e) => setPhoneNumber(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: sendVerificationCode, disabled: loading, children: loading ? "Sending..." : "Send Verification Code" })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Enter verification code",
          value: code,
          onChange: (e) => setCode(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: verifyCode, disabled: loading, children: loading ? "Verifying..." : "Verify Code" })
    ] }),
    message && /* @__PURE__ */ jsx("p", { style: { color: "green" }, children: message }),
    error && /* @__PURE__ */ jsx("p", { style: { color: "red" }, children: error })
  ] });
};
export {
  PhoneVerification as default
};
