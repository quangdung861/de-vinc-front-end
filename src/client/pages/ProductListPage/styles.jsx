import styled from "styled-components";

export const Wrapper = styled.div`
    .product-list-container {
        padding: 64px; 
    .product-filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 12px;
        margin-bottom: 12px;
        .filter-box {
            display: flex;
            align-items: center;
            gap: 12px;
            > span {
                color: #231f20;
            }
            .filter-list {
                position: relative;
                cursor: pointer;
                .filter-btn {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 156px;
                    height: 36px;
                    padding: 0 16px;
                    background-color: #f1f1f1;
                    border-radius: 20px;
                    user-select: none;
                }
                .filter-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    z-index: 99;
                    width: 100%;
                    margin-top: 8px;
                    background-color: #fff;
                    border-radius: 20px;
                    box-shadow: var(--box-shadow-default);
                    overflow: hidden;
                    .filter-dropdown-list {
                        .filter-dropdown-item {
                            padding: 8px 16px;
                            &:hover {
                                background-color: var(--primary-hover);
                            }
                        }
                    }
                }
            }
        }
    }
    .products-list {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            .product-item {
                width: 20%;
                padding: 12px;
                .product-box-image {
                    position: relative;
                    overflow: hidden;
                    border-radius: 16px;
                    width: 100%;
                    padding-top: 100%; // set padding để ảnh có thể được co giản theo tỉ lệ màn hình
                    background-size: cover; // cách 1 truyền trực tiếp URL vào box
                    cursor: pointer;
                    .product-image {
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
                .product-describe {
                        padding-top: 16px;
                        .product-price {
                            padding-top: 4px;
                            font-weight: 500;
                        } 
                }
               
            } 
            @media only screen and (max-width: 998px) {
                .product-item {
                    width: 25%;
                }
            }
            @media only screen and (max-width: 768px) {
                .product-item {
                    width: 33.33%;
                }
            }

            @media only screen and (max-width: 576px) {
                .product-item {
                    width: 50%;
                }
            }
        }

    }
    .btn-container {
        text-align: center;
        .--btn-default {
            padding: 14px 46px;
        }
        .describe-per-page {
            margin: 14px 0;
            font-size: 12px;
            color: #231f20;
        }
    }

    @media only screen and (max-width: 768px) { 
    .product-list-container {
    margin-top: 24px;
    padding: 0 16px 16px;
} 
}
`;


