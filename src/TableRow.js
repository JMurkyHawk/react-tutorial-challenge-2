import React from 'react'

const TableRow = ({ item }) => {

    let valueArray = [];
    Object.values(item).forEach((value) => {
        valueArray.push(value);
    });

    return (
        <tr className='listItem'>
            {valueArray.map((val, index) => (
                <td
                    key={index}
                >{JSON.stringify(val)}
                </td>
            ))}
            
        </tr>
    )
}

export default TableRow;