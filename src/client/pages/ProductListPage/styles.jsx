import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 64px; 
  .typical-products-list {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            gap: 24px;
            margin-left: 24px;
            .typical-product-item {
                width: calc(25% - 24px);
                .typical-product-box-image {
                    position: relative;
                    overflow: hidden;
                    border-radius: 16px;
                    width: 100%;
                    padding-top: 100%; // set padding để ảnh có thể được co giản theo tỉ lệ màn hình
                    background-size: cover; // cách 1 truyền trực tiếp URL vào box
                    cursor: pointer;
                    .typical-product-image {
                        border-radius: 16px;
                        position: absolute; // cách 2 style thẻ img
                        width: 100%;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        object-fit: cover;
                    }
                    &:hover {
                        transform: scale(1.05);
                        transition: 0.6s ease;
                    }                   
                }
                .typical-product-describe {
                        padding-top: 16px;
                        .product-price {
                            padding-top: 4px;
                            font-weight: 500;
                        } 
                }
               
            }
        }
`;


