import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/Forms/TextInput';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { useDispatch, useSelector } from 'react-redux';
import { addMemberDetail } from '@/features/form/memberSlice';
import { validateContactInfo } from '../Validations';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
import AutoComplete from '@/Components/Forms/AutoComplete/AutoComplete';
import { countries } from '@/data/countries';
import { AutoCompleteTwo } from '@/Components/Forms/AutoComplete/AutoCompleteTwo';
import Checkbox from '@/Components/Checkboxes/Checkbox';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  const currentStep = useSelector((store) => store.stepper.value);


  useEffect(() => {
    if (member.sameAsPhoneNumber && member.countryPhoneCode && member.phone) {
      handleInputChange('whatsApp', `${member.countryPhoneCode}${member.phone}`);
    }
  }, [member.sameAsPhoneNumber, member.countryPhoneCode, member.phone]);

  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };


  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numericInput = Number(input);

    if (input.length === 1 && input.startsWith('0')) {
      // setPhone('');
      handleInputChange('phone', '')
    } else if (numericInput < 0) {
      // Disable entry if the number is below zero
      // Though for type="number" fields, direct negative input is unlikely without explicit member action
      // setPhone('');
      handleInputChange('phone', '')

    } else if (input.replace(/^0+/, '').length > 10) {
      // Prevents input longer than 10 digits, not counting leading zeros
      // This approach allows entering numbers that start with zero but are within the length limit after removing them
    } else {
      // setPhone(input);
      handleInputChange('phone', input)

    }

  };

  const handleSameAsPhoneNumber = () => {
    handleInputChange('sameAsPhoneNumber', !member.sameAsPhoneNumber)
  }


  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateContactInfo(member);
      dispatch(setStepValidation({ step: 'validContactInfo', isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, dispatch]);



  return (
    <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`}>
      <h2 className='text-2xl md:text-3xl font-bold py-6 flex items-center justify-center text-gray-500 dark:text-gray-200'>
       {t("We are committed to tightly connect with you")}<span className='hidden md:flex ml-4'><FontAwesomeIcon icon={faMapLocationDot} /></span>
      </h2>
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className='md:flex flex-row gap-6'>
          <div className='flex-1'>
            {!errors?.email
              ? <InputLabel htmlFor="email" value={t("Email")} />
              : <InputError message={errors?.email} />
            }
            <TextInput
              id="email"
              type="email"
              name="email"
              value={member.email}
              className="mt-3 block w-full"
              autoComplete="email"
              isFocused={true}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => handleInputChange('email', e.target.value)}

            />
          </div>
          <div className='flex-1 mt-4 md:mt-0'>
            {!errors?.phone
              ? <InputLabel htmlFor="Phone" value={t("Phone")} />
              : <InputError message={errors?.phone} />
            }
            <div className='flex'>
              <div className='w-3/5 mt-3 '>
                <AutoCompleteTwo
                  options={countries}
                  value={member.countryPhoneCode}
                  // onChange={handleCountryChange}
                  onChange={(value) => handleInputChange('countryPhoneCode', value)}

                // errors={errors?.countryCode} 
                />
              </div>

              <TextInput
                id="phone"
                type="number"
                name="phone"
                value={member.phone}
                className="mt-3 block w-full rounded-l-none"
                autoComplete="phone"
                // isFocused={true}
                onChange={handlePhoneChange}
              />
            </div>

          </div>
        </div>
        <div className='md:flex flex-row gap-6 mt-4'>
          <div className='flex-1'>
            {!errors?.emergencyContactNumber
              ? <InputLabel htmlFor="emergencyContactNumber" value={t("Emergency Contact")} />
              : <InputError message={errors?.emergencyContactNumber} />
            }
            <TextInput
              id="emergencyContactNumber"
              type="tel"
              name="emergencyContactNumber"
              value={member.emergencyContactNumber}
              className="mt-3 block w-full"
              autoComplete="emergencyContactNumber"
              isFocused={true}
              // onChange={(e) => setEmergencyContactNumber(e.target.value)}
              onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}

            />

          </div>
          <div className='flex-1 mt-4 md:mt-0'>
            {!errors?.contactRelation
              ? <InputLabel htmlFor="contactRelation" value={t("Contact Relationship")} />
              : <InputError message={errors?.contactRelation} />
            }
            <TextInput
              id="contactRelation"
              type="text"
              name="contactRelation"
              value={member.contactRelation}
              className="mt-3 block w-full"
              autoComplete="contactRelation"
              isFocused={true}
              // onChange={(e) => setContactRelation(e.target.value)}
              onChange={(e) => handleInputChange('contactRelation', e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex flex-row gap-6 mt-4'>
          <div className='flex-1 mt-3'>
            <div className='flex flex-row justify-between'>
              {!errors?.whatsApp
                ? <InputLabel htmlFor="whatsApp" value={t("WhatsApp")} />
                : <InputError message={errors?.whatsApp} />
              }
              <label className='px-4 flex cursor-pointer text-sm select-none items-center text-gray-600 dark:text-gray-200 underline'>
                <Checkbox
                  id={'sameAsPhoneNumber'}
                  name={'sameAsPhoneNumber'}
                  checked={member.sameAsPhoneNumber}
                  // onChange={handleSameAsPhoneNumber}
                  onChange={handleSameAsPhoneNumber}

                  className='mx-2'
                />
                {t('Same as phone number')}
              </label>
            </div>
            <TextInput
              disabled={member.sameAsPhoneNumber}
              id="whatsApp"
              type="tel" // Changed from "number" to "tel"
              name="whatsApp"
              value={member.whatsApp} // Ensure the value is formatted as a string
              className="mt-3 block w-full disabled:cursor-not-allowed disabled:opacity-50"
              autoComplete="phone"
              // onChange={(e) => setWhatsApp(e.target.value)}
              onChange={(e) => handleInputChange('whatsApp', e.target.value)}

            />
          </div>
          <div className='flex-1 mt-3'>
            <InputLabel htmlFor="postalCode" value={t("P.O.Box")} />

            <TextInput
              id="postalCode"
              type="text" // Changed from "number" to "text"
              name="postalCode"
              value={member.postalCode}
              className="mt-3 block w-full"
              autoComplete="postalCode"
              // isFocused={true} might need special handling, as it's not a standard attribute
              // onChange={(e) => setPostalCode(e.target.value)}
              onChange={(e) => handleInputChange('postalCode', e.target.value)}

              maxLength={10} // Optional: Restrict input length to 10 characters to accommodate most postal code formats
            />
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default ContactInfo
