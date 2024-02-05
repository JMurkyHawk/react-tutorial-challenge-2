import React from 'react'

const NavButton = ({ endPoint, clickAction, label }) => {

    let current = endPoint === label ? true : false;

    return (
        <button 
            onClick={clickAction}
            className={current ? 'active' : null}
            disabled={current ? true : false}
            title={current ? 'Currently viewing' : `Get ${label} data`}
        >{label}</button>
    )
}

export default NavButton