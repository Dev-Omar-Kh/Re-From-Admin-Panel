import React from 'react';

type MainBtnProps = {
    title?: string;
    isSmall?: boolean;
    icon?: React.ElementType;
    isPrimary?: boolean;
    isSecondary?: boolean;
    isDanger?: boolean;
    start?: boolean;
    end?: boolean;
}

export default function MainBtn(
    { title, icon: Icon, isPrimary = true, isSecondary = false, isDanger = false, isSmall = false, start = false, end = false }: MainBtnProps
) {

    return <React.Fragment>

        <div 
            className={`
                rounded-lg flex items-center justify-center gap-2.5
                text-base font-medium cursor-pointer
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

            {Icon && <Icon size={title ? 24 : (isSmall ? 16 : 18)} />}
            {title && <span>{title}</span>}

        </div>

    </React.Fragment>

}
