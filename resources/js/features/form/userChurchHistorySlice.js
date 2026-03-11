import { createSlice } from "@reduxjs/toolkit";


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
        selectedSacraments: sacramentOptions.filter(option => option.selectedSacraments).map(option => option.value),
        selectedChurchService: churchServiceOptions.filter(option => option.selectedChurchService).map(option => option.value),
        notServedInChurch: false,
        selectedDioceseCode: '',
        selectedChurchCode: '',
        churchNotListed: false,
        isNewChurchSubmitted: false,
        priestInEritrea: '',
    },
}

const userChurchHistorySlice = createSlice({
    name: 'userChurchHistory',
    initialState,
    reducers: {
        addUserChurchHistory: (state, action) => {
            // state.value = action.payload
            state.value = { ...state.value, ...action.payload };

        },
        resetUserChurchHistory: (state) => {
            state.value = initialState.value
        }

    },
    extraReducers: (builder) => {
    }
}
)
export const { addUserChurchHistory, resetUserChurchHistory } = userChurchHistorySlice.actions;
export default userChurchHistorySlice.reducer;