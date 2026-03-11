import { createSlice } from "@reduxjs/toolkit";
import { jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from "react";
const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawerOpen: false
  },
  reducers: {
    setDrawerOpen: (state) => {
      state.drawerOpen = !state.drawerOpen;
    }
  }
});
const { setDrawerOpen } = drawerSlice.actions;
drawerSlice.reducer;
const TooltipContext = createContext();
const useTooltip = () => useContext(TooltipContext);
const TooltipProvider = ({ children }) => {
  const [tooltip, setTooltip] = useState({ visible: false, content: null, position: { x: 0, y: 0 } });
  const showTooltip = (content, position) => {
    setTooltip({ visible: true, content, position });
  };
  const hideTooltip = () => {
    setTooltip({ visible: false, content: null, position: { x: 0, y: 0 } });
  };
  return /* @__PURE__ */ jsx(TooltipContext.Provider, { value: { tooltip, showTooltip, hideTooltip }, children });
};
const initialState$1 = {
  theme: localStorage.getItem("theme") || "dark"
};
const themeSlice = createSlice({
  name: "theme",
  initialState: initialState$1,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      state.theme = newTheme;
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  }
});
const { toggleTheme } = themeSlice.actions;
themeSlice.reducer;
const initialState = {
  language: localStorage.getItem("language") || "en"
  // Default to English or saved language
};
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    }
  }
});
const { setLanguage } = languageSlice.actions;
languageSlice.reducer;
export {
  TooltipProvider as T,
  setLanguage as a,
  setDrawerOpen as s,
  toggleTheme as t,
  useTooltip as u
};
