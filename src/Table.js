import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = ({ apiData, fetchError }) => {

    return (
        <>
            {apiData.length ? (
                <table>
                    <TableHead 
                        apiData={apiData} 
                    />
                    <tbody>
                        <TableRow 
                            apiData={apiData} 
                        />
                    </tbody>
                </table>
            ) : (
                <p style={{'color': 'red'}}>{`Error: ${fetchError}`}</p>
            )}
        </>
    )
}

export default Table