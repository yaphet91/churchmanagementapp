
export const churches = [
    {
        code: 'a1', label: 'ኣስመራ', churches: [
            { code: 'a1a', label: 'ደብረ ግእዛን መድሃኔ ኣለም'},
            { code: 'a1b', label: 'መካነ ህይወት መንድሃኔ ኣለም' },
            { code: 'a1c', label: 'ርእሰ ኣድባራት ቅድስት ማርያም' },
            { code: 'a1d', label: 'ደብረ ብሥራት ቅዱስ ገብርኤል ኣኽርያ' },
            { code: 'a1e', label: 'ቅዱስ ገብርኤል ሓሊበት'},
            { code: 'a1f', label: 'ቅዱስ ሜካኤል ምህራም ጭራ'},
            { code: 'a1g', label: 'ቅዱስ ሚካኤል ጸጸራት' },
            { code: 'a1h', label: 'ርእሰ ኣድባራት ቅድስት ገብረመላእክቲ ኤርትራ' },
            { code: 'a1i', label: 'ርእሰ ኣድባራት ቅድስት መላእክቲ' },
            { code: 'a1j', label: 'ርእሰ ኣድባራት ቅድስት መላእክቲ ኤርት}ራ' },
        ]
    },
    {
        code: 'a2', label: 'ሕብራት ዓረብ ኢማራት', churches: [
            { code: 'a2a', label: 'ደብረ ብርሃን ቅድስት ሥላሴ ዱባይ' },
            { code: 'a2b', label: 'ደብረ ፍቅር ወሰላም ኪዳነ ምህረት ኣቡዳቢ' },
        ]
    }
]


export const getGenderOptions = (t) => [
    { id: 'male', label: t('Male'), value: 'male' },
    { id: 'female', label: t('Female'), value: 'female' },
];

export const getTitleOptions = (t) => [
    { value: 'Deacon', label: t('Deacon') },
    { value: 'Mr.', label: t('Mr.') },
    { value: 'Ms.', label: t('Ms.') },
    { value: 'Miss.', label: t('Miss.') },
    { value: 'Dr.', label: t('Dr.') },
    { value: 'Prof.', label: t('Prof.') },
    { value: 'Lt.', label: t('Lt.') },
    { value: 'Capt.', label: t('Capt.') },
];

export const getTitleOptions2 = (t) => [
    { value: 'Father', label: t('Father (Priest)') },
    { value: 'Deacon', label: t('Deacon') },
    { value: 'Mr.', label: t('Mr.') },
    { value: 'Mrs.', label: t('Mrs.') },
    { value: 'Ms.', label: t('Ms.') },
    { value: 'Miss.', label: t('Miss.') },
    { value: 'Dr.', label: t('Doctor.') },
    { value: 'Prof.', label: t('Professor.') },
    { value: 'Lt.', label: t('Lutenant.') },
    { value: 'Capt.', label: t('Captain.') },
];

export const getMaritalStatusOptions = (t) => [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Divorced', label: 'Divorced' },
    { value: 'Widowed', label: 'Widowed' },
]

export const getYesOrNo = (t) => [
    { id: 'Yes', value: 'Yes', label: 'Yes' },
    { id: 'No', value: 'No', label: 'No' }
];

export const getEducationLevels = (t) => [
    { value: 'Not Applicable', label: 'Not Applicable' },
    { value: 'Elementary School', label: 'Elementary School (1-5)' },
    { value: 'Joniur School', label: 'Joniur School (6-8)' },
    { value: 'High School', label: 'High School (9-12)' },
    { value: 'Deploma', label: 'Deploma' },
    { value: 'Bachelors Degree', label: 'Bachelors Degree' },
    { value: 'Masters Degree', label: 'Masters Degree' },
    { value: 'Doctoral Degree (Phd)', label: 'Doctoral Degree (Phd)' },
    { value: 'Post Doctoral', label: 'Post Doctoral' },
]

