import React from 'react';
import TableHeading from './TableHeading';
import TableRow from './TableRow';

const Table = ({ items }) => {

    return (
        <>
            {items.length ? (
                <table>
                    <TableHeading
                        items={items}
                    />
                    <tbody>
                        {items.map((item, index) => (
                            <TableRow 
                                key={index}
                                item={item}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={{marginTop: '1rem'}}>No data to show</p>
            )}
        </>
    )
}

export default Table;