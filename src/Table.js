import React from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

const Table = ({ items }) => {
  return (
    <table>
        <TableHead items={items} />
        <tbody>
            {items.map(item => (
                <TableRow key={item.id} item={item} />
            ))}
        </tbody>
    </table>
  )
}

export default Table;