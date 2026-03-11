const getGenderOptions = (t) => [
  { id: "male", label: t("Male"), value: "male" },
  { id: "female", label: t("Female"), value: "female" }
];
const getTitleOptions = (t) => [
  { value: "Deacon", label: t("Deacon") },
  { value: "Mr.", label: t("Mr.") },
  { value: "Ms.", label: t("Ms.") },
  { value: "Miss.", label: t("Miss.") },
  { value: "Dr.", label: t("Dr.") },
  { value: "Prof.", label: t("Prof.") },
  { value: "Lt.", label: t("Lt.") },
  { value: "Capt.", label: t("Capt.") }
];
const getMaritalStatusOptions = (t) => [
  { value: "Single", label: "Single" },
  { value: "Married", label: "Married" },
  { value: "Divorced", label: "Divorced" },
  { value: "Widowed", label: "Widowed" }
];
const getYesOrNo = (t) => [
  { id: "Yes", value: "Yes", label: "Yes" },
  { id: "No", value: "No", label: "No" }
];
const getEducationLevels = (t) => [
  { value: "Not Applicable", label: "Not Applicable" },
  { value: "Elementary School", label: "Elementary School (1-5)" },
  { value: "Joniur School", label: "Joniur School (6-8)" },
  { value: "High School", label: "High School (9-12)" },
  { value: "Deploma", label: "Deploma" },
  { value: "Bachelors Degree", label: "Bachelors Degree" },
  { value: "Masters Degree", label: "Masters Degree" },
  { value: "Doctoral Degree (Phd)", label: "Doctoral Degree (Phd)" },
  { value: "Post Doctoral", label: "Post Doctoral" }
];
export {
  getEducationLevels as a,
  getMaritalStatusOptions as b,
  getGenderOptions as c,
  getTitleOptions as d,
  getYesOrNo as g
};
