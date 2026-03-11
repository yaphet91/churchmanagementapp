import React from 'react'
import { useTranslation } from 'react-i18next';
import IntroBanner from '@/assets/images/banners/prist_intro_banner.png';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { useSelector } from 'react-redux';

const RegistrationIntro = () => {
  const { t } = useTranslation();

  const theme = useSelector((store) => store.theme.theme);

  return (
    <div className={`rounded-sm ${theme === 'light' ? 'whiterBg' : 'darkBg'} md:p-9 px-4 py-9 lg:min-h-[470px]`}>

      <div className=''>
        <div className='flex items-center justify-center'>
          <h2 className='text-3xl uppercase font-bold py-1 flex items-center justify-start text-gray-600 dark:text-gray-200'>
            {t('In the Name of Father Son and Holy Spirit One God')}!
          
            <span className='ml-4 hidden lg:flex'><FontAwesomeIcon icon={faCross} /></span>
          </h2>
        </div>
        <div className='flex flex-row items-center gap-10'>
          <motion.div className='hidden md:flex'
          variants={fadeIn('right', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          >
            <img src={IntroBanner} alt="" className='lg:h-[360px]' />
          </motion.div>

          <motion.div className='md:w-4/5'
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          >

            <p className='text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 md:pr-16'>{t('greetingAndIntro')}
            </p>
            <p className='text-gray-600 dark:text-gray-400  mb-3 underline'>{t('informationReady')}</p>
            <div>

            </div>

            <p className='text-blue-800 dark:text-blue-500 text-md font-semibold mb-1'> -  {t('Passport Size Photo')}</p>
            <p className='text-blue-800 dark:text-blue-500 text-md font-semibold mb-1'> -  {t('Information about your previous church (In Eritrea)')} </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationIntro
