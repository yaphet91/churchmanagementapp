import { createSlice } from "@reduxjs/toolkit";
const nationalityOptions = ["Eritrea", "Ethiopia", "Other"];
const countries = [
  { name: "Eritrea", code: "ER" },
  { name: "Ethiopia", code: "ET" },
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" }
];
const initialState$1 = {
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
    initialState: initialState$1,
    reducers: {
      addMemberDetail: (state, action) => {
        state.value = action.payload;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addMemberDetail } = memberSlice.actions;
memberSlice.reducer;
const initialState = {
  value: {
    validRegistrationIntro: true,
    validPersonalDetails: false,
    validIdentification: false,
    validContactInfo: false,
    validAdditionalInfo: false,
    validChurchParticipation: false,
    validConfirmation: false
  },
  errors: {}
};
const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setValidationErrors: (state, action) => {
      state.errors = action.payload;
    },
    setStepValidation: (state, action) => {
      const { step, isValid, errors } = action.payload;
      state.value[step] = isValid;
      state.errors[step] = errors;
    },
    resetStepValidation: (state, action) => {
      const step = action.payload;
      state.value[step] = false;
      delete state.errors[step];
    },
    resetValidation: (state) => {
      return initialState;
    }
  }
});
const {
  setValidationErrors,
  setStepValidation,
  resetStepValidation,
  resetValidation
} = validationSlice.actions;
validationSlice.reducer;
export {
  setValidationErrors as a,
  addMemberDetail as b,
  setStepValidation as s
};
