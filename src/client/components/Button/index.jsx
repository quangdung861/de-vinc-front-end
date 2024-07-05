import React from 'react'
import { MainContainer, MainContent, Wrapper } from './styles'

const Button = ({ text, action }) => {
    return (
        <Wrapper>
            <div className="btn-default" onClick={() => action && action()}>
                {text}
            </div>
        </Wrapper>
    )
}

export default Button