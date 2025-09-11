import React from 'react';

type MainBtnProps = {
    title: string;
    icon?: React.ElementType;
}

export default function MainBtn({ title, icon: Icon }: MainBtnProps) {

    return <React.Fragment>

        <div 
            className='
                px-5 py-2.5 rounded-lg flex items-center justify-center gap-2.5
                text-base font-medium text-[var(--white-color)]
                bg-gradient-to-tl from-[var(--blue-color)] to-[var(--green-color)]
            '
        >

            {Icon && <Icon size={24} />}
            <span>{title}</span>

        </div>

    </React.Fragment>

}
