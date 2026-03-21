import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    name: "",
    email: "",
    has_completed_membership_form: false,
    membershipId: null,
    hasLinkedSpouse: false
  }
};
const userSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers: {
      addUserDetail: (state, action) => {
        state.value = action.payload;
      },
      setMembershipId: (state, action) => {
        state.value.membershipId = action.payload;
      },
      setHasLinkedSpouse: (state, action) => {
        state.value.hasLinkedSpouse = action.payload;
      },
      logout: (state) => {
        return initialState;
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addUserDetail, setMembershipId, setHasLinkedSpouse, logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export {
  addUserDetail as a,
  setMembershipId as b,
  logout as l,
  setHasLinkedSpouse as s,
  userReducer as u
};
