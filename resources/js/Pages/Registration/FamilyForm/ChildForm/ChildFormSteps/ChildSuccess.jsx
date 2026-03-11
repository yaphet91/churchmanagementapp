import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import successAnimation from '@/assets/animations/success_tick_animation_2';
import { Inertia } from '@inertiajs/inertia';
import MemberLayout from '@/Layouts/MemberLayout';

const ChildSuccess = () => {
    const { t } = useTranslation();
    const theme = useSelector((store) => store.theme.theme);
    const [animationStage, setAnimationStage] = useState(1);
    const [showAnimation, setShowAnimation] = useState(true);
    const gender = useSelector((store) => store.member.value.gender);

    const goToForm = (event) => {
        event.preventDefault();
        Inertia.get('/form/child');
    }

    const goToDashboard = (event) => {
        event.preventDefault();
        Inertia.get('/member/dashboard');
    }
    useEffect(() => {
        // Trigger stage 2 after the animation has played and disappeared
        if (!showAnimation) {
            const timer = setTimeout(() => {
                setAnimationStage(2); // Begin sliding up the content
            }, 100); // Short delay before sliding up the content

            return () => clearTimeout(timer);
        }
    }, [showAnimation]);

    const handleAnimationComplete = () => {
        setShowAnimation(false); // Hide the animation after the first loop
    };

    return (
        <MemberLayout>
            <div className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`}>
                <div className='flex flex-col items-center justify-center text-black'>
                    <div className='bg-white black_dent w-5/6 h-[400px] mt-10 relative border rounded-lg dark:border-gray-500'>
                        {showAnimation && (
                            <Lottie
                                animationData={successAnimation}
                                loop={false}
                                style={{ width: 300, height: 300 }}
                                onComplete={handleAnimationComplete}
                            />
                        )}
                        {animationStage >= 2 && (
                            <div className='content slide-up flex flex-col -mt-20 items-center justify-center relative'>
                                <Lottie
                                    animationData={successAnimation}
                                    loop={false}
                                    style={{ width: 100, height: 100 }}
                                />
                                {/* <h1 className='text-4xl text-gray-600 font-semibold'>{gender === 'male' ? t('God bless you!-m') : t('God bless you!-w')} { }</h1> */}
                                <p className='mt-6 text-xl text-gray-500 font-semibold'>
                                    {t('Thank you! You have Successfully registered your child.')}
                                </p>
                                <div className='space-x-4 mt-14'>
                                    <button onClick={goToDashboard} className='btnPrimary border'>{t('Dashboard')}</button>
                                    <button onClick={goToForm} className='btnPrimary border'>{t('Add Other Child')}</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MemberLayout>
    );
};

export default ChildSuccess;
