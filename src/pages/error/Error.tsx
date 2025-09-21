import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Animations from '../../animations/Animations';
import { ROUTES } from '../../constants/Routes';
import React from 'react';
import { VscError } from "react-icons/vsc";
import MainBtn from '../../components/buttons/MainBtn';

export default function Error() {
    const { 
        errorPageVariants, 
        toTopVariants, 
        buttonHover,
        scaleVariants
    } = Animations;

    return (
        <React.Fragment>
            <section className='w-full h-[calc(100dvh-6rem)] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden' style={{ backgroundColor: 'var(--primary-color)' }}>
                
                {/* Background Text */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    variants={scaleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-[15rem] sm:text-[20rem] lg:text-[25rem] font-black" style={{ color: 'var(--gray-color)' }}>
                        404
                    </h1>
                </motion.div>
                
                {/* Foreground Content */}
                <motion.div
                    variants={errorPageVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center relative z-10 p-6 sm:p-8 rounded-lg w-full max-w-lg"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)' }}
                >
                    <motion.div variants={toTopVariants}>
                        <VscError className="mx-auto text-5xl sm:text-6xl" style={{ color: 'var(--red-color)'}}/>
                    </motion.div>
                    
                    <motion.h2 
                        variants={toTopVariants} 
                        className="text-3xl sm:text-4xl font-semibold mt-4"
                        style={{ color: 'var(--secondary-color)' }}
                    >
                        Oops! Page Not Found
                    </motion.h2>

                    <motion.p 
                        variants={toTopVariants} 
                        className="mt-4 text-base sm:text-lg max-w-md mx-auto"
                        style={{ color: 'var(--opacity-dark-color)' }}
                    >
                        It seems you've taken a wrong turn. The page you are looking for does not exist or has been moved.
                    </motion.p>
                    
                    <motion.div variants={toTopVariants}>
                        <Link to={ROUTES.HOME}>
                            <motion.button
                                variants={buttonHover}
                                whileHover="whileHover"
                                whileTap="whileTap"
                                className='mt-8'
                            >
                                <MainBtn title="Back to Homepage" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </React.Fragment>
    );
}
