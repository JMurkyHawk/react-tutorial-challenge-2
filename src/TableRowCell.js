import React from 'react'

const TableRowCell = ({ item }) => {
    
    return (
        <>
            {Object.entries(item).map((subItem, i) => (
                <td key={i}>
                    {JSON.stringify(subItem[1])}
                </td>
            ))}
        </>
    )
}

export default TableRowCell;