import React from 'react'

const Price = ({ inputChange }) => {

    return (
        <div className="ui input focus">
            <input
                type='number'
                onChange={e => inputChange(e.target.value)}
            />
        </div>
    )

}

export default Price