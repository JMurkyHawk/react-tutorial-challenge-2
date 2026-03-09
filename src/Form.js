import React from 'react';
import Button from './Button';

const Form = ({ apiEndpoint, setApiEndpoint, endpoints }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ul>
                {endpoints.map((item, i) => (
                    <li key={i}>
                        <Button 
                            apiEndpoint={apiEndpoint} 
                            setApiEndpoint={setApiEndpoint} 
                            item={item} 
                        />
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default Form