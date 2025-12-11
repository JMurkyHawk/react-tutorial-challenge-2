import React from 'react'
import Button from './Button';

const Form = ({ reqType, setReqType, endPoints }) => {
    return (
        <form onSubmit={(e) => e.preventDefault() }>
            <nav>
                <ul>
                    {endPoints.map((endPoint, i) => (
                        <li>
                            <Button 
                                key={i}
                                reqType={reqType}
                                setReqType={setReqType}
                                data={endPoint.item}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </form>
    )
}

export default Form