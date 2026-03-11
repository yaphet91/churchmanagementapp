
const validateNewChurch = (churchDetails) => {

    let isValid = true;
    const stepErrors = {};

    if (!churchDetails.diocese) {
        isValid = false;
        stepErrors.diocese = "Diocese Name is required";
    }
    if (!churchDetails.surrounding) {
        isValid = false;
        stepErrors.surrounding = "Surrounding Name is required";
    }
    if (!churchDetails.churchName) {
        isValid = false;
        stepErrors.churchName = "Church Name is required";
    }


    return {isValid, stepErrors };
};

export default validateNewChurch;