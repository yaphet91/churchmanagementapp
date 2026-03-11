import { useSelector } from "react-redux";

const validateChurchParticipation = (userChurchHistoryData) => {

    let isValid = true;
    const stepErrors = {};

    // if (!userChurchHistoryData.fatherOfConfession) {
    //     isValid = false;
    //     stepErrors.fatherOfConfession = "Father of Confession is required";
    // }

    if (!Array.isArray(userChurchHistoryData.selectedSacraments) || userChurchHistoryData.selectedSacraments.length === 0) {
        isValid = false;
        stepErrors.selectedSacraments = "Sacraments are required";
    }
    // Ensure selectedChurchService is an array before checking its length
    if (!userChurchHistoryData.notServedInChurch && (!Array.isArray(userChurchHistoryData.selectedChurchService) || userChurchHistoryData.selectedChurchService.length === 0)) {
        isValid = false;
        stepErrors.selectedChurchService = "Church Service is required";
    }
    if (!userChurchHistoryData.isNewChurchSubmitted && userChurchHistoryData.churchNotListed) {
        isValid = false;
        stepErrors.addYourChurch = "Add Your Church in Eritrea";
    }
    if (!userChurchHistoryData.churchNotListed && !userChurchHistoryData.selectedDioceseCode) {
        isValid = false;
        stepErrors.selectedDioceseCode = "Diocese is required";
    }
    if (!userChurchHistoryData.churchNotListed && !userChurchHistoryData.selectedChurchCode) {
        isValid = false;
        stepErrors.selectedChurchCode = "Church name is required";
    }
    if (!userChurchHistoryData.priestInEritrea) {
        isValid = false;
        stepErrors.priestInEritrea = "Priest Name is required";
    }

    return { isValid, stepErrors };
};

export default validateChurchParticipation;