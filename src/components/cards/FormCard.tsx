import React from 'react';
import StatusCard from './StatusCard';

// ====== images ====== //
// import formImage from '../../assets/images/reform.jpeg';
import { LuCalendarCheck2, LuCalendarX2, LuEye, LuFileText, LuPencil, LuTrash, LuUser } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { ROUTES } from '../../constants/Routes';
import { Link } from 'react-router-dom';
import MainBtn from '../buttons/MainBtn';
import DateTd from '../table/columns-types/DateTd';
import TextTd from '../table/columns-types/TextTd';
import type { FormCardProps, IconLabelProps } from '../../types/propsTypes';

// ====== custom components ====== //

const IconLabel = ({ icon : Icon, label }: IconLabelProps) => {
    return <React.Fragment>

        <div className='flex items-center gap-1 text-[var(--secondary-color)] opacity-80'>
            <Icon size={18}  />
            <span className='text-sm font-medium'>{label}</span>
        </div>

    </React.Fragment>
}

// ====== data ====== //

const cardActions = (data: FormCardProps['data']) => [
    { label: 'Preview', icon: LuEye, to: ROUTES.FORM_PREVIEW, isPrimary: true },
    { label: 'Responses', icon: LuFileText, to: `${ROUTES.RESPONSES}/${data.id}`},
    { label: 'Edit', icon: LuPencil, to: `${ROUTES.FORMS_BUILDER}/${data.id}`},
    { label: 'Delete', icon: LuTrash, onClick: () => {console.log('delete')}, isDanger: true },
];

export default function FormCard({ data }: FormCardProps) {

    return <React.Fragment>

        <div className='p-5 rounded-xl bg-[var(--white-color)] space-y-5 shadow-md'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>

                <img src={data.image} alt="form" className='w-14 h-14 rounded-md overflow-hidden object-cover border border-[var(--gray-color)]' />

                <StatusCard className='bg-[var(--primary-color)] text-[var(--secondary-color)]' title={data.status} />

            </div>

            <div className='w-full space-y-2.5'>

                <div className='flex gap-2'>
                    <span className='w-1.5 rounded-4xl' style={{ backgroundColor: data.primaryColor }}></span>
                    <h3 className='text-lg font-semibold text-[var(--secondary-color)]'>{data.title}</h3>
                </div>

                <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1.5'>
                    <IconLabel 
                        icon={LuCalendarCheck2} 
                        label={<DateTd isSmall={true} date={data.createdAt} time={data.createdAt.split('T')[1].slice(0, 5)} />} 
                    />
                    <IconLabel 
                        icon={LuCalendarX2} 
                        label={<DateTd isSmall={true} date={data.EndAt} time={data.EndAt.split('T')[1].slice(0, 5)} />} 
                    />
                </div>

                <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1.5'>
                    <IconLabel icon={LuUser} label={<TextTd text={data.users.toString()} isSmall={true} />} />
                    <span className='w-[1.5px] h-4 rounded-4xl bg-[var(--secondary-color)] opacity-70'></span>
                    <IconLabel icon={IoMdCheckmarkCircleOutline} label={<TextTd text={data.responses.toString()} isSmall={true} />} />
                </div>

            </div>

            <div className='border-t border-[var(--gray-color)] pt-5 flex items-center justify-end gap-2.5'>

                {cardActions(data).map((action, idx) => (

                    action.to ? (
                        <Link key={idx} to={action.to}>
                            <MainBtn 
                                icon={action.icon} 
                                isPrimary={action.isPrimary ?? false}
                                isDanger={action.isDanger ?? false}
                            />
                        </Link>
                    ) : (
                        <button key={idx} onClick={action.onClick}>
                            <MainBtn 
                                icon={action.icon} 
                                isPrimary={action.isPrimary ?? false}
                                isDanger={action.isDanger ?? false}
                            />
                        </button>
                    )
                ))}

            </div>

        </div>

    </React.Fragment>

}
