import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get("/youtube-videos").then((response) => {
      setVideos(response.data.items);
    }).catch((error) => {
      console.error("Error fetching videos:", error);
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "My YouTube Channel Videos" }),
    /* @__PURE__ */ jsx("div", { className: "video-list", children: videos.map((video) => /* @__PURE__ */ jsxs("div", { className: "video-item", children: [
      /* @__PURE__ */ jsx("h3", { children: video.snippet.title }),
      /* @__PURE__ */ jsx("img", { src: video.snippet.thumbnails.medium.url, alt: video.snippet.title }),
      /* @__PURE__ */ jsx("p", { children: video.snippet.description })
    ] }, video.id.videoId)) })
  ] });
};
export {
  YouTubeVideos as default
};
