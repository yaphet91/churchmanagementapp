import React, { useState } from 'react';
import StepperHeader from './StepperHeader';
import StepperSidebar from './StepperSidebar';

const StepperFormLayout = ( { children, currentStep, onStepChange } ) => {

    return (
        <div className="bg-white dark:bg-[#000033]  dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <StepperSidebar currentStep={currentStep} onStepChange={onStepChange}/>

                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <StepperHeader currentStep={currentStep}/>
                    <main>
                        <div className="mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default StepperFormLayout;
