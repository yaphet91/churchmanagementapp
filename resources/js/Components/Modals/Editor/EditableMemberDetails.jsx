import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, QrCode } from 'lucide-react';
import TextInput3 from '@/Components/Forms/TextInput3';
const EditableMemberDetails = ({ data, onSave }) => {
    const [formData, setFormData] = useState(data);

    function getAge(birthday) {
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        onSave(formData); // Call the onSave function passed as a prop
    };

    return (
        <form onSubmit={handleSubmit} className='overflow-hidden scroll-auto pb-10 bg-gray-200 dark:bg-inherit   p-3'>
            <div className='flex items-start justify-start gap-1 '>
                {/* Profile and names */}
                <div className='rounded-sm border flex flex-col w-1/4 py-5 items-center justify-center mt-3 '>
                    <img src={formData.imageUrl} alt='avatar' className='w-[180px] h-[200px] rounded-sm' />
                    <div className='flex items-center justify-center gap-2 mt-3'>
                        <div title='message' className='border border-green-700 hover:bg-green-400 rounded-full p-2 bg-inherit'>
                            <MessageSquare size={18} strokeWidth={1} />
                        </div>
                        <div title='call' className='border border-green-700 hover:bg-green-400 rounded-full p-2  bg-inherit'>
                            <Phone size={18} strokeWidth={1} />
                        </div>
                        <div title='email' className='border border-green-700 hover:bg-green-400 rounded-full p-2  bg-inherit'>
                            <Mail size={18} strokeWidth={1} />
                        </div>
                        <div title='QR code' className='border border-green-700 hover:bg-green-400 rounded-full p-2  bg-inherit'>
                            <QrCode size={18} strokeWidth={1} />
                        </div>
                    </div>
                </div>

                {/* Birthday and gender */}
                <div className='rounded-sm mt-3 h-[287px] w-3/4'>

                    <div className='flex items-center justify-start space-x-10 px-5 py-3'>
                        <div className='flex flex-col items-start justify-start'>
                            <div className='flex flex-row -space-x-20 ml-5'>
                                <InfoCell name={'Title'} content={<TextInput3 type='text' name='title' value={formData.title} onChange={handleChange} className='text-md ' />} />
                                <InfoCell name={'Name'} content={<TextInput3 type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='text-md ' />} />
                                <InfoCell name={'Marital Status'} content={<TextInput3 type='text' name='maritalStatus' value={formData.maritalStatus} onChange={handleChange} className='text-md ' />} />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-start px-5 pb-6'>
                        <div className='flex flex-col items-start justify-start -ml-16'>
                            <div className='flex flex-row -space-x-14 py-6'>
                                <InfoCell name={'Father Name'} content={<TextInput3 type='text' name='fatherName' value={formData.fatherName} onChange={handleChange} className='text-md ' />} />
                                <InfoCell name={'Grand Father Name'} content={<TextInput3 type='text' name='grandFatherName' value={formData.grandFatherName} onChange={handleChange} className='text-md ' />} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start -ml-16'>
                            <div className='flex flex-row -space-x-14'>
                                <InfoCell name={'Mother Name'} content={<TextInput3 type='text' name='motherName' value={formData.motherName} onChange={handleChange} className='text-md ' />} />
                                <InfoCell name={'Mothers Father Name'} content={<TextInput3 type='text' name='mothersFather' value={formData.mothersFather} onChange={handleChange} className='text-md ' />} />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-start space-x-24 px-5 pt-16'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='font-semibold text-sm uppercase text-gray-900 dark:text-gray-500'>Birth Date</h2>
                            <TextInput3 type='date' name='birthday' value={formData.birthday} onChange={handleChange} className='text-md ' />
                            <h2 className='text-md text-gray-600 dark:text-white'>( {getAge(formData.birthday)} Years Old )</h2>
                        </div>
                        <InfoCell name={'Gender'} content={<TextInput3 type='text' name='gender' value={formData.gender} onChange={handleChange} />} />
                        <InfoCell name={'Place of Birth'} content={<TextInput3 type='text' name='placeOfBirth' value={formData.placeOfBirth} onChange={handleChange} />} />
                    </div>
                </div>
            </div>
            <div className='flex items-start justify-start mt-11 gap-1'>
                <div className='px-5 py-3'>
                    <InfoCell name={'Father Of Confession'} content={<TextInput3 type='text' name='fatherOfConfession' value={formData.fatherOfConfession} onChange={handleChange} />} />
                </div>
            </div>

            <div className='flex flex-col items-start justify-start mt-12'>
                <div className='flex px-5 -space-x-16'>
                    <InfoCell name={'Email'} content={<TextInput3 type='text' name='email' value={formData.email} onChange={handleChange} />} />
                    <InfoCell name={'Phone'} content={<TextInput3 type='text' name='phone' value={formData.phone} onChange={handleChange} />} />
                    <InfoCell name={'Whatsapp'} content={<TextInput3 type='text' name='whatsApp' value={formData.whatsApp} onChange={handleChange} />} />
                    <InfoCell name={'Emergency Contact'} content={<TextInput3 type='text' name='emergencyContactNumber' value={formData.emergencyContactNumber} onChange={handleChange} />} />

                </div>
                <div className='px-5 py-8 flex space-x-3 '>
                    <InfoCell name={'Postal Code'} content={<TextInput3 type='text' name='postalCode' value={formData.postalCode} onChange={handleChange} />} />
                </div>
            </div>

            <div className='flex items-start justify-start mt-12 gap-1'>
                <div className='px-5 py-3 flex -space-x-16'>
                    <InfoCell name={'Nationality'} content={<TextInput3 type='text' name='nationality' value={formData.nationality} onChange={handleChange} />} />  
                    <InfoCell name={'Address Country'} content={<TextInput3 type='text' name='addressCountry' value={formData.addressCountry} onChange={handleChange} />} />
                    <InfoCell name={'Province'} content={<TextInput3 type='text' name='province' value={formData.province} onChange={handleChange} />} />
                    <InfoCell name={'Current Address'} content={<TextInput3 type='text' name='currentAddress' value={formData.currentAddress} onChange={handleChange} />} />
                </div>
            </div>
            
            <div className='flex items-start justify-start mt-12 gap-1'>
                <div className='px-5 py-3 flex -space-x-16'>
                    <InfoCell name={'Profession'} content={<TextInput3 type='text' name='profession' value={formData.profession} onChange={handleChange} />} />
                    <InfoCell name={'Level Of Education'} content={<TextInput3 type='text' name='levelOfEducation' value={formData.levelOfEducation} onChange={handleChange} />} />
                    <InfoCell name={'First Language'} content={<TextInput3 type='text' name='firstLanguage' value={formData.firstLanguage} onChange={handleChange} />} />
                    <InfoCell name={'Second Language'} content={<TextInput3 type='text' name='secondLanguage' value={formData.secondLanguage} onChange={handleChange} />} />
                </div>
            </div>

            {/* <div className='flex items-start justify-start mt-12 gap-1'>
                <div className='px-5 py-3'>
                    <InfoCell name={'Church'} content={<TextInput3 type='text' name='church' value={formData.church} onChange={handleChange} />} />
                    <InfoCell name={'Diocese'} content={<TextInput3 type='text' name='diocese' value={formData.diocese} onChange={handleChange} />} />
                    <InfoCell name={'Priest In Eritrea'} content={<TextInput3 type='text' name='priestInEritrea' value={formData.priestInEritrea} onChange={handleChange} />} />
                </div>
            </div> */}


            {/* Other sections similar to the above can be added here with editable fields */}
            {/* <div className='text-right mt-4'>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Save
                </button>
            </div> */}
        </form>
    );
};

export default EditableMemberDetails;

export const InfoCell = ({ name, content }) => {
    return (
        <div className='flex flex-col items-start justify-start w-[20rem]'>
            <h2 className='font-semibold text-sm text-gray-900 uppercase dark:text-gray-500'>{name}</h2>
            <div className='text-md text-gray-600 dark:text-white'>{content}</div>
        </div>
    );
};
