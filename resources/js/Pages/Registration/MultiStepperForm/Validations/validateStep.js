import { validateRegistrationIntro } from './registrationIntroValidation';
import { validatePersonalDetails } from './personalDetailsValidation';
import { validateContactInfo } from './contactInfoValidation';
import { validateChurchParticipation } from './churchParticipationValidation';
import { validateIdentification } from './identificationValidation';
import { validateAdditionalInfo } from './additionalInfoValidation';
import validateRegistrationIntro from './registrationIntroValidation';

// Map form steps to their respective validation functions
const validationFunctions = {
    0: validateRegistrationIntro,
    1: validatePersonalDetails,
    2: validateIdentification,
    3: validateContactInfo,
    4: validateAdditionalInfo,
    5: validateChurchParticipation,
};

export const validateStep = (dispatch, data, stepName) => {
    const validationFn = validationFunctions[stepName];
    if (!validationFn) {
        console.error(`No validation function for step: ${stepName}`);
        return false;
    }

    const { isValid, errors } = validationFn(data);

    // Use the newly added action creator to update the validation state and errors
    dispatch(setStepValidation({ step: stepName, isValid, errors }));

    return isValid;
};
