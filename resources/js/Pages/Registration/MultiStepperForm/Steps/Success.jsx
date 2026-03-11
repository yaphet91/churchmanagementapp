import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import successAnimation from '@/assets/animations/success_tick_animation_2';
import StepperFormLayout from '../StepperGlobal/StepperFormLayout';
import { Inertia } from '@inertiajs/inertia';
import Modal from '@/Components/Modals/Modal';

const Success = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme.theme);
  const [animationStage, setAnimationStage] = useState(1);
  const [showAnimation, setShowAnimation] = useState(true);
  const gender = useSelector((store) => store.member.value.gender);
  const [openModal, setOpenModal] = useState(false);

  const goToForm = (event) => {
    event.preventDefault();
    Inertia.get('/membership/form');
  }
  const goToChildForm = (event) => {
    event.preventDefault();
    Inertia.get('/form/child');
  }

  const goToDashboard = (event) => {
    event.preventDefault();
    Inertia.get('/member/events');
  }
  useEffect(() => {
    // Trigger stage 2 after the animation has played and disappeared
    console.log(gender)
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
    <div className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`}>
      <div className='flex flex-col items-center justify-center text-black'>
        <div className='bg-white black_dent w-5/6 h-[400px] mt-3 relative border rounded-lg dark:border-gray-500'>
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
              <h1 className='text-4xl text-gray-600 font-semibold'>{gender === 'male' ? t('God bless you!-m') : t('God bless you!-w')} { }</h1>
              <p className='mt-6 text-xl text-gray-500 font-semibold'>
                {t('Thank you! You have Successfully submitted your information.')}
              </p>
              <div className='space-x-4 mt-14'>
                <button onClick={goToDashboard} className='btnPrimary border'>{t('Dashboard')}</button>
                <button onClick={() => setOpenModal(true)} className='btnPrimary border'>{t('Add Family Members')}</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)} maxHeight='300px'>
        <div className='p-7 flex flex-col items-center justify-center'>
          <h2 className="text-xl font-medium text-gray-900 mb-5 dark:text-white">
            Do you want to add Spouse or Children?
          </h2>

          <div className='space-x-6'>
            <button onClick={goToForm} className='btnPrimary border mt-4'>Add Spouse</button>
            <button onClick={goToChildForm} className='btnPrimary border mt-4'>Add Children</button>
          </div>
        </div>
       
      </Modal>
    </div>
  );
};

export default Success;
