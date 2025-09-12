import React from 'react';
import StatusCard from './StatusCard';

// ====== images ====== //
// import formImage from '../../assets/images/reform.jpeg';
import { LuCalendarCheck2, LuCalendarX2, LuEye, LuFileText, LuPencil, LuUser } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { ROUTES } from '../../constants/Routes';
import { Link } from 'react-router-dom';
import MainBtn from '../buttons/MainBtn';

type FormCardProps = {
    data: {
        id: number;
        image: string;
        status: string;
        primaryColor: string;
        title: string;
        createdAt: string;
        EndAt: string;
        users: number;
        responses: number;
    }
}

// ====== custom components ====== //

type IconLabelProps = {
    icon: React.ElementType;
    label: string;
}

const IconLabel = ({ icon : Icon, label }: IconLabelProps) => {
    return <React.Fragment>

        <div className='flex items-center gap-1 text-[var(--secondary-color)] opacity-80'>
            <Icon size={18}  />
            <span className='text-sm font-medium'>{label}</span>
        </div>

    </React.Fragment>
}

export default function FormCard({ data }: FormCardProps) {

    return <React.Fragment>

        <div className='p-5 rounded-xl bg-[var(--white-color)] space-y-2.5 shadow-md'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>

                <img src={data.image} alt="form" className='w-14 h-14 rounded-md overflow-hidden object-cover border border-[var(--gray-color)]' />

                <StatusCard className='bg-[var(--primary-color)] text-[var(--secondary-color)]' title={data.status} />

            </div>

            <div className='flex gap-1.5'>
                <span className='w-1.5 rounded-4xl' style={{ backgroundColor: data.primaryColor }}></span>
                <h3 className='text-lg font-semibold text-[var(--secondary-color)]'>{data.title}</h3>
            </div>

            <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1.5'>
                <IconLabel icon={LuCalendarCheck2} label={`${data.createdAt.split('T')[0]} | ${data.createdAt.split('T')[1].slice(0, 5)}`} />
                <IconLabel icon={LuCalendarX2} label={`${data.EndAt.split('T')[0]} | ${data.EndAt.split('T')[1].slice(0, 5)}`} />
            </div>

            <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1.5'>
                <IconLabel icon={LuUser} label={data.users.toString()} />
                <span className='w-[1.5px] h-4 rounded-4xl bg-[var(--secondary-color)] opacity-70'></span>
                <IconLabel icon={IoMdCheckmarkCircleOutline} label={data.responses.toString()} />
            </div>

            <div className='border-t border-[var(--gray-color)] pt-2.5 flex items-center justify-end gap-2.5'>

                <Link to={`${ROUTES.RESPONSES}/${data.id}`}>
                    <MainBtn icon={LuFileText} isPrimary={false} />
                </Link>

                <Link to={`${ROUTES.FORMS_BUILDER}/${data.id}`}>
                    <MainBtn icon={LuPencil} isPrimary={false} />
                </Link>

                <Link to={ROUTES.FORM_PREVIEW}>
                    <MainBtn icon={LuEye} />
                </Link>

            </div>

        </div>

    </React.Fragment>

}