export const getSchoolLevels = (t) => [
    { value: 'Grade 1 (Amerian System)', label: 'Grade 1 (Amerian System)' },
    { value: 'Grade 2 (Amerian System)', label: 'Grade 2 (Amerian System)' },
    { value: 'Grade 3 (Amerian System)', label: 'Grade 3 (Amerian System)' },
    { value: 'Grade 4 (Amerian System)', label: 'Grade 4 (Amerian System)' },
    { value: 'Grade 5 (Amerian System)', label: 'Grade 5 (Amerian System)' },
    { value: 'Grade 6 (Amerian System)', label: 'Grade 6 (Amerian System)' },
    { value: 'Grade 7 (Amerian System)', label: 'Grade 7 (Amerian System)' },
    { value: 'Grade 8 (Amerian System)', label: 'Grade 8 (Amerian System)' },
    { value: 'Grade 9 (Amerian System)', label: 'Grade 9 (Amerian System)' },
    { value: 'Grade 10 (Amerian System)', label: 'Grade 10 (Amerian System)' },
    { value: 'Grade 11 (Amerian System)', label: 'Grade 11 (Amerian System)' },
    { value: 'Grade 12 (Amerian System)', label: 'Grade 12 (Amerian System)' },
    { value: 'Year 1 (British System)', label: 'Year 1 (British System)' },
    { value: 'Year 2 (British System)', label: 'Year 2 (British System)' },
    { value: 'Year 3 (British System)', label: 'Year 3 (British System)' },
    { value: 'Year 4 (British System)', label: 'Year 4 (British System)' },
    { value: 'Year 5 (British System)', label: 'Year 5 (British System)' },
    { value: 'Year 6 (British System)', label: 'Year 6 (British System)' },
    { value: 'Year 7 (British System)', label: 'Year 7 (British System)' },
    { value: 'Year 8 (British System)', label: 'Year 8 (British System)' },
    { value: 'Year 9 (British System)', label: 'Year 9 (British System)' },
    { value: 'Year 10 (British System)', label: 'Year 10 (British System)' },
    { value: 'Year 11 (British System)', label: 'Year 11 (British System)' },
    { value: 'Year 12 (British System)', label: 'Year 12 (British System)' },
    { value: 'Year 13 (British System)', label: 'Year 13 (British System)' },
]

export const getLiturgies = (t) => [
    { value: 'ቅዳሴ ሐዋርያት', label: 'ቅዳሴ ሐዋርያት' },
    { value: 'ቅዳሴ እግዚእ', label: 'ቅዳሴ እግዚእ' },
    { value: 'ቅዳሴ ማርያም', label: 'ቅዳሴ ማርያም' },
    { value: 'ቅዳሴ ኤጲፋንዮስ', label: 'ቅዳሴ ኤጲፋንዮስ' },
    { value: 'ቅዳሴ ጎርጎርዮስ', label: 'ቅዳሴ ጎርጎርዮስ' },
    { value: 'ቅዳሴ ዲዮስቆሮስ', label: 'ቅዳሴ ዲዮስቆሮስ' },
    { value: 'ቅዳሴ ቄርሎስ', label: 'ቅዳሴ ቄርሎስ' },
    { value: 'ቅዳሴ ያዕቆብ ዘስሩግ', label: 'ቅዳሴ ያዕቆብ ዘስሩግ' },
    { value: 'ቅዳሴ ኣትናቴዎስ', label: 'ቅዳሴ ኣትናቴዎስ' },
    { value: 'ቅዳሴ ጎርጎርዮስ ካልእ', label: 'ቅዳሴ ጎርጎርዮስ ካልእ' },
    { value: 'ቅዳሴ ባስልዮስ', label: 'ቅዳሴ ባስልዮስ' },
    { value: 'ቅዳሴ ዮሐንስ ኣፈወርቅ', label: 'ቅዳሴ ዮሐንስ ኣፈወርቅ' },
    { value: 'ቅዳሴ ወልደ ነጎድጓድ', label: 'ቅዳሴ ወልደ ነጎድጓድ' },
    { value: 'ቅዳሴ ሠለስቱ ምእት', label: 'ቅዳሴ ሠለስቱ ምእት' },
]
    





// This are my codes for each data
// ምስ ክርስቶስ ምንባር   =  livingWithChrist
// ኦርቶዶክሳዊ ትምህርቲ ድሕነት  = orthodoxyTeachingOfSalvation
// መባእታዊ ትምህርቲ ኦርቶዶክስ  = introductionToOrthodoxy
// 7ተ ምስጢራት ቤ / ክ  = sevenSacramentOfChurh
// ምንጽጻር ትምህርቲ መለኮት = comparativeTheology
// 5ተ ኣዕማደ ምስጢራት  = fiveChurchPillarsOfMystery
// ታሪኻዊ መጽናዕቲ መጽሓፍ ቅዱስ = historicalBibleStudy
// ኣድማሳዊ ታሪኽ ቤ / ክ  = universalChurchHistory
// መንፈሳዊ ናይ ጽምዋ ግዜ = spiritualQuiteTime
// ቀኖናን ስርዓትን ቤተክርስቲያን = churchCanonsAndRites
// ንስሓ = repentance
// መንፈሳዊ ኣገልግሎት = spiritualService
// መባእታዊ ትምህርቲ ቋንቋ ግእዝ = introductionToGeez
// ክርስቲያናዊ ስነ ምግባር = christianDiscipline




// const { data, setData } = useForm({
//   livingWithChrist: false,
//   orthodoxyTeachingOfSalvation: false,
//   introductionToOrthodoxy: false,
//   sevenSacramentOfChurh: false,
//   comparativeTheology: false,
//   fiveChurchPillarsOfMystery: false,
//   historicalBibleStudy: false,
//   universalChurchHistory: false,
//   spiritualQuiteTime: false,
//   churchCanonsAndRites: false,
//   repentance: false,
//   spiritualService: false,
//   introductionToGeez: false,
//   christianDiscipline: false,
// });