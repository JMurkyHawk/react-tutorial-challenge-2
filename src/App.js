import Table from './Table';
import Navigation from './Navigation';
import { useState, useEffect } from 'react';

function App() {
    const API_URL = "https://jsonplaceholder.typicode.com/";

    const [items, setItems] = useState([]);
    const [endPoint, setEndPoint] = useState('users');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchItems = async (useEndPoint) => {
        try {
            const response = await fetch(`${API_URL}${useEndPoint}`);
            if (!response.ok) throw Error(`Didn't receive expected data`);
            const listItems = await response.json();
            setItems(listItems);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchItems(endPoint);
    }, [endPoint]);

    const getUsers = () => {
        setEndPoint('users');
    };

    const getPosts = () => {
        setEndPoint('posts');
    };
    
    const getComments = () => {
        setEndPoint('comments');
    };

    return (
        <div className="App">
            <main>                
                <Navigation 
                    endPoint={endPoint}
                    getUsers={getUsers}
                    getPosts={getPosts}
                    getComments={getComments}
                />
                <section>
                    {fetchError && 
                        <p style={{color: 'red'}}>
                            {`Error: ${fetchError}`}
                        </p>
                    }
                    {isLoading && <p>Loading items...</p>}
                    {!fetchError && !isLoading && 
                        <Table 
                            items={items}
                        />
                    }
                </section>
            </main>
        </div>
    );
}

export default App;
