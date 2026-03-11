import { useTranslation } from 'react-i18next';

const validateContactInfo = (userContactData) => {

    let isValid = true;
    const stepErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/

    if (!userContactData.email.trim()) {
        isValid = false;
        stepErrors.email = "Email is required";
    } else if (!regex.test(userContactData.email)) {
        isValid = false;
        stepErrors.email = "Email you provided is not valid!";
    }

    if (!userContactData.countryPhoneCode && !userContactData.phone) {
        isValid = false;
        stepErrors.phone = "Country Code and Phone number are required";
    }else if (!userContactData.countryPhoneCode) {
        isValid = false;
        stepErrors.phone = "Country Code is required";
    }else if (!userContactData.phone) {
        isValid = false;
        stepErrors.phone = "Phone is required";
    }

    if (!userContactData.sameAsPhoneNumber && !userContactData.whatsApp) {
        isValid = false;
        stepErrors.whatsApp = "WhatsApp is required";
    }
    if (!userContactData.emergencyContactNumber) {
        isValid = false;
        stepErrors.emergencyContactNumber = "Emergency Contact is required";
    } else if (!phoneNumberRegex.test(userContactData.emergencyContactNumber)) {
        isValid = false;
        stepErrors.emergencyContactNumber = "Not Valid Format! (Format it like +2917233423)";
    }
    if (!userContactData.contactRelation) {
        isValid = false;
        stepErrors.contactRelation = "Contact Relationship is required";
    }

    return { isValid, stepErrors };
};

export default validateContactInfo;

//postal code validation to accommodate several countries (will deal with this later)

function validatePostalCode(postalCode, countryCode) {
    let regex;
    switch (countryCode) {
        case 'US':
            regex = /^\d{5}(-\d{4})?$/;
            break;
        case 'GB':
            regex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})/;
            break;
        case 'CA':
            regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
            break;
        // Add more countries as needed
        default:
            // Fallback or less strict validation
            regex = /.+/; // Accepts anything, consider a more appropriate fallback
    }
    return regex.test(postalCode);
}

