import { createSlice } from "@reduxjs/toolkit";
import { jsx } from "react/jsx-runtime";
import { useState, createContext, useContext } from "react";
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
const drawerReducer = drawerSlice.reducer;
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
export {
  TooltipProvider as T,
  drawerReducer as d,
  setDrawerOpen as s,
  useTooltip as u
};
