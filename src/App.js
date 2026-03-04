import React from 'react';
import Form from './Form';
import { useEffect, useState } from 'react';

const App = () => {
    const API_URL = "https://jsonplaceholder.typicode.com";
    const endPoints = ['users', 'posts', 'comments'];

    const [apiEndPoint, setApiEndPoint] = useState('users');
    const [apiData, setApiData] = useState({});
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/${apiEndPoint}`);
                if (!response.ok) throw Error('Did not receive expected data');
                const listItems = await response.json();
                setApiData(listItems);
                setFetchError(null);
            } catch (err) {
                console.log(`TEST : ${err}`)
                setFetchError(err.message);
            }
        }

        fetchItems();
    }, [apiEndPoint]);


    return (
        <main>
            <Form 
                setApiEndPoint={setApiEndPoint} 
                endPoints={endPoints}
            />
            <section>
                    {apiData.length ? (
                        <ul>
                            {apiData.map((item) => (
                                <li key={item.id}>
                                    {JSON.stringify(item)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{'color': 'red'}}>{`Error: ${fetchError}`}</p>
                    )}
            </section>
        </main>
    )
}

export default App