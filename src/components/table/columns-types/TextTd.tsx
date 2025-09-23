import React from 'react';
import type { TextTdProps } from '../../../types/propsTypes';

export default function TextTd({ text, isSmall = false }: TextTdProps) {

    return <React.Fragment>
        <p className={`text-[var(--secondary-color)] opacity-80 whitespace-nowrap ${isSmall ? 'text-sm' : 'text-base'}`}>
            {text}
        </p>
    </React.Fragment>

}
