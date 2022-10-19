import React from 'react'

const Button = ({ button, onButtonSub }) => {
    const onButtonSubmit = event => {
        event.preventDefault()

        onButtonSub()
    }

    if (!button) {
        button = 'Exchange'
    }
    return (
        <button
            className='ui button'
            onClick={onButtonSubmit}
        >
            { button }
        </button>
    )
}

export default Button