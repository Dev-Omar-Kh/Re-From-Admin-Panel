import React from 'react';
import type { SubMainTitleProps } from '../../types/propsTypes';

export default function SubMainTitle({ title, icon: Icon }: SubMainTitleProps) {

    return <React.Fragment>

        <div className='flex items-center gap-2.5 text-[var(--secondary-color)]'>

            <Icon size={28} color={`var(--blue-color)`} />
            <h3 className='text-xl font-semibold'>{title}</h3>

        </div>

    </React.Fragment>

}
