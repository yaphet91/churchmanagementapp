import React, { useState, useEffect } from 'react'
import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import TextInput from '@/Components/Forms/TextInput';
import InputLabel from '@/Components/Forms/InputLabel';
import InputError from '@/Components/Forms/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { useDispatch, useSelector } from 'react-redux';
import { validateIdentification } from '../Validations';
import { addMemberDetail } from '@/features/form/memberSlice';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
import { useTranslation } from 'react-i18next';
import { countries } from '@/data/countries';

const nationalityOptions = ['Eritrea', 'Ethiopea', 'Other'];


const Identification = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  const currentStep = useSelector((store) => store.stepper.value);



  useEffect(() => {
    if (attemptedToProceed) {
      const validationResults = validateIdentification(member);
      dispatch(setStepValidation({ step: 'validIdentification', isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, dispatch]);

  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };


  return (
    <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`}>
      <h2 className='text-2xl md:text-3xl font-bold py-6 flex items-center justify-center dark:text-gray-200 text-gray-500'>
        {t('Tell us About your whereabouts')}<span className='ml-4 hidden md:flex'><FontAwesomeIcon icon={faMapLocationDot} /></span>
      </h2>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >

        <form action='#' className="space-y-6 mt-2">
          <div className='md:flex flex-row  md:space-x-6'>
            <div className="md:space-y-3 md:w-1/2">
              <Listbox value={member.nationality} onChange={(value) => handleInputChange('nationality', value)}>
                {({ open }) => (
                  <>
                    {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Nationality *</Listbox.Label> */}
                    {!errors?.nationality
                      ? <InputLabel htmlFor="nationality" value={t("Nationality")} />
                      : <InputError message={errors?.nationality} />
                    }
                    <div className="relative">
                      <Listbox.Button className={`relative w-full h-11 cursor-default rounded-lg bg-white dark:bg-form-input py-2 pl-3 
                  pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                   focus:border-indigo-500 dark:border-gray-600 border-gray-400
                   border`}>
                        {member.nationality}
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md
                       bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {nationalityOptions.map((option, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-default hover:bg-gray-300 select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                              }`
                            }
                            value={option}
                          >
                            {({ selected }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option}</span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className='flex-1 mt-4 md:mt-0'>
              {!errors?.placeOfBirth
                ? <InputLabel htmlFor="placeOfBirth" value={t("Place Of Birth")} />
                : <InputError message={errors?.placeOfBirth} />
              }
              <TextInput
                id="placeOfBirth"
                type="text"
                name="placeOfBirth"
                value={member.placeOfBirth}
                className="mt-3 block w-full"
                autoComplete="placeOfBirth"
                isFocused={true}
                // onChange={(e) => setPlaceOfBirth(e.target.value)}
                onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}

              />

            </div>

            {/* Similar setup for addressCountry with Listbox */}

          </div>
          
          {/* <div className='flex-1 mt-4 md:mt-0'>
            {!errors?.city
              ? <InputLabel htmlFor="specifyNationality" value={t("Please specify Nationality")} />
              : <InputError message={errors?.specifyNationality} />
            }
            <TextInput
              id="specifyNationality"
              type="text"
              name="specifyNationality"
              value={member.specifyNationality}
              className="mt-1 block w-full"
              autoComplete="name"
              isFocused={true}
              // onChange={(e) => setCity(e.target.value)}
              onChange={(e) => handleInputChange('specifyNationality', e.target.value)}
            />
          </div> */}

          <div className='md:flex flex-row md:space-x-6'>
            <div className="md:w-1/2">
              <Listbox value={member.addressCountry.label} onChange={(value) => handleInputChange('addressCountry', value.label)}>
                {({ open }) => (
                  <>
                    {!errors?.addressCountry
                      ? <InputLabel htmlFor="addressCountry" value={t("Country of Address")} />
                      : <InputError message={errors?.addressCountry} />
                    }
                    {/* <Listbox.Label className="block text-sm font-medium text-gray-700 mb-3">Country of Address *</Listbox.Label> */}
                    <div className="mt-1 relative">
                      <Listbox.Button className={`relative h-11 w-full cursor-default rounded-lg bg-white dark:bg-form-input py-2 pl-3 
                  pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                   focus:border-indigo-500 border-gray-400 dark:border-gray-600
                   border`}>
                        <span className="block truncate">{member.addressCountry}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {countries.map((country, countryIdx) => (
                          <Listbox.Option
                            key={countryIdx}
                            className={({ active }) => `${active ? 'text-white bg-indigo-600' : 'text-gray-900'} cursor-default select-none relative py-2 pl-3 pr-9`}
                            value={country}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt="" className="w-8 h-5 flex-shrink-0 mr-2" />
                                  <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                    {country.label}
                                  </span>
                                </div>
                                {selected ? (
                                  <span className={`${active ? 'text-white' : 'text-indigo-600'} absolute inset-y-0 right-0 flex items-center pr-4`}>
                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className='flex-1 md:w-1/2 mt-4 md:mt-0'>
              {!errors?.currentAddress
                ? <InputLabel htmlFor="currentAddress" value={t("Current Address")} />
                : <InputError message={errors?.currentAddress} />
              }
              <TextInput
                id="currentAddress"
                type="text"
                name="currentAddress"
                value={member.currentAddress}
                className="mt-1 block w-full"
                autoComplete="address-level1"
                isFocused={true}
                // onChange={(e) => setCurrentAddress(e.target.value)}
                onChange={(e) => handleInputChange('currentAddress', e.target.value)}
              />
            </div>
          </div>

          <div className='md:flex flex-row md:space-x-6'>
            <div className='md:w-1/2'>
              {!errors?.province
                ? <InputLabel htmlFor="province" value={t("Province")} />
                : <InputError message={errors?.province} />
              }
              <TextInput
                id="province"
                type="text"
                name="province"
                value={member.province}
                className="mt-1 block w-full"
                autoComplete="address-level1"
                isFocused={true}
                // onChange={(e) => setProvince(e.target.value)}
                onChange={(e) => handleInputChange('province', e.target.value)}
              />
            </div>
            <div className='flex-1 md:w-1/2 mt-4 md:mt-0'>
              {!errors?.city
                ? <InputLabel htmlFor="city" value={t("City")} />
                : <InputError message={errors?.city} />
              }
              <TextInput
                id="city"
                type="text"
                name="city"
                value={member.city}
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
                // onChange={(e) => setCity(e.target.value)}
                onChange={(e) => handleInputChange('city', e.target.value)}
              />
            </div>

          </div>

        </form>
      </motion.div>

    </div>
  )
}

export default Identification
