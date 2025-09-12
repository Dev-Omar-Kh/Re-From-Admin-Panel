import React from 'react'
import MainTitle from '../../../components/titles/MainTitle'
import MainBtn from '../../../components/buttons/MainBtn'
import { LuLayoutGrid } from 'react-icons/lu'
import { ROUTES } from '../../../constants/Routes'
import { Link } from 'react-router-dom'
import FormCard from '../../../components/cards/FormCard'

// ====== data ====== //

const latestFormsData = [
    {
        id: 1,
        image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740',
        status: 'Active',
        primaryColor: '#dda15e',
        title: 'Hiring Questionnaire',
        createdAt: '2025-09-12T09:30:00Z',
        EndAt: '2025-09-20T09:30:00Z',
        users: 250,
        responses: 680,
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-vector/gradient-business-logo-template_23-2149396937.jpg?w=740',
        status: 'Inactive',
        primaryColor: '#264653',
        title: 'Customer Feedback Survey',
        createdAt: '2025-08-25T14:00:00Z',
        EndAt: '2025-09-01T14:00:00Z',
        users: 120,
        responses: 300,
    },
    {
        id: 3,
        image: 'https://img.freepik.com/free-vector/technology-logo-template_23-2149209060.jpg?w=740',
        status: 'Active',
        primaryColor: '#03045e',
        title: 'Event Registration Form',
        createdAt: '2025-09-01T10:15:00Z',
        EndAt: '2025-09-30T23:59:00Z',
        users: 480,
        responses: 920,
    },
    {
        id: 4,
        image: 'https://img.freepik.com/free-vector/creative-education-logo-template_23-2149209260.jpg?w=740',
        status: 'Inactive',
        primaryColor: '#344e41',
        title: 'Employee Satisfaction Survey',
        createdAt: '2025-07-18T08:45:00Z',
        EndAt: '2025-08-18T08:45:00Z',
        users: 75,
        responses: 150,
    },
    {
        id: 5,
        image: 'https://img.freepik.com/free-vector/medical-logo-template_23-2149327343.jpg?w=740',
        status: 'Active',
        primaryColor: '#fca311',
        title: 'Product Feedback Form',
        createdAt: '2025-09-05T12:30:00Z',
        EndAt: '2025-09-25T12:30:00Z',
        users: 600,
        responses: 1250,
    },
    // {
    //     id: 6,
    //     image: 'https://img.freepik.com/free-vector/gradient-abstract-logo-template_23-2149369004.jpg?w=740',
    //     status: 'Closed',
    //     primaryColor: '#fb6f92',
    //     title: 'Training Registration',
    //     createdAt: '2025-06-10T09:00:00Z',
    //     EndAt: '2025-07-10T09:00:00Z',
    //     users: 320,
    //     responses: 500,
    // },
];

export default function LatestForms() {

    return <React.Fragment>

        <section className='w-full space-y-5'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>

                <MainTitle title='Last Forms' />

                <Link to={ROUTES.FORMS} className='w-fit'>
                    <MainBtn title='All Forms' icon={LuLayoutGrid} />
                </Link>

            </div>

            <div 
                className='
                    w-full grid grid-cols-3 gap-5 max-[1200px]:grid-cols-2 
                    max-[1110px]:grid-cols-3 max-[900px]:grid-cols-2 max-[690px]:grid-cols-1
                '
            >

                {latestFormsData.map((item, idx) => (
                    <FormCard key={idx} data={item} />
                ))}

            </div>

        </section>

    </React.Fragment>

}
