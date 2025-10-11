import React from 'react';

type ToggleBtnProps = {
    id: number | string;
    title: string;
    label?: string;
    className?: string
}

export default function ToggleBtn({id, title, label, className = ''}: ToggleBtnProps) {

    return <React.Fragment>

        <label 
            htmlFor={id.toString()} 
            className={`flex items-center gap-1.5 cursor-pointer ${className}`}
        >

            <div className='flex flex-col gap-1.5'>

                <h3 className='text-sm text-[var(--secondary-color)]'>{title}</h3>

                {label && <p className='text-xs text-[var(--secondary-color)]/50'>{label}</p>}

            </div>

            <div className="relative inline-flex items-center cursor-pointer">
                <input id={id.toString()} type="checkbox" className="sr-only peer" />
                <div 
                    className={`
                        group peer ring-0 bg-[var(--gray-color)] peer-checked:bg-transparent rounded-full outline-none
                        duration-300 after:duration-300 w-10 h-5 shadow-md
                        before:content-[""] before:absolute before:inset-0 before:z-[0] before:rounded-full
                        before:bg-gradient-to-tl before:transition-opacity before:duration-300
                        before:from-[var(--blue-color)] before:to-[var(--green-color)] before:opacity-0
                        peer-checked:before:!opacity-100 peer-checked:after:start-5.5
                        peer-focus:outline-none after:rounded-full after:absolute after:bg-[var(--white-color)] 
                        after:outline-none after:h-4 after:w-4 after:top-0.5 after:bottom-0.5 after:start-0.5 after:-rotate-180 
                        after:flex after:justify-center after:items-center peer-hover:after:scale-95 peer-checked:after:rotate-0
                    `}
                ></div>
            </div>

        </label>

    </React.Fragment>

}