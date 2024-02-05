import React from 'react';
import NavButton from './NavButton';

const Navigation = ({endPoint, getUsers, getPosts, getComments}) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavButton 
                        endPoint={endPoint}
                        clickAction={getUsers}
                        label='users'
                    />
                </li>
                <li>
                    <NavButton 
                        endPoint={endPoint}
                        clickAction={getPosts}
                        label='posts'
                    />
                </li>
                <li>
                    <NavButton 
                        endPoint={endPoint}
                        clickAction={getComments}
                        label='comments'
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation