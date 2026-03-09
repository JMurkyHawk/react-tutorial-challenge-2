import React from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';
import { useEffect, useState } from 'react';

const App = () => {
    const API_URL = "https://jsonplaceholder.typicode.com";
    const endpoints = [
        {
            endpoint: 'users',
            title: 'users'
        }, { 
            endpoint: 'posts',
            title: 'posts' 
        }, {
            endpoint: 'comments',
            title: 'comments'
        }
    ];

    const [apiEndpoint, setApiEndpoint] = useState('users');
    const [apiData, setApiData] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/${apiEndpoint}`);
                if (!response.ok) throw Error('Did not receive expected data');
                const listItems = await response.json();
                setApiData(listItems);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            }
        }

        fetchItems();
    }, [apiEndpoint]);


    return (
        <main>
            <Form 
                apiEndpoint={apiEndpoint} 
                setApiEndpoint={setApiEndpoint} 
                endpoints={endpoints} 
            />
            <Table 
                apiData={apiData} 
                fetchError={fetchError} 
            />
        </main>
    )
}

export default App