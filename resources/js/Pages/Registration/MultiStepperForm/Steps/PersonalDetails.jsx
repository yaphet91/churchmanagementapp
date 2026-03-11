import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import Profile from '@/Components/Forms/ImageUpload/Profile';
import RadioGroup from '@/Components/Forms/RadioGroup';
import DatePickerOne from '@/Components/Forms/DatePicker/DatePickerOne';
import AutoComplete from '@/Components/Forms/AutoComplete/AutoComplete';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import 'react-image-crop/dist/ReactCrop.css'
import { addMemberDetail } from '@/features/form/memberSlice';
import { validatePersonalDetails } from '../Validations';
import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
import { getGenderOptions, getTitleOptions } from '@/data/formData';
import BirthdayEntry from '@/Components/Forms/BirthdayEntry';


const PersonalDetails = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const { attemptedToProceed } = useSelector((state) => state.stepper);
  const member = useSelector((state) => state.member.value);
  const userImage = useSelector((state) => state.profileImage.value);
  const errors = useSelector((state) => state.validation.errors);
  const theme = useSelector((store) => store.theme.theme);
  const currentStep = useSelector((store) => store.stepper.value);

  const genderOptions = getGenderOptions(t);
  const titleOptions = getTitleOptions(t);

  useEffect(() => {
    console.log('personal details')
    console.log(attemptedToProceed)
    if (attemptedToProceed) {
      const validationResults = validatePersonalDetails(member, userImage);
      dispatch(setStepValidation({ step: 'validPersonalDetails', isValid: validationResults.isValid, errors: validationResults.stepErrors }));
      dispatch(setValidationErrors(validationResults.stepErrors));
    }
  }, [attemptedToProceed, member, userImage, dispatch]);

  const handleInputChange = (field, value) => {
    dispatch(addMemberDetail({ ...member, [field]: value }));
  };


  return (
    <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`}>
      
      <div
        // variants={fadeIn('center', 0.2)}
        // initial='hidden'
        // whileInView={'show'}
        // viewport={{ once: true, amount: 0.7 }}
      >
        <form action='#' className='space-y-4'>
          <div className='md:flex gap-5'>
            <div className=''>
              {!errors?.imageUrl
                ? <InputLabel htmlFor="profileImage" value={t("Profile Image")} />
                : <InputError message={errors?.imageUrl} className='mb-2 text-red-700' />
              }
              <div className='border-2 border-dashed  dark:border-gray-500 p-2 mt-3 rounded-lg'>
                <Profile
                  id="profileImage"
                />
              </div>

            </div>
            <div className='w-full md:max-w-[250px] mt-6 md:mt-0'>
              {!errors?.gender
                ? <InputLabel htmlFor="gender" value={t("Gender")}/>
                : <InputError message={errors?.gender} className='mb-2 text-red-700'/>
              }
              <RadioGroup
                selectedValue={member.gender}
                // onChange={(e) => setGender(e.target.value)}
                onChange={(e) => handleInputChange('gender', e.target.value)}

                options={genderOptions}
                name='Gender *'
                id='gender'
              />
            </div>

            <div className='space-y-2 items-center justify-center mt-6 md:mt-0'>
              {!errors?.title
                ? <InputLabel htmlFor="title" value={t("Title")}/>
                : <InputError message={errors?.title} className='mb-2 text-red-700' />
              }
              <AutoComplete
                options={titleOptions}
                // label={'Title *'}
                value={member.title}
                // onChange={(value) => setTitle(value)}
                onChange={(value) => handleInputChange('title', value)}

              />

              {/* <div className='w-full mt-6 md:mt-0'>
                {!errors?.birthday
                  ? <InputLabel htmlFor="birthday" value={t("Birthday")} />
                  : <InputError message={errors?.birthday} className='mb-2 text-red-700' />
                }
                <DatePickerOne
                  id="birthday"
                  initialDate={member.birthday}
                  updateFormState={(value) => handleInputChange('birthday', value)}
                  // onChange={(value) => handleInputChange('birthday', value) && console.log(value)}

                />
                <BirthdayEntry 
                  id="birthday"
                  initialDate={member.birthday}
                  // updateFormState={(value) => handleInputChange('birthday', value)}
                  onDateChange={(value) => handleInputChange('birthday', value) && console.log(value)}/>
              </div> */}
              <div className='w-full mt-6 md:mt-0'>
                {!errors?.birthday
                  ? <InputLabel htmlFor="birthday" value={t("Birthday")} />
                  : <InputError message={errors?.birthday} className='mb-2 text-red-700' />
                }

                <BirthdayEntry
                  birthdayValue={member.birthday}
                  onDateChange={(value) => handleInputChange('birthday', value)}
                // onYearErrorChange={handleYearErrorChange} 

                />
              </div>
            </div>
          </div>
          {/* full name in English */}
          <div className='md:flex gap-4'>
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.firstName
                ? <InputLabel htmlFor="firstName" value={t("First Name")}/>
                : <InputError message={errors?.firstName}  />
              }
              <TextInput
                id="firstName"
                type="text"
                name="firstName"
                value={member.firstName || ''}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.fatherName
                ? <InputLabel htmlFor="fatherName" value={t("Father's Name")}/>
                : <InputError message={errors?.fatherName} />
              }
              <TextInput
                id="fatherName"
                type="text"
                name="fatherName"
                value={member.fatherName}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setFatherName(e.target.value)}
                onChange={(e) => handleInputChange('fatherName', e.target.value)}

              />
            </div>
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.grandFatherName
                ? <InputLabel htmlFor="grandFatherName" value={t("Grand FatherName Name")}/>
                : <InputError message={errors?.grandFatherName} />
              }
              <TextInput
                id="grandFatherName"
                type="text"
                name="grandFatherName"
                value={member.grandFatherName}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setGrandFatherName(e.target.value)}
                onChange={(e) => handleInputChange('grandFatherName', e.target.value)}

              />
            </div>
          </div>
            {/* full name in Tigrina */}
          <div className='md:flex gap-4'>
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.firstNameT
                ? <InputLabel htmlFor="firstNameT" value={t("First Name (Tigrina)")}/>
                : <InputError message={errors?.firstNameT} />
              }
              <TextInput
                id="firstNameT"
                type="text"
                name="firstNameT"
                value={member.firstNameT}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setFirstNameT(e.target.value)}
                onChange={(e) => handleInputChange('firstNameT', e.target.value)}

              />

              {/* <InputError message={errors?.firstName}  /> */}
            </div>
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.fatherNameT
                ? <InputLabel htmlFor="fatherNameT" value={t("Father's Name (Tigrina)")}/>
                : <InputError message={errors?.fatherNameT} />
              }
              <TextInput
                id="fatherNameT"
                type="text"
                name="fatherNameT"
                value={member.fatherNameT}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setFatherNameT(e.target.value)}
                onChange={(e) => handleInputChange('fatherNameT', e.target.value)}

              />
            </div>
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.grandFatherNameT
                ? <InputLabel htmlFor="grandFatherNameT" value={t("Grand FatherName Name (Tigrina)")}/>
                : <InputError message={errors?.grandFatherNameT} />
              }
              <TextInput
                id="grandFatherNameT"
                type="text"
                name="grandFatherNameT"
                value={member.grandFatherNameT}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setGrandFatherNameT(e.target.value)}
                onChange={(e) => handleInputChange('grandFatherNameT', e.target.value)}

              />
            </div>
          </div>

          <div className='md:flex gap-4 mt-6 md:mt-0'>
            <div className='flex-1'>
              {!errors?.motherName
                ? <InputLabel htmlFor="motherName" value={t("Mother's Name")}/>
                : <InputError message={errors?.motherName}  />
              }
              <TextInput
                id="motherName"
                type="text"
                name="motherName"
                value={member.motherName}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setMotherName(e.target.value)}
                onChange={(e) => handleInputChange('motherName', e.target.value)}

              />

            </div>
           
            <div className='flex-1 mt-6 md:mt-0'>
              {!errors?.mothersFather
                ? <InputLabel htmlFor="mothersFather" value={t("Grand Father Name (Mother side)")}/>
                : <InputError message={errors?.mothersFather}  />
              }
              <TextInput
                id="mothersFather"
                type="text"
                name="mothersFather"
                value={member.mothersFather}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                // onChange={(e) => setMothersFather(e.target.value)}
                onChange={(e) => handleInputChange('mothersFather', e.target.value)}

              />

            </div>

            
          </div>
          <div className='flex-1 mt-6 md:mt-0'>
            {!errors?.motherFullNameT
              ? <InputLabel htmlFor="motherFullNameT" value={t("Mother full name (Tigrina)")} />
              : <InputError message={errors?.motherFullNameT} />
            }
            <TextInput
              id="motherFullNameT"
              type="text"
              name="motherFullNameT"
              value={member.motherFullNameT}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              // onChange={(e) => setMotherFullNameT(e.target.value)}
              onChange={(e) => handleInputChange('motherFullNameT', e.target.value)}

            />

          </div>

        </form>
      </div>

    </div>
  )
}

export default PersonalDetails
