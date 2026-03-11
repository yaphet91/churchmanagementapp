import { Mail, MessageSquare, Phone, QrCode } from 'lucide-react'
import React from 'react'

const UserDetails = ({ data }) => {

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



  return (
    <div className='overflow-hidden scroll-auto pb-10'>
      <div className='flex items-start justify-start gap-1'>
        {/*profile and names  */}
        <div className='rounded-sm flex flex-col w-1/4 py-5 items-center justify-center mt-3  bg-gray-300'>
          <img src={data.imageUrl} alt='avatar' className='w-[180px] h-[200px] rounded-sm' />
          <div className='flex items-center justify-center gap-2 mt-3'>
            <div title='message' className='border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300'><MessageSquare size={18} strokeWidth={1} /></div>
            <div title='call' className='border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300'><Phone size={18} strokeWidth={1} /></div>
            <div title='email' className='border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300'><Mail size={18} strokeWidth={1} /></div>
            <div title='QR code' className='border border-green-700 hover:bg-green-400 rounded-full p-2 bg-gray-300'><QrCode size={18} strokeWidth={1} /></div>
          </div>
        </div>
        {/* birthday and gender */}
        <div className='rounded-sm mt-3  bg-gray-300 h-[287px] w-3/4'>
          <div className='flex items-center justify-start space-x-24 px-5 py-3'>
            <div className='flex flex-col items-start justify-start'>
              <h2 className='font-semibold text-sm uppercase text-gray-900'>Father Name</h2>
              <h2 className='text-md text-gray-600'>{data.fatherNameT}{' '}{data.grandFatherNameT}</h2>
              <h2 className='text-md text-gray-600'>{data.fatherName}{' '}{data.grandFatherName}</h2>
            </div>
            <div className='flex flex-col items-start justify-start'>
              <h2 className='font-semibold text-sm uppercase text-gray-900'>Mother's Name</h2>
              <h2 className='text-md text-gray-600'>{data.motherFullNameT}</h2>
              <h2 className='text-md text-gray-600'>{data.motherName}{' '}{data.mothersFather}</h2>
            </div>

          </div>
          <div className='flex items-center justify-start space-x-24 px-5 py-3'>
            <div className='flex flex-col items-start justify-start'>
              <h2 className='font-semibold text-sm uppercase text-gray-900'>Birth Date</h2>
              <h2 className='text-md text-gray-600'>{data.birthday}</h2>
              <h2 className='text-md text-gray-600'>( {getAge(data.birthday)} Years Old )</h2>
            </div>
            <InfoCell name={'Gender'} content={data.gender} />
            <InfoCell name={'Place of Birth'} content={data.placeOfBirth} />
          </div>
          <div className='px-5 py-3'>
            <InfoCell name={'Father Of Confession'} content={data.fatherOfConfession} />
          </div>
        </div>
      </div>
      <div className='rounded-sm mt-1   h-[220px] w-full flex items-start justify-start space-x-1'>
        {/* identification and contact */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 bg-gray-300 p-5 h-full">
          <InfoCell name={'Nationality'} content={data.nationality} />
          <InfoCell name={'Address Country'} content={data.addressCountry} />
          <InfoCell name={'Province'} content={data.province} />
          <InfoCell name={'Current Address'} content={data.city + ', ' + data.currentAddress} />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 bg-gray-300 p-5 h-full">
          <InfoCell name={'Email'} content={data.email} />
          <InfoCell name={'Phone'} content={data.countryPhoneCode + data.phone} />
          <InfoCell name={'Whatsapp'} content={data.whatsApp} />
          <InfoCell name={'Emergency Contact'} content={data.emergencyContactNumber + ' ' + '( ' + data.contactRelation + ' )'} />
          <InfoCell name={'Postal Code'} content={data.postalCode} />
        </div>
      </div>
      <div className='rounded-sm mt-1 bg-gray-300 h-[220px] w-full flex items-start justify-start space-x-1'>
        {/* additional details */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 p-5 h-full">
          <InfoCell name={'Profession'} content={data.profession} />
          <InfoCell name={'Level Of Education'} content={data.levelOfEducation} />
          <InfoCell name={'First Language'} content={data.firstLanguage} />
          <InfoCell name={'Second Language'} content={data.secondLanguage} />
       
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 p-5 h-full">
          <InfoCell name={'Email'} content={data.email} />
          <InfoCell name={'Phone'} content={data.countryPhoneCode + data.phone} />
          <InfoCell name={'Whatsapp'} content={data.whatsApp} />
          <InfoCell name={'Emergency Contact'} content={data.emergencyContactNumber + ' ' + '( ' + data.contactRelation + ' )'} />
          <InfoCell name={'Postal Code'} content={data.postalCode} />
        </div>
      </div>
      <div className='rounded-sm mt-1 w-full flex items-start justify-start space-x-1 bg-gray-300 '>
        {/* church participation history */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-1/2 p-5 h-full">
          <InfoCell name={'Marital Status'} content={data.maritalStatus} />
          {data.haveChildren === 'Yes' && <InfoCell name={'Children'} content={data.childrenNumber + data.childrenNumber > 1 ? ' children': ' child'} />}
         
          {/* <div className='flex flex-col items-start justify-start'> */}
            {/* <h1>Family Members</h1> */}
            {/* list the family members here */}
          {/* </div> */}

        </div>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 w-1/2 p-5 h-full">
          {data.isNewChurchSubmitted
            ? <InfoCell name={'Church'} content={data.newChurch + ', ' + data.newDiocese} />
            : <InfoCell name={'Church'} content={data.church + ', ' + data.diocese} />
          }
          <InfoCell name={'Priest In Eritrea'} content={data.priestInEritrea} />
          <InfoCell name={'Previous Church Service'} content={data.selectedChurchService} />
        </div>
      </div>

    </div>
  )
}

export default UserDetails

export const InfoCell = ({ name, content }) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <h2 className='font-semibold text-sm text-gray-900 uppercase'>{name}</h2>
      <h2 className='text-md text-gray-600 '>{content}</h2>
    </div>
  );
}
export const DoubleInfoCell = ({ name, contentTigrina, contentEnglish }) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <h2 className='font-semibold text-lg text-gray-900'>{name}</h2>
      <h2 className='font-semibold text-md text-gray-600 capitalize'>{contentTigrina}</h2>
      <h2 className='font-semibold text-md text-gray-600 capitalize'>{contentEnglish}</h2>
    </div>
  );
}
