import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
const SocialMedia = () => /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex flex-col items-center justify-center", children: [
  /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://www.youtube.com/@anastasia6137/videos",
      target: "_blank",
      rel: "noreferrer",
      className: "m-1",
      children: /* @__PURE__ */ jsx(BsYoutube, {})
    }
  ),
  /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://www.facebook.com/profile.php?id=100011225322457",
      target: "_blank",
      rel: "noreferrer",
      className: "m-1",
      children: /* @__PURE__ */ jsx(BsFacebook, {})
    }
  ),
  /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://www.instagram.com/anastasia.connect/",
      target: "_blank",
      rel: "noreferrer",
      className: "m-1",
      children: /* @__PURE__ */ jsx(BsInstagram, {})
    }
  )
] });
export {
  SocialMedia as default
};
