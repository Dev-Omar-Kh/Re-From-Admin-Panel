import React, { useState } from 'react'
import MainBtn from '../../buttons/MainBtn'
import { ROUTES } from '../../../constants/Routes'
import { Link } from 'react-router-dom'
import { LuEye, LuLayoutGrid } from 'react-icons/lu'
import PopUp from '../../pop-up/PopUp'
import ActionsBox from '../../pop-up/ActionsBox'
import { AnimatePresence } from 'framer-motion'

export default function ActionsTd() {

    const [isActionsBoxOpen, setIsActionsBoxOpen] = useState(false);

    return <React.Fragment>

        <AnimatePresence>
            {isActionsBoxOpen &&
                <PopUp onClose={() => setIsActionsBoxOpen(false)}>
                <ActionsBox onClose={() => setIsActionsBoxOpen(false)} />
            </PopUp>
            }
        </AnimatePresence>

        <div className='w-full flex items-center justify-center gap-2.5'>

            <Link to={ROUTES.FORM_PREVIEW} className='w-fit'>
                <MainBtn icon={LuEye} isPrimary={true} isSmall={true} />
            </Link>

            <button onClick={() => setIsActionsBoxOpen(true)}>
                <MainBtn icon={LuLayoutGrid} isPrimary={false} isSecondary={true} isSmall={true} />
            </button>

            {/* <Link to={ROUTES.FORMS_BUILDER} className='w-fit'>
                <MainBtn icon={LuPencil} isPrimary={false} isSecondary={true} isSmall={true} />
            </Link>

            <Link to={`${ROUTES.RESPONSES}/${1}`}>
                <MainBtn icon={LuFileText} isPrimary={false} isSecondary={true} isSmall={true} />
            </Link>

            <button className='w-fit'>
                <MainBtn icon={LuTrash} isPrimary={false} isDanger={true} isSmall={true} />
            </button> */}

        </div>

    </React.Fragment>

}
