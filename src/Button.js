import React from 'react'

const Button = ({ apiEndpoint, setApiEndpoint, item }) => {
    return (
        <button 
            className={item.endpoint === apiEndpoint ? 'selected' : null }
            type="button" 
            onClick={(e) => {
                setApiEndpoint(item.endpoint);
            }}
        >{item.title}</button>
    )
}

export default Button