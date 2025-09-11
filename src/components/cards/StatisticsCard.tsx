import React from 'react';

type StatisticsCardProps = {
    title: string;
    value: number;
}

export default function StatisticsCard({ title, value }: StatisticsCardProps) {

    return <React.Fragment>

        <div className='p-5 rounded-xl bg-[var(--white-color)] space-y-1.5 shadow-md'>

            <h3 className='text-xl font-medium text-[var(--secondary-color)] opacity-80'>{title}</h3>

            <p className='text-3xl font-bold text-[var(--secondary-color)]'>{value}</p>

        </div>

    </React.Fragment>

}
