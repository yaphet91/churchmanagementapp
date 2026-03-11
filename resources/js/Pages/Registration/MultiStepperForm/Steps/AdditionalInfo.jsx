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
import { addMemberDetail } from '@/features/form/memberSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
import { validateAdditionalInfo } from '../Validations';
import { useTranslation } from 'react-i18next';
import { getYesOrNo, getEducationLevels, getMaritalStatusOptions } from '@/data/formData';


const AdditionalInfo = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  const currentStep = useSelector((store) => store.stepper.value);

  const yesOrNo = getYesOrNo();
  const educationLevels = getEducationLevels();
  const maritalStatusOptions = getMaritalStatusOptions();

  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateAdditionalInfo(member);
      dispatch(setStepValidation({ step: 'validAdditionalInfo', isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, dispatch]);

  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };
  
  const handleHaveChildren = (value) => {
    const updatedMemberDetails = { ...member, 'haveChildren': value };

    if (value === 'No') {
      updatedMemberDetails['childrenNumber'] = '0';
    }

    dispatch(addMemberDetail(updatedMemberDetails));
  }


  return (
    <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`}>
      <h2 className='text-2xl md:text-3xl font-bold py-3 flex items-center justify-center text-gray-500 dark:text-gray-200'>
       {t(" Tell us More about you! we are exited")} <span className='ml-4'><FontAwesomeIcon icon={faPerson} /></span>
      </h2>

      <motion.div className='space-y-3'
        variants={fadeIn('center', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
     
        <div className="w-0.45">
          {!errors?.maritalStatus
            ? <InputLabel htmlFor="maritalStatus" value={t("Marital Status")} />
            : <InputError message={errors?.maritalStatus} />
          }
          <AutoComplete
            value={member.maritalStatus}
            // onChange={(value) => setMaritialStatus(value)}
            onChange={(value) => handleInputChange('maritalStatus', value)}

            // label={'Maritial Status'}
            options={maritalStatusOptions}
          />
        </div>

        <div className='md:flex flex-row md:space-x-6'>
          <div className="flex-1">
            {!errors?.haveChildren
              ? <InputLabel htmlFor="haveChildren" value={t("Do You have children")} />
              : <InputError message={errors?.haveChildren} />
            }
            <AutoComplete
              value={member.haveChildren}
              // onChange={(value) => setHaveChildren(value)}
              onChange={handleHaveChildren}
              // label={'Do You have children'}
              options={yesOrNo}
            />
          </div>
          {member.haveChildren == "Yes" &&
            <div className='flex-1 mt-4 md:mt-0'>
              {!errors?.childrenNumber
                ? <InputLabel htmlFor="childrenNumber" value={t("Number of children")} />
                : <InputError message={errors?.childrenNumber} />
              }
              <TextInput
                id="childrenNumber"
                type="number"
                name="childrenNumber"
                value={member.childrenNumber}
                className="mt-3 block w-full"
                autoComplete="childrenNumber"
                isFocused={true}
                // onChange={(e) => setChildrenNumber(e.target.value)}
                onChange={(e) => handleInputChange('childrenNumber', e.target.value)}

              />
            </div>
          }
        </div>

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
              value={member.firstLanguage}
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
              value={member.secondLanguage}
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
            {!errors?.profession
              ? <InputLabel htmlFor="profession" value={t("Profession")} />
              : <InputError message={errors?.profession} />
            }
            <TextInput
              id="profession"
              type="text"
              name="profession"
              value={member.profession}
              className="mt-3 block w-full"
              autoComplete="profession"
              isFocused={true}
              // onChange={(e) => setProfession(e.target.value)}
              onChange={(e) => handleInputChange('profession', e.target.value)}

            />
            {/* <InputError message={errors} className="mt-2")} /> */}
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            {!errors?.levelOfEducation
              ? <InputLabel htmlFor="levelOfEducation" value={t('Level of Education')} />
              : <InputError message={errors?.levelOfEducation} />
            }
            <AutoComplete
              value={member.levelOfEducation}
              // onChange={(value) => setLevelOfEducation(value)}
              onChange={(value) => handleInputChange('levelOfEducation', value)}
              // label={t('Level of Education')}
              options={educationLevels}
            />
          </div>

        </div>



      </motion.div>
    </div>
  )
}

export default AdditionalInfo
