import React from 'react';
import TableRowCell from './TableRowCell';

const TableRow = ({ items }) => {
    
    return (
        <>
            {items.map((item, i) => (
                <tr key={i}>
                    <TableRowCell item={item} />
                </tr>
            ))}
        </>
    )
}

export default TableRow;