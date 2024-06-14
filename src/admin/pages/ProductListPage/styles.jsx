import styled, { Styled } from "styled-components";

export const Wraper = styled.div`
    padding: 0 32px 40px;
    .menu-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    .table-container {
        min-height: calc(100vh - 172px);
        background-color: #fff;
        border-radius: 2px;
        overflow: hidden;
        box-shadow: var(--box-shadow-default);
    }
`