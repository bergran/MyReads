import React from 'react'


const Rate = props => {
    const { rate } = props
    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rate) {
            stars.push(<div key={i} className='rate star'></div>)
        } else {
            stars.push(<div key={i} className='rate nstar'></div>)
        }
    }
    return (
        <span className='rate-container'>
            { stars }
        </span>
    )
}

export { Rate }