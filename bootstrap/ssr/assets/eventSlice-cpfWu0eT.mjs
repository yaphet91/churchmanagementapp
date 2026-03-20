import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    imageUrl: ""
  },
  selectedEvent: null,
  eventMembers: [],
  loading: false,
  isSuccess: false,
  errors: {}
};
const eventSlice = createSlice(
  {
    name: "event",
    initialState,
    reducers: {
      setEventMembers: (state, action) => {
        state.eventMembers = action.payload;
      },
      setSelectedEvent: (state, action) => {
        state.selectedEvent = action.payload;
      },
      addEvent: (state, action) => {
        state.value = action.payload;
      },
      addEventImage: (state, action) => {
        state.value.imageUrl = action.payload;
      },
      setEventErrors: (state, action) => {
        state.errors = action.payload;
      },
      resetEvent: (state) => {
        state.value = initialState.value;
        state.errors = {};
      }
    },
    extraReducers: (builder) => {
    }
  }
);
const { addEvent, resetEvent, setEventErrors, addEventImage, setSelectedEvent, setEventMembers } = eventSlice.actions;
const eventReducer = eventSlice.reducer;
export {
  setSelectedEvent as a,
  addEventImage as b,
  eventReducer as e,
  resetEvent as r,
  setEventMembers as s
};
