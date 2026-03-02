import React from 'react'

const Button = ({ setApiEndPoint, item }) => {
    return (
        <button
            onClick={(e) => {
                setApiEndPoint(item);
            }}
        >{item}</button>
    )
}

export default Button