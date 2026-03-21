import { jsx } from "react/jsx-runtime";
import "react";
import PropTypes from "prop-types";
const colors = [
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#e67e22",
  "#e74c3c",
  "#f1c40f",
  "#2ecc71",
  "#34495e",
  "#95a5a6",
  "#16a085"
];
const DrawerAvatar = ({ name }) => {
  if (!name) {
    return null;
  }
  const firstLetter = name[0].toUpperCase();
  const colorIndex = (firstLetter.charCodeAt(0) - 65) % colors.length;
  const avatarStyle = {
    backgroundColor: colors[colorIndex],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    // Adjust size as needed
    width: "50px",
    // Avatar width
    height: "50px",
    // Avatar height
    borderRadius: "50%"
  };
  return /* @__PURE__ */ jsx("div", { style: avatarStyle, children: firstLetter });
};
DrawerAvatar.propTypes = {
  name: PropTypes.string
};
DrawerAvatar.defaultProps = {
  name: "A"
  // Default to 'A' or any other default letter
};
export {
  DrawerAvatar as D
};
