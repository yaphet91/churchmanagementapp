import { createSlice } from "@reduxjs/toolkit";

const nationalityOptions = ['', 'Eritrea', 'Ethiopia', 'Other'];
const countries = [
    { name: '', code: '' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
];
const churchServiceOptions = [
    // { value: ' - ', text: ' - ', selected: false },
    { value: 'መዝሙር', text: 'ክፍሊ መዝሙር', selected: false },
    { value: 'ትምህርቲ', text: 'ክፍሊ ትምህርቲ', selected: false },
    { value: 'ስነ ጥበብ', text: 'ክፍሊ ስነ ጥበብ', selected: false },
    { value: 'ንብረት', text: 'ክፍሊ ንብረት', selected: false },
    { value: 'ተቀበልቲ ኣጋይሽ', text: 'ክፍሊ ተቀበልቲ ኣጋይሽ', selected: false },
    { value: 'ህጻናት', text: 'ክፍሊ ህጻናት', selected: false },
];
const sacramentOptions = [
    { value: 'ንስሓ', text: 'ንስሓ', selected: false },
    { value: 'ጥምቀት', text: 'ጥምቀት', selected: false },
    { value: 'ቁርባን', text: 'ቁርባን', selected: false },
    // { value: 'ሜሮን', text: 'ሜሮን', selected: false },
    { value: 'ቀንዴል', text: 'ቀንዴል', selected: false },
    { value: 'ተኽሊል', text: 'ተኽሊል', selected: false },
    { value: 'ክህነት', text: 'ክህነት', selected: false },
    {
        value: 'ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን',
        text: 'ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን',
        selected: false
    },
];

const initialState = {
    value: {
        imageUrl: '',
    },
    selectedEvent: null,
    eventMembers: [],
    loading: false,
    isSuccess: false,
    errors: {},
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEventMembers: (state, action) => {
            state.eventMembers = action.payload
        },
        setSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload
        },
        addEvent: (state, action) => {
            state.value = action.payload
        },
        addEventImage: (state, action) => {
            state.value.imageUrl = action.payload
        },
        setEventErrors: (state, action) => {
            state.errors = action.payload
        },
        resetEvent: (state) => {
            state.value = initialState.value
            state.errors = {}
        }
    },
    
    extraReducers: (builder) => {
  
    }
}
)
export const { addEvent, resetEvent, setEventErrors, addEventImage, setSelectedEvent, setEventMembers } = eventSlice.actions;
export default eventSlice.reducer;

