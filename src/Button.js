import React from 'react'

const Button = ({ setApiEndPoint, item }) => {
    return (
        <button
            onClick={(e) => {
                setApiEndPoint(item.endpoint);
            }}
        >{item.title}</button>
    )
}

export default Button