import React from 'react';
import Button from './Button';

const Form = ({ setApiEndPoint, endPoints }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ul>
                {endPoints.map((item, i) => (
                    <li key={i}>
                        <Button 
                            setApiEndPoint={setApiEndPoint} 
                            item={item} 
                        />
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default Form