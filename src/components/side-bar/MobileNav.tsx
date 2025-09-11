import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/Routes'

// ====== images ====== //
import logo from '../../assets/images/reform-logo.png';

export default function MobileNav({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {


    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    return <React.Fragment>

        <div 
            className={`
                fixed top-0 left-0 right-0 z-50 p-5 w-full bg-[var(--white-color)] flex items-center justify-between
                ${isMenuOpen ? 'shadow-none' : 'shadow-md'}
            `}
        >

            <Link to={ROUTES.HOME} className='h-10'>
                <img src={logo} alt="logo" className='h-full' />
            </Link>

            <button
                onClick={toggleMenu}
                className="flex flex-col items-center justify-center gap-1.5 p-2 z-50"
                aria-label="Toggle menu"
            >
                <span
                    className={`
                        w-8 h-1 rounded-full transition-all duration-300 bg-[var(--secondary-color)]
                        ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}
                    `}
                />

                <span
                    className={`
                        w-8 h-1 rounded-full transition-all duration-300 bg-[var(--secondary-color)]
                        ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                    `}
                />

                <span
                    className={`
                        w-8 h-1 rounded-full transition-all duration-300 bg-[var(--secondary-color)]
                        ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}
                    `}
                />
            </button>

        </div>

    </React.Fragment>

}
