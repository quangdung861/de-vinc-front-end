import { styled } from "styled-components";

export const Wraper = styled.div`
    display: flex;
    background-color: #F1F1F1;
    max-width: 2480px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    .main {
        width: calc(100% - 230px);
        transition: width 0.3s ease;
    }
    .main.disabled {
        width: calc(100% - 52px);
    }
`