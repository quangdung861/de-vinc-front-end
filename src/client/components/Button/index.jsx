import React from 'react'

const Button = ({ text, action }) => {
    return (
        <div className="--btn-default" onClick={() => action && action()}>
            {text}
        </div>
    )
}

export default Button