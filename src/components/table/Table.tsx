import React from 'react'
import StatusTd from './columns-types/StatusTd';
import DateTd from './columns-types/DateTd';
import NumbersTd from './columns-types/NumbersTd';
import TextTd from './columns-types/TextTd';
import type { TableProps, Column } from '../../types/propsTypes';

export default function Table<T extends { id: React.Key }>({ data, columns }: TableProps<T>) {

    const renderCell = (column: Column<T>, item: T) => {

        const cellValue = column.cell(item);

        if (React.isValidElement(cellValue)) {
            return cellValue;
        }

        switch (column.type) {
            case 'status':
                return <StatusTd title={String(cellValue)} variant='primary' />;
            case 'date':
                return <DateTd date={String(cellValue).split('T')[0]} time={String(cellValue).split('T')[1].slice(0, 5)} />;
            case 'number':
                return <NumbersTd number={Number(cellValue)} format='compact' />;
            case 'text':
                return <TextTd text={String(cellValue)} />;
            default:
                return cellValue;
        }

    };

    return <React.Fragment>

        <div className='overflow-x-auto scrollbar-hide rounded-lg shadow-md'>

            <table className='min-w-full  bg-[var(--white-color)]'>

                <thead className='border-b border-[var(--gray-color)]'>

                    <tr>
                        {columns.map((column, index) => (
                            <th 
                                key={index} 
                                className='
                                    whitespace-nowrap p-5 font-medium text-[var(--secondary-color)]
                                    border-l border-[var(--gray-color)] first:border-l-0
                                '
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>

                </thead>

                <tbody>

                    {data.map((item) => (
                        <tr key={item.id}>
                            {columns.map((column, index) => (
                                <td 
                                    key={index} 
                                    className='
                                        whitespace-nowrap px-5 py-2.5 border-l 
                                        border-[var(--gray-color)] first:border-l-0 border-b
                                    '
                                >
                                    {renderCell(column, item)}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>


    </React.Fragment>

}
