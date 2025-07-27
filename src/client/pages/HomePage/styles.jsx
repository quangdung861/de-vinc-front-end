import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
.banner-img {
    width: 100%;
}
.wraper-typical-products {
    margin-top: 24px;
    padding: 0 64px 38px;
    .products-name {
      display: inline-block;
      padding: 12px;
      font-weight: 500;
      font-size: 20px;
    }
    .wrapper-button {
        display: flex;
        justify-content: center;
        margin-top: 12px;
        .btn-custom {
            padding-left: 40px;
            padding-right: 40px;
            cursor: pointer;
            color: var(--gray-color-3)
        }
    }
}

@media only screen and (max-width: 768px) { 
    .wraper-typical-products {
        margin-top: 12px;
        padding: 0 32px 32px;
       .products-name {
            font-size: 16px;
            padding: 12px 12px 8px 12px;
        }
} 
}

@media only screen and (max-width: 562px) {
    .wraper-typical-products {
        margin-top: 0px;
            padding: 0 16px 16px; 
                .products-name {
                    font-size: 16px;
                    padding: 12px 12px 4px 12px;
                }
                    .wrapper-button {
                      
                        margin-top: 4px;
                      
    }
    }
}
`;

export const MainContainer = styled.div`

`;

export const MainContent = styled.div``;
