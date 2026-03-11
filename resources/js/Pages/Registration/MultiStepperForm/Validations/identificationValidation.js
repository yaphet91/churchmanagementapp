import { useTranslation } from 'react-i18next';

const validateIdentification = (userIdentificationData) => {

    let isValid = true;
    const stepErrors = {};
    const textEntryRegex = /[\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?]+/

    if (!userIdentificationData.nationality.trim()) {
        isValid = false;
        stepErrors.nationality = "Nationality is required";
    }
    if (!userIdentificationData.addressCountry) {
        isValid = false;
        stepErrors.addressCountry = "Address Country is required";
    }
    if (!userIdentificationData.currentAddress) {
        isValid = false;
        stepErrors.currentAddress = "Your Address is required";
    }
    if (!userIdentificationData.placeOfBirth.trim()) {
        isValid = false;
        stepErrors.placeOfBirth = "Place Of Birth is required";
    }
    if (userIdentificationData.placeOfBirth.trim() && textEntryRegex.test(userIdentificationData.placeOfBirth.trim())) {
        isValid = false;
        stepErrors.placeOfBirth = "This Field must contain only alphabets";
    }
    if (userIdentificationData.province.trim() && textEntryRegex.test(userIdentificationData.province.trim())) {
        isValid = false;
        stepErrors.province = "This Field must contain only alphabets";
    }
    
    // i want to allow users to search cities
    if (!userIdentificationData.city.trim()) {
        isValid = false;
        stepErrors.city = "City is required";
    }

    return { isValid, stepErrors };
};

export default validateIdentification;
