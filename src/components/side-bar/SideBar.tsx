import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { ROUTES } from '../../constants/Routes';
import { VscTools } from 'react-icons/vsc';
import { LuLayoutGrid, LuSettings } from 'react-icons/lu';

// ====== images ====== //
import logo from '../../assets/images/reform-logo.png';

// ====== data ====== //

const navLinks = [

    {label: 'Home', icon: GrHomeRounded, to: ROUTES.HOME},
    {label: 'Forms', icon: LuLayoutGrid, to: ROUTES.FORMS},
    {label: 'Forms Builder', icon: VscTools, to: ROUTES.FORMS_BUILDER},
    {label: 'Settings', icon: LuSettings, to: ROUTES.SETTINGS},

];

export default function SideBar({setIsMenuOpen}: {setIsMenuOpen: (isMenuOpen: boolean) => void}) {

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    return <React.Fragment>

        <div className='w-full h-full overflow-hidden'>

            <div className='w-full h-24 border-b border-[var(--gray-color)] p-5 max-[1110px]:hidden'>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="logo" className='h-full' />
                </Link>
            </div>

            <nav className='w-full nav-h p-5' onClick={handleCloseMenu}>

                <ul className='w-full h-full overflow-y-auto scrollbar-hide space-y-5'>

                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink 
                                to={link.to} 
                                className={({ isActive }) => `
                                    px-5 py-2.5 w-full flex items-center gap-2.5 bg-[var(--primary-color)] relative isolate overflow-hidden
                                    font-medium text-[var(--secondary-color)] rounded-lg hover:before:opacity-100 duration-300
                                    before:content-[""] before:absolute before:w-full before:h-full before:inset-0 before:z-[-1]
                                    before:bg-gradient-to-tl before:opacity-0 before:rounded-lg hover:text-[var(--white-color)]
                                    before:from-[var(--blue-color)] before:to-[var(--green-color)] before:duration-300
                                    ${isActive ? 'before:opacity-100 text-[var(--white-color)]' : ''}
                                
                                `}
                            >
                                <link.icon size={20} />
                                <span>{link.label}</span>
                            </NavLink>
                        </li>
                    ))}

                </ul>

            </nav>

        </div>

    </React.Fragment>

}
