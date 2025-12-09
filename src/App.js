import { useState, useEffect } from 'react';
import Button from './Button';

const App = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);

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
            <form onSubmit={(e) => e.preventDefault() }>
                <nav>
                    <ul>
                        <li>
                            <Button 
                                reqType={reqType}
                                setReqType={setReqType}
                                data='users'
                            />
                        </li>
                        <li>
                            <Button 
                                reqType={reqType}
                                setReqType={setReqType}
                                data='posts'
                            />
                        </li>
                        <li>
                            <Button 
                                reqType={reqType}
                                setReqType={setReqType}
                                data='comments'
                            />
                        </li>
                    </ul>
                </nav>
            </form>

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