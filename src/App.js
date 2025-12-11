import { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';

const App = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);

    const endPoints = [
        {item: 'users'}, 
        {item: 'posts'}, 
        {item: 'comments'}
    ];

    useEffect(() => {
        
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/${reqType}`);
                const data = await response.json();
                setItems(data);
            } catch (err) {
                
            }
        }

        fetchItems();

    }, [reqType]);

    return (
        <div className="App">
            <Form 
                reqType={reqType}
                setReqType={setReqType}
                endPoints={endPoints}
            />

            <main>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {JSON.stringify(item)}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default App;