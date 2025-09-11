import React from 'react';
import MainTitle from '../../../components/titles/MainTitle'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/Routes';
import MainBtn from '../../../components/buttons/MainBtn';
import { IoIosAddCircleOutline } from 'react-icons/io';
import StatisticsCard from '../../../components/cards/StatisticsCard';

// ====== data ====== //

const statisticsData = [
    {title: 'Total Forms', value: 55},
    {title: 'Total Responses', value: 6800},
    {title: 'Total Users', value: 2800},
];


export default function Statistics() {

    return <React.Fragment>

        <section className='w-full space-y-5'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>

                <MainTitle title='General Statistics' />

                <Link to={ROUTES.FORMS_BUILDER} className='w-fit'>
                    <MainBtn title='Add New Form' icon={IoIosAddCircleOutline} />
                </Link>

            </div>

            <div className='w-full grid grid-cols-3 gap-5 max-[690px]:grid-cols-1'>

                {statisticsData.map((item, idx) => (
                    <StatisticsCard key={idx} title={item.title} value={item.value} />
                ))}

            </div>

        </section>

    </React.Fragment>

}
