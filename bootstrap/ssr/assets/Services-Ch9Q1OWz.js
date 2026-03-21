import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import { i as images } from "./images-Vl6MKc8t.js";
import { useTranslation } from "react-i18next";
import "./anastasia_logo-LmIUZM3a.js";
const Services = () => {
  const { t } = useTranslation();
  const abouts = [
    {
      title: "History of our Church",
      description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
      imgUrl: images.about01,
      // Replace with your actual image URL
      links: "http://www.universitywebsite.com"
      // Replace with actual link to your university or program details
    },
    {
      title: "About Anstasia tewahdo",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about02,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    {
      title: "Our Services",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about03,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    {
      title: "Our Services",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about04,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    // Add more objects for each academic background item you wish to display
    {
      title: "History of our Church",
      description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
      imgUrl: images.about01,
      // Replace with your actual image URL
      links: "http://www.universitywebsite.com"
      // Replace with actual link to your university or program details
    },
    {
      title: "About Anstasia tewahdo",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about02,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    {
      title: "Our Services",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about03,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    },
    {
      title: "Our Services",
      description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
      imgUrl: images.about04,
      // Replace with your actual image URL
      links: "http://www.gradschoolwebsite.com"
      // Replace with actual link to your graduate school or thesis
    }
    // Add more objects for each academic background item you wish to display
  ];
  return /* @__PURE__ */ jsxs("section", { className: "my-24 md:px-14 px-4 max-w-screen-2xl max-auto", id: "services", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold mb-8 text-center", children: [
      "Our ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "Services" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl font-semibold mb-8 px-6 py-2", children: [
      "Anastasisa Tewahdo is an online portal of your local church, and all services available through this partal are directly connected to your church's office administration. For technical assistance please contact your local church by visiting the ",
      /* @__PURE__ */ jsx("span", { id: "services", className: "", children: "contacts page" }),
      "."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-6 ", children: abouts.map((about, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        whileInView: { opacity: 1 },
        whileHover: { scale: 1.1 },
        transition: { duration: 0.2, type: "tween" },
        className: "w-full p-6 ",
        children: [
          /* @__PURE__ */ jsx(InertiaLink, { href: about.links, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx("img", { src: about.imgUrl, alt: about.title, className: "w-full h-64 object-cover rounded-lg" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mt-5", children: about.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-base", children: about.description })
        ]
      },
      about.title + index
    )) })
  ] });
};
export {
  Services as default
};
