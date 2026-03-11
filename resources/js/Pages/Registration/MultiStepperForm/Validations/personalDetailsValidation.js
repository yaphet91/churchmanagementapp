import { parse, differenceInYears } from 'date-fns';

const GenderOptions = [
    { id: 'male', label: 'Male', value: 'male' },
    { id: 'female', label: 'Female', value: 'female' },
    // Add any other options as needed
];
const titleOptions = [
    { value: 'Deacon', label: 'Deacon' },
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Ms.', label: 'Ms.' },
    { value: 'Miss.', label: 'Miss.' },
    { value: 'Mrs.', label: 'Mrs.' },
    { value: 'Dr.', label: 'Dr.' },
    { value: 'Prof.', label: 'Prof.' },
    { value: 'Lt.', label: 'Lt.' },
    { value: 'Capt.', label: 'Capt.' },
];
import { useSelector } from 'react-redux';

const validatePersonalDetails = (userData, userImageData) => {

    const textEntryRegex = /^[a-zA-Z\s'-]+$/
    const tigrinyaRegex = /^[\u1200-\u137F\s]+$/;


    let isValid = true;
    const stepErrors = {};
    // Image 
    if (!userImageData || !userImageData.imageUrl) {
        isValid = false;
        stepErrors.imageUrl = "Profile Image is required"
    }
    // Title 
    if (!userData.title || !titleOptions.some(option => option.value === userData.title)) {
        isValid = false;
        stepErrors.title = "Invalid or missing title";
    }

    // Gender 
    if (!userData.gender || !GenderOptions.some(option => option.value === userData.gender)) {
        isValid = false;
        stepErrors.gender = "Invalid or missing gender selection";
    }

    // Birthday validation
    const birthdayValidation = validateBirthday(userData.birthday);
    if (!birthdayValidation.isValid) {
        isValid = false;
        // Merge birthday-specific errors into stepErrors
        Object.assign(stepErrors, birthdayValidation.stepErrors);
    }

    //  First name Validation 
    if (!userData.firstName.trim()) {
        isValid = false;
        stepErrors.firstName = "First Name is required";
    } 
    if (userData.firstName.trim() && !/^[A-Za-z]+$/.test(userData.firstName)) {
        isValid = false;
        stepErrors.firstName = "First Name must contain only English alphabets";
    }

    //  Father name Validation 
    if (!userData.fatherName) {
        isValid = false;
        stepErrors.fatherName = "Father's Name is required";  
    }
    if (userData.fatherName && !/^[A-Za-z]+$/.test(userData.fatherName)) {
        isValid = false;
        stepErrors.fatherName = "Father's Name must contain only English alphabets";
    }
    
    //  Grand First name Validation 
    if (!userData.grandFatherName) {
        isValid = false;
        stepErrors.grandFatherName = "Grand Father's Name is required";

    }
    if (userData.grandFatherName && !/^[A-Za-z]+$/.test(userData.grandFatherName)) {
        isValid = false;
        stepErrors.grandFatherName = "Grand Father's Name must contain only English alphabets";
    }
    //  Mother's name Validation
    if (!userData.motherName) {
        isValid = false;
        stepErrors.motherName = "Mother's Name is required";

    }
    if (userData.motherName && !/^[A-Za-z]+$/.test(userData.motherName)) {
        isValid = false;
        stepErrors.motherName = "Mother's Name must contain only English alphabets";
    }
    //  Mother's Father name Validation 

    if (!userData.mothersFather) {
        isValid = false;
        stepErrors.mothersFather = "Grand Father Name (Mother Side) is required";

    }
    if (userData.mothersFather && !/^[A-Za-z]+$/.test(userData.mothersFather.trim())) {
        isValid = false;
        stepErrors.mothersFather = "This field must contain only English alphabets";
    }


    // for tigirna inputs 

    if (!userData.firstNameT) {
        isValid = false;
        stepErrors.firstNameT = "First Name(Tigrina) is required";
    }
    if (userData.firstNameT && !tigrinyaRegex.test(userData.firstNameT)) {
        isValid = false;
        stepErrors.firstNameT = "This field must be in ትግርኛ";
    }


    if (!userData.fatherNameT) {
        isValid = false;
        stepErrors.fatherNameT = "This field (Tigrina) is required";
    }
    if (userData.fatherNameT && !tigrinyaRegex.test(userData.fatherNameT)) {
        isValid = false;
        stepErrors.fatherNameT = "This field must be in ትግርኛ";
    }

    if (!userData.grandFatherNameT) {
        isValid = false;
        stepErrors.grandFatherNameT = "This field (Tigrina) is required";

    }
    if (userData.grandFatherNameT && !tigrinyaRegex.test(userData.grandFatherNameT)) {
        isValid = false;
        stepErrors.grandFatherNameT = "This field must be in ትግርኛ";
    }

    if (!userData.motherFullNameT) {
        isValid = false;
        stepErrors.motherFullNameT = "Mother's Name (Tigrina) is required";

    }
    if (userData.motherFullNameT && !tigrinyaRegex.test(userData.motherFullNameT)) {
        isValid = false;
        stepErrors.motherFullNameT = "This field must be in ትግርኛ";
    }

    return { isValid, stepErrors };
};



export const validateBirthday = (birthday) => {
    if (!birthday) {
        // Directly return if birthday is not provided
        return { isValid: false, stepErrors: { birthday: "Birthday is required" } };
    }

    // Parse the birthday using date-fns
    const birthdayDate = parse(birthday, 'MMMM d, yyyy', new Date());
    const today = new Date();

    // Calculate the age difference
    const age = differenceInYears(today, birthdayDate);

    if (age < 18) {
        return { isValid: false, stepErrors: { birthday: "You must be at least 18 years old" } };
    }

    // If all validations pass
    return { isValid: true, stepErrors: {} };
};



export default validatePersonalDetails;
