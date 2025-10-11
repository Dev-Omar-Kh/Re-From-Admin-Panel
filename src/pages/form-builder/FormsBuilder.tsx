import React, { useState } from 'react';
import MainTitle from '../../components/titles/MainTitle';
import Stepper from '../../components/stepper/Stepper';
import MainBtn from '../../components/buttons/MainBtn';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FormStyle from './steps/FormStyle';
import FormFields from './steps/FormFields';

// ====== data ====== //

const stepsData = [
    { id: 1, name: "Form Style", component: <FormStyle /> },
    // { id: 2, name: "Page Information", component: <h1>Page Information</h1> },
    { id: 3, name: "Form Fields", component: <FormFields /> },
    { id: 4, name: "Form Settings", component: <h1>Form Settings</h1> },
    { id: 5, name: "Summary & Share", component: <h1>Summary & Share</h1> },
];

export default function FormsBuilder() {

    const [currentStep, setCurrentStep] = useState(2);
    const steps = stepsData.map(step => step.name);

    return <React.Fragment>

        <form className='w-full space-y-10'>

            <MainTitle title='Forms Builder' />

            <Stepper steps={steps} currentStep={currentStep} />

            <div className='w-full h-fit'>

                {stepsData[currentStep - 1].component}

            </div>

            <div className='w-full flex justify-end items-center gap-2.5 max-[600px]:grid max-[600px]:grid-cols-2 max-[410px]:grid-cols-1'>

                <button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 1}>
                    <MainBtn title='Previous Step' icon={IoIosArrowBack} isPrimary={false} isSmall={true} disabled={currentStep === 1} />
                </button>

                <button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep === steps.length}>
                    <MainBtn title='Next Step' icon={IoIosArrowForward} iconPosition={'right'} isSmall={true} disabled={currentStep === steps.length} />
                </button>

            </div>

        </form>

    </React.Fragment>

}
