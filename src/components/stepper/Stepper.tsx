import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import Animations from '../../animations/Animations';

type StepperProps = {
    steps: string[];
    currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {

    const progress = ((currentStep) / (steps.length)) * 100;

    return <React.Fragment>

        <div className="bg-[var(--white-color)] p-5 rounded-lg shadow-md w-full">

            <div className="flex flex-wrap gap-2.5 justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-[var(--secondary-color)]">Step {currentStep} of {steps.length}: {steps[currentStep - 1]}</h2>
                <p className="text-[var(--secondary-color)] opacity-50">{Math.round(progress)}% Complete</p>
            </div>

            <div className="w-full bg-[var(--gray-color)] rounded-full h-2.5 mb-8">
                <motion.div
                    className="bg-gradient-to-r from-[var(--blue-color)] to-[var(--green-color)] h-2.5 rounded-full"
                    variants={Animations.progressLine}
                    initial="initial"
                    animate="animate"
                    custom={{ progress }}
                />
            </div>

            <div className="flex justify-between">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isActive = stepNumber === currentStep;
                    
                    return (
                        <div key={index} className="flex flex-col items-center w-1/5">
                            <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-[var(--white-color)] font-bold mb-2 overflow-hidden bg-[var(--opacity-light-color)]">
                                <motion.div
                                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[var(--blue-color)] to-[var(--green-color)]"
                                    variants={Animations.stepCircleFill}
                                    initial="initial"
                                    animate={isCompleted || isActive ? "completed" : "initial"}
                                />
                                <div className="relative">
                                    <AnimatePresence mode="wait">
                                        {isCompleted ? (
                                            <motion.div
                                                key="checkmark"
                                                variants={Animations.checkmarkAnimation}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <FaCheck />
                                            </motion.div>
                                        ) : (
                                            <motion.span
                                                key="number"
                                                variants={Animations.stepNumberAnimation}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                {stepNumber}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <p className="text-center text-sm text-[var(--secondary-color)] opacity-50 max-[680px]:hidden block">{step}</p>
                        </div>
                    )
                })}
            </div>

        </div>

    </React.Fragment>

}
