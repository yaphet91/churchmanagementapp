import React from 'react'
import banner from '@/assets/images/banners/banner.png';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { useTranslation } from 'react-i18next';
import { Inertia } from '@inertiajs/inertia';
import { useDispatch, useSelector } from 'react-redux';
import { resetMemberState } from '@/features/form/memberSlice';
import { resetUserImage } from '@/features/form/userImageSlice';
import { resetUserCourses } from '@/features/form/userCoursesSlice';
import { resetSteps } from '@/features/form/stepperSlice';
import { resetNewChurch } from '@/features/form/newChurchSlice';
import { resetUserChurchHistory } from '@/features/form/userChurchHistorySlice';

const Home = ({ user }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const has_completed_membership_form = useSelector((state) => state.user.value.has_completed_membership_form);
    
    const goToForm = (event) => {
        event.preventDefault();
        dispatch(resetMemberState());
        dispatch(resetUserImage());
        dispatch(resetUserCourses());
        dispatch(resetSteps());
        dispatch(resetNewChurch());
        dispatch(resetUserChurchHistory());
        Inertia.get('/membership/form');
    }

    const goToDashboard = (event) => {
        event.preventDefault();
        Inertia.get('/member/events');
    }
    return (
        <section className='md:px-12 px-4 max-w-screen-2xl mx-auto mt-28' id='home'>
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                    <motion.div className='md:w-3/5'
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{t("landing-page-message")}</h2>
                        <p className='text-[#EBEBEB] text-2xl mb-8'>{t("landing-page-sub-message")}</p>
                        {/* Get in touch with your Orthodox Holy Church */}
                        {/* To have a great relationship with your church and your priest, anastasia gives you all the tools
                            you need for church experience. */}

                        <div className='space-x-5 space-y-3'>
                            {user && has_completed_membership_form === 0 && <button onClick={goToForm} className='btnPrimary'>Start Membership</button>}
                            {user && has_completed_membership_form === 1 && <button onClick={goToDashboard} className='btnPrimary'>Dashboard</button>}
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount:0.7 }}
                    >
                        <img src={banner} alt="" className='lg:h-[386px]' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Home
// export default AppWrap(Home, 'home');

