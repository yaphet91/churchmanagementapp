import { createSlice } from "@reduxjs/toolkit";
const nationalityOptions = ["", "Eritrea", "Ethiopia", "Other"];
const countries = [
  { name: "", code: "" },
  { name: "Eritrea", code: "ER" },
  { name: "Ethiopia", code: "ET" },
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" }
];
const initialState = {
  value: {
    title: "",
    firstName: "",
    fatherName: "",
    grandFatherName: "",
    firstNameT: "",
    fatherNameT: "",
    grandFatherNameT: "",
    motherName: "",
    motherFullNameT: "",
    mothersFather: "",
    gender: "",
    birthday: "",
    nationality: nationalityOptions[0],
    placeOfBirth: "",
    addressCountry: countries[0].name,
    currentAddress: "",
    province: "",
    city: "",
    email: "",
    sameAsPhoneNumber: false,
    countryPhoneCode: "",
    phone: "",
    whatsApp: "",
    emergencyContactNumber: "",
    contactRelation: "",
    eritreaContact: "",
    postalCode: "",
    maritalStatus: "",
    haveChildren: "",
    childrenNumber: "",
    firstLanguage: "",
    secondLanguage: "",
    profession: "",
    levelOfEducation: "",
    fatherOfConfession: ""
  },
  loading: false,
  isSuccess: false
};
const memberSlice = createSlice(
  {
    name: "member",
    initialState,
    reducers: {
      addMemberDetail: (state, action) => {
        state.value = action.payload;
      },
      resetMemberState: (state) => {
        state.value = initialState.value;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addMemberDetail, resetMemberState } = memberSlice.actions;
const memberReducer = memberSlice.reducer;
export {
  addMemberDetail as a,
  memberReducer as m,
  resetMemberState as r
};
