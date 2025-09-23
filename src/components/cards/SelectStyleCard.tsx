import React from 'react'
import type { SelectStyleCardProps } from '../../types/propsTypes'
import { FaCheck } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import Animations from '../../animations/Animations'

export default function SelectStyleCard({ title, description, color, isSelected }: SelectStyleCardProps) {

    return <React.Fragment>

        <div 
            className={`
                h-full p-2.5 rounded-lg bg-[var(--white-color)] border space-y-2.5 duration-300 flex flex-col
                ${isSelected ? 'border' : 'border border-[var(--gray-color)]'} relative cursor-pointer
            `}
            style={isSelected ? { borderColor: color } : {}}
        >

            <AnimatePresence>

                {isSelected && (
                    <motion.div 
                        variants={Animations.opacityVariants}
                        initial='hidden' animate='visible' exit='exit'
                        className='absolute top-2.5 right-2.5 w-5 h-5 rounded-full duration-300 flex items-center justify-center' 
                        style={{ backgroundColor: color }}
                    >
                        <FaCheck size={10} color='var(--white-color)' />
                    </motion.div>
                )}

            </AnimatePresence>

            <div className='w-8 h-8 rounded-md' style={{ backgroundColor: color }} />

            <div className='flex-1'>
                <p className='text-sm font-medium text-[var(--secondary-color)]'>{title}</p>
                <p className='text-xs text-[var(--secondary-color)] opacity-80'>{description}</p>
            </div>

        </div>

    </React.Fragment>

}
