import React from 'react'

const Dropdown = ({ currencies, dropdownChange }) => {
    if (! currencies.length) return <div>Loading...</div>

    return (
        <select
            className='ui search dropdown'
            onChange={e => dropdownChange(e.target.value)}
        >
            {currencies.map((currency, index) => (
                <option value={currency} key={index}>{currency}</option>
            ))}
        </select>
    )
}

export default Dropdown
