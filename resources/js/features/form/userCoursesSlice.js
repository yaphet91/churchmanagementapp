import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        livingWithChrist: false,
        orthodoxyTeachingOfSalvation: false,
        introductionToOrthodoxy: false,
        sevenSacramentOfChurch: false,
        comparativeTheology: false,
        fiveChurchPillarsOfMystery: false,
        historicalBibleStudy: false,
        universalChurchHistory: false,
        spiritualQuiteTime: false,
        churchCanonsAndRites: false,
        repentance: false,
        spiritualService: false,
        introductionToGeez: false,
        christianDiscipline: false,
    },
}

const userCoursesSlice = createSlice({
    name: 'userCourses',
    initialState,
    reducers: {
        addUserCourses: (state, action) => {
            // state.value = action.payload
            state.value = { ...state.value, ...action.payload };

        },
        resetUserCourses: (state) => {
            state.value = initialState.value
        }

    },
    extraReducers: (builder) => {
    }
}
)
export const { addUserCourses, resetUserCourses } = userCoursesSlice.actions;
export default userCoursesSlice.reducer;