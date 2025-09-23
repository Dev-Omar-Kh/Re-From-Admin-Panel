import React from 'react'
import type { LabelProps } from '../../types/propsTypes'

export default function Label({ id, label, description }: LabelProps) {

    return <React.Fragment>
    {id !== '' 
        ?<label htmlFor={id}>
            <p className='text-base font-medium text-[var(--secondary-color)]'>{label}</p>
            {description && <p className='text-sm text-[var(--secondary-color)] opacity-80'>{description}</p>}
        </label>
        :<div>
            <p className='text-base font-medium text-[var(--secondary-color)]'>{label}</p>
            {description && <p className='text-sm text-[var(--secondary-color)] opacity-80'>{description}</p>}
        </div>
    }

    </React.Fragment>

}
