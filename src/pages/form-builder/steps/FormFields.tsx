import React from 'react'
import { LuClipboardList, LuPlus } from 'react-icons/lu'
import SubMainTitle from '../../../components/titles/SubMainTitle'
import MainBtn from '../../../components/buttons/MainBtn'
// import EmptyCard from '../../../components/cards/EmptyCard'
import FieldConfigCard from '../../../components/cards/FieldConfigCard'

export default function FormFields() {

    return <React.Fragment>

        <section className='w-full space-y-5 rounded-lg bg-[var(--white-color)] p-5 shadow-md'>

            <div className='flex flex-wrap items-center justify-between gap-2.5'>
                <SubMainTitle title='Form Fields' icon={LuClipboardList} />
                <button className='w-fit'>
                    <MainBtn title='Add Field' icon={LuPlus} isSmall={true} />
                </button>
            </div>

            {/* <EmptyCard title='No fields yet' subtitle='Add your first field to get started building your form' /> */}

            <FieldConfigCard />

        </section>

    </React.Fragment>

}
