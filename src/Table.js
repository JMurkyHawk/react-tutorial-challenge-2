import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = ({ items }) => {
    return (
        <main>
            <table>
                <thead>
                    <TableHead items={items} />
                </thead>
                <tbody>
                    <TableRow items={items} />
                </tbody>
            </table>
        </main>
    )
}

export default Table;