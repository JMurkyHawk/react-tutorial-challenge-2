import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ apiData }) => {
  return (
    <>
        {apiData.map((item, rIndex) => (
            <tr key={`${rIndex}`}>
                {Object.entries(item).map(([key, value], cIndex) => (
                    <TableCell 
                        cIndex={cIndex} 
                        value={value} 
                    />
                ))}
            </tr>
        ))}
    </>
  )
}

export default TableRow