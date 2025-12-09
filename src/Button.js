import React from 'react'

const Button = ({ reqType, setReqType, data }) => {
    return (
        <button 
            onClick={() => setReqType(data)}
            style={(reqType === data) ? 
                {
                    backgroundColor: '#030303', 
                    color: '#fdfdfd'
                } : null}
        >
            {data}
        </button>
    )
}

export default Button;