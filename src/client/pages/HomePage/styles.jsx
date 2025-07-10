import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
.wraper-typical-products {
    margin-top: 24px;
    padding: 0 64px 64px;
}

@media only screen and (max-width: 768px) { 
    .wraper-typical-products {
    margin-top: 24px;
    padding: 0 32px 32px;
} 
}

@media only screen and (max-width: 562px) {
    .wraper-typical-products {
        padding: 0 16px 16px; 
    }
}
`;

export const MainContainer = styled.div`

`;

export const MainContent = styled.div``;
