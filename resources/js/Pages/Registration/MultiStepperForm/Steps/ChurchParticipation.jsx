import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { images } from '@/Constants';
import MultiSelect from '@/Components/Forms/MultiSelect';
import AutoComplete from '@/Components/Forms/AutoComplete/AutoComplete';
import TextInput from '@/Components/Forms/TextInput';
import InputLabel from '@/Components/Forms/InputLabel';
import CheckboxTwo from '@/Components/Checkboxes/CheckboxTwo';
import { Head, Link, useForm } from '@inertiajs/react';
import { fadeIn } from '@/utils/variants';
import { useDispatch, useSelector } from 'react-redux';
import { addUserCourses } from '@/features/form/userCoursesSlice';
import AddChurchModal from '@/Components/Modals/AddChurchModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { validateChurchParticipation } from '../Validations';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
import { addUserChurchHistory } from '@/features/form/userChurchHistorySlice';
import InputError from '@/Components/Forms/InputError';
import Checkbox from '@/Components/Checkboxes/Checkbox';
import { useTranslation } from 'react-i18next';
import { addMemberDetail } from '@/features/form/memberSlice';
import { churchesData } from '@/data/churches';

const questions = [
  {
    questionText: "Who is your father of Confession?",
    answers: [
      { text: "Fr. Neamn Tesfatsion", imageUrl: images.about01 },
      { text: "Fr. Tesfaldet Teame", imageUrl: images.about02 },
      { text: "Fr. Erdom Okbamikael", imageUrl: images.about03 },
      { text: "Fr. Yohans Egeliye", imageUrl: images.about04 },
    ]
  },
  // Add more questions as needed
];
const churchServiceOptions = [
  // { value: ' - ', text: ' - ', selected: false },
  { value: 'መዝሙር', text: 'ክፍሊ መዝሙር', selected: false },
  { value: 'ትምህርቲ', text: 'ክፍሊ ትምህርቲ', selected: false },
  { value: 'ስነ ጥበብ', text: 'ክፍሊ ስነ ጥበብ', selected: false },
  { value: 'ንብረት', text: 'ክፍሊ ንብረት', selected: false },
  { value: 'ተቀበልቲ ኣጋይሽ', text: 'ክፍሊ ተቀበልቲ ኣጋይሽ', selected: false },
  { value: 'ህጻናት', text: 'ክፍሊ ህጻናት', selected: false },
];
const sacramentOptions = [
  { value: 'ንስሓ', text: 'ንስሓ', selected: false },
  { value: 'ጥምቀት', text: 'ጥምቀት', selected: false },
  { value: 'ቁርባን', text: 'ቁርባን', selected: false },
  // { value: 'ሜሮን', text: 'ሜሮን', selected: false },
  { value: 'ቀንዴል', text: 'ቀንዴል', selected: false },
  { value: 'ተኽሊል', text: 'ተኽሊል', selected: false },
  { value: 'ክህነት', text: 'ክህነት', selected: false },
  {
    value: 'ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን',
    text: 'ካብ ምስጢራት ቤተክርስቲያን ኣይተቀበልኩን',
    selected: false
  },
];
// export const churchesData = [
//   {
//     diocese: 'Asmara',
//     churches: [
//       { id: 'A01', name: 'St. Mary Cathedral' },
//       { id: 'A02', name: 'st. Gebriel Akria' },
//       { id: 'A03', name: 'st. Geiorgis Alfermayo' },
//     ]
//   },
//   {
//     diocese: 'United Arab Emirates',
//     churches: [
//       { id: 'D01', name: 'Holy Trinity Church Dubai' },
//       { id: 'D01', name: 'Kidane Mehret Abu Dhabi' },
//     ]
//   }
// ];


