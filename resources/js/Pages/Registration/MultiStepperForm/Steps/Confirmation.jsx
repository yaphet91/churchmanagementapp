import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Confirmation = () => {

  const { t } = useTranslation();

  const member = useSelector((store) => store.member.value);
  const userChurchHistory = useSelector((store) => store.userChurchHistory.value);
  const userCourses = useSelector((store) => store.userCourses.value);
  const newChurch = useSelector((store) => store.newChurch.value);
  const theme = useSelector((store) => store.theme.theme);

  const coursesTaken = Object.entries(userCourses)
    .filter(([key, value]) => value)
    .map(([key]) => key.replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    ); // e.g., "livingWithChrist" becomes "Living With Christ"

  return (
    <div className='space-y-2'>
      <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 `}>
        <div className='p-6 md:p-4'>
          <div className='mb-10'>
            <h1 className='text-2xl text-gray-500 dark:text-gray-300 uppercase mb-4'>1. {t('steps.personalDetails')}</h1>
            <div className='flex flex-row items-start justify-between space-x-2'>
              <div className='w-1/2'>
                <Box>
                  <h3> Full Name: <NSpan>{member.title} {member.firstName}  {member.fatherName}  {member.grandFatherName}</NSpan> </h3>
                </Box>
                <Box>
                  <p> Father's Name: <NSpan>{member.fatherName}  {member.grandFatherName}</NSpan></p>
                </Box>
                <Box>
                  <p> Mother's Name: <NSpan>{member.motherName} {member.mothersFather}</NSpan></p>
                </Box>
                <Box>
                  <p>Birthday: <NSpan>{member.birthday}</NSpan></p>
                </Box>
                <Box>
                  <p>Gender: <NSpan>{member.gender}</NSpan></p>
                </Box>
              </div>
              <div className='w-1/2'>
                <Box>
                  <h3> ምሉእ ስም: <NSpan> {member.firstNameT}  {member.fatherNameT}  {member.grandFatherNameT}</NSpan> </h3>
                </Box>
                <Box>
                  <p> ስም ኣቦ: <NSpan>{member.fatherNameT}  {member.grandFatherNameT}</NSpan></p>
                </Box>
                <Box>
                  <p> ስም ኣደ: <NSpan>{member.motherFullNameT}</NSpan></p>
                </Box>
                <Box>
                  <p>ዕለተ ልደት: <NSpan>{member.birthday}</NSpan></p>
                </Box>
                <Box>
                  <p>ጾታ: <NSpan>{member.gender}</NSpan></p>
                </Box>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 `}>
        <div className='p-6 md:p-4 text-gray-500 dark:text-gray-300'>
          <div className='mb-10'>
            <h1 className='text-2xl uppercase'>2. {t('steps.identification')}</h1>
            <Box>
              <h3> {t("Nationality")}: <NSpan>{member.nationality}</NSpan> </h3>
            </Box>
            <Box>
              <p>{t("Place Of Birth")}: <NSpan>{member.placeOfBirth}</NSpan></p>
            </Box>
            <Box>
              <p>{t("Current Address")}: <NSpan>{member.currentAddress}, {member.city}, {member.province}{member.province ? ',' : ''} {member.addressCountry.name}</NSpan></p>
            </Box>
          </div>
        </div>
      </div>

      <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 `}>
        <div className='p-6 md:p-4 text-gray-500 dark:text-gray-300'>
          <div className='mb-10'>
            <h1 className='text-2xl uppercase'>3. {t('steps.contactInformation')}</h1>
            <Box>
              <h3> {t("Email")}: <NSpan>{member.email}</NSpan></h3>
            </Box>
            <div className='md:flex flex-row gap-3'>
              <Box className='flex-1'>
                <p>{t("Phone")}: <NSpan>{member.countryPhoneCode}{member.phone}</NSpan></p>
              </Box>
              <Box className='flex-1'>
                <p>{t("WhatsApp")}: <NSpan>{member.whatsApp}</NSpan></p>
              </Box>
            </div>
            <div className='md:flex flex-row gap-3'>
              <Box className='flex-1'>
                <p>{t("Emergency Contact")}: <NSpan>{member.emergencyContactNumber}</NSpan></p>
              </Box>
              <Box className='flex-1'>
                <p>{t("Contact Relationship")}: <NSpan>{member.contactRelation}</NSpan></p>
              </Box>
            </div>

            <Box>
              <p>{t("P.O.Box")}: <NSpan>{member.postalCode}</NSpan> </p>
            </Box>
          </div>
        </div>
      </div>


      <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 `}>
        <div className='p-6 md:p-4 text-gray-500 dark:text-gray-300'>

          <div className='mb-10'>
            <h1 className='text-2xl uppercase'>4. {t('steps.additionalDetails')}</h1>
            <Box>
              <h3>{t("Marital Status")}: <NSpan>{member.maritalStatus}</NSpan> </h3>
            </Box>
            <div className='md:flex flex-row gap-3'>
              <Box className='flex-1'>
                <p>{t('Children')}: <NSpan>{member.childrenNumber}</NSpan></p>
              </Box>
            </div>
            <div className='md:flex flex-row gap-3'>
              <Box className='flex-1'>
                <p>{t('Languages')}: <NSpan>{member.firstLanguage}{member.secondLanguage ? ', ' : ''}{member.secondLanguage}</NSpan></p>
              </Box>
            </div>

            <Box>
              <p>{t('Level of Education')}: <NSpan>{member.levelOfEducation}</NSpan></p>
            </Box>
            <Box>
              <p>{t("Profession")}: <NSpan>{member.profession}</NSpan></p>
            </Box>
          </div>
        </div>
      </div>
      <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 `}>
        <div className='p-6 md:p-4 text-gray-500 dark:text-gray-300'>
          <div className=''>
            <h1 className='text-2xl uppercase'>5. {t('steps.churchParticipation')}</h1>

            {userChurchHistory.isNewChurchSubmitted ?
              <Box>
                <p>{t('Church')}: <NSpan>{newChurch.churchNamePrefix} {newChurch.churchName} {newChurch.surrounding}, {newChurch.diocese}</NSpan></p>
              </Box>
              : <Box>
                <p>{t('Church')}: <NSpan>{userChurchHistory.selectedChurchCode}, {userChurchHistory.selectedDioceseCode},</NSpan></p>
              </Box>
            }

            <Box>
              <p>{t("Your Priest")}: <NSpan>{member.fatherOfConfession}</NSpan></p>
            </Box>
            <Box>
              <p>{t("Your Priest's full name (in Eritrea)")}: <NSpan>{userChurchHistory.priestInEritrea}</NSpan></p>
            </Box>
            <Box>
              <p>{t('Sacraments Recieved')}: <NSpan>
                {userChurchHistory.selectedSacraments.length > 0 ? userChurchHistory.selectedSacraments.join(', ') : 'None'}
              </NSpan>
              </p>
            </Box>
            <Box>
              <p>{t('Services Volunteered')}:
                <NSpan>
                  {userChurchHistory.selectedChurchService.length > 0 ? userChurchHistory.selectedChurchService.join(', ') : 'None'}
                </NSpan>
              </p>
            </Box>
            <Box>
              <h3>{t('Courses Taken')}: {coursesTaken.length === 0 ? "None" : ''}</h3>
              <div className='mt-2 text-md text-gray-700 dark:text-[#00b8e6] pl-4 font-semibold'>
                <StateList stateObject={userCourses} />

              </div>
            </Box>

          </div>
        </div>
      </div >
    </div>
  )
}

export default Confirmation


export const Box = ({ children, className = "" }) => {

  return (
    <div className={`my-2 ${className} p-2.5 rounded-lg text-md font-bold text-gray-500 dark:text-gray-400 border
     dark:border-gray-600 border-gray-400  md:uppercase`}>
      {children}
    </div>
  );
}

const NSpan = ({ children }) => {
  return (
    <span className='text-gray-600  dark:text-[#00b8e6] font-bold ml-2'>
      {children}
    </span>
  );
}

export const StateList = ({ stateObject }) => {
  const filteredStates = transformAndFilterStates(stateObject);

  return (
    <ul>
      {filteredStates.map((name, index) => (
        <li key={index}> - {name}</li>
      ))}
    </ul>
  );
};

const transformAndFilterStates = (stateObject) => {
  const { t } = useTranslation();
  const friendlyNames = {
    livingWithChrist: t("Living With Christ"),
    orthodoxyTeachingOfSalvation: t("Orthodoxy Teaching Of Salvation"),
    introductionToOrthodoxy: t("Introduction To Orthodoxy"),
    sevenSacramentOfChurh: t("Seven Sacrament Of Churh"),
    comparativeTheology: t("Comparative Theology"),
    fiveChurchPillarsOfMystery: t("Five Pillars Of Mystery"),
    historicalBibleStudy: t("Historical Bible Study"),
    universalChurchHistory: t("Universal Church History"),
    spiritualQuiteTime: t("Spiritual Quite Time"),
    churchCanonsAndRites: t("Church Canons & Rites"),
    repentance: t("Repentance"),
    spiritualService: t("Spiritual Service"),
    introductionToGeez: t("Introduction To Geez"),
    christianDiscipline: t("Christian Discipline"),
  };

  return Object.entries(stateObject)
    .filter(([key, value]) => value) // Keep only the states that are true
    .map(([key, value]) => friendlyNames[key]) // Transform keys to their friendly names
    .filter(name => name !== undefined); // Ensure that only valid names are included
};
