import React from 'react'

const Navigation = ({endPoint, getUsers, getPosts, getComments}) => {
    return (
        <nav>
            <ul>
                <li>
                    <button 
                        onClick={getUsers}
                        className={endPoint === 'users' ? 'active' : null}
                    >users</button>
                </li>
                <li>
                    <button 
                        onClick={getPosts}
                        className={endPoint === 'posts' ? 'active' : null}
                    >posts</button>
                </li>
                <li>
                    <button 
                        onClick={getComments}
                        className={endPoint === 'comments' ? 'active' : null}
                    >comments</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation