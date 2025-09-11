import React from 'react'
import MainTitle from '../../../components/titles/MainTitle'
import MainBtn from '../../../components/buttons/MainBtn'
import { LuLayoutGrid } from 'react-icons/lu'
import { ROUTES } from '../../../constants/Routes'
import { Link } from 'react-router-dom'

export default function LatestForms() {

    return <React.Fragment>

        <section className='w-full space-y-5'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>

                <MainTitle title='Latest Forms' />

                <Link to={ROUTES.FORMS} className='w-fit'>
                    <MainBtn title='All Forms' icon={LuLayoutGrid} />
                </Link>

            </div>

            <div className='w-full grid grid-cols-3 gap-5'>

                

            </div>

        </section>

    </React.Fragment>

}
