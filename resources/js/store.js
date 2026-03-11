import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // Import autoMergeLevel2


import stepperReducer from './features/form/stepperSlice';
import memberReducer from './features/form/memberSlice';
import validationReducer from './features/form/validationSlice';
import userImageReducer from './features/form/userImageSlice';
import userCoursesReducer from './features/form/userCoursesSlice';
import newChurchReducer from './features/form/newChurchSlice';
import userChurchHistoryReducer from './features/form/userChurchHistorySlice';
import themeReducer from './features/theme/themeSlice';
import languageReducer from './features/language/languageSlice';
import formSubmissionReducer from './features/form/formSubmissionSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';
import drawerReducer from './features/drawer/drawerSlice';
import donationReducer from './features/donation/donationSlice';
import userReducer from './features/user/userSlice';
import ChildReducer from './features/form/childMemberSlice';
import eventReducer from './features/event/eventSlice';
import groupReducer from './features/group/groupSlice';
import adminReducer from './features/admin/adminSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['drawer', 'formSubmission','validation', 'group',],
    stateReconciler: autoMergeLevel2,
}

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
    group: groupReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    // middleware: [thunk]
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Ignore specific actions
                ignoredPaths: ['path.to.nonSerializableValue'], // Ignore specific paths in state
            },
        }),
});

export const persistor = persistStore(store)