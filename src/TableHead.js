import React from 'react';
import TableHeadCell from './TableHeadCell';

const TableHead = ({ items }) => {

    return (
        <thead>
            <tr>
                {items.length ? (
                    <TableHeadCell items={items}/>
                ) : null}
            </tr>
        </thead>
    )
}

export default TableHead