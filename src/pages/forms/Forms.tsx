import React, { useState } from 'react';
import MainTitle from '../../components/titles/MainTitle';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes';
import MainBtn from '../../components/buttons/MainBtn';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Table, { type Column } from '../../components/table/Table';
import ActionsTd from '../../components/table/columns-types/ActionsTd';
import TextTd from '../../components/table/columns-types/TextTd';
import TriggerBtn, { type Trigger } from '../../components/buttons/TriggerBtn';
import FormCard from '../../components/cards/FormCard';

// ====== data ====== //

type FormData = {
    id: number;
    image: string;
    status: 'Active' | 'Inactive' | 'Closed';
    primaryColor: string;
    title: string;
    createdAt: string;
    EndAt: string;
    users: number;
    responses: number;
};

const AllFormsData: FormData[] = [

    {
        id: 7,
        image: 'https://img.freepik.com/free-vector/abstract-gradient-logo_23-2149213704.jpg?w=740',
        status: 'Active',
        primaryColor: '#219ebc',
        title: 'Market Research Survey',
        createdAt: '2025-08-10T11:00:00Z',
        EndAt: '2025-08-25T11:00:00Z',
        users: 410,
        responses: 890,
    },
    {
        id: 8,
        image: 'https://img.freepik.com/free-vector/gradient-technology-logo-template_23-2149193454.jpg?w=740',
        status: 'Inactive',
        primaryColor: '#9d4edd',
        title: 'Website Usability Form',
        createdAt: '2025-07-22T09:30:00Z',
        EndAt: '2025-08-05T09:30:00Z',
        users: 230,
        responses: 450,
    },
    {
        id: 9,
        image: 'https://img.freepik.com/free-vector/abstract-gradient-logo-design_343694-1170.jpg?w=740',
        status: 'Active',
        primaryColor: '#ff7d00',
        title: 'Community Feedback Form',
        createdAt: '2025-09-02T13:45:00Z',
        EndAt: '2025-09-15T13:45:00Z',
        users: 530,
        responses: 980,
    },
    {
        id: 10,
        image: 'https://img.freepik.com/free-vector/gradient-modern-logo-template_23-2149373465.jpg?w=740',
        status: 'Inactive',
        primaryColor: '#14213d',
        title: 'Course Registration',
        createdAt: '2025-08-01T08:00:00Z',
        EndAt: '2025-09-01T08:00:00Z',
        users: 180,
        responses: 340,
    },
    {
        id: 11,
        image: 'https://img.freepik.com/free-vector/colorful-gradient-logo-design_343694-1741.jpg?w=740',
        status: 'Closed',
        primaryColor: '#06d6a0',
        title: 'Beta Testing Signup',
        createdAt: '2025-06-05T07:15:00Z',
        EndAt: '2025-07-05T07:15:00Z',
        users: 260,
        responses: 520,
    },
    {
        id: 12,
        image: 'https://img.freepik.com/free-vector/gradient-digital-logo-template_23-2149193402.jpg?w=740',
        status: 'Active',
        primaryColor: '#ef233c',
        title: 'Internship Application Form',
        createdAt: '2025-09-07T10:00:00Z',
        EndAt: '2025-09-28T10:00:00Z',
        users: 700,
        responses: 1600,
    },
    {
        id: 13,
        image: 'https://img.freepik.com/free-vector/modern-gradient-abstract-logo-template_23-2149369045.jpg?w=740',
        status: 'Inactive',
        primaryColor: '#2a9d8f',
        title: 'Software Bug Report',
        createdAt: '2025-07-15T12:20:00Z',
        EndAt: '2025-08-10T12:20:00Z',
        users: 95,
        responses: 200,
    },
    {
        id: 14,
        image: 'https://img.freepik.com/free-vector/gradient-creative-logo-template_23-2149213730.jpg?w=740',
        status: 'Active',
        primaryColor: '#ff006e',
        title: 'Workshop Feedback Form',
        createdAt: '2025-08-28T15:40:00Z',
        EndAt: '2025-09-12T15:40:00Z',
        users: 340,
        responses: 740,
    },
    {
        id: 15,
        image: 'https://img.freepik.com/free-vector/gradient-colorful-logo-template_23-2149209185.jpg?w=740',
        status: 'Closed',
        primaryColor: '#118ab2',
        title: 'Club Membership Form',
        createdAt: '2025-05-12T09:00:00Z',
        EndAt: '2025-06-12T09:00:00Z',
        users: 150,
        responses: 310,
    },
    {
        id: 16,
        image: 'https://img.freepik.com/free-vector/gradient-modern-logo-design_343694-1206.jpg?w=740',
        status: 'Active',
        primaryColor: '#8338ec',
        title: 'Sponsorship Application',
        createdAt: '2025-09-09T18:30:00Z',
        EndAt: '2025-09-29T18:30:00Z',
        users: 520,
        responses: 1040,
    },

];


const formColumns: Column<FormData>[] = [
    {
        header: 'Form Title',
        cell: (item) => (
            <div className="flex items-center gap-2.5">
                <img 
                    src={item.image} alt={item.title} loading='lazy'
                    className="h-10 w-10 rounded-md object-cover object-center border border-[var(--gray-color)] flex-shrink-0" 
                />
                <div className='flex-shrink-0'>
                    <TextTd text={item.title} />
                </div>
            </div>
        )
    },
    {
        header: 'Status',
        type: 'status',
        cell: (item) => item.status,
    },
    {
        header: 'Created At',
        type: 'date',
        cell: (item) => item.createdAt,
    },
    {
        header: 'End At',
        type: 'date',
        cell: (item) => item.EndAt,
    },
    {
        header: 'Users',
        type: 'number',
        cell: (item) => item.users,
    },
    {
        header: 'Responses',
        type: 'number',
        cell: (item) => item.responses,
    },
    {
        header: 'Actions',
        cell: () => (
            <ActionsTd />
        )
    }
];

const triggers: Trigger[] = [
    { label: 'Table', value: 1 },
    { label: 'Cards', value: 2 },
];

export default function Forms() {

    const [currentView, setCurrentView] = useState<number>(1);

    const handleViewChange = (value: number) => {
        setCurrentView(value);
    };

    return <React.Fragment>

        <section className='w-full space-y-10'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>

                <MainTitle title='All Forms' />

                <Link to={ROUTES.FORMS_BUILDER} className='w-fit'>
                    <MainBtn title='Add New Form' icon={IoIosAddCircleOutline} />
                </Link>

            </div>

            <div className='w-full space-y-5'>

                <TriggerBtn 
                    triggers={triggers} 
                    onTriggerChange={handleViewChange}
                    defaultValue={1}
                />

                {currentView === 1 && <Table data={AllFormsData} columns={formColumns} />}

                {currentView === 2 && <div className='w-full grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[690px]:grid-cols-1'>
                    {AllFormsData.map((item, idx) => (
                        <FormCard key={idx} data={item} />
                    ))}
                </div>}

            </div>

        </section>

    </React.Fragment>

}
