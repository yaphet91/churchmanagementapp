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
// import { addChild } from '@/features/form/childSlice';
import AddChurchModal from '@/Components/Modals/AddChurchModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faChurch } from '@fortawesome/free-solid-svg-icons';
// import { validateChildChurchParticipation } from '../Validations';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
// import { addChild } from '@/features/form/childSlice';
import InputError from '@/Components/Forms/InputError';
import Checkbox from '@/Components/Checkboxes/Checkbox';
import { useTranslation } from 'react-i18next';
import { addMemberDetail } from '@/features/form/memberSlice';
import { addChildDetails } from '@/features/form/childMemberSlice';


const churchServiceOptions = [
  // { value: ' - ', text: ' - ', selected: false },
  { value: 'መዝሙር', text: 'ክፍሊ መዝሙር', selected: false },
  { value: 'ስነ ጥበብ', text: 'ክፍሊ ስነ ጥበብ', selected: false },
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
export const churchesData = [
  {
    diocese: 'Asmara',
    churches: [
      { id: 'A01', name: 'St. Mary Cathedral' },
      { id: 'A02', name: 'st. Gebriel Akria' },
      { id: 'A03', name: 'st. Geiorgis Alfermayo' },
    ]
  },
  {
    diocese: 'United Arab Emirates',
    churches: [
      { id: 'D01', name: 'Holy Trinity Church Dubai' },
      { id: 'D01', name: 'Kidane Mehret Abu Dhabi' },
    ]
  }
];


const ChildChurchParticipation = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const child = useSelector((state) => state.child.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);


  const [modalOpen, setModalOpen] = useState(false);

  const [selectedChurchService, setSelectedChurchService] = useState(churchServiceOptions.filter(option => option.selectedChurchService).map(option => option.value));
  const [selectedSacraments, setSelectedSacraments] = useState(sacramentOptions.filter(option => option.selectedSacraments).map(option => option.value));


  // Church courses


  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };


  // =========================================================================================================


  return (
    <section className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 h-auto  md:min-h-500 lg:min-h-[500px]`} id='child-church-participation'>
      <h2 className='text-2xl md:text-3xl font-bold mb-10 flex items-center justify-center text-gray-200'>
        {t("Church participation Information")}<span className='hidden md:flex ml-4'><FontAwesomeIcon icon={faChurch} /></span>
      </h2>
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
                  ? <InputLabel htmlFor="churchService" value={t("Which field do you want to served in")} />
                  : <InputError message={errors?.selectedChurchService} />
                }
          
              </div>
              <MultiSelect
                disabled={child.notServedInChurch}
                id={'churchService'}
                options={churchServiceOptions}
                optionsPrefix=""
                maxSelections={3}
                selected={child.selectedChurchService} // Pass the selected state
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
                {/* first line of data */}
                <div className=' flex flex-row'>
                  <div className='min-w-full'>
                    <CheckboxTwo
                      id="level1SundaySchool"
                      // label={'ኦርቶዶክሳዊ ትምህርቲ ድሕነት'}
                      label={t('Level 1 Sunday School')}
                      // onChange={() => setLevel1SundaySchool(!level1SundaySchool)}
                      onChange={() => handleInputChange('level1SundaySchool', !child.level1SundaySchool)}
                      // value={courses.level1SundaySchool}
                      checked={child.level1SundaySchool}
                      name={'level1SundaySchool'}
                    />
                  </div>
               
                </div>
                {/* second line of data */}
                <div className=' flex flex-row'>
                  <div className='w-full'>
                    <CheckboxTwo
                      id="level2SundaySchool"
                      // label={'መባእታዊ ትምህርቲ ኦርቶዶክስ'}
                      label={t('Level 2 Sunday School')}
                      // onChange={() => setLevel2SundaySchool(!level2SundaySchool)}
                      onChange={() => handleInputChange('level2SundaySchool', !child.level2SundaySchool)}

                      // value={data.level2SundaySchool}
                      checked={child.level2SundaySchool}
                      name='level2SundaySchool'
                    />
                  </div>
                 
                </div>
                {/* third line of */}
                <div className=' flex flex-row'>
                  <div className='w-full'>
                    <CheckboxTwo
                      id="level3SundaySchool"
                      // label={'ምንጽጻር ትምህርቲ መለኮት'}
                      label={t('Level 3 Sunday School')}
                      // onChange={() => setLevel3SundaySchool(!level3SundaySchool)}
                      onChange={() => handleInputChange('level3SundaySchool', !child.level3SundaySchool)}

                      // value={level3SundaySchool}
                      checked={child.level3SundaySchool}
                      name='level3SundaySchool'
                    />
                  </div>
                </div>
                {/* forth line of */}
                <div className=' flex flex-row'>
                  <div className='w-full'>
                    <CheckboxTwo
                      id="level4SundaySchool"
                      // label={'ታሪኻዊ መጽናዕቲ መጽሓፍ ቅዱስ'}
                      label={t('Level 4 Sunday School')}
                      // onChange={() => setLevel4SundaySchool(!level4SundaySchool)}
                      onChange={() => handleInputChange('level4SundaySchool', !child.level4SundaySchool)}

                      // value={level4SundaySchool}
                      checked={child.level4SundaySchool}
                      name='level4SundaySchool'
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
                  selected={child.selectedSacraments}
                  setSelected={setSelectedSacraments}
                  // onSelectionChange={(value) => setSelectedSacraments(value)}
                  onSelectionChange={(value) => handleInputChange('selectedSacraments', value)}

                />
              </div>      

              <div className='flex-1'>
                {!errors?.fatherOfConfession
                  ? <InputLabel htmlFor="fatherOfConfession" value={t("Child's priest (if different from parents')")} />
                  : <InputError message={errors?.fatherOfConfession} />
                }
                <TextInput

                  id="fatherOfConfession"
                  type="text"
                  name="fatherOfConfession"
                  value={child.fatherOfConfession}
                  className="mt-3 block w-full"
                  autoComplete="fatherOfConfession"
                  isFocused={true}
                  // onChange={(e) => setFatherOfConfession(e.target.value)}
                  onChange={(e) => handleInputChange('fatherOfConfession', e.target.value)}

                />
              </div>
            </motion.div>
          </div>

        </div>
       
      </div>
    </section>

  )
}

export default ChildChurchParticipation
