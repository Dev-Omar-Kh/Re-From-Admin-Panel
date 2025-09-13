import React from 'react'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/Routes'
import MainBtn from '../buttons/MainBtn'
import { LuFileText, LuPencil, LuTrash } from 'react-icons/lu'

export default function ActionsBox({ onClose }: { onClose: () => void }) {

    return <React.Fragment>

        <div className='space-y-2.5'>

            <div className="flex items-center justify-between">

                <h3 className="text-2xl font-semibold text-[var(--secondary-color)]">Form Actions</h3>

                <button
                    onClick={onClose}
                    className="
                        p-1 bg-[var(--gray-color)] 
                        rounded-full w-8 h-8 flex items-center justify-center text-[var(--secondary-color)] cursor-pointer
                    "
                >
                    <IoClose className="text-xl" />
                </button>

            </div>

            <div className='w-full h-[0.0625rem] bg-[var(--gray-color)] rounded-4xl'></div>

            <div className='flex flex-col gap-2.5'>

                <Link to={ROUTES.FORMS_BUILDER} className='w-full'>
                    <MainBtn icon={LuPencil} isPrimary={false} isSecondary={true} title='Edit' isSmall={true} start={true} />
                </Link>

                <Link to={`${ROUTES.RESPONSES}/${1}`} className='w-full'>
                    <MainBtn icon={LuFileText} isPrimary={false} isSecondary={true} title='Responses' isSmall={true} start={true} />
                </Link>

                <button className='w-full'>
                    <MainBtn icon={LuTrash} isPrimary={false} isDanger={true} title='Delete' isSmall={true} start={true} />
                </button>

            </div>

        </div>

    </React.Fragment>

}
