import { styled } from "styled-components";

const boxShadowBlock = "0px 2px 4px rgba(168, 168, 168, 0.25)";
export const Wraper = styled.div`
.create-product-header {
    top: 0;
    height: 52px;
    display: flex;
    padding: 0 32px;
    z-index: 998;
    position: sticky;
    background: #fff;
    box-shadow: ${boxShadowBlock};
    align-items: center;
    justify-content: space-between;
    .header-content-left {
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
        color: #747C87;
        > i {
            margin-right: 12px;
        }
    }
    .header-content-right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
    }
}

.create-product-container {
    padding: 24px 32px;
    display: flex;
    gap: 24px;
    .create-product-left {
        width: 66.66%;
    }
    .create-product-right {
        width: 33.33%;
    }
    .content-block {
            border-radius: 3px;
            background-color: #fff;
            box-shadow: ${boxShadowBlock};
            .content-block-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: var(--boder-dividing);
                > * {
                    padding: 16px 24px;
                }
                .block-name {
                    font-size: 16px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    > i {
                        color: var(--primary-color);
                        margin-left: 8px;
                        margin-top: 2px;
                        font-size: 12px;
                    }
                }
                & > :nth-child(2) {
                    cursor: pointer;
                }
            }
            .content-block-main {
                display: flex;
                flex-wrap: wrap;
                padding: 20px 24px;
                margin-bottom: 24px;
                .content-section {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;
                   > label {
                    margin-bottom: 8px;
                     > i {
                        font-size: 12px;
                        margin-left: 4px;
                        color: var(--primary-color);
                     }
                   }
                   > input {
                    height: 40px;
                    width: 100%;
                    padding: 0 12px;
                    border-radius: 3px;
                   } 
                }
            }
            .content-block-main.two {
                .content-section {
                    width: 50%;
                }
            }
            .content-block-main-describe {
                padding: 20px 24px;
                width: 100%;
                * {
                    width: auto;
                }
                .ck-content {
                    max-height: 500px;
                    min-height: 200px;
                }
            }
    }
    .content-block.status {
        .content-block-main {
            display: block;
            .block-name {
                font-weight: 500;
            i {
                margin-left: 4px;
                color: var(--primary-color);
                font-size: 12px;
            }
            }
            .status-option {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 4px;
                > i {
                    font-size: 24px;
                    color: var(--primary-color);
                    cursor: pointer;
                    transition: 0.2s all ease;
                }
                > i.disabled {
                    color: #ccc;
                }
            }
            .status-option:not(:last-child) {
                padding-bottom: 16px;
            }
        }
    }
    .content-block.upload-image {
        .content-block-header {
            .btn-remove-all {
                color: var(--primary-color);
            }
        }
        .boxes {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            .box {
                width: 90px;
                height: 90px;
                border-radius: 3px;
                user-select: none;
                position: relative;
                box-shadow: rgb(168, 168, 168) 3px 3px 6px; 
                .image {
                    width: 100%;
                    height: 100%;
                    border-radius: 3px;
                    object-fit: cover;
                    cursor: grab;
                }
                .box-close {
                    display: none;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    border-radius: 50px;
                    cursor: pointer;
                    background-color: white;
                    > i {
                        font-size: 12px;
                        color: red;
                    }
                    
                }
                &:hover {
                    .box-close {
                        display: flex;
                    }
                }
                .dragging {
                }
               
            }
            .label-upload-image {
                width: 90px;
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
                border: 1px dashed #e6e6e6;
                cursor: pointer;
                > i {
                    font-size: 16px;
                }
            }
            #input-upload-image {
                display: none;
            }
        }
    }
}

.category-block {
    position: relative;
    user-select: none;
    .category-box {
        width: 100%;
        height: 40px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 3px;
        border: var(--boder-dividing);
        cursor: pointer;
        > i {
            color: #A3A8AF;
        }
        .fa-caret-up {
            color: var(--primary-color)
        }
        &:hover {
            border: 1px solid #b8b8b8;
        }
        &.active {
            border: 1px solid var(--primary-color);
        }
    }
  
    .category-dropdown {
        position: absolute;
        width: 100%;
        margin-top: 6px;
        border-radius: 3px;
        box-shadow: var(--box-shadow-default);
        background-color: #fff;
        .catergory-search-keyword {
            height: 40px;
            padding: 0 16px;
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 3px;
            border: 1px solid #fff;
            i {
                color: #999;
            }
            input {
                height: 40px;
                width: 100%;
                border: none;
            }
            &:hover {
                border: 1px solid #ccc;
            }
        }
        .btn-add-category {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 0 16px;
            font-weight: 500;
            border-bottom: var(--boder-dividing);
            color: var(--primary-color);
            cursor: pointer;
            > i {
                font-size: 16px;
                margin-right: 6px;
                margin-top: 1px;
            }
            &:hover {
                background-color: #F2F9FF;
            }
        }
        .category-list {
            max-height: 200px;
            overflow: hidden;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                -webkit-appearance: none;
            }
            &::-webkit-scrollbar:vertical {
                width: 8px;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #ccc;
                border-radius: 8px;
            }
            .category-item {
                height: 40px;
                padding: 10px 16px;
                border-bottom: var(--boder-dividing);
                cursor: pointer;
                &:hover {
                    color: var(--primary-color);
                    background-color: #F2F9FF;
                }
            }
        }
    }
}

.footer-content {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 0 32px 24px;
}

.error-message {
    display: inline-block;
    color: rgb(238, 77, 45);
    margin-top: 6px;
    font-size: 13px;
}
`