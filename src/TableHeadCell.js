import React from 'react';

const TableHeadCell = ({ items }) => {
    return (
        Object.keys(items[0]).map(item => (
            <th 
                key={Object.keys(items[0]).indexOf(item)}
                scope="col"
            >
                {item}
            </th>
        ))
    )
}

export default TableHeadCell;