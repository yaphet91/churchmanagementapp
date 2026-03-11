
const validateAdditionalInfo = (userAdditionalInfoData) => {

    let isValid = true;
    const stepErrors = {};

    const textEntryRegex = /[\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?]+/


    if (!userAdditionalInfoData.maritalStatus) {
        isValid = false;
        stepErrors.maritalStatus = "Marital Status is required";
    }
    if (!userAdditionalInfoData.haveChildren) {
        isValid = false;
        stepErrors.haveChildren = "This field is required";
    }
    if (userAdditionalInfoData.haveChildren == 'Yes') {
        
        if (!userAdditionalInfoData.childrenNumber) {
            isValid = false;
            stepErrors.childrenNumber = "Number of Children is required";
        }
        if (userAdditionalInfoData.childrenNumber <= 0 || userAdditionalInfoData.childrenNumber > 17) {
            isValid = false;
            stepErrors.childrenNumber = "Invalid Number of children";

        }
    }

    if (!userAdditionalInfoData.firstLanguage) {
        isValid = false;
        stepErrors.firstLanguage = "First Language is required";
    }
    if (userAdditionalInfoData.firstLanguage.trim() && textEntryRegex.test(userAdditionalInfoData.firstLanguage.trim())) {
        isValid = false;
        stepErrors.firstLanguage = "This Field must contain only alphabets";
    }
    if (userAdditionalInfoData.secondLanguage.trim() && textEntryRegex.test(userAdditionalInfoData.secondLanguage.trim())) {
        isValid = false;
        stepErrors.secondLanguage = "This Field must contain only alphabets";
    }

    if (!userAdditionalInfoData.profession) {
        isValid = false;
        stepErrors.profession = "Profession is required";
    }
    if (userAdditionalInfoData.profession.trim() && textEntryRegex.test(userAdditionalInfoData.profession.trim())) {
        isValid = false;
        stepErrors.profession = "This Field must contain only alphabets";
    }

    if (!userAdditionalInfoData.levelOfEducation) {
        isValid = false;
        stepErrors.levelOfEducation = "Level Of Education is required";
    }
    

    


    return { isValid, stepErrors };
};
export default validateAdditionalInfo;
