import React from 'react'

const Content = ({items}) => {

    return (
        <section>
            {items.length ? (
                <ul>
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className='listItem'
                        >{`${JSON.stringify(item)}`}</li>
                    ))}
                </ul>
            ) : (
                <p style={{marginTop: '1rem'}}>Nothing to show</p>
            )}
        </section>
    )
}

export default Content