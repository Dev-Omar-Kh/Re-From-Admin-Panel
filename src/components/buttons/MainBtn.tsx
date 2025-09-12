import React from 'react';

type MainBtnProps = {
    title?: string;
    icon?: React.ElementType;
    isPrimary?: boolean;
}

export default function MainBtn({ title, icon: Icon, isPrimary = true }: MainBtnProps) {

    return <React.Fragment>

        <div 
            className={`
                rounded-lg flex items-center justify-center gap-2.5
                text-base font-medium
                ${title ? 'px-5 py-2.5' : 'p-2.5'}
                ${isPrimary 
                    ? 'bg-gradient-to-tl from-[var(--blue-color)] to-[var(--green-color)] text-[var(--white-color)]' 
                    : 'bg-[var(--primary-color)] text-[var(--secondary-color)]'
                }
            `}
        >

            {Icon && <Icon size={title ? 24 : 18} />}
            {title && <span>{title}</span>}

        </div>

    </React.Fragment>

}
