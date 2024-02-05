import React from 'react'

const TableHeading = ({ items }) => {

    let keyArray = [];
    Object.keys(items[0]).forEach((key) => {
        keyArray.push(key);
    });

    return (
        <thead>
            <tr>
                {keyArray.map((item, index) => (
                    <th
                        key={index}
                        scope='col'
                    >{item}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeading;