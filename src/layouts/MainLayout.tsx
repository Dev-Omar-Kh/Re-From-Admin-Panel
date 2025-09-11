import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/side-bar/SideBar'
import MobileNav from '../components/side-bar/MobileNav'

export default function MainLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <React.Fragment>

        <section className='w-full h-[100dvh] flex'>

            <aside 
                className={`
                    w-2xs h-full border-r border-[var(--gray-color)] bg-[var(--white-color)] max-[1110px]:fixed 
                    max-[1110px]:z-50 max-[1110px]:left-0 max-[1110px]:top-20 max-[1110px]:w-full transition-all duration-300 ease-in-out
                    ${isMenuOpen 
                        ? 'max-[1110px]:translate-x-0 max-[1110px]:opacity-100' 
                        : 'max-[1110px]:-translate-x-full max-[1110px]:opacity-0'
                    }
                `}
            >
                <SideBar setIsMenuOpen={setIsMenuOpen} />
            </aside>

            <main 
                className='
                    layout-main-w h-full px-5 py-8 bg-[var(--primary-color)] overflow-y-auto 
                    max-[1110px]:!w-full space-y-5 max-[1110px]:px-0 max-[1110px]:pt-20
                '
            >

                <div className='max-[1110px]:block hidden'>
                    <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>

                <div className='max-[1110px]:px-5 max-[1110px]:pb-8'>
                    <Outlet />
                </div>

            </main>

        </section>

    </React.Fragment>

}
