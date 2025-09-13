import React from 'react'

export default function TextTd({ text }: { text: string }) {

    return <React.Fragment>
        <p className='text-base text-[var(--secondary-color)] opacity-80 whitespace-nowrap'>
            {text}
        </p>
    </React.Fragment>

}
