import React from 'react'
import StatusCard from '../../cards/StatusCard'

export default function StatusTd({ title, variant }: { title: string, variant: string }) {

    return <React.Fragment>

        <div className='w-full flex items-center justify-center'>

            <StatusCard 
                title={title} 
                className={variant === 'primary' 
                    ? 'bg-[var(--gray-color)] text-[var(--secondary-color)]' 
                    : variant === 'secondary' ? 'border border-[var(--gray-color)] text-[var(--secondary-color)]' 
                    : variant === 'danger' ? 'bg-[var(--red-color)] text-[var(--white-color)]'
                    : 'bg-[var(--gray-color)] text-[var(--secondary-color)]'
                } 
            />

        </div>

    </React.Fragment>

}
