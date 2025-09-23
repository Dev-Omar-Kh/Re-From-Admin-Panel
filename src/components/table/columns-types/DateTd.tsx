import React from 'react';
import TextTd from './TextTd';
import type { DateTdProps } from '../../../types/propsTypes';

export default function DateTd({ date, time, isSmall = false }: DateTdProps) {

    const formattedDate = React.useMemo(() => {

        if (!date) return null

        try {

            const dateObj = new Date(date);

            if (isNaN(dateObj.getTime())) {
                console.error('Invalid date value provided to DateTd:', date)
                return date
            }

            const parts = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }).formatToParts(dateObj);

            const month = parts.find((part) => part.type === 'month')?.value
            const day = parts.find((part) => part.type === 'day')?.value
            const year = parts.find((part) => part.type === 'year')?.value

            if (month && day && year) {
                return `${day} ${month} - ${year}`
            }

            return dateObj.toLocaleDateString('en-US');

        } 

        catch (error) {

            console.error('Error formatting date in DateTd:', error)
            return date

        }

    }, [date]);

    const formattedTime = React.useMemo(() => {

        if (!time) return null

        try {

            const timeObj = new Date(`1970-01-01T${time}`);

            if (isNaN(timeObj.getTime())) {
                console.error('Invalid time value provided to DateTd:', time)
                return time
            }

            return timeObj.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            });

        } 

        catch (error) {

            console.error('Error formatting time in DateTd:', error)
            return time

        }

    }, [time]);

    return <React.Fragment>

        <div className="w-full flex items-center justify-center gap-1.5">
            {formattedDate && <TextTd text={formattedDate} isSmall={isSmall} />}
            {formattedTime && <TextTd text={`( ${formattedTime} )`} isSmall={isSmall} />}
        </div>

    </React.Fragment>

}
