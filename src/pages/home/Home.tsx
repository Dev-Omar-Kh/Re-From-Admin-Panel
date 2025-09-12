import React from 'react';
import Statistics from './sections/Statistics';
import LatestForms from './sections/LatestForms';

export default function Home() {

    return <React.Fragment>

        <section className='w-full space-y-10'>

            <Statistics />

            <LatestForms />

        </section>

    </React.Fragment>

}
