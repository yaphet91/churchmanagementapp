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
// import { addChildDetail } from '@/features/form/childSlice';
// import { validateChildDetails } from '../Validations';
import validateChildForm from '../validateChildForm';

import { setStepValidation, setValidationErrors } from '@/features/form/validationSlice';
import { getGenderOptions, getTitleOptions } from '@/data/formData';
import BirthdayEntry from '@/Components/Forms/BirthdayEntry';
import { addChildDetails } from '@/features/form/childMemberSlice';


const ChildDetails = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch()
    const child = useSelector((state) => state.child.value);
    const childImage = useSelector((state) => state.profileImage.value);
    const errors = useSelector((state) => state.child.errors);
    const theme = useSelector((store) => store.theme.theme);
    const currentStep = useSelector((store) => store.stepper.value);

    const genderOptions = getGenderOptions(t);
    const titleOptions = getTitleOptions(t);

    useEffect(() => {
        // Use a timeout to ensure all components are rendered before scrolling
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto' // Change to 'auto' if 'smooth' causes issues
            });
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //     console.log('personal details')
    //     console.log(attemptedToProceed)
    //     if (attemptedToProceed) {
    //         const validationResults = validateChildDetails(child, userImage);
    //         dispatch(setStepValidation({ step: 'validChildDetails', isValid: validationResults.isValid, errors: validationResults.stepErrors }));
    //         dispatch(setValidationErrors(validationResults.stepErrors));
    //     }
    // }, [attemptedToProceed, child, userImage, dispatch]);

    const handleInputChange = (field, value) => {
        dispatch(addChildDetails({ ...child, [field]: value }));
    };


    return (
        <section className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`} id='child-details'>
            <div
            // variants={fadeIn('center', 0.2)}
            // initial='hidden'
            // whileInView={'show'}
            // viewport={{ once: true, amount: 0.7 }}
            >
                <h2 className='text-3xl mb-10 font-semibold text-center'>{t("Please Enter Your Child's Details !")}<span></span></h2>
                <div className='flex flex-col md:flex-row justify-between gap-2'>
                    <div className='md:flex md:flex-col gap-5 md:w-[30%]'>
                        <div className=''>
                            {!errors?.imageUrl
                                ? <InputLabel htmlFor="profileImage" value={t("Profile Image")} />
                                : <InputError message={errors?.imageUrl} className='mb-2 text-red-700' />
                            }
                            <div className='border-2 border-dashed flex items-center justify-start dark:border-gray-500 p-2 mt-3 rounded-lg'>
                                <Profile isChild={true} 
                                    id="profileImage"
                                />
                            </div>

                        </div>
                        <div className='w-full mt-6 md:mt-0'>
                            {!errors?.gender
                                ? <InputLabel htmlFor="gender" value={t("Gender")} />
                                : <InputError message={errors?.gender} className='mb-2 text-red-700' />
                            }
                            <RadioGroup
                                selectedValue={child.gender}
                                // onChange={(e) => setGender(e.target.value)}
                                onChange={(e) => handleInputChange('gender', e.target.value)}

                                options={genderOptions}
                                name='Gender *'
                                id='gender'
                            />
                        </div>
                        <div className='w-full mt-6 md:mt-0'>
                            {!errors?.birthday
                                ? <InputLabel htmlFor="birthday" value={t("Birthday")} />
                                : <InputError message={errors?.birthday} className='mb-2 text-red-700' />
                            }

                            <BirthdayEntry
                                birthdayValue={child.birthday}
                                onDateChange={(value) => handleInputChange('birthday', value)}
                                // onYearErrorChange={handleYearErrorChange} 

                            />
                        </div>
                    </div>

                    <div className='md:w-[65%] space-y-7'>
                        {/* full name in English */}
                        <div className='md:flex gap-4'>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.firstName
                                    ? <InputLabel htmlFor="firstName" value={t("First Name")} />
                                    : <InputError message={errors?.firstName} />
                                }
                                <TextInput
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={child.firstName || ''}
                                    className="mt-3 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.fatherName
                                    ? <InputLabel htmlFor="fatherName" value={t("Father's Name")} />
                                    : <InputError message={errors?.fatherName} />
                                }
                                <TextInput
                                    id="fatherName"
                                    type="text"
                                    name="fatherName"
                                    value={child.fatherName}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setFatherName(e.target.value)}
                                    onChange={(e) => handleInputChange('fatherName', e.target.value)}

                                />
                            </div>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.grandFatherName
                                    ? <InputLabel htmlFor="grandFatherName" value={t("Grand FatherName Name")} />
                                    : <InputError message={errors?.grandFatherName} />
                                }
                                <TextInput
                                    id="grandFatherName"
                                    type="text"
                                    name="grandFatherName"
                                    value={child.grandFatherName}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setGrandFatherName(e.target.value)}
                                    onChange={(e) => handleInputChange('grandFatherName', e.target.value)}

                                />
                            </div>
                        </div>

                        <div className='md:flex gap-4 mt-6 md:mt-0'>
                            <div className='flex-1'>
                                {!errors?.motherName
                                    ? <InputLabel htmlFor="motherName" value={t("Mother's Name")} />
                                    : <InputError message={errors?.motherName} />
                                }
                                <TextInput
                                    id="motherName"
                                    type="text"
                                    name="motherName"
                                    value={child.motherName}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setMotherName(e.target.value)}
                                    onChange={(e) => handleInputChange('motherName', e.target.value)}

                                />

                            </div>

                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.mothersFather
                                    ? <InputLabel htmlFor="mothersFather" value={t("Grand Father Name (Mother side)")} />
                                    : <InputError message={errors?.mothersFather} />
                                }
                                <TextInput
                                    id="mothersFather"
                                    type="text"
                                    name="mothersFather"
                                    value={child.mothersFather}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setMothersFather(e.target.value)}
                                    onChange={(e) => handleInputChange('mothersFather', e.target.value)}

                                />

                            </div>

                        </div>
                        {/* full name in Tigrina */}

                        
                        <div className='md:flex gap-4'>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.firstNameT
                                    ? <InputLabel htmlFor="firstNameT" value={t("First Name (Tigrina)")} />
                                    : <InputError message={errors?.firstNameT} />
                                }
                                <TextInput
                                    id="firstNameT"
                                    type="text"
                                    name="firstNameT"
                                    value={child.firstNameT}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setFirstNameT(e.target.value)}
                                    onChange={(e) => handleInputChange('firstNameT', e.target.value)}

                                />

                                {/* <InputError message={errors?.firstName}  /> */}
                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.fatherNameT
                                    ? <InputLabel htmlFor="fatherNameT" value={t("Father's Name (Tigrina)")} />
                                    : <InputError message={errors?.fatherNameT} />
                                }
                                <TextInput
                                    id="fatherNameT"
                                    type="text"
                                    name="fatherNameT"
                                    value={child.fatherNameT}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setFatherNameT(e.target.value)}
                                    onChange={(e) => handleInputChange('fatherNameT', e.target.value)}

                                />
                            </div>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.grandFatherNameT
                                    ? <InputLabel htmlFor="grandFatherNameT" value={t("Grand FatherName Name (Tigrina)")} />
                                    : <InputError message={errors?.grandFatherNameT} />
                                }
                                <TextInput
                                    id="grandFatherNameT"
                                    type="text"
                                    name="grandFatherNameT"
                                    value={child.grandFatherNameT}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setGrandFatherNameT(e.target.value)}
                                    onChange={(e) => handleInputChange('grandFatherNameT', e.target.value)}

                                />
                            </div>
                        </div>

                       
                        <div className='md:flex gap-4 mt-6 md:mt-0'>
                            <div className='flex-1 mt-6 md:mt-0'>
                                {!errors?.motherFullNameT
                                    ? <InputLabel htmlFor="motherFullNameT" value={t("Mother full name (Tigrina)")} />
                                    : <InputError message={errors?.motherFullNameT} />
                                }
                                <TextInput
                                    id="motherFullNameT"
                                    type="text"
                                    name="motherFullNameT"
                                    value={child.motherFullNameT}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) => setMotherFullNameT(e.target.value)}
                                    onChange={(e) => handleInputChange('motherFullNameT', e.target.value)}

                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ChildDetails
