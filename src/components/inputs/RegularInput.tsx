import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import type { RegularInputProps } from '../../types/propsTypes';
import LoadingInput from './LoadingInput';
import ErrorField from './ErrorField';
import Label from './Label';

// Animation variants
const opacityAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
};

export default function RegularInput({
    id,
    label,
    placeholder = '',
    type = 'text',
    value = '',
    onChange,
    onBlur,
    description,
    error,
    className = '',
    disabled = false,
    autoComplete,
    maxLength,
    minLength,
    pattern,
    readOnly = false
}: RegularInputProps) {

    const [hasValue, setHasValue] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [passType, setPassType] = useState<string | null>(null);

    useEffect(() => {
        setHasValue(value && value.trim() !== '' ? true : false);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.trim() !== '');
        if (onChange) onChange(e);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };

    const handlePasswordVisibility = () => {
        setPassType(prev => prev === 'password' ? 'text' : 'password');
    };

    useEffect(() => {
        if (type === 'password') {
            setPassType('password');
        }
    }, [type]);

    return<React.Fragment>

        <div className={`relative flex flex-col gap-0.5 group ${className}`}>

            <Label id={id} label={label} description={description} />

            <input 
                id={id}
                type={passType || type}
                placeholder={placeholder}
                className={`
                    w-full h-10 px-2.5 ${type === 'password' ? 'pr-10' : ''} rounded-md border 
                    ${hasValue ? 'border-[var(--blue-color)]' : 'border-[var(--gray-color)]'} 
                    placeholder:text-[var(--secondary-color)]/40
                    outline-0 duration-300 focus:border-[var(--blue-color)] font-medium text-[var(--secondary-color)]
                    ${error ? 'border-[var(--red-color)]' : ''} pe-12
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    // ${readOnly ? 'bg-[var(--gray-color)]/50' : ''}
                `}
                value={value}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readOnly}
                autoComplete={autoComplete}
                maxLength={maxLength}
                minLength={minLength}
                pattern={pattern}
            />

            {/* Loading animation on focus */}
            <AnimatePresence>
                {(isFocused || hasValue) && type !== 'password' && (
                    <motion.div 
                        variants={opacityAnimation} 
                        initial="hidden" 
                        animate="visible" 
                        exit="exit"
                        className="absolute bottom-4.25 right-2.5"
                    >
                        <LoadingInput />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Password visibility toggle */}
            {type === 'password' && (
                <div 
                    onClick={handlePasswordVisibility} 
                    className={`
                        absolute right-2.5 bottom-0 text-2xl h-10 flex items-center duration-300
                        ${hasValue ? 
                            'text-[var(--blue-color)]' : (isFocused ? 'text-[var(--blue-color)]' : 'text-[var(--secondary-color)]/40')
                        } 
                        cursor-pointer
                    `}
                >
                    {passType === 'password' ? 
                        <motion.button 
                            key="show" 
                            type="button" 
                            className="cursor-pointer" 
                            variants={opacityAnimation} 
                            initial="hidden" 
                            animate="visible" 
                        >
                            <VscEye />
                        </motion.button> : 
                        <motion.button 
                            key="hide" 
                            className="cursor-pointer" 
                            type="button"
                            variants={opacityAnimation} 
                            initial="hidden" 
                            animate="visible" 
                        >
                            <VscEyeClosed />
                        </motion.button>
                    }
                </div>
            )}
        </div>

        {error && <ErrorField error={error} />}

    </React.Fragment>

}
