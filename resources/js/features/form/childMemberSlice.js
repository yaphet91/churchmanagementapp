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
        imageSize: '',
        
        firstName: '',
        fatherName: '',
        grandFatherName: '',
        firstNameT: '',
        fatherNameT: '',
        grandFatherNameT: '',
        motherName: '',
        motherFullNameT: '',
        mothersFather: '',
        gender: '',
        birthday: '',
        nationality: nationalityOptions[0],
        placeOfBirth: '',
        addressCountry: countries[0].name,
        currentAddress: '',
        province: '',
        city: '',
        email: '',
        sameAsPhoneNumber: false,
        countryPhoneCode: '',
        phone: '',
        whatsApp: '',
        emergencyContactNumber: '',
        contactRelation: '',

        firstLanguage: '',
        secondLanguage: '',

        hobbies: '',
        // levelOfEducation: '',
        fatherOfConfession: '',
        
        selectedSacraments: sacramentOptions.filter(option => option.selectedSacraments).map(option => option.value),
        selectedChurchService: churchServiceOptions.filter(option => option.selectedChurchService).map(option => option.value),
        level1SundaySchool: false,
        level2SundaySchool: false,
        level3SundaySchool: false,
        level4SundaySchool: false,
    },
    attemptedToProceed: false,
    loading: false,
    isSuccess: false,
    errors: {},

}

const childMemberSlice = createSlice({
    name: 'child',
    initialState,
    reducers: {
        addChildDetails: (state, action) => {
            state.value = action.payload
        },
        setChildValidationErrors: (state, action) => {
            state.errors = action.payload;
        },
        resetChildState: (state) => {
            state.value = initialState.value;
            state.errors = {}
            state.attemptedToProceed = false
        },
        setAttepmtedToProceed: (state, action) => {
            state.attemptedToProceed = action.payload
        }

    },
    extraReducers: (builder) => {
        // // add member 
        // builder.addCase(addMember.pending, state => {
        //     state.loading = true
        //     state.error = ''
        //     console.log('pending')
        // });
        // builder.addCase(addMember.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.isSuccess = true
        //     state.value = action.payload
        //     console.log('fullfilled')
        // });

        // builder.addCase(addMember.rejected, (state, action) => {
        //     state.loading = false
        //     state.isSuccess = false
        //     state.error = action.error.message
        //     console.log('rejected')

        // });
    }
}
)
export const { addChildDetails, resetChildState, setChildValidationErrors, setAttepmtedToProceed } = childMemberSlice.actions;
export default childMemberSlice.reducer;

