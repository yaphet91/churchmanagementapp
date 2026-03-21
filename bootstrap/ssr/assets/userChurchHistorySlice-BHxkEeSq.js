import { createSlice } from "@reduxjs/toolkit";
const initialState$1 = {
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
    christianDiscipline: false
  }
};
const userCoursesSlice = createSlice(
  {
    name: "userCourses",
    initialState: initialState$1,
    reducers: {
      addUserCourses: (state, action) => {
        state.value = { ...state.value, ...action.payload };
      },
      resetUserCourses: (state) => {
        state.value = initialState$1.value;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserCourses, resetUserCourses } = userCoursesSlice.actions;
const userCoursesReducer = userCoursesSlice.reducer;
const churchServiceOptions = [
  // { value: ' - ', text: ' - ', selected: false },
  { value: "መዝሙር", text: "ክፍሊ መዝሙር", selected: false },
  { value: "ትምህርቲ", text: "ክፍሊ ትምህርቲ", selected: false },
  { value: "ስነ ጥበብ", text: "ክፍሊ ስነ ጥበብ", selected: false },
  { value: "ንብረት", text: "ክፍሊ ንብረት", selected: false },
  { value: "ተቀበልቲ ኣጋይሽ", text: "ክፍሊ ተቀበልቲ ኣጋይሽ", selected: false },
  { value: "ህጻናት", text: "ክፍሊ ህጻናት", selected: false }
];
const sacramentOptions = [
  { value: "ንስሓ", text: "ንስሓ", selected: false },
  { value: "ጥምቀት", text: "ጥምቀት", selected: false },
  { value: "ቁርባን", text: "ቁርባን", selected: false },
  // { value: 'ሜሮን', text: 'ሜሮን', selected: false },
  { value: "ቀንዴል", text: "ቀንዴል", selected: false },
  { value: "ተኽሊል", text: "ተኽሊል", selected: false },
  { value: "ክህነት", text: "ክህነት", selected: false },
  {
    value: "ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን",
    text: "ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን",
    selected: false
  }
];
const initialState = {
  value: {
    selectedSacraments: sacramentOptions.filter((option) => option.selectedSacraments).map((option) => option.value),
    selectedChurchService: churchServiceOptions.filter((option) => option.selectedChurchService).map((option) => option.value),
    notServedInChurch: false,
    selectedDioceseCode: "",
    selectedChurchCode: "",
    churchNotListed: false,
    isNewChurchSubmitted: false,
    priestInEritrea: ""
  }
};
const userChurchHistorySlice = createSlice(
  {
    name: "userChurchHistory",
    initialState,
    reducers: {
      addUserChurchHistory: (state, action) => {
        state.value = { ...state.value, ...action.payload };
      },
      resetUserChurchHistory: (state) => {
        state.value = initialState.value;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserChurchHistory, resetUserChurchHistory } = userChurchHistorySlice.actions;
const userChurchHistoryReducer = userChurchHistorySlice.reducer;
export {
  resetUserChurchHistory as a,
  userCoursesReducer as b,
  addUserChurchHistory as c,
  addUserCourses as d,
  resetUserCourses as r,
  userChurchHistoryReducer as u
};
