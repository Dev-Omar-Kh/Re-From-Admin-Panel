import React from 'react';
import type { StatusCardProps } from '../../types/propsTypes';

export default function StatusCard({ className, title }: StatusCardProps) {

    return <React.Fragment>

        <div className={`w-fit px-2.5 py-1.5 rounded-4xl text-xs font-medium ${className}`}>
            <p>{title}</p>
        </div>

    </React.Fragment>

}