const ChurchParticipation = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const userCourses = useSelector((state) => state.userCourses.value);
  const errors = useSelector((state) => state.validation.errors);
  const isNewChurchValid = useSelector((state) => state.newChurch.isValid);
  const userChurchHistory = useSelector((state) => state.userChurchHistory.value);
  const churchAdded = useSelector((state) => state.newChurch.churchAdded)
  const theme = useSelector((store) => store.theme.theme);
  const currentStep = useSelector((store) => store.stepper.value);


  const [modalOpen, setModalOpen] = useState(false);

  // Church courses


  //  sliding effect questions 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // const [notServedInChurch, setNotServedInChurch] = useState(false);

  const [selectedChurchService, setSelectedChurchService] = useState(churchServiceOptions.filter(option => option.selectedChurchService).map(option => option.value));
  const [selectedSacraments, setSelectedSacraments] = useState(sacramentOptions.filter(option => option.selectedSacraments).map(option => option.value));
  

  // Extract cities for the first dropdown
  const dioceseOptions = churchesData.map(diocese => ({ value: diocese.diocese, label: diocese.diocese }));
  // Find the selected diocese and extract its churches for the second dropdown  
  const selectedDiocese = churchesData.find(diocese => diocese.diocese === userChurchHistory.selectedDioceseCode);
  // Extract churches for the second dropdown
  const churchOptions = selectedDiocese ? selectedDiocese.churches.map(church => ({ value: church.name, label: church.name })) : [];




  const handleInputChange = (field, value) => {
    dispatch(addUserChurchHistory({ ...userChurchHistory, [field]: value }));
  };

  const handleChurchCoursesChange = (field, value) => {
    dispatch(addUserCourses({ ...userCourses, [field]: value }));
  };


  const handleAnswerSelect = (answerIndex, answerText) => {
    setSelectedAnswerIndex(answerIndex);
    dispatch(addMemberDetail({ ...member, 'fatherOfConfession': answerText }))

    // Optional: Debounce clicks to prevent rapid, accidental question changes
    if (isSelecting) return;
    setIsSelecting(true);

    // Move to the next question after a short delay or handle quiz completion
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        // Move to the next question
        setCurrentQuestionIndex(current => current + 1);
        setSelectedAnswerIndex(null); // Reset selected answer for the next question
      } else {
        // Last question answered, mark quiz as completed
        setQuizCompleted(true);
      }
      setIsSelecting(false); // Reset the selecting state
    }, 500); // Adjust delay as necessary
  };


  const handleChurchNotListed = () => {
    // Batch updates into a single state change for Redux
    const updatedValues = {
      ...userChurchHistory,
      churchNotListed: !userChurchHistory.churchNotListed,
      selectedChurchCode: !userChurchHistory.churchNotListed ? '' : userChurchHistory.selectedChurchCode,
      selectedDioceseCode: !userChurchHistory.churchNotListed ? '' : userChurchHistory.selectedDioceseCode
    };
    dispatch(addUserChurchHistory(updatedValues));

  }

  const handleNotServedInChurch = () => {
    // setNotServedInChurch(!notServedInChurch);
    // Batch updates into a single state change for Redux
    const updatedValues = {
      ...userChurchHistory,
      notServedInChurch: !userChurchHistory.notServedInChurch,
      selectedChurchService: !userChurchHistory.notServedInChurch ? [] : userChurchHistory.selectedChurchService
    };

    dispatch(addUserChurchHistory(updatedValues));
  };

  const handleChurchSubmission = (submitted) => {
    // setIsNewChurchSubmitted(submitted);
    handleInputChange('isNewChurchSubmitted', submitted)

  };


  // =========================================================================================================


  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateChurchParticipation(userChurchHistory);
      dispatch(setStepValidation({ step: 'validChurchParticipation', isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, dispatch]);



  // =========================================================================================================



  return (
    <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 h-auto  md:min-h-500 lg:min-h-[500px]`}>
      {!quizCompleted &&
        <div>
          <AnimatePresence mode='wait'>
            {questions.map((question, index) => (
              index === currentQuestionIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='flex items-center justify-center mb-8'>
                    <h2 className='text-2xl md:text-4xl text-gray-500 dark:text-gray-200 font-bold
                     flex items-center justify-center py-3'>{question.questionText}</h2>
                  </div>
                  <div className='p-2  mb-4 flex items-center justify-center'>
                    {!errors?.fatherOfConfession
                      ? ''
                      : <InputError message={errors?.fatherOfConfession} />
                    }
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 rounded-lg">
                    {question.answers.map((answer, answerIndex) => (
                      <motion.div
                        key={answer.text}
                        className={`relative rounded-lg shadow-lg m-2 ${selectedAnswerIndex === answerIndex ? 'border-4 border-blue-600' : ''}`}
                        onClick={() => handleAnswerSelect(answerIndex, answer.text)}
                        animate={selectedAnswerIndex === answerIndex ? { scale: 0.9 } : {}} // Scale down when selected
                        transition={{ duration: 0.5 }}
                      >
                        <img src={answer.imageUrl} alt={answer.text} className="w-full h-full object-cover rounded-lg" />
                        <p className='text-center  text-gray-600 font-semibold dark:text-gray-200 py-2 text-lg'>{answer.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      }
      {quizCompleted &&

        <div>
          <div className='md:space-x-4  md:flex flex-row'>

            {/*  church service field */}
            <div className='md:w-1/2 gap-3'>
              <motion.div className='flex-1'
                variants={fadeIn('down', 0.2)}
                initial='show'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
              >
                <div className='flex flex-row justify-between items-center'>
                  {!errors?.selectedChurchService
                    ? <InputLabel htmlFor="churchService" value={t("Which field have you served")} />
                    : <InputError message={errors?.selectedChurchService} />
                  }
                  <label className='px-4 flex cursor-pointer text-sm select-none items-center text-gray-500 dark:text-gray-200 underline'>
                    <Checkbox
                      id={'notServedInChurch'}
                      name={'notServedInChurch'}
                      checked={userChurchHistory.notServedInChurch}
                      onChange={handleNotServedInChurch}
                      className='mx-2'
                    />
                    {t("haven't served in Departments yet!")}
                  </label>
                </div>
                <MultiSelect
                  disabled={userChurchHistory.notServedInChurch}
                  id={'churchService'}
                  options={churchServiceOptions}
                  optionsPrefix=""
                  maxSelections={3}
                  selected={userChurchHistory.selectedChurchService} // Pass the selected state
                  setSelected={setSelectedChurchService} // Pass the setSelected function
                  onSelectionChange={(value) => handleInputChange('selectedChurchService', value)}

                />
              </motion.div>

              {/* courses to be selected  */}
              <motion.div className='space-y-2 flex-1 mt-4'
                variants={fadeIn('right', 0.2)}
                initial='show'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
              >
                <InputLabel htmlFor="selectCourses" value="Select Courses you have taken" />
                <div className='border border-gray-500 rounded-lg w-full p-6 bg-gray-200 dark:bg-form-input space-y-5'>
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="orthodoxyTeachingOfSalvation"
                        // label={'ኦርቶዶክሳዊ ትምህርቲ ድሕነት'}
                        label={t('Orthodoxy Teaching Of Salvation')}
                        // onChange={() => setOrthodoxyTeachingOfSalvation(!orthodoxyTeachingOfSalvation)}
                        onChange={() => handleChurchCoursesChange('orthodoxyTeachingOfSalvation', !userCourses.orthodoxyTeachingOfSalvation)}
                        // value={courses.orthodoxyTeachingOfSalvation}
                        checked={userCourses.orthodoxyTeachingOfSalvation}
                        name={'orthodoxyTeachingOfSalvation'}
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="livingWithChrist"
                        // label={'ምስ ክርስቶስ ምንባር'}
                        label={t('Living With Christ')}
                        // onChange={() => setLivingWithChrist(!livingWithChrist)}
                        onChange={() => handleChurchCoursesChange('livingWithChrist', !userCourses.livingWithChrist)}
                        // value={livingWithChrist}
                        checked={userCourses.livingWithChrist}
                        name='livingWithChrist'
                      />
                    </div>
                  </div>
                  {/* second line of data */}
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="introductionToOrthodoxy"
                        // label={'መባእታዊ ትምህርቲ ኦርቶዶክስ'}
                        label={t('Introduction To Orthodoxy')}
                        // onChange={() => setIntroductionToOrthodoxy(!introductionToOrthodoxy)}
                        onChange={() => handleChurchCoursesChange('introductionToOrthodoxy', !userCourses.introductionToOrthodoxy)}

                        // value={data.introductionToOrthodoxy}
                        checked={userCourses.introductionToOrthodoxy}
                        name='introductionToOrthodoxy'
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="sevenSacramentOfChurch"
                        // label={'7ተ ምስጢራት ቤ/ክ'}
                        label={t('Seven Sacrament Of Church')}
                        // onChange={() => setSevenSacramentOfChurh(!sevenSacramentOfChurh)}
                        onChange={() => handleChurchCoursesChange('sevenSacramentOfChurch', !userCourses.sevenSacramentOfChurch)}

                        // value={sevenSacramentOfChurh}
                        checked={userCourses.sevenSacramentOfChurch}
                        name='sevenSacramentOfChurch'
                      />
                    </div>
                  </div>
                  {/* third line of */}
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="comparativeTheology"
                        // label={'ምንጽጻር ትምህርቲ መለኮት'}
                        label={t('Comparative Theology')}
                        // onChange={() => setComparativeTheology(!comparativeTheology)}
                        onChange={() => handleChurchCoursesChange('comparativeTheology', !userCourses.comparativeTheology)}

                        // value={comparativeTheology}
                        checked={userCourses.comparativeTheology}
                        name='comparativeTheology'
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="fiveChurchPillarsOfMystery"
                        // label={'5ተ ኣዕማደ ምስጢራት'}
                        label={t('Five Pillars Of Mystery')}
                        // onChange={() => setFiveChurchPillarsOfMystery(!fiveChurchPillarsOfMystery)}
                        onChange={() => handleChurchCoursesChange('fiveChurchPillarsOfMystery', !userCourses.fiveChurchPillarsOfMystery)}

                        // value={fiveChurchPillarsOfMystery}
                        checked={userCourses.fiveChurchPillarsOfMystery}
                        name='fiveChurchPillarsOfMystery'
                      />
                    </div>
                  </div>
                  {/* forth line of */}
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="historicalBibleStudy"
                        // label={'ታሪኻዊ መጽናዕቲ መጽሓፍ ቅዱስ'}
                        label={t('Historical Bible Study')}
                        // onChange={() => setHistoricalBibleStudy(!historicalBibleStudy)}
                        onChange={() => handleChurchCoursesChange('historicalBibleStudy', !userCourses.historicalBibleStudy)}

                        // value={historicalBibleStudy}
                        checked={userCourses.historicalBibleStudy}
                        name='historicalBibleStudy'
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="universalChurchHistory"
                        // label={'ኣድማሳዊ ታሪኽ ቤ/ክ'}
                        label={t('Universal Church History')}
                        // onChange={() => setUniversalChurchHistory(!universalChurchHistory)}
                        onChange={() => handleChurchCoursesChange('universalChurchHistory', !userCourses.universalChurchHistory)}

                        // value={universalChurchHistory}
                        checked={userCourses.universalChurchHistory}
                        name='universalChurchHistory'
                      />
                    </div>
                  </div>
                  {/* fifth line of */}
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="spiritualQuiteTime"
                        // label={'መንፈሳዊ ናይ ጽምዋ ግዜ'}
                        label={t('Spiritual Quite Time')}
                        // onChange={() => setSpiritualQuiteTime(!spiritualQuiteTime)}
                        onChange={() => handleChurchCoursesChange('spiritualQuiteTime', !userCourses.spiritualQuiteTime)}

                        // value={spiritualQuiteTime}
                        checked={userCourses.spiritualQuiteTime}
                        name='spiritualQuiteTime'
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="repentance"
                        // label={'ንስሓ'}
                        label={t('Repentance')}
                        // onChange={() => setRepentance(!repentance)}
                        onChange={() => handleChurchCoursesChange('repentance', !userCourses.repentance)}

                        // value={repentance}
                        checked={userCourses.repentance}
                        name='repentance'
                      />
                    </div>
                  </div>
                  {/* sixth line of */}
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="churchCanonsAndRites"
                        // label={'ቀኖናን ስርዓትን ቤተክርስቲያን'}
                        label={t('Church Canons & Rites')}
                        // onChange={() => setChurchCanonsAndRites(!churchCanonsAndRites)}
                        onChange={() => handleChurchCoursesChange('churchCanonsAndRites', !userCourses.churchCanonsAndRites)}

                        // value={churchCanonsAndRites}
                        checked={userCourses.churchCanonsAndRites}
                        name='churchCanonsAndRites'
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="spiritualService"
                        // label={'መንፈሳዊ ኣገልግሎት'}
                        label={t('Spiritual Service')}
                        // onChange={() => setSpiritualService(!spiritualService)}
                        onChange={() => handleChurchCoursesChange('spiritualService', !userCourses.spiritualService)}

                        // value={spiritualService}
                        checked={userCourses.spiritualService}
                        name='spiritualService'
                      />
                    </div>
                  </div>
                  {/* sixth line of */}
                  <div className=' flex flex-row'>
                    <div className='w-3/5'>
                      <CheckboxTwo
                        id="introductionToGeez"
                        // label={'መባእታዊ ትምህርቲ ቋንቋ ግእዝ'}
                        label={t('Introduction To Geez')}
                        // onChange={() => setIntroductionToGeez(!introductionToGeez)}
                        onChange={() => handleChurchCoursesChange('introductionToGeez', !userCourses.introductionToGeez)}

                        // value={introductionToGeez}
                        checked={userCourses.introductionToGeez}
                        name='introductionToGeez'
                      />
                    </div>
                    <div className='w-1/2'>
                      <CheckboxTwo
                        id="christianDiscipline"
                        // label={'ክርስቲያናዊ ስነ ምግባር'}
                        label={t('Christian Discipline')}
                        // onChange={() => setChristianDiscipline(!christianDiscipline)}
                        onChange={() => handleChurchCoursesChange('christianDiscipline', !userCourses.christianDiscipline)}

                        // value={christianDiscipline}
                        checked={userCourses.christianDiscipline}
                        name='christianDiscipline'
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>


            <div className='gap-4 space-y-2 md:w-1/2 mt-3 md:mt-0'>
              {/* church selection */}
              <motion.div className='space-y-3'
                variants={fadeIn('down', 0.2)}
                initial='show'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
              >
                <div className='flex-1'>
                  {!errors?.selectedSacraments
                    ? <InputLabel htmlFor="selectedSacraments" value={t("Which Sacraments have you recieved")} />
                    : <InputError message={errors?.selectedSacraments} />
                  }
                  <MultiSelect
                    id={'selectedSacraments'}
                    options={sacramentOptions}
                    // label="Which Sacraments have you recieved"
                    optionsPrefix=""
                    maxSelections={7}
                    selected={userChurchHistory.selectedSacraments}
                    setSelected={setSelectedSacraments}
                    // onSelectionChange={(value) => setSelectedSacraments(value)}
                    onSelectionChange={(value) => handleInputChange('selectedSacraments', value)}

                  />
                </div>

                <div className='flex-1'>
                  <div className='flex flex-row justify-between'>
                    {!errors?.selectedDioceseCode
                      ? <InputLabel htmlFor="selectedDioceseCode" value={t("Select a Diocese")} />
                      : <InputError message={errors?.selectedDioceseCode} />
                    }
                    <label className='px-4 flex cursor-pointer text-sm select-none items-center text-gray-500 dark:text-gray-200 underline'>
                      <Checkbox
                        id={'churchNotListed'}
                        name={'churchNotListed'}
                        checked={userChurchHistory.churchNotListed}
                        onChange={handleChurchNotListed}
                        className='mx-2'
                      />
                      {t('Church Not listed')}
                    </label>

                  </div>
                  <AutoComplete
                    disabled={userChurchHistory.churchNotListed}
                    value={userChurchHistory.selectedDioceseCode}
                    // onChange={(value) => setSelectedDioceseCode(value)}
                    onChange={(value) => handleInputChange('selectedDioceseCode', value)}

                    // label="Select a Diocese"
                    options={dioceseOptions}
                  />
                </div>
                <div className='flex-1'>
                  {!errors?.selectedChurchCode
                    ? <InputLabel htmlFor="selectedChurchCode" value={t("Select a Church")} />
                    : <InputError message={errors?.selectedChurchCode} />
                  }
                  <AutoComplete
                    value={userChurchHistory.selectedChurchCode}
                    // onChange={(value) => setSelectedChurchCode(value)}
                    onChange={(value) => handleInputChange('selectedChurchCode', value)}

                    // label="Select a Church"
                    options={churchOptions}
                    // Disable church selection if no city is selected
                    disabled={userChurchHistory.churchNotListed}
                  />

                </div>

                {/* adding new church */}
                {/* {!churchNotListed && <> */}
                <div>
                  {/* <InputLabel htmlFor="addnewchurch" value="Add New Church" /> */}
                  {!errors?.addYourChurch
                    ? <InputLabel htmlFor="selectedChurchCode" value={t("Add New Church")} />
                    : <InputError message={errors?.addYourChurch} />
                  }
                  <div className={` text-md h-11 transition-all duration-700 ease-in-out ${userChurchHistory.isNewChurchSubmitted && isNewChurchValid ? 'gradientBg3' : 'bg-gray-200 dark:bg-form-input'} rounded-lg flex justify-start gap-4 mt-2`}>
                    <button
                      type="button"
                      disabled={!userChurchHistory.churchNotListed}
                      className='disabled:cursor-not-allowed p-2 px-4 disabled:bg-gray-400 bg-blue-600 h-full rounded-l-lg text-gray-300  hover:bg-blue-700 hover:text-white'
                      onClick={() => setModalOpen(true)}
                    >
                      Add Church
                    </button>

                    {userChurchHistory.isNewChurchSubmitted && isNewChurchValid
                      ? <p className='p-3 md:p-2 text-gray-200'>Church is Successfully added</p>
                      : <p disabled={!userChurchHistory.churchNotListed} className={`${!userChurchHistory.churchNotListed ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} p-3 md:p-2 text-gray-800 dark:text-gray-300`} onClick={userChurchHistory.churchNotListed ? () => setModalOpen(true) : undefined}>Church Doesn't exit in the list?</p>
                    }

                    {
                      userChurchHistory.isNewChurchSubmitted && isNewChurchValid
                        ? <FontAwesomeIcon icon={faCheckCircle} className='text-white p-2 text-2xl' />
                        : ''
                    }

                  </div>
                </div>
                {/* </>} */}

                <div className='flex-1'>
                  {!errors?.priestInEritrea
                    ? <InputLabel htmlFor="priestInEritrea" value={t("Your Priest's full name (in Eritrea)")} />
                    : <InputError message={errors?.priestInEritrea} />
                  }
                  <TextInput

                    id="priestInEritrea"
                    type="text"
                    name="priestInEritrea"
                    value={userChurchHistory.priestInEritrea}
                    className="mt-3 block w-full"
                    autoComplete="priestInEritrea"
                    isFocused={true}
                    // onChange={(e) => setPriestInEritrea(e.target.value)}
                    onChange={(e) => handleInputChange('priestInEritrea', e.target.value)}

                  />
                </div>
              </motion.div>
            </div>

          </div>
          {modalOpen && (
            <AddChurchModal
              onChurchSubmitted={handleChurchSubmission}
              closeModal={() => setModalOpen(false)}
            />
          )}
        </div>

      }

    </div>

  )
}

export default ChurchParticipation
