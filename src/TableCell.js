import React from 'react'

const TableCell = ({ cIndex, value }) => {
    return (
        <td key={`${cIndex}`}>
            {JSON.stringify(value)}
        </td>
    )
}

export default TableCell