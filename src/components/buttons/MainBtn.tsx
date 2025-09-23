import React from 'react';
import { type MainBtnProps } from '../../types/propsTypes';


export default function MainBtn({ 
    title, icon: Icon, isPrimary = true, 
    isSecondary = false, isDanger = false, 
    isSmall = false, start = false, end = false, 
    iconPosition = 'left', disabled = false
}: MainBtnProps) {

    return <React.Fragment>

        <div 
            className={`
                rounded-lg flex items-center justify-center gap-2.5
                text-base font-medium ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                ${title ? 'px-5 py-2.5' : 'p-2.5'}
                ${start ? 'justify-start' : (end ? 'justify-end' : 'justify-center')}
                ${isPrimary 
                    ? 'bg-gradient-to-tl from-[var(--blue-color)] to-[var(--green-color)] text-[var(--white-color)]' 
                    : isSecondary 
                    ? 'border border-[var(--gray-color)] text-[var(--secondary-color)]' 
                    : isDanger 
                    ? 'border border-[var(--gray-color)] text-[var(--red-color)]' 
                    : 'bg-[var(--gray-color)] text-[var(--secondary-color)]'
                }
            `}
        >

            {Icon && iconPosition === 'left' && <Icon size={title ? ( isSmall ? 16 : 24) : (isSmall ? 16 : 18)} />}
            {title && <span>{title}</span>}
            {Icon && iconPosition === 'right' && <Icon size={title ? ( isSmall ? 16 : 24) : (isSmall ? 16 : 18)} />}

        </div>

    </React.Fragment>

}
