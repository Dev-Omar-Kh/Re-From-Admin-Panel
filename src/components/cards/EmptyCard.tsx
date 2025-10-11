import React from 'react';
import { LuInbox } from 'react-icons/lu';

type EmptyCardProps = {
    className?: string;
    title?: string;
    subtitle?: string;
}

export default function EmptyCard({ className = '', title = 'No Content Found', subtitle = 'No content found yet, You can add a new content.' }: EmptyCardProps) {

    return <React.Fragment>

        <div className={`p-8 rounded-xl ${className}`}>

            <div className="flex flex-col items-center justify-center text-center gap-5">

                <div className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(to top, var(--blue-color), var(--green-color))', opacity: 0.25 }}>
                    <div className="w-16 h-16 rounded-full bg-[var(--primary-color)] flex items-center justify-center shadow-sm">
                        <LuInbox size={34} className="opacity-70" color="var(--secondary-color)" />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[var(--secondary-color)] opacity-90">{title}</h3>
                    <p className="text-sm text-[var(--secondary-color)] opacity-70">{subtitle}</p>
                </div>

            </div>

        </div>

    </React.Fragment>
}