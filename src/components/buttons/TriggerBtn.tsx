import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Animations from '../../animations/Animations';
import type { TriggerBtnProps } from '../../types/propsTypes';

export default function TriggerBtn({triggers, onTriggerChange, defaultValue = triggers[0]?.value || 1, className = ''}: TriggerBtnProps) {

    const [activeValue, setActiveValue] = useState<number>(defaultValue);
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, width: 0, height: 0 });
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateBackgroundPosition = useCallback(() => {

        const activeIndex = triggers.findIndex(trigger => trigger.value === activeValue);
        const activeButton = buttonsRef.current[activeIndex];
        const container = containerRef.current;
        
        if (activeButton && container) {

            const containerRect = container.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();
            
            const x = buttonRect.left - containerRect.left - 6;
            const width = buttonRect.width;
            const height = buttonRect.height;
            
            setBackgroundPosition({ x, width, height });

        }

    }, [activeValue, triggers]);

    useEffect(() => {
        onTriggerChange(activeValue);
        updateBackgroundPosition();
    }, [onTriggerChange, activeValue, updateBackgroundPosition]);

    const handleTriggerClick = (value: number) => {
        setActiveValue(value);
        onTriggerChange(value);
    };

    useEffect(() => {

        const timer = setTimeout(updateBackgroundPosition, 50);
        
        const handleResize = () => {
            updateBackgroundPosition();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };

    }, [triggers, updateBackgroundPosition]);

    return <React.Fragment>

        <div 
            ref={containerRef}
            className={`w-fit flex items-center gap-1 p-1.5 rounded-md bg-[var(--white-color)] shadow-md relative ${className}`}
        >
            <motion.div 
                className="absolute top-1.5 left-1.5 rounded-md bg-gradient-to-tl from-[var(--blue-color)] to-[var(--green-color)] shadow-sm"
                variants={Animations.slidingBackground}
                initial="initial"
                animate="animate"
                custom={backgroundPosition}
            />

            {triggers.map((trigger, idx) => (
                <motion.button 
                    key={idx}
                    ref={(el) => { buttonsRef.current[idx] = el; }}
                    onClick={() => handleTriggerClick(trigger.value)}
                    className={`
                        px-2.5 py-1.5 rounded-md font-medium cursor-pointer relative z-10 duration-300
                        ${activeValue === trigger.value ? 'text-[var(--white-color)]' : 'text-[var(--secondary-color)]'}
                    `}
                >
                    {trigger.label}
                </motion.button>
            ))}
        </div>

    </React.Fragment>
}
