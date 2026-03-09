import React from 'react'

const TableHead = ({ apiData }) => {

    return (
        <thead>
            <tr>
                {Object.keys(apiData[0]).map((key, i) => (
                    <th key={`h${i}`}>{key}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead