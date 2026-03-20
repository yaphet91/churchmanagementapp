const GenderOptions = [
  { id: "male", label: "Male", value: "male" },
  { id: "female", label: "Female", value: "female" }
  // Add any other options as needed
];
const validateChildForm = (childData) => {
  let isValid = true;
  const errors = {};
  const textEntryRegex = /[\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?]+/;
  const tigrinyaRegex = /^[\u1200-\u137F\s]+$/;
  if (!childData.imageUrl) {
    isValid = false;
    errors.imageUrl = "Profile Image is required";
  }
  if (!childData.gender || !GenderOptions.some((option) => option.value === childData.gender)) {
    isValid = false;
    errors.gender = "Invalid or missing gender selection";
  }
  const birthdayValidation = validateBirthday(childData.birthday);
  if (!birthdayValidation.isValid) {
    isValid = false;
    Object.assign(errors, birthdayValidation.errors);
  }
  if (!childData.firstName) {
    isValid = false;
    errors.firstName = "First Name is required";
  }
  if (childData.firstName && !/^[A-Za-z]+$/.test(childData.firstName)) {
    isValid = false;
    errors.firstName = "First Name must contain only English alphabets";
  }
  if (!childData.fatherName) {
    isValid = false;
    errors.fatherName = "Father's Name is required";
  }
  if (childData.fatherName && !/^[A-Za-z]+$/.test(childData.fatherName)) {
    isValid = false;
    errors.fatherName = "Father's Name must contain only English alphabets";
  }
  if (!childData.grandFatherName) {
    isValid = false;
    errors.grandFatherName = "Grand Father's Name is required";
  }
  if (childData.grandFatherName && !/^[A-Za-z]+$/.test(childData.grandFatherName)) {
    isValid = false;
    errors.grandFatherName = "Grand Father's Name must contain only English alphabets";
  }
  if (!childData.motherName) {
    isValid = false;
    errors.motherName = "Mother's Name is required";
  }
  if (childData.motherName && !/^[A-Za-z]+$/.test(childData.motherName)) {
    isValid = false;
    errors.motherName = "Mother's Name must contain only English alphabets";
  }
  if (!childData.mothersFather) {
    isValid = false;
    errors.mothersFather = "Grand Father Name (Mother Side) is required";
  }
  if (childData.mothersFather && !/^[A-Za-z]+$/.test(childData.mothersFather)) {
    isValid = false;
    errors.mothersFather = "This field must contain only English alphabets";
  }
  if (!childData.firstNameT) {
    isValid = false;
    errors.firstNameT = "First Name(Tigrina) is required";
  }
  if (childData.firstNameT && !tigrinyaRegex.test(childData.firstNameT)) {
    isValid = false;
    errors.firstNameT = "This field must be in ትግርኛ";
  }
  if (!childData.fatherNameT) {
    isValid = false;
    errors.fatherNameT = "This field (Tigrina) is required";
  }
  if (childData.fatherNameT && !tigrinyaRegex.test(childData.fatherNameT)) {
    isValid = false;
    errors.fatherNameT = "This field must be in ትግርኛ";
  }
  if (!childData.grandFatherNameT) {
    isValid = false;
    errors.grandFatherNameT = "This field (Tigrina) is required";
  }
  if (childData.grandFatherNameT && !tigrinyaRegex.test(childData.grandFatherNameT)) {
    isValid = false;
    errors.grandFatherNameT = "This field must be in ትግርኛ";
  }
  if (!childData.motherFullNameT) {
    isValid = false;
    errors.motherFullNameT = "Mother's Name (Tigrina) is required";
  }
  if (childData.motherFullNameT && !tigrinyaRegex.test(childData.motherFullNameT)) {
    isValid = false;
    errors.motherFullNameT = "This field must be in ትግርኛ";
  }
  if (!childData.nationality) {
    isValid = false;
    errors.nationality = "Nationality is required";
  }
  if (!childData.addressCountry) {
    isValid = false;
    errors.addressCountry = "Address Country is required";
  }
  if (!childData.currentAddress) {
    isValid = false;
    errors.currentAddress = "Your Address is required";
  }
  if (!childData.placeOfBirth) {
    isValid = false;
    errors.placeOfBirth = "Place Of Birth is required";
  }
  if (childData.placeOfBirth && textEntryRegex.test(childData.placeOfBirth)) {
    isValid = false;
    errors.placeOfBirth = "This Field must contain only alphabets";
  }
  if (childData.province && textEntryRegex.test(childData.province)) {
    isValid = false;
    errors.province = "This Field must contain only alphabets";
  }
  if (!childData.city) {
    isValid = false;
    errors.city = "City is required";
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
  if (!childData.email) {
    isValid = false;
    errors.email = "Email is required";
  } else if (!regex.test(childData.email)) {
    isValid = false;
    errors.email = "Email you provided is not valid!";
  }
  if (!childData.countryPhoneCode && !childData.phone) {
    isValid = false;
    errors.phone = "Country Code and Phone number are required";
  } else if (!childData.countryPhoneCode) {
    isValid = false;
    errors.phone = "Country Code is required";
  } else if (!childData.phone) {
    isValid = false;
    errors.phone = "Phone is required";
  }
  if (!childData.sameAsPhoneNumber && !childData.whatsApp) {
    isValid = false;
    errors.whatsApp = "WhatsApp is required";
  }
  if (!childData.emergencyContactNumber) {
    isValid = false;
    errors.emergencyContactNumber = "Emergency Contact is required";
  } else if (!phoneNumberRegex.test(childData.emergencyContactNumber)) {
    isValid = false;
    errors.emergencyContactNumber = "Not Valid Format! (Format it like +2917233423)";
  }
  if (!childData.contactRelation) {
    isValid = false;
    errors.contactRelation = "Contact Relationship is required";
  }
  if (!childData.firstLanguage) {
    isValid = false;
    errors.firstLanguage = "First Language is required";
  }
  if (childData.firstLanguage && textEntryRegex.test(childData.firstLanguage)) {
    isValid = false;
    errors.firstLanguage = "This Field must contain only alphabets";
  }
  if (childData.secondLanguage && textEntryRegex.test(childData.secondLanguage)) {
    isValid = false;
    errors.secondLanguage = "This Field must contain only alphabets";
  }
  if (!childData.levelOfEducation) {
    isValid = false;
    errors.levelOfEducation = "Level Of Education is required";
  }
  if (!Array.isArray(childData.selectedSacraments) || childData.selectedSacraments.length === 0) {
    isValid = false;
    errors.selectedSacraments = "Sacraments are required";
  }
  if (!childData.notServedInChurch && (!Array.isArray(childData.selectedChurchService) || childData.selectedChurchService.length === 0)) {
    isValid = false;
    errors.selectedChurchService = "Church Service is required";
  }
  return { isValid, errors };
};
const validateBirthday = (birthday) => {
  let isValid = true;
  const errors = {};
  if (!birthday) {
    isValid = false;
    errors.birthday = "Birthday is required";
  }
  return { isValid, errors };
};
export {
  validateChildForm as v
};
