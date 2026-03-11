import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/Forms/TextInput';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import { Head, Link, useForm } from '@inertiajs/react';
import AutoComplete from '@/Components/Forms/AutoComplete/AutoComplete';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
// import { addChildDetail } from '@/features/form/childSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
// import { validateChildAdditionalInfo } from '../Validations';
import { useTranslation } from 'react-i18next';
import { getYesOrNo, getEducationLevels, getSchoolLevels, getMaritalStatusOptions } from '@/data/formData';
import { addChildDetails } from '@/features/form/childMemberSlice';


const ChildAdditionalInfo = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const child = useSelector((state) => state.child.value);
  const errors = useSelector((state) => state.child.errors);
  const theme = useSelector((store) => store.theme.theme);

  const educationLevels = getEducationLevels();
  const schoolLevels = getSchoolLevels();
  const maritalStatusOptions = getMaritalStatusOptions();


  const handleInputChange = (field, value) => {
    dispatch(addChildDetails({ ...child, [field]: value }));
  };


  return (
    <section className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[300px]`} id='child-additional-info'>
      <h2 className='text-2xl md:text-3xl font-bold py-3 flex items-center justify-center text-gray-200'>
        {t("Additional Details !")} <span className='ml-4'><FontAwesomeIcon icon={faPerson} /></span>
      </h2>

      <motion.div className='space-y-3'
        // variants={fadeIn('center', 0.2)}
        // initial='hidden'
        // whileInView={'show'}
        // viewport={{ once: true, amount: 0.7 }}
      >
     

        <div className='md:flex flex-row md:space-x-6'>

          <div className='flex-1'>
            {!errors?.firstLanguage
              ? <InputLabel htmlFor="firstLanguage" value={t("First Language")} />
              : <InputError message={errors?.firstLanguage} />
            }
            <TextInput
              id="firstLanguage"
              type="text"
              name="firstLanguage"
              value={child.firstLanguage}
              className="mt-3 block w-full"
              autoComplete="firstLanguage"
              isFocused={true}
              // onChange={(e) => setFirstLanguage(e.target.value)}
              onChange={(e) => handleInputChange('firstLanguage', e.target.value)}

            />
            {/* <InputError message={errors} className="mt-2")} /> */}
          </div>

          <div className='flex-1 mt-4 md:mt-0'>
            {!errors?.secondLanguage
              ? <InputLabel htmlFor="secondLanguage" value={t("Second Language")} />
              : <InputError message={errors?.secondLanguage} />
            }
            <TextInput
              id="secondLanguage"
              type="text"
              name="secondLanguage"
              value={child.secondLanguage}
              className="mt-3 block w-full"
              autoComplete="secondLanguage"
              isFocused={true}
              // onChange={(e) => setSecondLanguage(e.target.value)}
              onChange={(e) => handleInputChange('secondLanguage', e.target.value)}

            />
            {/* <InputError message={errors} className="mt-2")} /> */}
          </div>

        </div>

        <div className='md:flex flex-row md:space-x-6'>

          <div className='flex-1'>
            {!errors?.hobbies
              ? <InputLabel htmlFor="hobbies" value={t("Hobbies")} />
              : <InputError message={errors?.hobbies} />
            }
            <TextInput
              id="hobbies"
              type="text"
              name="hobbies"
              value={child.hobbies}
              className="mt-3 block w-full"
              autoComplete="hobbies"
              isFocused={true}
              // onChange={(e) => setHobbies(e.target.value)}
              onChange={(e) => handleInputChange('hobbies', e.target.value)}

            />
            {/* <InputError message={errors} className="mt-2")} /> */}
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            {!errors?.levelOfEducation
              ? <InputLabel htmlFor="levelOfEducation" value={t('Level of Education')} />
              : <InputError message={errors?.levelOfEducation} />
            }
            <AutoComplete
              value={child.levelOfEducation}
              // onChange={(value) => setLevelOfEducation(value)}
              onChange={(value) => handleInputChange('levelOfEducation', value)}
              // label={t('Level of Education')}
              options={schoolLevels}
            />
          </div>

        </div>



      </motion.div>
    </section>
  )
}

export default ChildAdditionalInfo
