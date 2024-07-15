import styled from "styled-components"

export const Wrapper = styled.div`

.typical-products-container {
    .typical-products-centent {
        .typical-products-name {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .typical-products-list {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;

            .typical-product-item {
                flex-shrink: 0;
                width: ${({ $show }) => ($show ? `${(100 / $show)}%` : '25%')};
                padding: 12px;
                user-select: none;
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
                        height: 100%;
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
                    .product-price-box {
                        display: flex;
                        align-items: center;
                        padding-top: 4px;
                        .product-reduced-price {
                            font-weight: 500;
                        }
                        .product-price {
                            font-weight: 500;
                            color: #000;
                        }
                        .product-price.throught {
                            text-decoration: line-through;
                            font-weight: 400;
                            margin-left: 8px;
                            color: var(--gray-color-4);
                        }
                        .product-price-percent {
                            margin-left: 8px;
                        }
                    }
                }

            }

            @media only screen and (max-width: 1280px) {
                .typical-product-item {
                    width: 25%;
                }
            }

            @media only screen and (max-width: 992px) {
                .typical-product-item {
                    width: 33.33%;
                }
            }

            @media only screen and (max-width: 576px) {
                .typical-product-item {
                    width: 50%;
                }
            }
        }
    }
}
`
