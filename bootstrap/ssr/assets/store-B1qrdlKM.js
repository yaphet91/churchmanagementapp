import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/index.js";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2.js";
import { s as stepperReducer } from "./stepperSlice-DCzqqTcy.js";
import { m as memberReducer } from "./memberSlice-CZbZjefE.js";
import { v as validationReducer } from "./validationSlice-D3Qd1uIP.js";
import { u as userImageReducer } from "./userImageSlice-6eE4yU9I.js";
import { u as userChurchHistoryReducer, b as userCoursesReducer } from "./userChurchHistorySlice-BHxkEeSq.js";
import { n as newChurchReducer } from "./newChurchSlice-CfxFHsE6.js";
import { a as themeReducer } from "./themeSlice-BmOV-XST.js";
import { l as languageReducer } from "./languageSlice-BzN7Wppz.js";
import { a as sidebarReducer } from "./sidebarSlice-BqmTz92s.js";
import { d as drawerReducer } from "./TooltipContext-CXfF4_Yf.js";
import { d as donationReducer } from "./donationSlice-BosuJUxM.js";
import { u as userReducer } from "./userSlice-DH0slH5l.js";
import { C as ChildReducer } from "./childMemberSlice-DlhqqVZb.js";
import { e as eventReducer } from "./eventSlice-cpfWu0eT.js";
import { c as adminReducer } from "./adminSlice-CWD1up8r.js";
const formSubmissionSlice = createSlice({
  name: "formSubmission",
  initialState: {
    isSubmitted: false
  },
  reducers: {
    setFormSubmitted: (state) => {
      state.isSubmitted = true;
    },
    resetFormSubmission: (state) => {
      state.isSubmitted = false;
    }
  }
});
const { setFormSubmitted, resetFormSubmission } = formSubmissionSlice.actions;
const formSubmissionReducer = formSubmissionSlice.reducer;
const initialState = {
  value: {
    membersAdded: false
  }
};
const groupSlice = createSlice(
  {
    name: "group",
    initialState,
    reducers: {
      addMemberToGroup: (state, action) => {
        state.value.membersAdded = action.payload;
      },
      resetGroup: (state) => {
        state.value = initialState.value;
        state.errors = {};
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addMemberToGroup, resetGroup } = groupSlice.actions;
const groupReducer = groupSlice.reducer;
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["drawer", "formSubmission", "validation", "group"],
  stateReconciler: autoMergeLevel2
};
const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
  stepper: stepperReducer,
  member: memberReducer,
  validation: validationReducer,
  profileImage: userImageReducer,
  userCourses: userCoursesReducer,
  newChurch: newChurchReducer,
  userChurchHistory: userChurchHistoryReducer,
  theme: themeReducer,
  language: languageReducer,
  formSubmission: formSubmissionReducer,
  sidebar: sidebarReducer,
  drawer: drawerReducer,
  donation: donationReducer,
  child: ChildReducer,
  event: eventReducer,
  group: groupReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
      // Ignore specific actions
      ignoredPaths: ["path.to.nonSerializableValue"]
      // Ignore specific paths in state
    }
  })
});
const persistor = persistStore(store);
export {
  addMemberToGroup as a,
  persistor as p,
  setFormSubmitted as s
};
