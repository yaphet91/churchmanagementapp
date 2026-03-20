import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import { i as images } from "./images-2LzdHB5O.mjs";
import { useTranslation } from "react-i18next";
import "./anastasia_logo-LmIUZM3a.mjs";
const VideoEmbed = ({ videoId, width, height }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return /* @__PURE__ */ jsx("div", { className: "video-responsive", children: /* @__PURE__ */ jsx(
    "iframe",
    {
      width,
      height,
      src: embedUrl,
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      title: "Embedded YouTube Video"
    }
  ) });
};
const videos = [
  "HulAsQxA1U8",
  "U9iWCoKBQ30",
  "c0f59PSumB8",
  "42as_mUbsCA",
  "4-qXPFB1UVk"
];
const Media = () => {
  const { t } = useTranslation();
  const abouts = [
    {
      title: "Anastasia Youtube",
      description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
      imgUrl: images.about01,
      // Replace with your actual image URL
      links: "http://www.universitywebsite.com"
      // Replace with actual link to your university or program details
    },
    {
      title: "Anstasia Facebook",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about02,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    {
      title: "Anastasia Instagram",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about03,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    {
      title: "Anastasia Tiktok",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about04,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    }
    // Add more objects for each academic background item you wish to display
  ];
  return /* @__PURE__ */ jsxs("section", { className: "my-24 md:px-14 px-4 max-w-screen-2xl max-auto", id: "media", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold mb-12 text-center", children: [
      "Anastasia ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "Media" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-start flex-wrap mt-8", children: abouts.map((about, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        whileInView: { opacity: 1 },
        whileHover: { scale: 1.1 },
        transition: { duration: 0.2, type: "tween" },
        className: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6",
        children: [
          /* @__PURE__ */ jsx(InertiaLink, { href: about.links, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx("img", { src: about.imgUrl, alt: about.title, className: "w-full h-64 object-cover rounded-lg" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mt-5", children: about.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-base", children: about.description })
        ]
      },
      about.title + index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-24", children: /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold mb-12 text-center", children: [
      "Our ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "YouTube media" }),
      " Team priotize unity"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-start justify-start space-x-2", children: [
      /* @__PURE__ */ jsx(
        VideoEmbed,
        {
          videoId: "p4PGx9Xei6I",
          width: 854,
          height: 480
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-[480px] overflow-y-auto space-y-4", children: videos.map((video, index) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(
        VideoEmbed,
        {
          videoId: video,
          width: 426,
          height: 240
        }
      ) }, video + index)) })
    ] })
  ] });
};
export {
  Media as default
};
