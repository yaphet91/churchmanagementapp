
const validateConfirmation = (validationStates) => {

    let isValid = true;
    const errors = {};

    // Check if all validation states except for 'validConfirmation' are true
    const allValid = Object.entries(validationStates).every(([key, value]) => {
        // Skip checking 'validConfirmation'
        if (key === 'validConfirmation') return true;
        return value === true;
    });

    // If not all are valid, set isValid to false
    if (!allValid) {
        isValid = false;
        errors.general = "Please Complete the previous steps first.";
    }

    return { isValid, errors };
};

export default validateConfirmation;