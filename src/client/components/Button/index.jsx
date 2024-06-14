import React from 'react'
import { MainContainer, MainContent, Wrapper } from './styles'

const Button = ({ text, action }) => {
    return (
        <Wrapper>
            <MainContainer>
                <MainContent>
                    {text}
                </MainContent>
            </MainContainer>
        </Wrapper>
    )
}

export default Button