import React from 'react';

const TableHead = ({ items }) => {
    
    return (
        <>
            {items.length ?
                <tr>
                    {Object.keys(items[0]).map((item, i) => (
                        <th 
                            key={i} 
                            scope="col"
                        >{item}</th>
                    ))}
                </tr>
            : null }
        </>
    )
}

export default TableHead;