import React from 'react'
import { useTranslation } from 'react-i18next';
import banner from '@/assets/images/banners/banner.png';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { Inertia } from '@inertiajs/inertia';
import { useSelector } from 'react-redux';
const Mission = () => {
    const { t } = useTranslation();

  return (
      <section className='my-24 md:px-14 px-4 max-w-screen-2xl max-auto' id='mission'>
          <h2 className="text-4xl font-bold mb-5 text-center">Our <span className="text-blue-600">Mission</span></h2>
          <div className='gradientBg rounded-xl rounded-tl-[80px] rounded-br-[80px] md:p-9 px-4 py-9'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                  <motion.div
                      variants={fadeIn('down', 0.2)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0.7 }}
                  >
                      <img src={banner} alt="" className='lg:h-[386px] transform scale-x-[-1]' />
                  </motion.div>
                  <motion.div className='md:w-3/5'
                      variants={fadeIn('up', 0.2)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0.7 }}
                  >
                      <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>Get in touch with your Orthodox Holy Church</h2>
                      <p className='text-[#EBEBEB] text-2xl mb-8'>To have a great relationship with your church and your priest, anastasia gives you all the tools
                          you need for church experience.
                      </p>
                      {/* <div className='space-x-5 space-y-3'>
                          {has_completed_membership_form === 0 && <button onClick={goToForm} className='btnPrimary'>Start Membership</button>}
                          {has_completed_membership_form === 1 && <button onClick={goToDashboard} className='btnPrimary'>Dashboard</button>}
                      </div> */}
                  </motion.div>
                 
                 
              </div>
              <div className='mt-24 flex flex-col md:flex-row justify-between items-center gap-10'>
                  <motion.div className='md:w-3/5'
                      variants={fadeIn('up', 0.2)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0.7 }}
                  >
                      <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>Get in touch with your Orthodox Holy Church</h2>
                      <p className='text-[#EBEBEB] text-2xl mb-8'>To have a great relationship with your church and your priest, anastasia gives you all the tools
                          you need for church experience.
                      </p>
                      {/* <div className='space-x-5 space-y-3'>
                          {has_completed_membership_form === 0 && <button onClick={goToForm} className='btnPrimary'>Start Membership</button>}
                          {has_completed_membership_form === 1 && <button onClick={goToDashboard} className='btnPrimary'>Dashboard</button>}
                      </div> */}
                  </motion.div>
                  <motion.div
                      variants={fadeIn('down', 0.2)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0.7 }}
                  >
                      <img src={banner} alt="" className='lg:h-[386px] transform scale-x-[-1]' />
                  </motion.div>
              </div>
          </div>

      </section>
  )
}

export default Mission
