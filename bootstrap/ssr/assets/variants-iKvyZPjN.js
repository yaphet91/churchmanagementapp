const fadeIn = (direction, delay) => {
  const startPos = {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0
  };
  if (direction === "center") {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    };
  }
  return {
    hidden: { ...startPos, opacity: 0 },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};
export {
  fadeIn as f
};
