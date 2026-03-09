import React from 'react';
import ListItem from './ListItem';

const List = ({ apiData, fetchError }) => {
    return (
        <section>
            {apiData.length ? (
                <ul>
                    {apiData.map((item) => (
                        <ListItem
                            key={item.id} 
                            item={item} 
                        />
                    ))}
                </ul>
            ) : (
                <p style={{'color': 'red'}}>{`Error: ${fetchError}`}</p>
            )}
        </section>
    )
}

export default List