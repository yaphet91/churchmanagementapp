import { createSlice } from "@reduxjs/toolkit";

const nationalityOptions = ['', 'Eritrea', 'Ethiopia', 'Other'];
const countries = [
    { name: '', code: '' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
];

const initialState = {
    value: {
        title: '',
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
        eritreaContact: '',
        postalCode: '',
        maritalStatus: '',
        haveChildren: '',
        childrenNumber: '',
        firstLanguage: '',
        secondLanguage: '',
        profession: '',
        levelOfEducation: '',
        fatherOfConfession:'',
    },
    loading: false,
    isSuccess: false,
    
}

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        addMemberDetail: (state, action) => {
            state.value = action.payload
        },
        resetMemberState: (state) => {
            state.value = initialState.value;
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
export const { addMemberDetail, resetMemberState } = memberSlice.actions;
export default memberSlice.reducer;

