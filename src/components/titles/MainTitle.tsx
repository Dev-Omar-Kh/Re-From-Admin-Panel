import React from 'react'
// import { useTranslation } from 'react-i18next';

export default function MainTitle({ title }: { title: string }) {

    // const { i18n, t } = useTranslation();

    return <React.Fragment>

        <h2 className={`text-3xl font-bold bg-gradient-to-b text-[var(--secondary-color)]`}>
            {title}
        </h2>

    </React.Fragment>

}