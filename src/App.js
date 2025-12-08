import { useState, useEffect } from 'react';

const App = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        const fetchItems = () => {

        }

        fetchItems();

    }, [reqType]);

    return (
        <div className="App">

        </div>
    )
}

export default App;